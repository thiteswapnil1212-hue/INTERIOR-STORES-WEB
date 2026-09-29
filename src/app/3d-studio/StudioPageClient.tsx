"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LoaderCircle, ArrowLeft } from "lucide-react";

import StudioControls from "../../components/studio/StudioControls";
import { FurnitureType, ConfigType, FabricType, FABRICS, DEFAULT_CONFIG, FURNITURE_LABELS, CONFIG_LABELS, CONFIG_DIMENSIONS } from "../../components/studio/types";

const StudioViewer = dynamic(
  () => import("../../components/studio/StudioViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[280px] items-center justify-center bg-[#e9e4dc]">
        <div className="flex flex-col items-center gap-3 text-[#6b6d69]">
          <LoaderCircle className="h-7 w-7 animate-spin text-[#805533]" aria-hidden="true" />
          <p className="text-xs tracking-wide">Preparing your 3D studio...</p>
        </div>
      </div>
    ),
  }
);

export default function StudioPageClient() {
  const [furniture, setFurniture] = useState<FurnitureType>("sofa");
  const [config, setConfig] = useState<ConfigType>("3_seater");
  const [fabric, setFabric] = useState<FabricType>(FABRICS[0]);

  const handleFurnitureChange = (f: FurnitureType) => {
    setFurniture(f);
    setConfig(DEFAULT_CONFIG[f]);
  };

  return (
    <main className="min-h-[100dvh] bg-[#fbf9f6] pt-16 text-[#1b1c1a] md:pt-20">

      {/* Studio Header */}
      <header className="relative z-10 shrink-0 border-b border-black/10 bg-[#fbf9f6] px-5 py-4 sm:px-8 md:py-5">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">

          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-[#805533]" aria-hidden="true" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#805533] sm:text-[10px]">
                Mauli 3D Studio
              </p>
            </div>

            <h1 className="font-serif text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Design your space.
            </h1>

            <p className="mt-2 hidden max-w-xl text-sm leading-6 text-[#6b6d69] sm:block">
              Pick a style, choose a fabric, check the size — then send your
              design straight to us on WhatsApp for a quote.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 border border-black/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] sm:px-4 sm:py-3"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span className="hidden sm:inline">Back Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* Workspace — page scrolls naturally; viewer sticks on desktop */}
      <section
        aria-label="3D furniture configurator"
        className="mx-auto w-full max-w-[1800px] md:grid md:grid-cols-[minmax(0,1fr)_360px] lg:grid-cols-[minmax(0,1fr)_400px]"
      >

        {/* 3D Viewer */}
        <div className="relative h-[62svh] min-h-[320px] overflow-hidden bg-[#e9e4dc] md:sticky md:top-20 md:h-[calc(100svh-5rem)] md:min-h-[480px]">

          {/* Viewer Label */}
          <div className="pointer-events-none absolute left-4 top-4 z-10 sm:left-7 sm:top-6">
            <span className="border border-black/10 bg-[#fbf9f6]/90 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#444748] backdrop-blur-sm">
              Colour Preview
            </span>
          </div>

          <StudioViewer
            furniture={furniture}
            fabricHex={fabric.hex}
            config={config}
          />
        </div>

        {/* Controls */}
        <aside
          aria-label="Furniture customisation controls"
          className="relative border-t border-black/10 bg-[#fbf9f6] md:border-l md:border-t-0"
        >

          <div className="border-b border-black/10 px-5 py-4 sm:px-7">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
              Customize
            </p>

            <h2 className="mt-1 font-serif text-2xl">
              Make it yours.
            </h2>

            <p className="mt-1 text-xs leading-5 text-[#6b6d69]">
              Your choices update the 3D model live.
            </p>
          </div>

          <StudioControls
            furniture={furniture}
            config={config}
            fabric={fabric}
            onFurnitureChange={handleFurnitureChange}
            onConfigChange={setConfig}
            onFabricChange={setFabric}
          />

          {/* Current Selection */}
          <div className="shrink-0 border-t border-black/10 bg-[#f5f1eb] px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span
                className="h-8 w-8 shrink-0 rounded-full border border-black/10"
                style={{ backgroundColor: fabric.hex }}
                aria-label={`Selected fabric: ${fabric.name}`}
                role="img"
              />

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#6b6d69]">
                  Your design
                </p>

                <p className="truncate text-sm font-medium">
                  {FURNITURE_LABELS[furniture]} · {CONFIG_LABELS[config]} · {fabric.name}
                </p>
                <p className="truncate text-[11px] text-[#6b6d69]">
                  {CONFIG_DIMENSIONS[config]}
                </p>
              </div>
            </div>
          </div>

        </aside>
      </section>
    </main>
  );
}
