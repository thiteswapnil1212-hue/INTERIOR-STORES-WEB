"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { SofaModel } from "../studio/StudioViewer";
import type { MutableRefObject } from "react";

/**
 * Scroll-driven 3D sofa. The parent section writes scroll progress (0→1)
 * into `progressRef`; this rig eases the sofa's rotation toward
 * progress * SWEEP every frame for buttery Apple-style motion.
 */
const SWEEP = Math.PI * 1.5; // 270° turntable sweep

function SofaRig({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const target = progressRef.current * SWEEP;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      target,
      4.5,
      delta
    );
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <SofaModel fabricHex="#A75D42" config="3_seater" />
    </group>
  );
}

interface ShowcaseCanvasProps {
  progressRef: MutableRefObject<number>;
  running: boolean;
}

export default function ShowcaseCanvas({ progressRef, running }: ShowcaseCanvasProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [3.4, 2.0, 4.8], fov: 38 }}
      frameloop={running ? "always" : "never"}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      aria-label="Interactive 3D model of a terracotta three-seater sofa"
    >
      <color attach="background" args={["#141311"]} />

      {/* Premium studio lighting */}
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={2.0}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 3, -2]} intensity={0.4} color="#cdd7ff" />
      <directionalLight position={[0, 2, 5]} intensity={0.5} color="#ffd9b8" />

      <SofaRig progressRef={progressRef} />

      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.55}
        scale={10}
        blur={2.8}
        far={3.4}
        color="#000000"
      />
    </Canvas>
  );
}
