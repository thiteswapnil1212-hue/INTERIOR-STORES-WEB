"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import type { MutableRefObject } from "react";

export type SwayRef = MutableRefObject<number>;

type PanelData = {
  geo: THREE.BufferGeometry;
  base: Float32Array;
  height: number;
};

/** Smooth 0→1 ramp — no tearing, unlike per-fold random jitter. */
function smoothstep(a: number, b: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

/**
 * Fabric fold profile: pinched valleys, soft rounded crests.
 * A pure sine reads as plastic; shaping the wave reads as cloth.
 */
function foldProfile(phase: number): number {
  const s = Math.sin(phase);
  return Math.sign(s) * Math.pow(Math.abs(s), 0.72);
}

/**
 * A linen curtain panel: folds gathered tight at the rod, opening as
 * they fall, with a weighted hem that hangs level instead of scalloping.
 * Irregularity comes from slow continuous modulation — never per-fold
 * randomness, which would tear the mesh at fold boundaries.
 */
function buildPanel(
  width: number,
  height: number,
  folds: number,
  seed: number
): PanelData {
  const geo = new THREE.PlaneGeometry(width, height, 72, 30);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const base = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const v = 0.5 - y / height; // 0 at rod → 1 at hem
    const u = x / width + 0.5; // 0..1 across the panel

    // Slow continuous irregularity — every fold slightly different,
    // but the surface never tears.
    const wobble =
      Math.sin(u * 9.3 + seed * 2.1) * 0.6 + Math.sin(u * 23.7 + seed) * 0.4;
    const phase = u * folds * Math.PI * 2 + wobble * 0.38;
    const ampMod = 1 + wobble * 0.16;

    // Folds open toward the hem; the weighted hem tapers the wave so
    // the bottom edge hangs level instead of scalloping.
    const hemTaper = 0.45 + 0.55 * smoothstep(1.0, 0.9, v);
    const depth = (0.05 + 0.075 * v) * hemTaper * ampMod;
    const z = foldProfile(phase) * depth;

    // Gathered at the rod; folds drift gently as they fall.
    const gather = 0.3 + 0.7 * v;
    const drift = Math.sin(v * 2.4 + seed * 1.3) * 0.035 * v;
    const px = x * gather + drift;

    pos.setXYZ(i, px, y, z);
    base[i * 3] = px;
    base[i * 3 + 1] = y;
    base[i * 3 + 2] = z;
  }
  geo.computeVertexNormals();
  return { geo, base, height };
}

function AnimatedPanel({
  panel,
  swayRef,
  phase,
  color,
  position,
}: {
  panel: PanelData;
  swayRef: SwayRef;
  phase: number;
  color: string;
  position: [number, number, number];
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    const amp = swayRef.current;
    const pos = panel.geo.attributes.position as THREE.BufferAttribute;
    const { base, height } = panel;
    for (let i = 0; i < pos.count; i++) {
      const bx = base[i * 3] ?? 0;
      const by = base[i * 3 + 1] ?? 0;
      const bz = base[i * 3 + 2] ?? 0;
      const v = 0.5 - by / height;
      // Breeze: layered travelling waves, stronger toward the hem.
      const sway =
        (Math.sin(bx * 4.2 + t * 1.05 + phase) * 0.045 +
          Math.sin(bx * 9.5 - t * 0.75 + phase * 1.7) * 0.016) *
        v *
        amp;
      const drift = Math.sin(t * 0.55 + phase) * 0.045 * v * amp;
      pos.setXYZ(i, bx + drift, by, bz + sway);
    }
    pos.needsUpdate = true;
    panel.geo.computeVertexNormals();
  });

  const sheenColor = useMemo(
    () => new THREE.Color(color).lerp(new THREE.Color("#ffffff"), 0.5),
    [color]
  );

  return (
    <mesh ref={mesh} geometry={panel.geo} position={position} castShadow>
      <meshPhysicalMaterial
        color={color}
        roughness={0.88}
        sheen={1}
        sheenRoughness={0.55}
        sheenColor={sheenColor}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/**
 * Two linen curtain panels on a warm bronze rod, breathing in a gentle
 * breeze. `swayRef.current` scales the breeze (1 = calm, more = windier) —
 * scroll-driven sections write scroll progress here.
 */
export function CurtainModel({
  swayRef,
  color = "#e9dfcc",
}: {
  swayRef: SwayRef;
  color?: string;
}) {
  const left = useMemo(() => buildPanel(1.4, 2.6, 7, 1.7), []);
  const right = useMemo(() => buildPanel(1.4, 2.6, 7, 4.2), []);

  useEffect(
    () => () => {
      left.geo.dispose();
      right.geo.dispose();
    },
    [left, right]
  );

  return (
    <group>
      {/* Rod — warm bronze, not black */}
      <mesh position={[0, 2.72, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.028, 0.028, 3.8, 16]} />
        <meshStandardMaterial color="#5c4027" roughness={0.32} metalness={0.8} />
      </mesh>
      {[-1.9, 1.9].map((x) => (
        <mesh key={x} position={[x, 2.72, 0]} castShadow>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#5c4027"
            roughness={0.32}
            metalness={0.8}
          />
        </mesh>
      ))}

      <AnimatedPanel
        panel={left}
        swayRef={swayRef}
        phase={0}
        color={color}
        position={[-0.78, 1.37, 0]}
      />
      <AnimatedPanel
        panel={right}
        swayRef={swayRef}
        phase={2.1}
        color={color}
        position={[0.78, 1.37, 0]}
      />
    </group>
  );
}
