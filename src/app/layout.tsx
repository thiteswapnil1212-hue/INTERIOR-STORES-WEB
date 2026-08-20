import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const siteUrl = "https://mauliinterior-stores-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    template: "%s | Mauli Interior",
  },

  description:
    "Mauli Interior offers custom sofas, curtains, beds, mattresses, cushions and wall panels in Pune, PCMC, Bhosari and Moshi. Home visits available across Pune.",

  keywords: [
    "Mauli Interior",
    "custom sofas in Pune",
    "custom sofa Pune",
    "sofa manufacturer Pune",
    "sofa manufacturer Bhosari",
    "custom furniture Pune",
    "home furnishing Pune",
    "home furnishing PCMC",
    "curtains Pune",
    "custom beds Pune",
    "mattresses Pune",
    "custom cushions Pune",
    "wall panels Pune",
    "bed panels Pune",
    "furniture Bhosari",
    "furniture Moshi",
  ],

  authors: [
    {
      name: "Mauli Interior",
    },
  ],

  creator: "Mauli Interior",
  publisher: "Mauli Interior",

  applicationName: "Mauli Interior",

  category: "Home Furnishing",

  alternates: {
    canonical: siteUrl,
  },

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
    url: siteUrl,
    locale: "en_IN",
    siteName: "Mauli Interior",

    title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",

    description:
      "Custom sofas, curtains, beds, mattresses, cushions and wall panels for homes across Pune, PCMC, Bhosari and Moshi.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",

    description:
      "Custom sofas and home furnishing services across Pune, PCMC, Bhosari and Moshi.",
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