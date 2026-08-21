import React from "react";
import { FurnitureType } from "../../app/3d-studio/page";

interface FurnitureSelectorProps {
  selected: FurnitureType;
  onSelect: (type: FurnitureType) => void;
}

const furnitureOptions: { id: FurnitureType; label: string }[] = [
  { id: "sofa", label: "Sofa" },
  { id: "bed", label: "Bed" },
  { id: "wall_panel", label: "Wall Panel" },
];

export function FurnitureSelector({ selected, onSelect }: FurnitureSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-[11px] font-semibold tracking-[0.15em] text-[#1b1c1a]/60 uppercase">
        Furniture Type
      </h3>
      <div className="flex flex-col gap-2">
        {furnitureOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`px-4 py-3 text-left text-sm transition-all duration-300 border-l-2 ${
              selected === opt.id
                ? "border-[#805533] bg-[#805533]/5 text-[#805533] font-medium"
                : "border-transparent text-[#1b1c1a] bg-white hover:bg-black/5"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}