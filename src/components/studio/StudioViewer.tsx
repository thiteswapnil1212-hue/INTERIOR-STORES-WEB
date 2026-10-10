"use client";

import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, ContactShadows } from "@react-three/drei";
import { mergeVertices } from "three-stdlib";
import type { FurnitureType, ConfigType } from "./types";

interface StudioViewerProps {
  furniture: FurnitureType;
  fabricHex: string;
  config: ConfigType;
}

const LEG_COLOR = "#3a3530";
const LINEN_WHITE = "#f6f3ec";
const PILLOW_SAGE = "#9aa38b";

/**
 * Cloth-like upholstery. The sheen layer is what separates fabric
 * from plastic under studio light — keep roughness high, sheen on.
 * A subtle procedural weave normal map adds the micro-surface detail
 * that reads as real textile instead of flat plastic.
 */
function makeWeaveNormalTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(size, size);

  // Plain-weave height field: alternating over/under threads + noise.
  const h = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const weave =
        (Math.floor(x / 4) + Math.floor(y / 4)) % 2 === 0 ? 0.5 : -0.5;
      h[y * size + x] = weave * 0.5 + (Math.random() - 0.5) * 0.35;
    }
  }
  // Height field -> normal map (Sobel, tileable via wrapping).
  const strength = 2.0;
  const data = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const xm = (x - 1 + size) % size;
      const xp = (x + 1) % size;
      const ym = (y - 1 + size) % size;
      const yp = (y + 1) % size;
      const dx = (h[y * size + xp] - h[y * size + xm]) * strength;
      const dy = (h[yp * size + x] - h[ym * size + x]) * strength;
      const inv = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const i = (y * size + x) * 4;
      data[i] = (-dx * inv * 0.5 + 0.5) * 255;
      data[i + 1] = (-dy * inv * 0.5 + 0.5) * 255;
      data[i + 2] = (inv * 0.5 + 0.5) * 255;
      data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  return tex;
}

/** Client-only: generates the weave texture after mount (SSR-safe). */
function useWeaveNormal(): THREE.Texture | null {
  const [tex, setTex] = useState<THREE.Texture | null>(null);
  useEffect(() => {
    const t = makeWeaveNormalTexture();
    setTex(t);
    return () => {
      t.dispose();
    };
  }, []);
  return tex;
}

function Upholstery({ color, roughness = 0.95 }: { color: string; roughness?: number }) {
  const sheenColor = useMemo(
    () => new THREE.Color(color).lerp(new THREE.Color("#ffffff"), 0.5),
    [color]
  );
  const normalMap = useWeaveNormal();
  const normalScale = useMemo(() => new THREE.Vector2(0.35, 0.35), []);
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={roughness}
      normalMap={normalMap ?? undefined}
      normalScale={normalScale}
      sheen={1}
      sheenRoughness={0.55}
      sheenColor={sheenColor}
    />
  );
}

/* ------------------------------- SOFA ---------------------------------- */

/**
 * A realistic three-seater, modelled true to size (metres) the way the
 * real piece is built: tapered wooden legs, recessed plinth with a
 * shadow gap, extruded track arms with softened edges, seat deck with a
 * front rail, plump crowned cushions with welt piping, and a gently
 * reclined back frame. Cushions sit with slight handmade variance.
 */

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

/**
 * Plump cushion geometry. A subdivided box is spherified onto the
 * rounded-box surface (so every face has interior vertices), then the
 * faces are crowned outward — the plump pillow look flat boxes can't
 * give. `bulgeAxis` picks which faces crown ("y" = seat cushions,
 * "z" = back cushions).
 */
