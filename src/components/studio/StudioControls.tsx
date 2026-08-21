import React from "react";
import { FurnitureSelector } from "./FurnitureSelector";
import { MaterialSelector } from "./MaterialSelector";
import { FurnitureType, ConfigType, FabricType, FABRICS } from "../../app/3d-studio/page";

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
            {[
              { id: "2_seater", label: "2 Seater" },
              { id: "3_seater", label: "3 Seater" },
              { id: "l_shape", label: "L-Shape" },
              { id: "custom", label: "Custom" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => onConfigChange(opt.id as ConfigType)}
                className={`py-3 px-2 text-sm text-center border transition-all duration-300 ${
                  config === opt.id
                    ? "border-[#805533] bg-[#805533] text-white font-medium shadow-md"
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

      <div className="p-6 lg:p-8 bg-[#fbf9f6] sticky bottom-0 border-t border-black/10 flex-none">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-[#1b1c1a]/60 uppercase tracking-widest">Total Estimate</p>
            <p className="text-xl font-serif mt-1">From £2,450</p>
          </div>
        </div>
        <button className="w-full py-4 bg-[#1b1c1a] text-white text-sm font-medium tracking-wide uppercase hover:bg-[#805533] transition-colors duration-300">
          Enquire Now
        </button>
      </div>
    </div>
  );
}