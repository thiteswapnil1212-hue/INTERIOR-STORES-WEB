"use client";

import Link from "next/link";
import React from "react";
import { FurnitureSelector } from "./FurnitureSelector";
import { MaterialSelector } from "./MaterialSelector";
import { FurnitureType, ConfigType, FabricType, FABRICS, FURNITURE_LABELS, CONFIG_OPTIONS, CONFIG_LABELS, CONFIG_DIMENSIONS } from "./types";

interface StudioControlsProps {
  furniture: FurnitureType;
  config: ConfigType;
  fabric: FabricType;
  onFurnitureChange: (f: FurnitureType) => void;
  onConfigChange: (c: ConfigType) => void;
  onFabricChange: (f: FabricType) => void;
}

const WHATSAPP_NUMBER = "919921260926";

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
  const dimensions = CONFIG_DIMENSIONS[config];

  const enquiryParams = new URLSearchParams({
    service: "Custom Sofas",
    note: `3D Studio selection: ${furnitureLabel}, ${configLabel}, ${fabric.name} fabric`,
  });

  const whatsappMessage = encodeURIComponent(
    `Hi Mauli Interior! I designed this in your 3D Studio:\n\n\u2022 ${furnitureLabel} \u2014 ${configLabel}\n\u2022 Fabric: ${fabric.name}\n\u2022 Typical size: ${dimensions}\n\nPlease share a quote.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col divide-y divide-black/10">
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

          <div className="border border-black/10 bg-[#f5f1eb] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#805533]">
              Typical size
            </p>
            <p className="mt-1 text-sm font-medium text-[#1b1c1a]">{dimensions}</p>
            <p className="mt-1 text-[11px] leading-4 text-[#8b8d89]">
              Final measurements are taken at your home before we build.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8 space-y-6 flex-1">
        <MaterialSelector fabrics={FABRICS} selected={fabric} onSelect={onFabricChange} />
      </div>

      {/* Enquire CTA */}
      <div className="p-6 lg:p-8 bg-[#fbf9f6] sticky bottom-0 border-t border-black/10 flex-none">
        <p className="text-[10px] uppercase tracking-widest text-[#8b8d89] mb-3">
          Happy with your design? Send it to us for a quote.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 bg-[#1b1c1a] text-white text-[10px] font-semibold tracking-[0.16em] uppercase text-center hover:bg-[#805533] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
        >
          Send Design on WhatsApp
        </a>
        <Link
          href={`/contact?${enquiryParams.toString()}`}
          className="mt-3 block text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b8d89] transition-colors hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
        >
          Or enquire via the contact form
        </Link>
      </div>
    </div>
  );
}