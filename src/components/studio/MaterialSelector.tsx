"use client";

type Material = {
  id: string;
  name: string;
  color: string;
};

type MaterialSelectorProps = {
  selected: string;
  onChange: (material: Material) => void;
};

const materials: Material[] = [
  {
    id: "beige",
    name: "Warm Beige",
    color: "#c8b8a4",
  },
  {
    id: "stone",
    name: "Stone",
    color: "#aaa39a",
  },
  {
    id: "charcoal",
    name: "Charcoal",
    color: "#4b4a46",
  },
  {
    id: "olive",
    name: "Olive",
    color: "#777661",
  },
  {
    id: "terracotta",
    name: "Terracotta",
    color: "#9b6650",
  },
];

export default function MaterialSelector({
  selected,
  onChange,
}: MaterialSelectorProps) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#747878]">
          Fabric
        </p>

        <span className="text-[10px] text-[#8b8d89]">
          {materials.find((item) => item.id === selected)?.name}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {materials.map((material) => {
          const isSelected = selected === material.id;

          return (
            <button
              key={material.id}
              type="button"
              aria-label={material.name}
              title={material.name}
              onClick={() => onChange(material)}
              className={`h-9 w-9 rounded-full border-2 transition-transform duration-200 hover:scale-110 ${
                isSelected
                  ? "border-[#1b1c1a] ring-2 ring-[#1b1c1a]/10"
                  : "border-[#747878]/20"
              }`}
              style={{ backgroundColor: material.color }}
            />
          );
        })}
      </div>
    </div>
  );
}