function makeCushionGeometry(
  w: number,
  h: number,
  d: number,
  crown: number,
  radius: number,
  bulgeAxis: "y" | "z"
): THREE.BufferGeometry {
  let geo: THREE.BufferGeometry = new THREE.BoxGeometry(w, h, d, 14, 6, 14);
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;
  const iw = Math.max(0.001, hw - radius);
  const ih = Math.max(0.001, hh - radius);
  const id = Math.max(0.001, hd - radius);

  const pos = geo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    // spherify: project onto the rounded-box surface
    const qx = Math.min(iw, Math.max(-iw, v.x));
    const qy = Math.min(ih, Math.max(-ih, v.y));
    const qz = Math.min(id, Math.max(-id, v.z));
    const dx = v.x - qx;
    const dy = v.y - qy;
    const dz = v.z - qz;
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (len > 1e-6) {
      const s = radius / len;
      pos.setXYZ(i, qx + dx * s, qy + dy * s, qz + dz * s);
    }
  }
  // weld coincident vertices so the rounded edges shade smoothly
  geo = mergeVertices(geo, 1e-4);
  geo.computeVertexNormals();

  // crown the faces
  const p2 = geo.attributes.position as THREE.BufferAttribute;
  const nor = geo.attributes.normal as THREE.BufferAttribute;
  const n = new THREE.Vector3();
  for (let i = 0; i < p2.count; i++) {
    v.fromBufferAttribute(p2, i);
    n.fromBufferAttribute(nor, i);
    if (bulgeAxis === "y") {
      const t = Math.min(1, Math.hypot(v.x / hw, v.z / hd));
      const bulge = 0.5 + 0.5 * Math.cos(Math.PI * t);
      const wgt = smoothstep(0.35, 0.85, Math.abs(n.y));
      v.y += Math.sign(n.y) * crown * bulge * wgt;
    } else {
      const t = Math.min(1, Math.hypot(v.x / hw, v.y / hh));
      const bulge = 0.5 + 0.5 * Math.cos(Math.PI * t);
      const wgt = smoothstep(0.35, 0.85, Math.abs(n.z));
      v.z += Math.sign(n.z) * crown * bulge * wgt;
    }
    p2.setXYZ(i, v.x, v.y, v.z);
  }
  p2.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

/** Memoised cushion geometry for React. */
function useCushionGeometry(
  w: number,
  h: number,
  d: number,
  crown: number,
  radius: number,
  bulgeAxis: "y" | "z" = "y"
) {
  return useMemo(
    () => makeCushionGeometry(w, h, d, crown, radius, bulgeAxis),
    [w, h, d, crown, radius, bulgeAxis]
  );
}

/** Welt piping: a thin tube following a cushion face's perimeter. */
function usePipingGeometry(
  w: number,
  h: number,
  d: number,
  face: "top" | "front"
) {
  return useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const seg = 7;
    if (face === "top") {
      const rw = w - 0.02;
      const rd = d - 0.02;
      const y = h / 2 - 0.012;
      const r = Math.min(0.05, rw * 0.15, rd * 0.15);
      const corners: Array<[number, number, number]> = [
        [rw / 2 - r, rd / 2 - r, 0],
        [-(rw / 2 - r), rd / 2 - r, Math.PI / 2],
        [-(rw / 2 - r), -(rd / 2 - r), Math.PI],
        [rw / 2 - r, -(rd / 2 - r), Math.PI * 1.5],
      ];
      for (const [cx, cz, start] of corners) {
        for (let i = 0; i <= seg; i++) {
          const a = start + (i / seg) * (Math.PI / 2);
          pts.push(
            new THREE.Vector3(cx + Math.cos(a) * r, y, cz + Math.sin(a) * r)
          );
        }
      }
    } else {
      const rw = w - 0.02;
      const rh = h - 0.02;
      const z = d / 2 - 0.012;
      const r = Math.min(0.05, rw * 0.15, rh * 0.15);
      const corners: Array<[number, number, number]> = [
        [rw / 2 - r, rh / 2 - r, 0],
        [-(rw / 2 - r), rh / 2 - r, Math.PI / 2],
        [-(rw / 2 - r), -(rh / 2 - r), Math.PI],
        [rw / 2 - r, -(rh / 2 - r), Math.PI * 1.5],
      ];
      for (const [cx, cy, start] of corners) {
        for (let i = 0; i <= seg; i++) {
          const a = start + (i / seg) * (Math.PI / 2);
          pts.push(
            new THREE.Vector3(cx + Math.cos(a) * r, cy + Math.sin(a) * r, z)
          );
        }
      }
    }
    const curve = new THREE.CatmullRomCurve3(pts, true);
    return new THREE.TubeGeometry(curve, 80, 0.0085, 8, true);
  }, [w, h, d, face]);
}

