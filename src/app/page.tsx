import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import FeaturedWork from "../components/home/FeaturedWork";
import WhyMauli from "../components/home/WhyMauli";
import FinalCTA from "../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Custom Sofas & Home Furnishing in Pune",
  description:
    "Discover custom sofas, curtains, beds and home furnishing solutions by Mauli Interior. Crafted for homes across Pune, PCMC, Bhosari and Moshi.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mauli Interior | Custom Sofas & Home Furnishing in Pune",
    description:
      "Thoughtfully crafted sofas, curtains, beds and furnishing solutions designed around your home, comfort and lifestyle.",
    url: "/",
    images: [
      {
        url: "/images/seo/mauli-interior-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mauli Interior custom home interiors in Pune",
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

export default function Home() {
  return (
    <main className="bg-[#fbf9f6] text-[#1b1c1a]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        aria-labelledby="hero-heading"
        className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-12 md:gap-8 md:px-16 md:py-20"
      >
        {/* Content */}

        <div className="order-2 flex flex-col gap-7 md:order-1 md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
            Home Interiors &amp; Furnishing
          </p>

          <h1
            id="hero-heading"
            className="font-serif text-5xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl"
          >
            Interiors made
            <br />
            for your home.
          </h1>

          <p className="max-w-lg text-base leading-7 text-[#444748] md:text-lg">
            Thoughtfully crafted sofas, curtains, beds and furnishing
            solutions designed around your space, comfort and lifestyle.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/sofas"
              className="bg-[#000000] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#30312f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
            >
              Explore Our Work
            </Link>

            <Link
              href="/contact"
              className="border border-[#1b1c1a]/20 px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#1b1c1a] transition-colors hover:bg-[#1b1c1a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Hero Image */}

        <div className="order-1 md:order-2 md:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-[70vh]">
            <Image
              src="/images/home/hero.jpg"
              alt="Elegant custom-furnished living room designed by Mauli Interior in Pune"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section aria-label="Mauli Interior services">
        <ServicesSection />
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