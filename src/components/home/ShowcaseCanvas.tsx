"use client";

import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { BedModel, SofaModel } from "../studio/StudioViewer";
import FitCamera, { useMobile } from "../three/FitCamera";
import type { MutableRefObject } from "react";

/**
 * Scroll-driven 3D duo showcase. The parent section writes scroll progress
 * (0→1) into `progressRef`; this rig eases the turntable's rotation toward
 * progress * SWEEP every frame for buttery Apple-style motion.
 * The first half of the scroll turns the signature sofa, the second half
 * turns the upholstered bed — the swap happens at the back view, the least
 * noticeable angle, and each product ends front-facing.
 */
const SWEEP = Math.PI * 2; // 360° turntable sweep across both products

function ShowcaseRig({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const sofaRef = useRef<THREE.Group>(null);
  const bedRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const p = progressRef.current;
    const target = p * SWEEP;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      target,
      4.5,
      delta
    );
    // Swap products imperatively — never via React state inside the frame
    // loop, so there is no mid-scroll unmount/remount. Both models mount
    // once; only their visibility flips, at the back view (p = 0.5).
    const showBed = p >= 0.5;
    if (sofaRef.current) sofaRef.current.visible = !showBed;
    if (bedRef.current) bedRef.current.visible = showBed;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <group ref={sofaRef}>
        <SofaModel fabricHex="#A75D42" config="3_seater" />
      </group>
      <group ref={bedRef} visible={false}>
        <BedModel fabricHex="#E8E2D5" config="queen" />
      </group>
    </group>
  );
}

interface ShowcaseCanvasProps {
  progressRef: MutableRefObject<number>;
  running: boolean;
}

export default function ShowcaseCanvas({ progressRef, running }: ShowcaseCanvasProps) {
  const mobile = useMobile();
  return (
    <Canvas
      shadows
      dpr={mobile ? [1, 1.5] : [1, 1.75]}
      camera={{ position: [3.4, 2.0, 4.8], fov: 38 }}
      frameloop={running ? "always" : "never"}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      aria-label="Interactive 3D models of a terracotta three-seater sofa and a beige upholstered bed"
    >
      <color attach="background" args={["#141311"]} />
      {/* Responsive framing — the old fixed camera cropped the sofa's
          sides on portrait phones once the 270° sweep turned it side-on. */}
      <FitCamera
        base={[3.4, 2.0, 4.8]}
        fov={38}
        lookAt={[0, 0, 0]}
        fitWidth={3.0}
        lookDrop={0.3}
      />

      {/* Studio environment — image-based lighting is what makes the
          fabric read as fabric instead of flat plastic. Generated locally
          with Lightformers: no network fetch, no HDR asset needed. */}
      <Suspense fallback={null}>
        <Environment resolution={256}>
          <Lightformer
            intensity={2.4}
            position={[0, 5, 0]}
            rotation-x={Math.PI / 2}
            scale={[9, 9, 1]}
            color="#fff3e0"
          />
          <Lightformer
            intensity={0.8}
            position={[-5, 2, 2]}
            rotation-y={Math.PI / 2}
            scale={[7, 3, 1]}
            color="#f0e8dc"
          />
          <Lightformer
            intensity={0.8}
            position={[5, 2, 2]}
            rotation-y={-Math.PI / 2}
            scale={[7, 3, 1]}
            color="#ffe7cd"
          />
          <Lightformer
            intensity={1.2}
            position={[0, 3, -5]}
            scale={[8, 3, 1]}
            color="#ffffff"
          />
        </Environment>
      </Suspense>

      {/* Key light for shadows; environment handles the fill */}
      <ambientLight intensity={0.18} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.6}
        color="#fff1dd"
        castShadow
        shadow-mapSize={mobile ? [512, 512] : [1024, 1024]}
      />
      <directionalLight position={[-5, 3, -2]} intensity={0.18} color="#e8e0d4" />
      <directionalLight position={[0, 2, 5]} intensity={0.3} color="#ffd9b8" />

      <ShowcaseRig progressRef={progressRef} />

      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.62}
        scale={10}
        blur={2.8}
        far={3.4}
        color="#000000"
      />
    </Canvas>
  );
}
