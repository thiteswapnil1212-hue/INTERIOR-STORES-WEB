"use client";

import Link from "next/link";
import React from "react";
import { FurnitureSelector } from "./FurnitureSelector";
import { MaterialSelector } from "./MaterialSelector";
import { FurnitureType, ConfigType, FabricType, FABRICS, FURNITURE_LABELS, CONFIG_OPTIONS, CONFIG_LABELS } from "./types";

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
  const furnitureLabel = FURNITURE_LABELS[furniture];
  const configLabel = CONFIG_LABELS[config];

  const enquiryParams = new URLSearchParams({
    service: "Custom Sofas",
    note: `3D Studio selection: ${furnitureLabel}, ${configLabel}, ${fabric.name} fabric`,
  });

  return (
    <div className="flex flex-col h-full divide-y divide-black/10">
      <div className="p-6 lg:p-8 space-y-6 flex-none">
        <FurnitureSelector selected={furniture} onSelect={onFurnitureChange} />
      </div>

      <div className="p-6 lg:p-8 space-y-6 flex-none">
        <div className="space-y-4">
          <h3 className="text-[11px] font-semibold tracking-[0.15em] text-[#1b1c1a]/60 uppercase">
            Configuration
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {CONFIG_OPTIONS[furniture].map((opt) => (
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