/** Track-arm geometry: extruded side profile with softened edges. */
function useArmGeometry(depth: number, height: number, thick: number) {
  return useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.lineTo(depth, 0);
    s.lineTo(depth, height * 0.78);
    s.quadraticCurveTo(depth, height, depth - 0.1, height);
    s.lineTo(0.045, height);
    s.quadraticCurveTo(0, height, 0, height - 0.045);
    s.lineTo(0, 0);
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: thick,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.018,
      bevelSegments: 3,
      steps: 1,
    });
    geo.translate(0, 0, -thick / 2);
    return geo;
  }, [depth, height, thick]);
}

type CushionProps = {
  w: number;
  h: number;
  d: number;
  crown?: number;
  radius?: number;
  face?: "top" | "front";
  piping?: boolean;
  color: string;
  roughness?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

/** One plump, piped cushion. */
function Cushion({
  w,
  h,
  d,
  crown = 0.035,
  radius = 0.06,
  face = "top",
  piping = true,
  color,
  roughness = 0.95,
  position,
  rotation,
}: CushionProps) {
  const geo = useCushionGeometry(
    w,
    h,
    d,
    crown,
    radius,
    face === "top" ? "y" : "z"
  );
  const pipe = usePipingGeometry(w, h, d, face);
  return (
    <group position={position} rotation={rotation}>
      <mesh geometry={geo} castShadow receiveShadow>
        <Upholstery color={color} roughness={roughness} />
      </mesh>
      {piping && (
        <mesh geometry={pipe} castShadow>
          <Upholstery color={color} roughness={Math.min(1, roughness + 0.03)} />
        </mesh>
      )}
    </group>
  );
}

export function SofaModel({
  fabricHex,
  config,
}: {
  fabricHex: string;
  config: ConfigType;
}) {
  const W = config === "2_seater" ? 1.78 : config === "custom" ? 2.62 : 2.18;
  const seats = config === "2_seater" ? 2 : 3;
  const isL = config === "l_shape";

  const D = 0.94; // overall depth
  const armT = 0.24; // arm thickness
  const armH = 0.58; // arm height above the legs
  const legH = 0.1;
  const innerW = W - armT * 2;
  const seatW = innerW / seats;
  const deckTop = 0.36;

  const armGeo = useArmGeometry(D, armH, armT - 0.04);

  // Handmade imperfection: no two cushions sit exactly alike.
  const jitter = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        ry: (((i * 37) % 3) - 1) * 0.016,
        dy: ((i * 53) % 5) * 0.0022,
        dx: (((i * 29) % 3) - 1) * 0.005,
      })),
    []
  );

  return (
    <group>
      {/* Tapered wooden legs, slightly splayed */}
      {(
        [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ] as Array<[number, number]>
      ).map(([sx, sz], i) => (
        <mesh
          key={i}
          position={[sx * (W / 2 - 0.15), legH / 2, sz * (D / 2 - 0.13)]}
          rotation={[sz * 0.07, 0, -sx * 0.07]}
          castShadow
        >
          <cylinderGeometry args={[0.034, 0.02, legH + 0.02, 12]} />
          <meshStandardMaterial color="#2e2823" roughness={0.45} />
        </mesh>
      ))}

      {/* Recessed plinth — the shadow gap under the body */}
      <RoundedBox
        args={[W - 0.14, 0.12, D - 0.16]}
        radius={0.02}
        smoothness={2}
        position={[0, legH + 0.06, -0.02]}
        castShadow
      >
        <Upholstery color={fabricHex} roughness={1} />
      </RoundedBox>

      {/* Seat deck */}
      <RoundedBox
        args={[W - 0.02, 0.14, D - 0.04]}
        radius={0.03}
        smoothness={3}
        position={[0, 0.29, 0]}
        castShadow
        receiveShadow
      >
        <Upholstery color={fabricHex} />
      </RoundedBox>

      {/* Front rail beneath the seat cushions */}
      <RoundedBox
        args={[innerW + 0.02, 0.13, 0.07]}
        radius={0.025}
        smoothness={3}
        position={[0, 0.285, D / 2 - 0.05]}
        castShadow
      >
        <Upholstery color={fabricHex} />
      </RoundedBox>

      {/* Track arms with softened front edge */}
      {[-1, 1].map((s) => (
        <mesh
          key={s}
          geometry={armGeo}
          position={[s * (W / 2 - armT / 2), legH, -D / 2]}
          rotation={[0, -Math.PI / 2, 0]}
          castShadow
          receiveShadow
        >
          <Upholstery color={fabricHex} />
        </mesh>
      ))}

      {/* Backrest frame, gently reclined */}
      <group position={[0, 0, -D / 2 + 0.1]} rotation={[0.07, 0, 0]}>
        <RoundedBox
          args={[W - 0.06, 0.62, 0.17]}
          radius={0.06}
          smoothness={4}
          position={[0, 0.55, 0]}
          castShadow
          receiveShadow
        >
          <Upholstery color={fabricHex} />
        </RoundedBox>
        <RoundedBox
          args={[W - 0.06, 0.1, 0.21]}
          radius={0.045}
          smoothness={4}
          position={[0, 0.885, 0]}
          castShadow
        >
          <Upholstery color={fabricHex} />
        </RoundedBox>
      </group>

      {/* Seat cushions — plump, piped, each sitting a little differently */}
      {Array.from({ length: seats }).map((_, i) => {
        const x = -innerW / 2 + seatW * (i + 0.5);
        return (
          <Cushion
            key={i}
            w={seatW - 0.03}
            h={0.17}
            d={0.6}
            crown={0.038}
            color={fabricHex}
            position={[x + jitter[i].dx, deckTop + 0.085 + jitter[i].dy, 0.09]}
            rotation={[0, jitter[i].ry, 0]}
          />
        );
      })}

      {/* Back cushions — reclined against the frame */}
      {Array.from({ length: seats }).map((_, i) => {
        const x = -innerW / 2 + seatW * (i + 0.5);
        return (
          <Cushion
            key={i}
            w={seatW - 0.03}
            h={0.5}
            d={0.17}
            crown={0.045}
            radius={0.07}
            face="front"
            color={fabricHex}
            position={[x + jitter[i].dx, 0.7 + jitter[i].dy, -0.2]}
            rotation={[-0.1, jitter[i].ry, 0]}
          />
        );
      })}

      {/* Throw pillows — knife-edge, styled askew */}
      {!isL && seats === 3 && (
        <group>
          <Cushion
            w={0.4}
            h={0.4}
            d={0.14}
            crown={0.05}
            radius={0.05}
            face="front"
            piping={false}
            color={LINEN_WHITE}
            roughness={1}
            position={[-innerW / 2 + 0.33, 0.74, -0.1]}
            rotation={[-0.14, 0.32, 0.1]}
          />
          <Cushion
            w={0.38}
            h={0.38}
            d={0.14}
            crown={0.05}
            radius={0.05}
            face="front"
            piping={false}
            color={PILLOW_SAGE}
            roughness={1}
            position={[innerW / 2 - 0.31, 0.72, -0.08]}
            rotation={[-0.12, -0.36, -0.11]}
          />
        </group>
      )}

      {/* L-shape chaise extension */}
      {isL && (
        <group>
          <RoundedBox
            args={[0.84, 0.14, 1.5]}
            radius={0.03}
            smoothness={3}
            position={[W / 2 - 0.43, 0.29, 0.5]}
            castShadow
          >
            <Upholstery color={fabricHex} />
          </RoundedBox>
          <Cushion
            w={0.8}
            h={0.16}
            d={1.42}
            crown={0.032}
            radius={0.06}
            color={fabricHex}
            position={[W / 2 - 0.43, 0.44, 0.5]}
          />
        </group>
      )}
    </group>
  );
}

