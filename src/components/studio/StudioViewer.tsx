"use client";

import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, ContactShadows } from "@react-three/drei";
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

export function SofaModel({ fabricHex, config }: { fabricHex: string; config: ConfigType }) {
  const width = config === "2_seater" ? 1.7 : config === "custom" ? 2.6 : 2.3;
  const seats = config === "2_seater" ? 2 : 3;
  const innerW = width - 0.52; // minus arms
  const seatW = innerW / seats;
  const isL = config === "l_shape";

  // Handmade imperfection: no two cushions sit exactly alike.
  const jitter = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        rz: (((i * 37) % 3) - 1) * 0.02,
        dy: ((i * 53) % 5) * 0.0022,
      })),
    []
  );

  return (
    <group>
      {/* Splayed tapered wooden legs */}
      {(
        [
          [-width / 2 + 0.16, -0.36, 0.1, -0.09],
          [width / 2 - 0.16, -0.36, -0.1, -0.09],
          [-width / 2 + 0.16, 0.36, 0.1, 0.09],
          [width / 2 - 0.16, 0.36, -0.1, 0.09],
        ] as [number, number, number, number][]
      ).map(([x, z, rx, rz], i) => (
        <mesh key={i} position={[x, 0.075, z]} rotation={[rx, 0, rz]} castShadow>
          <cylinderGeometry args={[0.032, 0.02, 0.15, 12]} />
          <meshStandardMaterial color="#2e2823" roughness={0.45} />
        </mesh>
      ))}

      {/* Base */}
      <RoundedBox args={[width, 0.32, 0.98]} radius={0.07} smoothness={4} position={[0, 0.29, 0]} castShadow>
        <Upholstery color={fabricHex} />
      </RoundedBox>

      {/* Arms with caps */}
      {[-1, 1].map((s) => (
        <group key={s}>
          <RoundedBox
            args={[0.26, 0.6, 0.98]}
            radius={0.09}
            smoothness={4}
            position={[s * (width / 2 - 0.13), 0.59, 0]}
            castShadow
          >
            <Upholstery color={fabricHex} />
          </RoundedBox>
          <RoundedBox
            args={[0.3, 0.09, 1.02]}
            radius={0.045}
            smoothness={4}
            position={[s * (width / 2 - 0.13), 0.93, 0]}
            castShadow
          >
            <Upholstery color={fabricHex} />
          </RoundedBox>
        </group>
      ))}

      {/* Backrest frame */}
      <RoundedBox args={[width, 0.68, 0.22]} radius={0.08} smoothness={4} position={[0, 0.68, -0.42]} castShadow>
        <Upholstery color={fabricHex} />
      </RoundedBox>

      {/* Seat cushions — plump */}
      {Array.from({ length: seats }).map((_, i) => {
        const x = -innerW / 2 + seatW * (i + 0.5);
        return (
          <RoundedBox
            key={i}
            args={[seatW - 0.045, 0.2, 0.8]}
            radius={0.08}
            smoothness={4}
            position={[x, 0.53, 0.04]}
            rotation={[0, 0, jitter[i].rz * 0.5]}
            castShadow
          >
            <Upholstery color={fabricHex} />
          </RoundedBox>
        );
      })}

      {/* Back cushions — reclined, each sitting a little differently */}
      {Array.from({ length: seats }).map((_, i) => {
        const x = -innerW / 2 + seatW * (i + 0.5);
        return (
          <RoundedBox
            key={i}
            args={[seatW - 0.045, 0.52, 0.2]}
            radius={0.085}
            smoothness={4}
            position={[x, 0.84 + jitter[i].dy, -0.27]}
            rotation={[-0.13, 0, jitter[i].rz]}
            castShadow
          >
            <Upholstery color={fabricHex} />
          </RoundedBox>
        );
      })}

      {/* Styled throw pillows */}
      {!isL && seats === 3 && (
        <group>
          <RoundedBox
            args={[0.36, 0.36, 0.14]}
            radius={0.06}
            smoothness={4}
            position={[-innerW / 2 + 0.34, 0.82, -0.08]}
            rotation={[-0.12, 0.3, 0.1]}
            castShadow
          >
            <Upholstery color={LINEN_WHITE} />
          </RoundedBox>
          <RoundedBox
            args={[0.34, 0.34, 0.14]}
            radius={0.06}
            smoothness={4}
            position={[innerW / 2 - 0.32, 0.8, -0.06]}
            rotation={[-0.1, -0.35, -0.12]}
            castShadow
          >
            <Upholstery color={PILLOW_SAGE} />
          </RoundedBox>
        </group>
      )}

      {/* L-shape chaise extension */}
      {isL && (
        <group>
          <RoundedBox args={[0.85, 0.28, 1.55]} radius={0.06} smoothness={4} position={[width / 2 - 0.42, 0.26, 0.72]} castShadow>
            <Upholstery color={fabricHex} />
          </RoundedBox>
          <RoundedBox args={[0.79, 0.15, 1.45]} radius={0.06} smoothness={4} position={[width / 2 - 0.42, 0.47, 0.72]} castShadow>
            <Upholstery color={fabricHex} />
          </RoundedBox>
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
  sofa: [3.1, 2.0, 4.4],
  bed: [3.4, 2.2, 4.8],
  curtains: [0, 1.7, 5.2],
  wall_panel: [0, 1.6, 4.6],
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
