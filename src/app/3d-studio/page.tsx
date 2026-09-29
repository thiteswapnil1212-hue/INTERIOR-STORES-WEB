
import type { Metadata } from "next";
import StudioPageClient from "./StudioPageClient";

export const metadata: Metadata = {
  title: "3D Studio",
  description:
    "Explore furniture styles and fabric colours in the Mauli Interior 3D Studio. Visualise custom sofas and furnishing options before you enquire.",
  alternates: {
    canonical: "/3d-studio",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function StudioPage() {
  return <StudioPageClient />;
}