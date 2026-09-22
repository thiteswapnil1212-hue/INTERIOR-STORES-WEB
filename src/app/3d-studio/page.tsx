
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LoaderCircle, ArrowLeft } from "lucide-react";

import StudioControls from "../../components/studio/StudioControls";

export type FurnitureType = "sofa" | "bed" | "wall_panel";

export type ConfigType =
  | "2_seater"
  | "3_seater"
  | "l_shape"
  | "custom";

export type FabricType = {
  id: string;
  name: string;
  hex: string;
};

export const FABRICS: FabricType[] = [
  { id: "beige", name: "Beige", hex: "#E8E2D5" },
  { id: "stone", name: "Stone", hex: "#D2CFC4" },
  { id: "charcoal", name: "Charcoal", hex: "#3A3A3A" },
  { id: "olive", name: "Olive", hex: "#5E6148" },
  { id: "terracotta", name: "Terracotta", hex: "#A75D42" },
];

const StudioViewer = dynamic(
  () => import("../../components/studio/StudioViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[280px] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-[#6b6d69]">
          <LoaderCircle className="h-7 w-7 animate-spin text-[#805533]" />
          <p className="text-xs tracking-wide">
            Preparing your 3D studio...
          </p>
        </div>
      </div>
    ),
  }
);

export default function StudioPage() {
  const [furniture, setFurniture] =
    useState<FurnitureType>("sofa");

  const [config, setConfig] =
    useState<ConfigType>("2_seater");

  const [fabric, setFabric] =
    useState<FabricType>(FABRICS[0]);

  return (
    <main className="flex min-h-[100dvh] flex-col bg-[#fbf9f6] pt-16 text-[#1b1c1a] md:h-[100dvh] md:min-h-0 md:pt-20">

      {/* Studio Header */}
      <header className="relative z-10 shrink-0 border-b border-black/10 bg-[#fbf9f6] px-5 py-4 sm:px-8 md:py-5">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">

          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-[#805533]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#805533] sm:text-[10px]">
                Mauli 3D Studio
              </p>
            </div>

            <h1 className="font-serif text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Design your space.
            </h1>

            <p className="mt-2 hidden max-w-xl text-sm leading-6 text-[#6b6d69] sm:block">
              Explore furniture styles and fabric colours
              to create a look that feels like home.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 border border-black/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors hover:border-[#805533] hover:text-[#805533] sm:px-4 sm:py-3"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* Workspace */}
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col md:min-h-0 md:flex-row">

        {/* 3D Viewer */}
        <div className="relative min-h-[300px] flex-1 overflow-hidden bg-[#e9e4dc] sm:min-h-[380px] md:min-h-0">

          {/* Viewer Label */}
          <div className="pointer-events-none absolute left-4 top-4 z-10 sm:left-7 sm:top-6">
            <span className="border border-black/10 bg-[#fbf9f6]/90 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#444748] backdrop-blur-sm">
              Live Preview
            </span>
          </div>

          <StudioViewer
            furniture={furniture}
            fabricHex={fabric.hex}
            config={config}
          />
        </div>

        {/* Controls */}
        <aside className="relative z-10 flex w-full shrink-0 flex-col border-t border-black/10 bg-[#fbf9f6] md:w-[360px] md:border-l md:border-t-0 lg:w-[400px]">

          <div className="border-b border-black/10 px-5 py-4 sm:px-7">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
              Customize
            </p>

            <h2 className="mt-1 font-serif text-2xl">
              Make it yours.
            </h2>

            <p className="mt-1 text-xs leading-5 text-[#6b6d69]">
              Choose your furniture and explore the options.
            </p>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <StudioControls
              furniture={furniture}
              config={config}
              fabric={fabric}
              onFurnitureChange={setFurniture}
              onConfigChange={setConfig}
              onFabricChange={setFabric}
            />
          </div>

          {/* Current Selection */}
          <div className="shrink-0 border-t border-black/10 bg-[#f5f1eb] px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span
                className="h-8 w-8 shrink-0 rounded-full border border-black/10"
                style={{ backgroundColor: fabric.hex }}
                aria-label={`Selected fabric: ${fabric.name}`}
                title={fabric.name}
              />

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8b8d89]">
                  Current fabric
                </p>

                <p className="truncate text-sm font-medium">
                  {fabric.name}
                </p>
              </div>

              <span className="text-xs text-[#8b8d89]">
                {furniture === "wall_panel"
                  ? "Wall Panel"
                  : furniture === "bed"
                    ? "Bed"
                    : "Sofa"}
              </span>
            </div>
          </div>

        </aside>
      </section>
    </main>
  );
}