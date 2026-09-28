import React from "react";
import { FabricType } from "./types";

interface MaterialSelectorProps {
  fabrics: FabricType[];
  selected: FabricType;
  onSelect: (fabric: FabricType) => void;
}

export function MaterialSelector({ fabrics, selected, onSelect }: MaterialSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <h3 className="text-[11px] font-semibold tracking-[0.15em] text-[#1b1c1a]/60 uppercase">
          Fabric Colour
        </h3>
        <span className="text-sm font-medium text-[#805533]">{selected.name}</span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {fabrics.map((fabric) => (
          <button
            key={fabric.id}
            type="button"
            onClick={() => onSelect(fabric)}
            aria-label={`Select ${fabric.name} fabric`}
            aria-pressed={selected.id === fabric.id}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
              selected.id === fabric.id
                ? "ring-2 ring-offset-2 ring-[#805533] scale-110"
                : "ring-1 ring-black/10 hover:scale-105 hover:ring-black/30"
            }`}
            style={{ backgroundColor: fabric.hex }}
            title={fabric.name}
          >
            {selected.id === fabric.id && (
              <span className="w-2 h-2 rounded-full bg-white/80 shadow-sm" aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}