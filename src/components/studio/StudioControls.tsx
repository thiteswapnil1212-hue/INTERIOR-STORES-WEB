"use client";

import { RotateCcw } from "lucide-react";
import FurnitureSelector from "./FurnitureSelector";
import MaterialSelector from "./MaterialSelector";

type FurnitureType = "sofa" | "bed" | "panel";

type Material = {
  id: string;
  name: string;
  color: string;
};

type StudioControlsProps = {
  furniture: FurnitureType;
  material: string;
  onFurnitureChange: (type: FurnitureType) => void;
  onMaterialChange: (material: Material) => void;
  onReset: () => void;
};

export default function StudioControls({
  furniture,
  material,
  onFurnitureChange,
  onMaterialChange,
  onReset,
}: StudioControlsProps) {
  return (
    <aside className="flex w-full flex-col border-l border-[#747878]/15 bg-[#fbf9f6] lg:w-[360px]">
      {/* Header */}
      <div className="border-b border-[#747878]/15 px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Customize
            </p>

            <h2 className="mt-2 font-serif text-2xl text-[#1b1c1a]">
              Your space
            </h2>
          </div>

          <button
            type="button"
            onClick={onReset}
            aria-label="Reset customization"
            title="Reset"
            className="flex h-9 w-9 items-center justify-center border border-[#747878]/20 text-[#5c5e5c] transition-colors hover:border-[#1b1c1a] hover:text-[#1b1c1a]"
          >
            <RotateCcw size={15} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex-1 space-y-10 px-6 py-7">
        <FurnitureSelector
          selected={furniture}
          onChange={onFurnitureChange}
        />

        <MaterialSelector
          selected={material}
          onChange={onMaterialChange}
        />

        {/* Configuration */}
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#747878]">
            Configuration
          </p>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="border border-[#1b1c1a] bg-[#f1ede7] px-4 py-3 text-xs text-[#1b1c1a]"
            >
              2 Seater
            </button>

            <button
              type="button"
              className="border border-[#747878]/15 px-4 py-3 text-xs text-[#5c5e5c] transition-colors hover:border-[#747878]/40"
            >
              3 Seater
            </button>

            <button
              type="button"
              className="border border-[#747878]/15 px-4 py-3 text-xs text-[#5c5e5c] transition-colors hover:border-[#747878]/40"
            >
              L-Shape
            </button>

            <button
              type="button"
              className="border border-[#747878]/15 px-4 py-3 text-xs text-[#5c5e5c] transition-colors hover:border-[#747878]/40"
            >
              Custom
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-[#747878]/15 p-6">
        <a
          href="/contact"
          className="group flex w-full items-center justify-between bg-[#1b1c1a] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#805533]"
        >
          <span>Get this design</span>

          <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </aside>
  );
}