import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://mauliinterior.com"),

  title: {
    default: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    template: "%s | Mauli Interior",
  },

  description:
    "Mauli Interior offers custom sofas, curtains, beds, mattresses, cushions and wall panels in Pune, PCMC, Bhosari and Moshi. Home visits available across Pune.",

  keywords: [
    "Mauli Interior",
    "custom sofas in Pune",
    "sofa manufacturer in Pune",
    "custom sofa Bhosari",
    "custom furniture Pune",
    "home furnishing Pune",
    "curtains Pune",
    "custom beds Pune",
    "mattresses Pune",
    "cushions Pune",
    "wall panels Pune",
    "bed panels Pune",
    "interior furnishing Pune",
    "furniture Bhosari",
    "furniture Moshi",
    "home furnishing PCMC",
  ],

  authors: [
    {
      name: "Mauli Interior",
    },
  ],

  creator: "Mauli Interior",
  publisher: "Mauli Interior",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mauli Interior",
    title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    description:
      "Custom sofas, curtains, beds, mattresses, cushions and wall panels in Pune, PCMC, Bhosari and Moshi.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    description:
      "Custom sofas and home furnishing services across Pune, PCMC, Bhosari and Moshi.",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="bg-[#fbf9f6] text-[#1b1c1a] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}