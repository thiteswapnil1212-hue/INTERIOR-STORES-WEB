"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import TiltCard from "../motion/TiltCard";

export type GalleryProject = {
  number: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
};

const DAMPING = 0.085; // buttery, Apple-like
const TRACK_VH = 300; // scroll length driving the horizontal sweep

/**
 * Apple-style scroll-driven horizontal gallery.
 * The section pins for 300vh while vertical scrolling sweeps the
 * project cards sideways with damped motion. Ends on a CTA card.
 * Under prefers-reduced-motion it renders as a plain responsive grid.
 */
export default function HorizontalGallery({
  projects,
}: {
  projects: GalleryProject[];
}) {
  const [reduced, setReduced] = useState(false);
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
    }
  }, []);

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    const stage = stageRef.current;
    const row = rowRef.current;
    if (!track || !stage || !row) return;

    let raf = 0;
    let running = false;
    let current = 0;
    let lastIndex = -1;
    const panels = projects.length + 1; // + CTA card

    const frame = () => {
      raf = 0;
      if (!running) return;

      const rect = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      const target =
        total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;

      current += (target - current) * DAMPING;
      if (Math.abs(target - current) < 0.0005) current = target;

      const maxShift = Math.max(0, row.scrollWidth - stage.clientWidth);
      row.style.transform = `translate3d(${(-current * maxShift).toFixed(1)}px, 0, 0)`;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${current.toFixed(3)})`;
      }
      const index = Math.min(panels - 1, Math.round(current * (panels - 1)));
      if (index !== lastIndex && countRef.current) {
        lastIndex = index;
        countRef.current.textContent = `${String(index + 1).padStart(2, "0")} / ${String(
          panels
        ).padStart(2, "0")}`;
      }

      if (running) raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (!raf && running) raf = requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible && !running) {
          running = true;
          kick();
        } else if (!visible && running) {
          running = false;
          if (raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(track);

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    kick();

    return () => {
      running = false;
      observer.disconnect();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced, projects.length]);

  const panels = projects.length + 1;

  const cards = (
    <>
      {projects.map((project) => (
        <article
          key={project.number}
          className="group w-[70vw] shrink-0 sm:w-[56vw] lg:w-[36vw] xl:w-[31vw]"
        >
          <TiltCard maxTilt={5} className="h-full">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e4dc]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 56vw, 36vw"
              className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none md:group-hover:scale-[1.03]"
            />
          </div>

          <div className="mt-5 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#6b6d69]">
                {project.number} / {project.category}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md text-[12px] leading-6 text-[#6b6d69] sm:text-[13px]">
                {project.description}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-[#6b6d69]">
                {project.location}
              </p>
            </div>

            <Link
              href="/contact"
              aria-label={`Enquire about ${project.title}`}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#747878]/25 text-lg transition-all duration-300 hover:border-[#805533] hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
            >
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </div>
          </TiltCard>
        </article>
      ))}

      {/* End CTA card */}
      <div className="flex w-[70vw] shrink-0 flex-col justify-between bg-[#1b1c1a] p-8 text-white sm:w-[56vw] sm:p-10 lg:w-[36vw] xl:w-[31vw]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c9a87c]">
            Have something in mind?
          </p>
          <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Let&apos;s create something for your home.
          </h3>
          <p className="mt-4 max-w-sm text-[13px] leading-6 text-white/70">
            Tell us what you need. We&apos;ll discuss your space, preferences,
            and next steps.
          </p>
        </div>
        <Link
          href="/contact"
          className="group mt-10 inline-flex min-h-12 w-fit items-center gap-5 bg-white px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-colors duration-300 hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Start an Enquiry
          <ArrowRight
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </>
  );

  if (reduced) {
    return (
      <section
        aria-label="All project categories"
        className="border-t border-[#747878]/15 px-5 py-16 sm:px-6 sm:py-20 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          <GalleryHeader />
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 [&>*]:w-full!">
            {cards}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      aria-label="All project categories"
      className="relative border-t border-[#747878]/15"
      style={{ height: `${TRACK_VH}vh` }}
    >
      <div
        ref={stageRef}
        className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-16">
          <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                Explore our services
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Crafted around you.
              </h2>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-3">
              <span
                ref={countRef}
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6b6d69]"
              >
                01 / {String(panels).padStart(2, "0")}
              </span>
              <div
                className="h-px w-24 bg-[#1b1c1a]/15 sm:w-32"
                aria-hidden="true"
              >
                <div
                  ref={barRef}
                  className="h-full w-full origin-left bg-[#805533]"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={rowRef}
          className="flex items-stretch gap-6 pl-5 pr-[12vw] will-change-transform sm:gap-8 sm:pl-6 md:pl-16"
        >
          {cards}
        </div>

        <p className="mx-auto mt-8 w-full max-w-[1440px] px-5 text-[11px] uppercase tracking-[0.14em] text-[#6b6d69] sm:px-6 md:px-16">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}

function GalleryHeader() {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
        Explore our services
      </p>
      <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
        Crafted around you.
      </h2>
      <p className="mt-4 max-w-xs text-[12px] leading-6 text-[#6b6d69]">
        Made-to-order furnishing for homes across Pune and PCMC.
      </p>
    </div>
  );
}
