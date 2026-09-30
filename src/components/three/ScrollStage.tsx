"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { SofaModel, BedModel } from "../studio/StudioViewer";
import { CurtainModel, type SwayRef } from "./CurtainModel";
import type { MutableRefObject, ReactNode } from "react";

export type ScrollModel = "sofa" | "bed" | "curtains";

/** Eases a model's turntable rotation toward scroll progress × sweep. */
function TurntableRig({
  progressRef,
  sweep,
  reducedMotion,
  children,
}: {
  progressRef: MutableRefObject<number>;
  sweep: number;
  reducedMotion: boolean;
  children: ReactNode;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const target = (reducedMotion ? 0.12 : progressRef.current) * sweep;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      target,
      4.5,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}

/** Maps scroll progress to breeze strength for the curtains. */
function BreezeDriver({
  progressRef,
  swayRef,
  reducedMotion,
}: {
  progressRef: MutableRefObject<number>;
  swayRef: SwayRef;
  reducedMotion: boolean;
}) {
  useFrame(() => {
    swayRef.current = reducedMotion ? 0.5 : 0.9 + progressRef.current * 1.8;
  });
  return null;
}

const FRAMING: Record<
  ScrollModel,
  { camera: [number, number, number]; lookAt: [number, number, number]; fov: number }
> = {
  sofa: { camera: [3.2, 1.9, 4.7], lookAt: [0, 0.85, 0], fov: 36 },
  bed: { camera: [3.6, 2.3, 4.3], lookAt: [0, 0.5, 0], fov: 37 },
  curtains: { camera: [0, 1.5, 5.4], lookAt: [0, 1.35, 0], fov: 40 },
};

type ScrollStageProps = {
  model: ScrollModel;
  progressRef: MutableRefObject<number>;
  running: boolean;
  reducedMotion: boolean;
  label: string;
  /** radians of turntable sweep for sofa/bed (default 180°) */
  sweep?: number;
};

/**
 * Apple-style scroll stage: no buttons, no hints — the model simply
 * moves as you scroll. Sofa/bed rotate on a turntable; curtains
 * breathe harder the deeper you scroll. Transparent background so
 * each page section sets the mood.
 */
export default function ScrollStage({
  model,
  progressRef,
  running,
  reducedMotion,
  label,
  sweep = Math.PI,
}: ScrollStageProps) {
  const framing = FRAMING[model];
  const swayRef = useRef(1);

  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: framing.camera, fov: framing.fov }}
      frameloop={running ? "always" : "never"}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      aria-label={label}
      onCreated={({ camera }) =>
        camera.lookAt(
          framing.lookAt[0],
          framing.lookAt[1],
          framing.lookAt[2]
        )
      }
    >
      {/* Soft studio light — gentle key, cool fill, warm rim */}
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.7}
        color="#fff1e0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 3, -2]} intensity={0.45} color="#cdd7ff" />
      <directionalLight position={[0, 3, -5]} intensity={0.5} color="#ffd9b8" />

      {model === "sofa" && (
        <TurntableRig
          progressRef={progressRef}
          sweep={sweep}
          reducedMotion={reducedMotion}
        >
          <SofaModel fabricHex="#A75D42" config="3_seater" />
        </TurntableRig>
      )}

      {model === "bed" && (
        <TurntableRig
          progressRef={progressRef}
          sweep={sweep}
          reducedMotion={reducedMotion}
        >
          <BedModel fabricHex="#c9b79b" config="double" />
        </TurntableRig>
      )}

      {model === "curtains" && (
        <>
          <BreezeDriver
            progressRef={progressRef}
            swayRef={swayRef}
            reducedMotion={reducedMotion}
          />
          <CurtainModel swayRef={swayRef} />
        </>
      )}

      {model !== "curtains" && (
        <ContactShadows
          position={[0, 0.001, 0]}
          opacity={0.5}
          scale={10}
          blur={2.8}
          far={3.4}
          color="#000000"
        />
      )}
    </Canvas>
  );
}
