"use client";

import Link from "next/link";
import React from "react";
import { FurnitureSelector } from "./FurnitureSelector";
import { MaterialSelector } from "./MaterialSelector";
import { FurnitureType, ConfigType, FabricType, FABRICS } from "./types";

interface StudioControlsProps {
  furniture: FurnitureType;
  config: ConfigType;
  fabric: FabricType;
  onFurnitureChange: (f: FurnitureType) => void;
  onConfigChange: (c: ConfigType) => void;
  onFabricChange: (f: FabricType) => void;
}

export default function StudioControls({
  furniture,
  config,
  fabric,
  onFurnitureChange,
  onConfigChange,
  onFabricChange,
}: StudioControlsProps) {
  const furnitureLabel =
    furniture === "wall_panel"
      ? "Wall Panel"
      : furniture === "bed"
        ? "Bed"
        : "Sofa";

  const configLabel: Record<ConfigType, string> = {
    "2_seater": "2 Seater",
    "3_seater": "3 Seater",
    l_shape: "L-Shape",
    custom: "Custom",
  };

  const enquiryParams = new URLSearchParams({
    service: "Custom Sofas",
    note: `3D Studio selection: ${furnitureLabel}, ${configLabel[config]}, ${fabric.name} fabric`,
  });

  return (
    <div className="flex flex-col h-full divide-y divide-black/10">
      <div className="p-6 lg:p-8 space-y-6 flex-none">
        <FurnitureSelector selected={furniture} onSelect={onFurnitureChange} />
      </div>

      {furniture === "sofa" && (
        <div className="p-6 lg:p-8 space-y-6 flex-none">
          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold tracking-[0.15em] text-[#1b1c1a]/60 uppercase">
              Configuration
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  { id: "2_seater", label: "2 Seater" },
                  { id: "3_seater", label: "3 Seater" },
                  { id: "l_shape", label: "L-Shape" },
                  { id: "custom", label: "Custom" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onConfigChange(opt.id)}
                  aria-pressed={config === opt.id}
                  className={`py-3 px-2 text-sm text-center border transition-all duration-300 ${
                    config === opt.id
                      ? "border-[#805533] bg-[#805533] text-white font-medium"
                      : "border-black/10 bg-white text-[#1b1c1a] hover:border-black/30 hover:bg-black/5"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="p-6 lg:p-8 space-y-6 flex-1">
        <MaterialSelector fabrics={FABRICS} selected={fabric} onSelect={onFabricChange} />
      </div>

      {/* Enquire CTA */}
      <div className="p-6 lg:p-8 bg-[#fbf9f6] sticky bottom-0 border-t border-black/10 flex-none">
        <p className="text-[10px] uppercase tracking-widest text-[#8b8d89] mb-3">
          Like what you see? Send us an enquiry.
        </p>
        <Link
          href={`/contact?${enquiryParams.toString()}`}
          className="block w-full py-4 bg-[#1b1c1a] text-white text-[10px] font-semibold tracking-[0.16em] uppercase text-center hover:bg-[#805533] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}