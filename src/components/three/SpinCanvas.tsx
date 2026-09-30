"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { SofaModel } from "../studio/StudioViewer";
import FitCamera, { useMobile } from "./FitCamera";
import type { MutableRefObject } from "react";

export type SpinControl = {
  /** desired turntable angle (drag writes here) */
  targetY: number;
  /** rad/s of idle auto-rotate */
  autoSpeed: number;
  /** timestamp of last drag end */
  lastInteract: number;
  dragging: boolean;
  /** mouse -1..1 for camera parallax */
  mouseX: number;
  mouseY: number;
};

export const createSpinControl = (): SpinControl => ({
  targetY: 0.6,
  autoSpeed: 0.45,
  lastInteract: 0,
  dragging: false,
  mouseX: 0,
  mouseY: 0,
});

const SOFA_BASE: [number, number, number] = [3.2, 1.9, 4.7];
const SOFA_LOOK: [number, number, number] = [0, 0.85, 0];

function SofaRig({
  controlRef,
  reducedMotion,
  fittedBase,
}: {
  controlRef: MutableRefObject<SpinControl>;
  reducedMotion: boolean;
  /** camera home position after portrait fitting (parallax orbits this) */
  fittedBase: MutableRefObject<THREE.Vector3>;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const groupObj = group.current;
    if (!groupObj) return;
    const c = controlRef.current;

    if (!reducedMotion) {
      const idle = !c.dragging && performance.now() - c.lastInteract > 2500;
      if (idle) c.targetY += c.autoSpeed * delta;

      groupObj.rotation.y = THREE.MathUtils.damp(
        groupObj.rotation.y,
        c.targetY,
        7,
        delta
      );

      // Gentle floating bob — the sofa feels alive, not parked.
      groupObj.position.y = Math.sin(state.clock.elapsedTime * 1.3) * 0.035;

      // Camera drifts with the cursor for parallax depth.
      const cam = state.camera;
      cam.position.x = THREE.MathUtils.damp(
        cam.position.x,
        fittedBase.current.x + c.mouseX * 0.7,
        3,
        delta
      );
      cam.position.y = THREE.MathUtils.damp(
        cam.position.y,
        fittedBase.current.y + c.mouseY * 0.35,
        3,
        delta
      );
      cam.lookAt(SOFA_LOOK[0], SOFA_LOOK[1], SOFA_LOOK[2]);
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <SofaModel fabricHex="#A75D42" config="3_seater" />
    </group>
  );
}

type SpinCanvasProps = {
  controlRef: MutableRefObject<SpinControl>;
  running: boolean;
  reducedMotion: boolean;
  label: string;
};

/**
 * Interactive 3D sofa: idles in a slow turntable, drag to spin it,
 * camera follows the cursor. Transparent background so it sits
 * on any section design.
 */
export default function SpinCanvas({
  controlRef,
  running,
  reducedMotion,
  label,
}: SpinCanvasProps) {
  const mobile = useMobile();
  const fittedBase = useRef(new THREE.Vector3(...SOFA_BASE));
  const handleFit = useCallback((p: THREE.Vector3) => {
    fittedBase.current.copy(p);
  }, []);

  return (
    <Canvas
      shadows
      dpr={mobile ? [1, 1.5] : [1, 1.75]}
      camera={{ position: SOFA_BASE, fov: 36 }}
      frameloop={running && !reducedMotion ? "always" : "never"}
      gl={{ alpha: true, antialias: true }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        touchAction: "pan-y",
        cursor: "grab",
      }}
      aria-label={label}
    >
      <FitCamera
        base={SOFA_BASE}
        fov={36}
        lookAt={SOFA_LOOK}
        fitWidth={2.6}
        onFit={handleFit}
      />
      <ambientLight intensity={0.75} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={2.2}
        castShadow
        shadow-mapSize={mobile ? [512, 512] : [1024, 1024]}
      />
      <directionalLight position={[-5, 3, -2]} intensity={0.5} color="#cdd7ff" />
      <directionalLight position={[0, 2, 5]} intensity={0.6} color="#ffd9b8" />

      <SofaRig
        controlRef={controlRef}
        reducedMotion={reducedMotion}
        fittedBase={fittedBase}
      />

      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.5}
        scale={10}
        blur={2.8}
        far={3.4}
        color="#000000"
      />
    </Canvas>
  );
}
