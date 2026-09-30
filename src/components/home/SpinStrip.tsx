"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../motion/Reveal";
import SpinViewer from "../three/SpinViewer";

/**
 * "Take it for a spin" — an interactive 3D moment right below the hero.
 * The terracotta sofa idles in a slow turntable; visitors can drag it.
 * WebGL loads only when this section nears the viewport.
 */
export default function SpinStrip() {
  return (
    <section
      aria-label="Interactive 3D sofa preview"
      className="border-b border-black/5 bg-[#fbf9f6] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
            Interactive 3D
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Take it for
            <br />
            <span className="text-[#805533]">a spin.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#555856] sm:text-base">
            This is our signature three-seater, modelled true to size. Drag it,
            turn it around, see every angle — the same way you would in our
            workshop.
          </p>
          <Link
            href="/3d-studio"
            className="group mt-8 inline-flex min-h-12 items-center gap-4 bg-[#1b1c1a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
          >
            Design Yours in 3D
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="md:col-span-7">
          <div
            aria-hidden="true"
            className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#efe9df_0%,#fbf9f6_72%)]"
          >
            <SpinViewer
              className="h-[52svh] w-full md:h-[60svh]"
              loadMode="proximity"
              label="Interactive 3D model of a terracotta three-seater sofa. Drag to spin it."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
