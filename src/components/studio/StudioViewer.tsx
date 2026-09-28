"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface StudioViewerProps {
  furniture: string;
  fabricHex: string;
  config: string;
}

/**
 * StudioViewer — 3D canvas preview.
 *
 * Currently renders a placeholder geometric shape coloured with the selected
 * fabric. Real furniture models are not yet available; this gives a visual
 * indication of the selected colour while the studio UI is functional.
 */
export default function StudioViewer({ fabricHex }: StudioViewerProps) {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <Canvas
        camera={{
          position: [0, 1.5, 5],
          fov: 45,
        }}
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        aria-label="3D furniture colour preview"
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

        {/* Placeholder sofa silhouette built from basic geometry */}
        {/* Seat base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.6, 0.35, 1.1]} />
          <meshStandardMaterial color={fabricHex} roughness={0.85} />
        </mesh>
        {/* Back rest */}
        <mesh position={[0, 0.55, -0.42]}>
          <boxGeometry args={[2.6, 0.75, 0.28]} />
          <meshStandardMaterial color={fabricHex} roughness={0.85} />
        </mesh>
        {/* Left arm */}
        <mesh position={[-1.27, 0.28, 0]}>
          <boxGeometry args={[0.22, 0.28, 1.1]} />
          <meshStandardMaterial color={fabricHex} roughness={0.85} />
        </mesh>
        {/* Right arm */}
        <mesh position={[1.27, 0.28, 0]}>
          <boxGeometry args={[0.22, 0.28, 1.1]} />
          <meshStandardMaterial color={fabricHex} roughness={0.85} />
        </mesh>
        {/* Legs (dark) */}
        {[[-1.1, -0.55], [1.1, -0.55], [-1.1, 0.47], [1.1, 0.47]].map(([x, z], i) => (
          <mesh key={i} position={[x as number, -0.27, z as number]}>
            <boxGeometry args={[0.1, 0.22, 0.1]} />
            <meshStandardMaterial color="#3a3530" roughness={0.4} />
          </mesh>
        ))}

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>

      {/* Coming soon overlay note */}
      <div className="pointer-events-none absolute bottom-4 right-4 z-10">
        <span className="inline-block bg-[#fbf9f6]/90 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8b8d89] backdrop-blur-sm border border-black/[0.06]">
          Colour preview · 3D models coming soon
        </span>
      </div>
    </div>
  );
}