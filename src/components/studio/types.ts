export type FurnitureType = "sofa" | "bed" | "wall_panel";

export type ConfigType =
  | "2_seater"
  | "3_seater"
  | "l_shape"
  | "custom";

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