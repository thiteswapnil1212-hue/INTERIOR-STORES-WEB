import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const siteUrl = "https://mauliinterior-stores-web.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbf9f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    template: "%s | Mauli Interior",
  },

  description:
    "Mauli Interior creates custom sofas, curtains, beds, mattresses, cushions and wall panels for homes across Pune, PCMC, Bhosari and Moshi.",

  applicationName: "Mauli Interior",

  authors: [
    {
      name: "Mauli Interior",
    },
  ],

  creator: "Mauli Interior",
  publisher: "Mauli Interior",

  category: "Home Furnishing",

  classification:
    "Custom furniture and home furnishing services in Pune",

  referrer: "origin-when-cross-origin",

  keywords: [
    "Mauli Interior",
    "custom sofas Pune",
    "custom furniture Pune",
    "sofa manufacturer Pune",
    "home furnishing Pune",
    "custom sofas Bhosari",
    "furniture Moshi",
    "curtains Pune",
    "custom beds Pune",
    "wall panels Pune",
    "custom cushions Pune",
  ],

  verification: {
    google: "LcyAJt9BmZijUliyiotG_GuaVDetCm_KdFAMkJ9P2hA",
  },

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

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Mauli Interior",

    title:
      "Mauli Interior | Custom Sofas & Home Furnishing in Pune",

    description:
      "Explore custom sofas, curtains, beds, mattresses, cushions and wall panels by Mauli Interior. Serving Pune, PCMC, Bhosari and Moshi.",

    images: [
      {
        url: "/images/seo/mauli-interior-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mauli Interior - Custom Furniture and Home Furnishing in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mauli Interior | Custom Sofas & Home Furnishing in Pune",

    description:
      "Custom sofas, furniture and home furnishing services across Pune, PCMC, Bhosari and Moshi.",

    images: ["/images/seo/mauli-interior-og.jpg"],
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Mauli Interior",

  url: siteUrl,

  description:
    "Custom sofas, furniture and home furnishing services in Pune, PCMC, Bhosari and Moshi.",

  areaServed: [
    {
      "@type": "City",
      name: "Pune",
    },
    {
      "@type": "Place",
      name: "PCMC",
    },
    {
      "@type": "Place",
      name: "Bhosari",
    },
    {
      "@type": "Place",
      name: "Moshi",
    },
  ],

  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Sofas",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Furniture",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Curtains",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Wall Panels",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Beds",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="bg-[#fbf9f6] text-[#1b1c1a] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}