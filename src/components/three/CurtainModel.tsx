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

/** A curtain panel: static folds gathered at the rod, flowing at the hem. */
function buildPanel(width: number, height: number, folds: number): PanelData {
  const geo = new THREE.PlaneGeometry(width, height, 56, 24);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const base = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const v = 0.5 - y / height; // 0 at rod → 1 at hem
    const depth = 0.1 * (0.45 + 0.55 * v);
    const z = Math.sin((x / width) * Math.PI * folds) * depth;
    const px = x * (0.32 + 0.68 * v); // gathered at the top
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
        (Math.sin(bx * 5 + t * 1.1 + phase) * 0.05 +
          Math.sin(bx * 11 - t * 0.8 + phase * 1.7) * 0.018) *
        v *
        amp;
      const drift = Math.sin(t * 0.6 + phase) * 0.05 * v * amp;
      pos.setXYZ(i, bx + drift, by, bz + sway);
    }
    pos.needsUpdate = true;
    panel.geo.computeVertexNormals();
  });

  const sheenColor = useMemo(
    () => new THREE.Color(color).lerp(new THREE.Color("#ffffff"), 0.55),
    [color]
  );

  return (
    <mesh ref={mesh} geometry={panel.geo} position={position} castShadow>
      <meshPhysicalMaterial
        color={color}
        roughness={0.92}
        sheen={1}
        sheenRoughness={0.5}
        sheenColor={sheenColor}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/**
 * Two linen curtain panels on a rod, breathing in a gentle breeze.
 * `swayRef.current` scales the breeze (1 = calm, more = windier) —
 * scroll-driven sections write scroll progress here.
 */
export function CurtainModel({
  swayRef,
  color = "#e9dfcc",
}: {
  swayRef: SwayRef;
  color?: string;
}) {
  const left = useMemo(() => buildPanel(1.2, 2.5, 5), []);
  const right = useMemo(() => buildPanel(1.2, 2.5, 5), []);

  useEffect(
    () => () => {
      left.geo.dispose();
      right.geo.dispose();
    },
    [left, right]
  );

  return (
    <group>
      {/* Rod */}
      <mesh position={[0, 2.62, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 3.6, 16]} />
        <meshStandardMaterial color="#2e2823" roughness={0.4} metalness={0.5} />
      </mesh>
      {[-1.8, 1.8].map((x) => (
        <mesh key={x} position={[x, 2.62, 0]} castShadow>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color="#2e2823" roughness={0.4} metalness={0.5} />
        </mesh>
      ))}

      <AnimatedPanel
        panel={left}
        swayRef={swayRef}
        phase={0}
        color={color}
        position={[-0.72, 1.32, 0]}
      />
      <AnimatedPanel
        panel={right}
        swayRef={swayRef}
        phase={2.1}
        color={color}
        position={[0.72, 1.32, 0]}
      />
    </group>
  );
}
