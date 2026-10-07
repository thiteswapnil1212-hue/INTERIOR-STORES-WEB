"use client";

import { useEffect, useRef, useState } from "react";

type PhotoSpinViewerProps = {
  /** Folder + base name, e.g. "/images/spin/sofa" loads "/images/spin/sofa-01.jpg" */
  basePath: string;
  /** Number of frames in the 360° sequence */
  frameCount?: number;
  ext?: string;
  /** Accessible description of the spin view */
  alt: string;
  className?: string;
  /** Shown if the photo frames are missing (e.g. not uploaded yet) */
  fallbackSrc?: string;
  /** Gentle auto-rotate until first interaction (off under reduced-motion) */
  autoRotate?: boolean;
};

const PX_PER_FRAME = 12;
const AUTOROTATE_MS_PER_FRAME = 110;

function frameUrl(
  basePath: string,
  index: number,
  frameCount: number,
  ext: string
): string {
  const n = ((index % frameCount) + frameCount) % frameCount;
  return `${basePath}-${String(n + 1).padStart(2, "0")}.${ext}`;
}

/**
 * 360° photo-spin viewer — drag to rotate through a sequence of real
 * photographs (e.g. /images/spin/sofa-01.jpg … sofa-36.jpg).
 *
 * - pointer drag scrubs frames with inertia on release
 * - slow auto-rotate until the first interaction
 * - all frames preloaded in the background; first frame fades in on load
 * - under prefers-reduced-motion: static first frame, no auto-rotate
 * - if frames are missing, falls back to a poster image instead of breaking
 */
export default function PhotoSpinViewer({
  basePath,
  frameCount = 36,
  ext = "jpg",
  alt,
  className = "",
  fallbackSrc = "/images/sofas/sofa-hero.jpg",
  autoRotate = true,
}: PhotoSpinViewerProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef(0);
  const accRef = useRef(0);
  const dragRef = useRef({
    active: false,
    lastX: 0,
    velocity: 0,
    lastT: 0,
  });
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const showFrame = (index: number) => {
    frameRef.current =
      ((index % frameCount) + frameCount) % frameCount;
    const img = imgRef.current;
    if (img && !failed) {
      img.src = frameUrl(basePath, frameRef.current, frameCount, ext);
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);

    // Preload the whole sequence in the background.
    for (let i = 0; i < frameCount; i++) {
      const pre = new window.Image();
      pre.src = frameUrl(basePath, i, frameCount, ext);
    }

    let cancelled = false;
    let raf = 0;
    let lastTick = performance.now();
    const tick = (now: number) => {
      if (cancelled) return;
      if (
        autoRotate &&
        !dragRef.current.active &&
        !mq.matches &&
        !failed
      ) {
        if (now - lastTick >= AUTOROTATE_MS_PER_FRAME) {
          lastTick = now;
          showFrame(frameRef.current + 1);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", onChange);
    };
    // showFrame is intentionally excluded: it only touches refs + DOM.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePath, frameCount, ext, autoRotate, failed]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (failed) return;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    dragRef.current = {
      active: true,
      lastX: e.clientX,
      velocity: 0,
      lastT: performance.now(),
    };
    setInteracted(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active || failed) return;
    const now = performance.now();
    const dx = e.clientX - d.lastX;
    const dt = Math.max(now - d.lastT, 1);
    d.velocity = dx / PX_PER_FRAME / dt; // frames per ms
    d.lastX = e.clientX;
    d.lastT = now;
    accRef.current += dx / PX_PER_FRAME;
    const step = Math.trunc(accRef.current);
    if (step !== 0) {
      accRef.current -= step;
      showFrame(frameRef.current + step);
    }
  };

  const endDrag = () => {
    const d = dragRef.current;
    if (!d.active) return;
    d.active = false;
    // Inertia: keep gliding with decaying velocity after release.
    let v = d.velocity;
    const glide = () => {
      if (Math.abs(v) < 0.02 || dragRef.current.active || failed) return;
      v *= 0.94;
      accRef.current += v * 16.7;
      const step = Math.trunc(accRef.current);
      if (step !== 0) {
        accRef.current -= step;
        showFrame(frameRef.current + step);
      }
      requestAnimationFrame(glide);
    };
    requestAnimationFrame(glide);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (failed) return;
    if (e.key === "ArrowRight") {
      setInteracted(true);
      showFrame(frameRef.current + 1);
    } else if (e.key === "ArrowLeft") {
      setInteracted(true);
      showFrame(frameRef.current - 1);
    }
  };

  return (
    <div
      role="img"
      aria-label={alt}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      style={{ touchAction: "none", cursor: failed ? "default" : "grab" }}
      className={`relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#805533] ${className}`}
    >
      {!failed ? (
        <img
          ref={imgRef}
          src={frameUrl(basePath, 0, frameCount, ext)}
          alt=""
          draggable={false}
          onLoad={() => setReady(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full select-none object-cover transition-opacity duration-500 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <img
          src={fallbackSrc}
          alt=""
          draggable={false}
          className="h-full w-full select-none object-cover"
        />
      )}

      {/* Subtle drag hint — fades away permanently on first interaction. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transition-opacity duration-500 ${
          ready && !interacted && !reducedMotion && !failed
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <span className="inline-block rounded-full bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          Drag to rotate
        </span>
      </div>
    </div>
  );
}