/* -------------------------------- BED ----------------------------------- */

export function BedModel({ fabricHex, config }: { fabricHex: string; config: ConfigType }) {
  const width =
    config === "single" ? 1.1 : config === "double" ? 1.5 : config === "king" ? 2.0 : 1.7;
  const length = 2.1;

  return (
    <group>
      {/* Headboard */}
      <RoundedBox args={[width, 1.05, 0.15]} radius={0.06} smoothness={4} position={[0, 0.72, -length / 2]} castShadow>
        <Upholstery color={fabricHex} />
      </RoundedBox>
      {/* Headboard top cushion roll */}
      <RoundedBox args={[width - 0.1, 0.16, 0.2]} radius={0.07} smoothness={4} position={[0, 1.28, -length / 2 + 0.02]} castShadow>
        <Upholstery color={fabricHex} />
      </RoundedBox>

      {/* Frame */}
      <RoundedBox args={[width, 0.26, length]} radius={0.04} smoothness={4} position={[0, 0.27, 0]} castShadow>
        <Upholstery color={fabricHex} />
      </RoundedBox>

      {/* Mattress */}
      <RoundedBox args={[width - 0.08, 0.22, length - 0.1]} radius={0.07} smoothness={4} position={[0, 0.5, 0.02]} castShadow>
        <meshStandardMaterial color={LINEN_WHITE} roughness={1} />
      </RoundedBox>

      {/* Throw blanket in chosen fabric */}
      <RoundedBox args={[width - 0.02, 0.055, 0.85]} radius={0.025} smoothness={4} position={[0, 0.63, 0.55]} castShadow>
        <Upholstery color={fabricHex} roughness={1} />
      </RoundedBox>

      {/* Pillows */}
      {[-1, 1].map((s) => (
        <RoundedBox
          key={s}
          args={[width / 2 - 0.16, 0.14, 0.42]}
          radius={0.06}
          smoothness={4}
          position={[(s * (width / 4 - 0.02)), 0.68, -length / 2 + 0.35]}
          rotation={[-0.18, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color="#fbf9f6" roughness={1} />
        </RoundedBox>
      ))}

      {/* Legs */}
      {[
        [-width / 2 + 0.12, -length / 2 + 0.12],
        [width / 2 - 0.12, -length / 2 + 0.12],
        [-width / 2 + 0.12, length / 2 - 0.12],
        [width / 2 - 0.12, length / 2 - 0.12],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.06, z]} castShadow>
          <cylinderGeometry args={[0.04, 0.032, 0.12, 12]} />
          <meshStandardMaterial color={LEG_COLOR} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------ CURTAINS --------------------------------- */

function useWavePanel(width: number, height: number, folds = 5) {
  return useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, 40, 6);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      // folds deepen toward the bottom hem
      const depth = 0.11 * (0.55 + 0.45 * (0.5 - y / height));
      pos.setZ(i, Math.sin((x / width) * Math.PI * folds) * depth);
    }
    geo.computeVertexNormals();
    return geo;
  }, [width, height, folds]);
}

