const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": "https://mauliinterior-stores-web.vercel.app/#business",
  name: "Mauli Interior",
  description:
    "Mauli Interior creates custom sofas, curtains, beds, mattresses, cushions and wall panels for homes across Pune, PCMC, Bhosari and Moshi.",
  url: "https://mauliinterior-stores-web.vercel.app/",
  telephone: "+91 99212 60926",
  email: "thiteswapnil1212@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Godown Chowk, Alankapuram Road",
    addressLocality: "Bhosari, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411039",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.64761,
    longitude: 73.85102,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Pimpri-Chinchwad" },
    { "@type": "Place", name: "Bhosari" },
    { "@type": "Place", name: "Moshi" },
    { "@type": "Place", name: "Wakad" },
    { "@type": "Place", name: "Hinjawadi" },
    { "@type": "Place", name: "Pimpri" },
    { "@type": "Place", name: "Chinchwad" },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Sofas" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Curtains" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Beds & Mattresses" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Wall & Bed Panels" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cushions" } },
  ],
};

export default function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}
