import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import FeaturedWork from "../components/home/FeaturedWork";
import WhyMauli from "../components/home/WhyMauli";
import FinalCTA from "../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
  description:
    "Custom sofas, curtains, beds, mattresses, wall panels and home furnishing solutions crafted by Mauli Interior for homes across Pune, PCMC, Bhosari and Moshi.",
  keywords: [
    "custom sofas in Pune",
    "home furnishing Pune",
    "custom furniture Pune",
    "sofa manufacturer Pune",
    "curtains Pune",
    "bed mattresses Pune",
    "wall panels Pune",
    "interior furnishing PCMC",
    "Mauli Interior",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    description:
      "Custom sofas, curtains, beds and furnishing solutions designed around your home, comfort and lifestyle.",
    url: "/",
    siteName: "Mauli Interior",
    type: "website",
    images: [
      {
        url: "/images/seo/mauli-interior-og.jpg",
        width: 1200,
        height: 630,
        alt: "Custom sofa and home furnishing by Mauli Interior in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    description:
      "Custom sofas, curtains, beds and furnishing solutions for homes across Pune.",
    images: ["/images/seo/mauli-interior-og.jpg"],
  },
};

const trustPoints = [
  "Custom-made furniture",
  "Home visit available",
  "Pune & PCMC service",
];

const quickServices = [
  {
    title: "Custom Sofas",
    description:
      "Made-to-measure sofas designed around your room, comfort and style.",
    href: "/services/sofas",
    image: "/images/home/services/sofa.jpg",
  },
  {
    title: "Curtains",
    description:
      "Curtains selected and fitted to complement your space.",
    href: "/services/curtains",
    image: "/images/home/services/curtains.jpg",
  },
  {
    title: "Beds & Panels",
    description:
      "Beds and decorative panels built to bring warmth and character to bedrooms.",
    href: "/services/beds",
    image: "/images/home/services/bed.jpg",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbf9f6] text-[#1b1c1a]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        aria-labelledby="hero-heading"
        className="relative border-b border-black/5"
      >
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-10 sm:px-8 md:grid-cols-12 md:gap-8 md:px-12 lg:px-16 lg:py-16"
        >
          {/* HERO CONTENT */}

          <div className="order-2 flex flex-col md:order-1 md:col-span-5 lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#805533]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                Home Interiors & Furnishing
              </p>
            </div>

            <h1
              id="hero-heading"
              className="max-w-xl font-serif text-[3.3rem] leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[5.2rem]"
            >
              Interiors made
              <br />
              <span className="text-[#805533]">for your home.</span>
            </h1>

            <p className="mt-7 max-w-lg text-[15px] leading-7 text-[#555856] md:text-base">
              Thoughtfully crafted sofas, curtains, beds and furnishing
              solutions designed around your space, comfort and everyday life.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services/sofas"
                className="inline-flex min-h-12 items-center justify-center bg-[#1b1c1a] px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
              >
                Explore Our Work
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-[#1b1c1a]/20 px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-all duration-300 hover:border-[#805533] hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
              >
                Get a Quote
              </Link>
            </div>

            {/* TRUST POINTS */}

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 border-t border-black/10 pt-6 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 text-xs leading-5 text-[#555856]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#805533]"
                  />

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="order-1 md:order-2 md:col-span-7 lg:col-span-7">
            <div className="group relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] md:aspect-[4/5] lg:h-[76vh] lg:aspect-auto">
              <Image
                src="/images/home/hero.jpg"
                alt="Elegant custom-furnished living room designed by Mauli Interior in Pune"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 900px"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              />

              {/* Image overlay */}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              />

              {/* Location badge */}

              <div className="absolute bottom-5 left-5 bg-white/95 px-5 py-4 backdrop-blur-sm">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                  Serving
                </p>

                <p className="mt-1 text-sm font-medium text-[#1b1c1a]">
                  Pune · PCMC · Bhosari · Moshi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / BRAND STATEMENT
      ====================================================== */}

      <section className="border-b border-black/5 bg-[#f4f0eb]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 md:px-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                Made for living
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Good interiors are not just about how a room looks.
                <span className="text-[#805533]">
                  {" "}
                  They are about how it feels to live in it.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        aria-labelledby="services-heading"
        className="border-b border-black/5"
      >
        <div className="mx-auto max-w-[1600px] px-6 pt-16 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-2 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                What we make
              </p>

              <h2
                id="services-heading"
                className="font-serif text-4xl tracking-tight sm:text-5xl"
              >
                Furnishing for every room.
              </h2>
            </div>

            <Link
              href="/services"
              className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533] transition-colors hover:text-[#1b1c1a] sm:block"
            >
              View all services →
            </Link>
          </div>
        </div>

        <ServicesSection />
      </section>

      {/* =====================================================
          QUICK SERVICE DISCOVERY
      ====================================================== */}

      <section className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {quickServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e3dd]">
                  <Image
                    src={service.image}
                    alt={`${service.title} by Mauli Interior`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="border-b border-black/10 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl">
                      {service.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#656765]">
                    {service.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section aria-label="About Mauli Interior">
        <AboutSection />
      </section>

      {/* =====================================================
          FEATURED WORK
      ====================================================== */}

      <section aria-label="Featured interior projects">
        <FeaturedWork />
      </section>

      {/* =====================================================
          3D STUDIO CTA
      ====================================================== */}

      <section className="bg-[#1b1c1a] text-white">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 sm:px-8 md:grid-cols-12 md:px-12 md:py-20 lg:px-16">
          <div className="md:col-span-8">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a47e]">
              Design before you decide
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              See your furniture ideas come together in our 3D Studio.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
              Explore different furniture configurations, materials and
              finishes before finalising the design for your home.
            </p>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <Link
              href="/3d-studio"
              className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1b1c1a]"
            >
              Explore 3D Studio
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY MAULI
      ====================================================== */}

      <section aria-label="Why choose Mauli Interior">
        <WhyMauli />
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section aria-label="Contact Mauli Interior">
        <FinalCTA />
      </section>
    </main>
  );
}