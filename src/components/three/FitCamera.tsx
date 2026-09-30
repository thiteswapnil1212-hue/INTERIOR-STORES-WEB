"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

/** True on phone-size viewports — used to lighten the render load. */
export function useMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

type FitCameraProps = {
  /** desktop-framed camera position (direction + distance) */
  base: [number, number, number];
  fov: number;
  lookAt: [number, number, number];
  /** world-space width that must stay fully visible (model + margin) */
  fitWidth: number;
  /**
   * On portrait screens the look target drops by this much, which lifts
   * the model up on screen — clearing bottom-anchored copy.
   */
  lookDrop?: number;
  /** receives the fitted camera position (for cursor-parallax rigs) */
  onFit?: (pos: THREE.Vector3) => void;
};

/**
 * Keeps 3D models framed on narrow viewports. Desktop framing assumes
 * a wide screen; on a portrait phone the horizontal field of view
 * collapses and the model's sides get cropped. This pushes the camera
 * back along its base direction just enough to fit `fitWidth`, and
 * optionally lifts the model above bottom copy on portrait screens.
 */
export default function FitCamera({
  base,
  fov,
  lookAt,
  fitWidth,
  lookDrop = 0,
  onFit,
}: FitCameraProps) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);

  useEffect(() => {
    const persp = camera as THREE.PerspectiveCamera;
    const aspect = size.width / Math.max(1, size.height);
    const baseVec = new THREE.Vector3(base[0], base[1], base[2]);
    const dist = baseVec.length();
    const halfV = THREE.MathUtils.degToRad(fov / 2);
    // world-space half-width visible at the model's distance
    const visibleHalfWidth = dist * Math.tan(halfV) * aspect;
    const fit = Math.max(1, fitWidth / 2 / Math.max(0.001, visibleHalfWidth));

    persp.position.copy(baseVec).multiplyScalar(fit);
    const portrait = aspect < 0.9;
    persp.lookAt(
      lookAt[0],
      lookAt[1] - (portrait ? lookDrop : 0),
      lookAt[2]
    );
    persp.updateProjectionMatrix();
    onFit?.(persp.position.clone());
    // base/lookAt are module-level constants at call sites (stable refs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera, size, fov, fitWidth, lookDrop, onFit]);

  return null;
}
