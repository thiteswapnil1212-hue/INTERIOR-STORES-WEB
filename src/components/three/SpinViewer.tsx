"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { createSpinControl, type SpinControl } from "./SpinCanvas";
import type { MutableRefObject } from "react";

const SpinCanvas = dynamic(() => import("./SpinCanvas"), {
  ssr: false,
  loading: () => null,
});

type SpinViewerProps = {
  className?: string;
  /** image shown until the 3D canvas is ready */
  posterSrc?: string;
  posterAlt?: string;
  label?: string;
  /** "idle" loads after browser idle (above the fold), "proximity" near viewport */
  loadMode?: "idle" | "proximity";
  priorityPoster?: boolean;
};

/**
 * Gatekeeper around the interactive 3D sofa. Loads the WebGL code
 * after browser idle (hero) or near the viewport (below fold),
 * shows a poster meanwhile, and wires drag-to-spin + cursor parallax.
 */
export default function SpinViewer({
  className = "",
  posterSrc,
  posterAlt = "",
  label = "Interactive 3D model of a terracotta three-seater sofa. Drag to spin it.",
  loadMode = "proximity",
  priorityPoster = false,
}: SpinViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<SpinControl>(createSpinControl());
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [running, setRunning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const dragState = useRef({ active: false, lastX: 0 });

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Loading gate
  useEffect(() => {
    if (loadMode === "idle") {
      const w = window as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      if (typeof w.requestIdleCallback === "function") {
        const id = w.requestIdleCallback(() => setShouldLoad(true), {
          timeout: 2500,
        });
        return () => w.cancelIdleCallback?.(id);
      }
      const timer = window.setTimeout(() => setShouldLoad(true), 1400);
      return () => window.clearTimeout(timer);
    }

    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMode]);

  // Pause rendering off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setRunning(entries.some((e) => e.isIntersecting)),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Drag to spin + cursor parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;
    const control = controlRef.current;

    const onPointerDown = (e: PointerEvent) => {
      dragState.current = { active: true, lastX: e.clientX };
      control.dragging = true;
      setHintVisible(false);
      el.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      control.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      control.mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      if (dragState.current.active) {
        const dx = e.clientX - dragState.current.lastX;
        dragState.current.lastX = e.clientX;
        control.targetY += dx * 0.007;
      }
    };
    const onPointerUp = () => {
      if (!dragState.current.active) return;
      dragState.current.active = false;
      control.dragging = false;
      control.lastInteract = performance.now();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, [reducedMotion, shouldLoad]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ touchAction: "pan-y" }}
    >
      {posterSrc && (
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          priority={priorityPoster}
          className={`object-cover transition-opacity duration-700 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {shouldLoad && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <SpinCanvas
            controlRef={controlRef as MutableRefObject<SpinControl>}
            running={running}
            reducedMotion={reducedMotion}
            label={label}
          />
          <CanvasReady onReady={() => setReady(true)} />
        </div>
      )}

      {!reducedMotion && hintVisible && ready && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1b1c1a]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            Drag to spin
          </span>
        </div>
      )}
    </div>
  );
}

/** Flips `ready` once the R3F canvas has painted its first frame. */
function CanvasReady({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onReady, 600);
    return () => window.clearTimeout(t);
  }, [onReady]);
  return null;
}
