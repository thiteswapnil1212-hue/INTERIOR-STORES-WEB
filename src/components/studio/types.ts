export type FurnitureType = "sofa" | "bed" | "curtains" | "wall_panel";

export type ConfigType =
  | "2_seater"
  | "3_seater"
  | "l_shape"
  | "custom"
  | "single"
  | "double"
  | "queen"
  | "king"
  | "sheer"
  | "blackout"
  | "linen"
  | "panel_classic"
  | "panel_modern"
  | "panel_full";

export type FabricType = {
  id: string;
  name: string;
  hex: string;
};

export const FABRICS: FabricType[] = [
  { id: "beige", name: "Beige", hex: "#E8E2D5" },
  { id: "stone", name: "Stone", hex: "#D2CFC4" },
  { id: "ivory", name: "Ivory", hex: "#F4F1E8" },
  { id: "greige", name: "Greige", hex: "#B9B2A4" },
  { id: "charcoal", name: "Charcoal", hex: "#3A3A3A" },
  { id: "olive", name: "Olive", hex: "#5E6148" },
  { id: "sage", name: "Sage", hex: "#8A8B6C" },
  { id: "dusty-blue", name: "Dusty Blue", hex: "#6E7F8D" },
  { id: "terracotta", name: "Terracotta", hex: "#A75D42" },
  { id: "mustard", name: "Mustard", hex: "#C99A3C" },
  { id: "blush", name: "Blush", hex: "#D9B8A6" },
  { id: "forest", name: "Forest", hex: "#2F4A3C" },
];

export const FURNITURE_LABELS: Record<FurnitureType, string> = {
  sofa: "Sofa",
  bed: "Bed",
  curtains: "Curtains",
  wall_panel: "Wall Panel",
};

export const CONFIG_OPTIONS: Record<
  FurnitureType,
  { id: ConfigType; label: string }[]
> = {
  sofa: [
    { id: "2_seater", label: "2 Seater" },
    { id: "3_seater", label: "3 Seater" },
    { id: "l_shape", label: "L-Shape" },
    { id: "custom", label: "Custom Size" },
  ],
  bed: [
    { id: "single", label: "Single" },
    { id: "double", label: "Double" },
    { id: "queen", label: "Queen" },
    { id: "king", label: "King" },
  ],
  curtains: [
    { id: "sheer", label: "Sheer" },
    { id: "blackout", label: "Blackout" },
    { id: "linen", label: "Linen" },
  ],
  wall_panel: [
    { id: "panel_classic", label: "Classic" },
    { id: "panel_modern", label: "Modern Slats" },
    { id: "panel_full", label: "Full Wall" },
  ],
};

export const CONFIG_LABELS: Record<ConfigType, string> = {
  "2_seater": "2 Seater",
  "3_seater": "3 Seater",
  l_shape: "L-Shape",
  custom: "Custom Size",
  single: "Single",
  double: "Double",
  queen: "Queen",
  king: "King",
  sheer: "Sheer",
  blackout: "Blackout",
  linen: "Linen",
  panel_classic: "Classic Panels",
  panel_modern: "Modern Slats",
  panel_full: "Full Wall",
};

export const DEFAULT_CONFIG: Record<FurnitureType, ConfigType> = {
  sofa: "3_seater",
  bed: "queen",
  curtains: "blackout",
  wall_panel: "panel_classic",
};

/** Typical sizes shown to help customers judge fit. Final measurements are taken at home. */
export const CONFIG_DIMENSIONS: Record<ConfigType, string> = {
  "2_seater": "5 ft wide \u00D7 2.8 ft deep",
  "3_seater": "6.5 ft wide \u00D7 3 ft deep",
  l_shape: "8 ft \u00D7 5.5 ft, L-shape",
  custom: "Made to your measurements",
  single: "3 ft \u00D7 6.25 ft",
  double: "4.5 ft \u00D7 6.25 ft",
  queen: "5 ft \u00D7 6.5 ft",
  king: "6 ft \u00D7 6.5 ft",
  sheer: "Made to your window size",
  blackout: "Made to your window size",
  linen: "Made to your window size",
  panel_classic: "Made to your wall size",
  panel_modern: "Made to your wall size",
  panel_full: "Made to your wall size",
};
