"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import StudioControls from "../../components/studio/StudioControls";

const StudioViewer = dynamic(() => import("../../components/studio/StudioViewer"), {
  ssr: false,
});

export type FurnitureType = "sofa" | "bed" | "wall_panel";
export type ConfigType = "2_seater" | "3_seater" | "l_shape" | "custom";

export type FabricType = {
  id: string;
  name: string;
  hex: string;
};

export const FABRICS: FabricType[] = [
  { id: "beige", name: "Beige", hex: "#E8E2D5" },
  { id: "stone", name: "Stone", hex: "#D2CFC4" },
  { id: "charcoal", name: "Charcoal", hex: "#3A3A3A" },
  { id: "olive", name: "Olive", hex: "#5E6148" },
  { id: "terracotta", name: "Terracotta", hex: "#A75D42" },
];

export default function StudioPage() {
  const [furniture, setFurniture] = useState<FurnitureType>("sofa");
  const [config, setConfig] = useState<ConfigType>("2_seater");
  const [fabric, setFabric] = useState<FabricType>(FABRICS[0]);

  return (
    <div className="h-[100dvh] pt-[80px] w-full flex flex-col bg-[#fbf9f6] text-[#1b1c1a] overflow-hidden selection:bg-[#805533] selection:text-white">
      {/* Top Section */}
      <header className="flex-none px-6 py-5 border-b border-black/10 shrink-0 bg-[#fbf9f6] z-10 shadow-sm">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533] mb-2">
            Mauli 3D Studio
          </p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-tight mb-2">
           Bring your vision to life..
          </h1>
          <p className="text-sm text-[#1b1c1a]/70 max-w-lg">
            Explore premium furniture, discover refined fabrics, and bring your vision to life in an immersive 3D experience.
          </p>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden max-w-[1600px] mx-auto w-full">
        
        {/* 3D Viewer Area (Left, 70-75%) */}
        <div className="flex-1 relative lg:w-[75%] min-h-[600px] bg-[#e9e4dc]">
          <StudioViewer furniture={furniture} fabricHex={fabric.hex} config={config} />
        </div>

        {/* Customization Panel (Right, 25-30%) */}
        <aside className="w-full lg:w-[30%] lg:min-w-[340px] lg:max-w-[400px] bg-[#fbf9f6] border-t lg:border-t-0 lg:border-l border-black/10 overflow-y-auto flex flex-col custom-scrollbar shadow-[-10px_0_30px_rgba(0,0,0,0.03)] z-10 relative">
          <StudioControls
            furniture={furniture}
            config={config}
            fabric={fabric}
            onFurnitureChange={setFurniture}
            onConfigChange={setConfig}
            onFabricChange={setFabric}
          />
        </aside>
      </main>
    </div>
  );
}