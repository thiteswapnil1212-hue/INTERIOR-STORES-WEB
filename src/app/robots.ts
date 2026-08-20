import type { MetadataRoute } from "next";

const siteUrl = "https://mauliinterior-stores-web.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}