import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Mauli Interior",
  description:
    "Explore mattresses, pillows, sofas, bed panels, decorative door panels and curtains by Mauli Interior in Pune and PCMC.",
  keywords: [
    "mattresses Pune",
    "pillows Pune",
    "sofas Pune",
    "bed panels Pune",
    "headboards Pune",
    "decorative door panels Pune",
    "curtains Pune",
    "home furnishing Pune",
    "Mauli Interior",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Mauli Interior",
    description:
      "Explore mattresses, pillows, sofas, bed panels, decorative door panels and curtains by Mauli Interior.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/seo/mauli-interior-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mauli Interior products",
      },
    ],
  },
};

const products = [
  {
    number: "01",
    category: "Sleep & Comfort",
    title: "Mattresses",
    description:
      "Comfort-focused mattresses selected for restful and comfortable everyday sleep.",
    image: "/images/home/featured-beds.jpg",
    alt: "Mattress and bedroom furnishing by Mauli Interior",
    materials: ["Memory Foam", "PU Foam", "Coir", "Natural Latex", "Pocket Spring"],
  },
  {
    number: "02",
    category: "Sleep & Comfort",
    title: "Pillows",
    description:
      "Comfortable pillows selected to complement your sleeping and resting space.",
    image: "/images/home/featured-beds.jpg",
    alt: "Pillows and bedroom furnishing by Mauli Interior",
    materials: ["Microfiber", "Memory Foam", "Natural Latex", "Hollow Siliconized Fiber", "Cotton"],
  },
  {
    number: "03",
    category: "Living",
    title: "Sofas",
    description:
      "Custom sofas designed around your space, comfort and lifestyle.",
    image: "/images/sofas/sofa-hero.jpg",
    alt: "Custom sofa by Mauli Interior",
    materials: ["Cotton", "Linen", "Velvet", "Leatherette", "Polyester Blends"],
  },
  {
    number: "04",
    category: "Bedroom",
    title: "Bed Panels & Headboards",
    description:
      "Bedroom panels and headboards that add warmth, texture and character.",
    image: "/images/home/featured-beds.jpg",
    alt: "Bed panels and headboards by Mauli Interior",
    materials: ["Fabric Upholstered", "Velvet Tufted", "Leatherette", "Wooden Panels"],
  },
  {
    number: "05",
    category: "Interior Details",
    title: "Decorative Door Panels",
    description:
      "Decorative panels that bring a refined and distinctive finish to interiors.",
    image: "/images/home/hero.jpg",
    alt: "Interior furnishing and decorative panels by Mauli Interior",
    materials: ["Fluted Panels", "Designer Laminates", "PU Mouldings", "Veneer Finish"],
  },
  {
    number: "06",
    category: "Windows & Furnishing",
    title: "Curtains",
    description:
      "Curtains selected and fitted to complete the look and feel of your space.",
    image: "/images/home/featured-curtains.jpg",
    alt: "Curtains by Mauli Interior",
    materials: ["Sheer", "Linen", "Cotton", "Blackout", "Velvet"],
  },
];

const benefits = [
  "Products selected around your space",
  "Home furnishing guidance",
  "Pune & PCMC service",
  "Made-to-measure solutions where required",
];

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-[#fbf9f6] text-[#1b1c1a]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[#805533]"
                />

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                  Our Products
                </p>
              </div>

              <h1 className="max-w-5xl font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.045em]">
                Products chosen
                <br />
                <span className="text-[#805533]">
                  for better living.
                </span>
              </h1>
            </div>

            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#656765] sm:text-base">
                From everyday comfort to finishing details, explore products
                selected to bring comfort, character and warmth to your space.
              </p>

              <Link
                href="#product-range"
                className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-colors duration-300 hover:text-[#805533]"
              >
                Explore Products
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="border-b border-black/5 bg-[#f4f0eb]">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                Comfort · Craft · Detail
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                The details that make
                <span className="text-[#805533]">
                  {" "}
                  a home feel yours.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#656765]">
                Whether you are refreshing one room or furnishing a complete
                space, we help you find products that work together with your
                home and everyday needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT RANGE
      ====================================================== */}

      <section
        id="product-range"
        aria-labelledby="product-grid-heading"
        className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24"
      >
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
              Explore
            </p>

            <h2
              id="product-grid-heading"
              className="font-serif text-4xl tracking-tight sm:text-5xl"
            >
              Our product range
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#656765] md:col-span-5 md:justify-self-end">
            Looking for a specific product or furnishing requirement?
            Tell us what you need and we&apos;ll help you find the right
            option.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group min-w-0"
            >
              {/* IMAGE */}

              <Link
                href={`/contact?product=${encodeURIComponent(product.title)}`}
                aria-label={`Enquire about ${product.title}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e3dd]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none md:group-hover:scale-[1.045]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-45"
                  />

                  {/* Product number */}

                  <div className="absolute left-4 top-4 bg-white/95 px-3 py-2 backdrop-blur-sm">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                      {product.number}
                    </span>
                  </div>

                  {/* Category */}

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#1b1c1a]/85 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Arrow */}

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </Link>

              {/* CONTENT */}

              <div className="border-b border-black/10 py-5">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-serif text-2xl leading-tight sm:text-[1.7rem]">
                    {product.title}
                  </h3>

                  <ArrowRight
                    aria-hidden="true"
                    className="mt-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#656765]">
                  {product.description}
                </p>

                <div className="mt-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                    Popular materials
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#555856]">
                    {product.materials.join(" · ")}
                  </p>
                </div>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-colors duration-300 hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
                >
                  Enquire About {product.title}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHY MAULI PRODUCTS
      ====================================================== */}

      <section className="border-y border-black/5 bg-[#f4f0eb]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                Why Mauli
              </p>

              <h2 className="max-w-lg font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                More than just
                <span className="text-[#805533]">
                  {" "}
                  products.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#656765]">
                We understand that furnishing is not only about buying a
                product. It is about finding something that works with your
                room, your comfort and the way you live.
              </p>
            </div>

            <div className="grid gap-0 border-t border-black/10 md:col-span-7 md:border-t-0">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-5 border-b border-black/10 py-5 first:border-t md:first:border-t"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#805533]/30">
                    <Check
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-[#805533]"
                    />
                  </span>

                  <span className="text-sm text-[#555856]">
                    {benefit}
                  </span>

                  <span className="ml-auto text-[9px] font-semibold uppercase tracking-[0.16em] text-[#aaa39b]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE AREA
      ====================================================== */}

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 md:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                Serving
              </p>

              <p className="mt-1 text-sm text-[#555856]">
                Pune · PCMC · Bhosari · Moshi
              </p>
            </div>

            <p className="max-w-lg text-sm leading-6 text-[#656765]">
              Have a requirement for your home or project? Talk to us about
              your product needs.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#1b1c1a] text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a487]">
                Have something in mind?
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Let&apos;s find the right product for your space.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                Tell us what you are looking for and our team can help you
                understand the available options for your space.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-white px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-colors duration-300 hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1c1a]"
              >
                Get a Quote

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}