function CurtainPanel({
  geometry,
  fabricHex,
  material,
  position,
}: {
  geometry: THREE.BufferGeometry;
  fabricHex: string;
  material: { opacity: number; roughness: number; transparent: boolean };
  position: [number, number, number];
}) {
  return (
    <mesh geometry={geometry} position={position} castShadow>
      <meshStandardMaterial
        color={fabricHex}
        roughness={material.roughness}
        transparent={material.transparent}
        opacity={material.opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function CurtainsModel({ fabricHex, config }: { fabricHex: string; config: ConfigType }) {
  const geo = useWavePanel(1.15, 2.05);
  const material =
    config === "sheer"
      ? { opacity: 0.45, roughness: 0.35, transparent: true }
      : config === "linen"
        ? { opacity: 0.95, roughness: 1, transparent: false }
        : { opacity: 1, roughness: 0.9, transparent: false };

  return (
    <group>
      {/* Rod */}
      <mesh position={[0, 2.18, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.028, 0.028, 3.3, 16]} />
        <meshStandardMaterial color={LEG_COLOR} roughness={0.35} metalness={0.55} />
      </mesh>
      {[-1.65, 1.65].map((x) => (
        <mesh key={x} position={[x, 2.18, 0]} castShadow>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color={LEG_COLOR} roughness={0.35} metalness={0.55} />
        </mesh>
      ))}
      {/* Panels */}
      <CurtainPanel geometry={geo} fabricHex={fabricHex} material={material} position={[-0.78, 1.1, 0]} />
      <CurtainPanel geometry={geo} fabricHex={fabricHex} material={material} position={[0.78, 1.1, 0]} />
    </group>
  );
}

/* ------------------------------- ROOM ------------------------------------ */

const WALL_COLOR = "#ece5d6";
const WALL_SIDE_COLOR = "#e4dccb";
const FLOOR_COLOR = "#d8cebb";

function RoomShell({ furniture }: { furniture: FurnitureType }) {
  const isCurtains = furniture === "curtains";
  const isPanel = furniture === "wall_panel";

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color={FLOOR_COLOR} roughness={0.95} />
      </mesh>

      {/* Back wall — the panel model brings its own wall */}
      {!isPanel && (
        <mesh position={[0, 2.25, -2.6]}>
          <planeGeometry args={[18, 4.5]} />
          <meshStandardMaterial color={WALL_COLOR} roughness={1} />
        </mesh>
      )}

      {/* Side wall for depth on larger pieces */}
      {!isPanel && !isCurtains && (
        <mesh rotation={[0, Math.PI / 2, 0]} position={[-5, 2.25, 0]}>
          <planeGeometry args={[18, 4.5]} />
          <meshStandardMaterial color={WALL_SIDE_COLOR} roughness={1} />
        </mesh>
      )}

      {/* Sunlit window behind the curtains */}
      {isCurtains && (
        <group position={[0, 0, -2.55]}>
          {/* daylight glow */}
          <mesh position={[0, 1.5, 0.03]}>
            <planeGeometry args={[2.7, 1.9]} />
            <meshStandardMaterial
              color="#fff8ea"
              emissive="#ffedc4"
              emissiveIntensity={0.85}
              roughness={1}
            />
          </mesh>
          {/* frame: top, bottom, sides */}
          {[
            { args: [3.0, 0.09, 0.09] as const, pos: [0, 2.5, 0.06] as const },
            { args: [3.0, 0.09, 0.09] as const, pos: [0, 0.5, 0.06] as const },
            { args: [0.09, 2.09, 0.09] as const, pos: [-1.455, 1.5, 0.06] as const },
            { args: [0.09, 2.09, 0.09] as const, pos: [1.455, 1.5, 0.06] as const },
            { args: [0.06, 1.9, 0.06] as const, pos: [0, 1.5, 0.06] as const },
          ].map((p, i) => (
            <mesh key={i} position={[p.pos[0], p.pos[1], p.pos[2]]} castShadow>
              <boxGeometry args={[p.args[0], p.args[1], p.args[2]]} />
              <meshStandardMaterial color="#f4efe3" roughness={0.8} />
            </mesh>
          ))}
          {/* sill */}
          <mesh position={[0, 0.44, 0.1]} castShadow>
            <boxGeometry args={[3.2, 0.07, 0.22]} />
            <meshStandardMaterial color="#f4efe3" roughness={0.8} />
          </mesh>
        </group>
      )}
    </group>
  );
}

/* ----------------------------- WALL PANEL -------------------------------- */

function WallPanelModel({ fabricHex, config }: { fabricHex: string; config: ConfigType }) {
  const mouldings: { w: number; h: number; x: number }[] =
    config === "panel_modern"
      ? Array.from({ length: 6 }).map((_, i) => ({ w: 0.11, h: 2.25, x: -1.05 + i * 0.42 }))
      : config === "panel_full"
        ? [
            { w: 1.7, h: 2.25, x: -0.95 },
            { w: 1.7, h: 2.25, x: 0.95 },
          ]
        : [
            { w: 0.55, h: 1.9, x: -0.95 },
            { w: 0.55, h: 1.9, x: 0 },
            { w: 0.55, h: 1.9, x: 0.95 },
          ];

  return (
    <group>
      {/* Wall */}
      <mesh position={[0, 1.35, -0.42]}>
        <boxGeometry args={[4.4, 2.7, 0.12]} />
        <meshStandardMaterial color="#ece5d8" roughness={1} />
      </mesh>
      {/* Mouldings in chosen colour */}
      {mouldings.map((m, i) => (
        <RoundedBox key={i} args={[m.w, m.h, 0.07]} radius={0.015} smoothness={2} position={[m.x, 1.3, -0.33]} castShadow>
          <Upholstery color={fabricHex} roughness={0.7} />
        </RoundedBox>
      ))}
      {/* Skirting */}
      <mesh position={[0, 0.07, -0.33]}>
        <boxGeometry args={[4.4, 0.14, 0.05]} />
        <meshStandardMaterial color="#d9d1bf" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* -------------------------------- VIEWER --------------------------------- */

/** Flattering default angle per furniture type (flat pieces face the camera). */
const CAMERA_POSITIONS: Record<FurnitureType, [number, number, number]> = {
  sofa: [2.5, 1.6, 3.5],
  bed: [2.7, 1.8, 3.8],
  curtains: [0, 1.5, 4.2],
  wall_panel: [0, 1.4, 3.7],
};

export default function StudioViewer({ furniture, fabricHex, config }: StudioViewerProps) {
  // Gentle auto-rotation until the user first grabs the model.
  const [spin, setSpin] = useState(true);

  return (
    <div className="relative h-full min-h-[300px] w-full">
      <Canvas
        key={furniture}
        shadows
        camera={{ position: CAMERA_POSITIONS[furniture], fov: 40 }}
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        aria-label="3D furniture colour preview"
      >
        <color attach="background" args={["#ece7de"]} />

        <ambientLight intensity={0.85} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-4, 3, -2]} intensity={0.35} />

        {furniture === "sofa" && <SofaModel fabricHex={fabricHex} config={config} />}
        {furniture === "bed" && <BedModel fabricHex={fabricHex} config={config} />}
        {furniture === "curtains" && <CurtainsModel fabricHex={fabricHex} config={config} />}
        {furniture === "wall_panel" && <WallPanelModel fabricHex={fabricHex} config={config} />}

        <RoomShell furniture={furniture} />

        <ContactShadows position={[0, 0.001, 0]} opacity={0.32} scale={9} blur={2.6} far={3.2} color="#4a4238" />

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom
          minDistance={3}
          maxDistance={7}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2.05}
          autoRotate={spin}
          autoRotateSpeed={0.7}
          onStart={() => setSpin(false)}
        />
      </Canvas>

      {/* Hint */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-10 sm:left-7">
        <span className="inline-block border border-black/[0.06] bg-[#fbf9f6]/90 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#6b6d69] backdrop-blur-sm">
          Drag to rotate · Scroll to zoom
        </span>
      </div>
    </div>
  );
}
