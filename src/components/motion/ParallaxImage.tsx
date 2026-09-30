"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** classes for the outer frame: aspect ratio, sizing, group, rounded, etc. */
  className?: string;
  /** extra classes for the <Image> itself (e.g. hover zoom) */
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** 0 = static, higher = more drift. 0.12 is a calm Apple-like drift. */
  speed?: number;
};

/**
 * Image with a slow scroll parallax drift (Apple-style depth).
 * The inner image is rendered taller than the frame and translated
 * against the scroll direction, so it moves slower than the page.
 * Pauses when off-screen; disabled under prefers-reduced-motion.
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  speed = 0.12,
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (speed <= 0) return;

    let raf = 0;
    let inView = false;

    const update = () => {
      raf = 0;
      if (!inView) return;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // +1 when the frame center is a viewport below center, -1 when above
      const progress =
        (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const max = rect.height * 0.12;
      const y = Math.max(-max, Math.min(max, progress * max * (speed / 0.12)));
      inner.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries.some((e) => e.isIntersecting);
        if (inView) request();
      },
      { rootMargin: "120px 0px" }
    );
    observer.observe(frame);

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    request();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden ${className}`}>
      {/* 24% taller than the frame so the drift never exposes an edge */}
      <div
        ref={innerRef}
        className="absolute inset-x-0 -inset-y-[12%] will-change-transform motion-reduce:transform-none"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
