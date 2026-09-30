"use client";

import { useEffect, useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees */
  maxTilt?: number;
  /** soft light glare that follows the cursor */
  glare?: boolean;
};

/**
 * Apple-style 3D tilt: the card leans toward the cursor with
 * a soft glare sweep. Pure CSS transforms — zero WebGL cost.
 * Disabled on touch devices and prefers-reduced-motion.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  glare = true,
}: TiltCardProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const target = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, g: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cur = { rx: 0, ry: 0, gx: 50, gy: 50, g: 0 };

    const frame = () => {
      raf.current = 0;
      const t = target.current;
      cur.rx += (t.rx - cur.rx) * 0.16;
      cur.ry += (t.ry - cur.ry) * 0.16;
      cur.gx += (t.gx - cur.gx) * 0.16;
      cur.gy += (t.gy - cur.gy) * 0.16;
      cur.g += (t.g - cur.g) * 0.16;

      inner.style.transform = `rotateX(${cur.rx.toFixed(2)}deg) rotateY(${cur.ry.toFixed(2)}deg)`;
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${cur.gx.toFixed(1)}% ${cur.gy.toFixed(1)}%, rgba(255,255,255,0.22) 0%, transparent 60%)`;
        glareRef.current.style.opacity = cur.g.toFixed(2);
      }

      if (
        Math.abs(t.rx - cur.rx) > 0.01 ||
        Math.abs(t.ry - cur.ry) > 0.01 ||
        Math.abs(t.g - cur.g) > 0.01
      ) {
        raf.current = requestAnimationFrame(frame);
      }
    };

    const kick = () => {
      if (!raf.current) raf.current = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const rect = outer.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      target.current.ry = px * 2 * maxTilt;
      target.current.rx = -py * 2 * maxTilt;
      target.current.gx = (px + 0.5) * 100;
      target.current.gy = (py + 0.5) * 100;
      target.current.g = 1;
      kick();
    };

    const onLeave = () => {
      target.current.rx = 0;
      target.current.ry = 0;
      target.current.g = 0;
      kick();
    };

    outer.addEventListener("pointermove", onMove);
    outer.addEventListener("pointerleave", onLeave);
    return () => {
      outer.removeEventListener("pointermove", onMove);
      outer.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [maxTilt]);

  return (
    <div ref={outerRef} className={className} style={{ perspective: "1000px" }}>
      <div
        ref={innerRef}
        className="relative h-full w-full will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0"
          />
        )}
      </div>
    </div>
  );
}
