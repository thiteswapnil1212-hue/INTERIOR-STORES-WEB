"use client";

type FurnitureType = "sofa" | "bed" | "panel";

type FurnitureSelectorProps = {
  selected: FurnitureType;
  onChange: (type: FurnitureType) => void;
};

const furniture = [
  { id: "sofa", label: "Sofa" },
  { id: "bed", label: "Bed" },
  { id: "panel", label: "Wall Panel" },
] as const;

export default function FurnitureSelector({
  selected,
  onChange,
}: FurnitureSelectorProps) {
  return (
    <div>
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#747878]">
        Furniture
      </p>

      <div className="space-y-2">
        {furniture.map((item) => {
          const isSelected = selected === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`flex w-full items-center justify-between border px-4 py-3 text-left text-sm transition-colors ${
                isSelected
                  ? "border-[#1b1c1a] bg-[#f1ede7] text-[#1b1c1a]"
                  : "border-[#747878]/15 text-[#5c5e5c] hover:border-[#747878]/40"
              }`}
            >
              <span>{item.label}</span>

              {isSelected && (
                <span className="text-[10px] uppercase tracking-wider text-[#805533]">
                  Selected
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}