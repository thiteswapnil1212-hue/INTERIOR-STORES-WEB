"use client";

import { useState } from "react";
import StudioViewer from "../../components/studio/StudioViewer";
import StudioControls from "../../components/studio/StudioControls";

type FurnitureType = "sofa" | "bed" | "panel";

type Material = {
  id: string;
  name: string;
  color: string;
};

const DEFAULT_FURNITURE: FurnitureType = "sofa";
const DEFAULT_MATERIAL = "beige";

export default function StudioPage() {
  const [furniture, setFurniture] =
    useState<FurnitureType>(DEFAULT_FURNITURE);

  const [material, setMaterial] =
    useState(DEFAULT_MATERIAL);

  const handleReset = () => {
    setFurniture(DEFAULT_FURNITURE);
    setMaterial(DEFAULT_MATERIAL);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] pt-20 text-[#1b1c1a]">
      {/* Header */}
      <section className="border-b border-[#747878]/15">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between px-6 py-8 md:px-16 md:py-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Mauli 3D Studio
            </p>

            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Visualise your space.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c5e5c]">
              Explore furniture, materials and configurations before
              bringing your design to life.
            </p>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.14em] text-[#8b8d89] md:block">
            Interactive Interior
          </span>
        </div>
      </section>

      {/* Studio */}
      <section className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
        {/* 3D Viewer */}
        <div className="min-h-[560px] flex-1">
          <StudioViewer />
        </div>

        {/* Controls */}
        <StudioControls
          furniture={furniture}
          material={material}
          onFurnitureChange={setFurniture}
          onMaterialChange={(selected: Material) =>
            setMaterial(selected.id)
          }
          onReset={handleReset}
        />
      </section>
    </main>
  );
}