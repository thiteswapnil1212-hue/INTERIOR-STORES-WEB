"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ScrollModel } from "../three/ScrollStage";

const ScrollStage = dynamic(() => import("../three/ScrollStage"), {
  ssr: false,
  loading: () => null,
});

type ScrollMomentProps = {
  model: ScrollModel;
  kicker: string;
  title: ReactNode;
  sub: string;
  cta: { href: string; label: string };
  /** section background (the 3D canvas is transparent) */
  bgClass?: string;
  label: string;
  sweep?: number;
  /** tall track the scroll progress is measured across */
  trackClass?: string;
};

/**
 * A quiet, Apple-style 3D moment: a tall track pins a full-viewport
 * stage while scrolling drives the model — sofa/bed turntable, or
 * curtains breathing harder. No instructions, no hints; the motion
 * is simply there as you scroll.
 */
export default function ScrollMoment({
  model,
  kicker,
  title,
  sub,
  cta,
  bgClass = "bg-[#f6f2ec]",
  label,
  sweep,
  trackClass = "h-[180vh] md:h-[220vh]",
}: ScrollMomentProps) {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [running, setRunning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Scroll progress across the track (rAF-throttled)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      progressRef.current =
        total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Load WebGL near the viewport; pause rendering off-screen
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const loader = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          loader.disconnect();
        }
      },
      { rootMargin: "1200px 0px" }
    );
    const visibility = new IntersectionObserver(
      (entries) => setRunning(entries.some((e) => e.isIntersecting)),
      { rootMargin: "200px 0px" }
    );
    loader.observe(el);
    visibility.observe(el);
    return () => {
      loader.disconnect();
      visibility.disconnect();
    };
  }, []);

  return (
    <section
      ref={trackRef}
      data-scroll-moment
      aria-label={label}
      className={`relative ${trackClass} ${bgClass}`}
    >
      <div
        ref={stageRef}
        className="sticky top-0 flex h-[100svh] flex-col justify-end overflow-hidden"
      >
        <div className="absolute inset-0">
          {/* Studio glow — always present, so the stage never reads as an
              empty blank while the WebGL chunk loads, and the model always
              sits in soft depth rather than on a flat field. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_38%,rgba(128,85,51,0.13),transparent_70%)]"
          />
          {shouldLoad && (
            <ScrollStage
              model={model}
              progressRef={progressRef}
              running={running}
              reducedMotion={reducedMotion}
              label={label}
              sweep={sweep}
            />
          )}
        </div>

        {/* Quiet copy — out of the way of the model */}
        <div className="pointer-events-none relative px-6 pb-24 md:px-16 md:pb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
            {kicker}
          </p>
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight text-[#1b1c1a] md:text-6xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#555856] md:text-base">
            {sub}
          </p>
          <Link
            href={cta.href}
            className="group pointer-events-auto mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-colors duration-300 hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
          >
            {cta.label}
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
