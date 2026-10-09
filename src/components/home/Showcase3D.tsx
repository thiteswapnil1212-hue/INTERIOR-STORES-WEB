"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { MutableRefObject } from "react";

const ShowcaseCanvas = dynamic(() => import("./ShowcaseCanvas"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#232019_0%,#141311_70%)]"
    />
  ),
});

const BEATS = [
  {
    title: "Every angle.",
    text: "Our signature three-seater, modelled true to size. Scroll and watch it turn.",
  },
  {
    title: "Made to measure.",
    text: "Sized for your room, built in our Bhosari workshop.",
  },
  {
    title: "Rest, reimagined.",
    text: "Upholstered beds with tall headboards — sized for your room, built in Bhosari.",
  },
  {
    title: "Now make it yours.",
    text: "Pick a fabric and configuration in the 3D Studio.",
  },
];

/**
 * Apple-style scroll-driven 3D showcase. A tall scroll track pins a
 * full-viewport stage; scrolling sweeps a 360° turntable — the signature
 * sofa for the first half, the upholstered bed for the second — while four
 * copy beats cross-fade. The WebGL canvas is code-split, renders only
 * while on screen, and honours reduced-motion.
 */
export default function Showcase3D() {
  const trackRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [beat, setBeat] = useState(0);
  const [running, setRunning] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const beatRef = useRef(0);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      progressRef.current = 0.18;
      setRunning(true);
      return;
    }
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(total, 1)));
      progressRef.current = p;
      const b = p < 0.25 ? 0 : p < 0.5 ? 1 : p < 0.75 ? 2 : 3;
      if (b !== beatRef.current) {
        beatRef.current = b;
        setBeat(b);
      }
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
  }, [reducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setRunning(entry.isIntersecting);
        // Start downloading the 3D chunk only when the user approaches.
        if (entry.isIntersecting) setLoaded(true);
      },
      { rootMargin: "1200px 0px", threshold: 0 }
    );
    io.observe(track);
    return () => io.disconnect();
  }, []);

  if (reducedMotion) {
    return (
      <section
        aria-label="3D showcase"
        className="relative overflow-hidden bg-[#141311] text-[#fbf9f6]"
      >
        <div className="relative h-[78svh] min-h-[480px]">
          {loaded ? (
            <ShowcaseCanvas
              progressRef={progressRef as MutableRefObject<number>}
              running={running}
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#232019_0%,#141311_70%)]"
            />
          )}
        </div>
        <div className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a47e]">
            3D Showcase
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Every angle, before we stitch.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#b9bab6]">
            Our signature three-seater, modelled true to size — made to
            measure in our Bhosari workshop.
          </p>
          <Link
            href="/3d-studio"
            className="group mt-6 inline-flex min-h-12 items-center gap-2 bg-[#fbf9f6] px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-colors hover:bg-[#c5a47e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e]"
          >
            Open the 3D Studio <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      aria-label="3D showcase — scroll to rotate the sofa and bed"
      data-scroll-moment
      className="relative h-[400vh] bg-[#141311] text-[#fbf9f6]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* 3D stage */}
        <div className="absolute inset-0">
          {loaded ? (
            <ShowcaseCanvas progressRef={progressRef} running={running} />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#232019_0%,#141311_70%)]"
            />
          )}
        </div>

        {/* Soft vignette for legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,9,8,0.55)_100%)]"
        />

        {/* Heading */}
        <div className="pointer-events-none absolute inset-x-0 top-0 px-5 pt-24 sm:px-8 sm:pt-28 md:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a47e]">
              3D Showcase
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
              Every angle, before we stitch.
            </h2>
          </div>
        </div>

        {/* Copy beats */}
        <div className="pointer-events-none absolute inset-x-0 bottom-24 px-5 sm:bottom-16 sm:px-8 md:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="relative min-h-[132px] max-w-md sm:min-h-[120px]">
              {BEATS.map((b, i) => (
                <div
                  key={b.title}
                  aria-hidden={beat !== i}
                  className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-primary ${
                    beat === i
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <p className="font-serif text-2xl sm:text-3xl">{b.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[#b9bab6]">{b.text}</p>
                  {i === 3 && (
                    <Link
                      href="/3d-studio"
                      className="group pointer-events-auto mt-5 inline-flex min-h-12 items-center gap-2 bg-[#fbf9f6] px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-colors duration-300 hover:bg-[#c5a47e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141311]"
                    >
                      Open the 3D Studio
                      <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center transition-opacity duration-500 sm:flex ${
            beat === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="flex flex-col items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b8d89]">
            Scroll to rotate
            <ChevronDown size={14} className="animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}
