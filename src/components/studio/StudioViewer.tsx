"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#d8d1c7" />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -5]} receiveShadow>
        <boxGeometry args={[12, 6, 0.15]} />
        <meshStandardMaterial color="#eee9e2" />
      </mesh>

      {/* Left wall */}
      <mesh
        position={[-6, 3, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <boxGeometry args={[10, 6, 0.15]} />
        <meshStandardMaterial color="#e7e1d8" />
      </mesh>

      {/* Sofa */}
      <group position={[0, 1, -2]}>
        {/* Base */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4.5, 0.7, 1.5]} />
          <meshStandardMaterial color="#8b735f" />
        </mesh>

        {/* Back */}
        <mesh position={[0, 1, 0.55]} castShadow>
          <boxGeometry args={[4.5, 1.6, 0.35]} />
          <meshStandardMaterial color="#8b735f" />
        </mesh>

        {/* Left arm */}
        <mesh position={[-2.15, 0.7, 0]} castShadow>
          <boxGeometry args={[0.3, 1.1, 1.5]} />
          <meshStandardMaterial color="#806953" />
        </mesh>

        {/* Right arm */}
        <mesh position={[2.15, 0.7, 0]} castShadow>
          <boxGeometry args={[0.3, 1.1, 1.5]} />
          <meshStandardMaterial color="#806953" />
        </mesh>

        {/* Seat cushions */}
        <mesh position={[-1.1, 0.55, -0.05]} castShadow>
          <boxGeometry args={[1.9, 0.3, 1.15]} />
          <meshStandardMaterial color="#a28b75" />
        </mesh>

        <mesh position={[1.1, 0.55, -0.05]} castShadow>
          <boxGeometry args={[1.9, 0.3, 1.15]} />
          <meshStandardMaterial color="#a28b75" />
        </mesh>
      </group>

      {/* Coffee table */}
      <group position={[0, 0.45, 1]}>
        <mesh castShadow>
          <cylinderGeometry args={[1.2, 1.2, 0.15, 48]} />
          <meshStandardMaterial color="#6d5847" />
        </mesh>

        <mesh position={[0, -0.45, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.9, 24]} />
          <meshStandardMaterial color="#4d4035" />
        </mesh>
      </group>
    </group>
  );
}

function StudioScene() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[4, 7, 5]}
        intensity={3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        position={[-4, 4, 2]}
        intensity={1}
      />

      <Room />

      <Environment preset="apartment" />

      <OrbitControls
        enablePan={false}
        minDistance={6}
        maxDistance={15}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.05}
      />
    </>
  );
}

export default function StudioViewer() {
  return (
    <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-[#e9e4dc]">
      <Canvas
        shadows
        camera={{
          position: [8, 5.5, 9],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <StudioScene />
        </Suspense>
      </Canvas>

      {/* Interaction hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#1b1c1a]/15 bg-[#fbf9f6]/90 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-[#444748] backdrop-blur-sm">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}