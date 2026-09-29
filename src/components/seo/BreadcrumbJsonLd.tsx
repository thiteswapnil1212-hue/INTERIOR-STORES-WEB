import type { ReactNode } from "react";

const siteUrl = "https://mauliinterior-stores-web.vercel.app";

type Crumb = {
  name: string;
  path: string;
};

/**
 * Renders BreadcrumbList structured data so search engines
 * understand the page's position in the site hierarchy.
 * No visible output — purely for SEO.
 */
export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }): ReactNode {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
