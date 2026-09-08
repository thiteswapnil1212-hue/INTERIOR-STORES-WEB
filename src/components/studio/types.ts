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

export type FinishType = {
  id: string;
  name: string;
  hex: string;
};