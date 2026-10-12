"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Butter-smooth scrolling for the whole site (Lenis).
 * Uses native scroll under the hood, so all scroll-driven animations
 * (ScrollMoment, Showcase3D, HorizontalGallery) keep working untouched.
 * Disabled for prefers-reduced-motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // Expose for programmatic scrolls (e.g. BackToTop)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return null;
}
