import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const siteUrl = "https://mauliinterior-stores-web.vercel.app";

const siteName = "Mauli Interior";

const defaultTitle =
  "Mauli Interior | Custom Sofas & Home Furnishing in Pune";

const description =
  "Mauli Interior creates custom sofas, curtains, beds, mattresses, cushions and wall panels for homes across Pune, PCMC, Bhosari and Moshi.";

const ogImage = "/images/seo/mauli-interior-og.jpg";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbf9f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | Mauli Interior",
  },

  description,

  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  category: "Home Furnishing",

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
    canonical: "/",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Mauli Interior - Custom Furniture and Home Furnishing in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: [ogImage],
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      inLanguage: "en-IN",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      url: siteUrl,
      description,
      image: `${siteUrl}${ogImage}`,
      areaServed: [
        {
          "@type": "City",
          name: "Pune",
        },
        {
          "@type": "Place",
          name: "Pimpri-Chinchwad",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Furnishing Services",
        itemListElement: [
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
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="bg-[#fbf9f6] text-[#1b1c1a] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        {children}
      </body>
    </html>
  );
}