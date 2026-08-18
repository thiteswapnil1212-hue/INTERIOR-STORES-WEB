import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Mauli Interior | Home Interior & Custom Furnishing in Pune",
    template: "%s | Mauli Interior",
  },
  description:
    "Mauli Interior provides custom sofas, curtains, beds, panels, mattresses and home furnishing services in Pune, PCMC, Moshi and Bhosari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fbf9f6] text-[#1b1c1a] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}