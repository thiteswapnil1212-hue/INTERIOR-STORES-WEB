import type { Metadata } from "next";
import Link from "next/link";

import SofaHero from "../../../components/sofa/SofaHero";
import SofaStyles from "../../../components/sofa/SofaStyles";
import SeatingFeatures from "../../../components/sofa/SeatingFeatures";
import IntegratedDesign from "../../../components/sofa/IntegratedDesign";

export const metadata: Metadata = {
  title: "Custom Sofas in Pune | Mauli Interior",
  description:
    "Explore custom-made sofas by Mauli Interior. Choose your sofa style, seating configuration and finish for homes across Pune, PCMC, Bhosari and Moshi.",

  keywords: [
    "custom sofas Pune",
    "custom sofa Pune",
    "sofa manufacturer Pune",
    "custom furniture Pune",
    "custom sofas PCMC",
    "custom sofas Bhosari",
    "custom sofas Moshi",
    "L shape sofa Pune",
  ],

  alternates: {
    canonical: "/services/sofas",
  },

  openGraph: {
    title: "Custom Sofas in Pune | Mauli Interior",
    description:
      "Custom-made sofas designed around your space, comfort and lifestyle. Serving Pune, PCMC, Bhosari and Moshi.",
    url: "/services/sofas",
    type: "website",
    images: [
      {
        url: "/images/seo/mauli-interior-og.jpg",
        width: 1200,
        height: 630,
        alt: "Custom sofa by Mauli Interior in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Sofas in Pune | Mauli Interior",
    description:
      "Custom-made sofas designed around your space, comfort and lifestyle.",
    images: ["/images/seo/mauli-interior-og.jpg"],
  },
};

export default function SofasPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a]">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1600px] px-6 pt-5 sm:px-8 md:px-12 lg:px-16"
      >
        <ol className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#77736e]">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-[#805533]"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li>
            <Link
              href="/services"
              className="transition-colors hover:text-[#805533]"
            >
              Services
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li className="text-[#1b1c1a]">
            Sofas
          </li>
        </ol>
      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section aria-labelledby="sofa-page-heading">
        <SofaHero />
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section
        aria-labelledby="sofa-intro-heading"
        className="border-y border-black/5 bg-[#f4f0eb]"
      >
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 sm:px-8 md:grid-cols-12 md:items-center md:px-12 md:py-20"
        >
          <div className="md:col-span-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
              Made for your space
            </p>
          </div>

          <div className="md:col-span-8">
            <h2
              id="sofa-intro-heading"
              className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              A sofa should fit your home,
              <span className="text-[#805533]">
                {" "}
                not the other way around.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#62625e] md:text-base">
              From compact two-seaters to spacious L-shaped sofas, we create
              furniture around your room, seating needs and preferred finish.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOFA STYLES
      ====================================================== */}

      <section
        aria-labelledby="sofa-styles-heading"
        className="border-b border-black/5"
      >
        <SofaStyles />
      </section>

      {/* =====================================================
          SEATING FEATURES
      ====================================================== */}

      <section
        aria-labelledby="seating-features-heading"
        className="border-b border-black/5"
      >
        <SeatingFeatures />
      </section>

      {/* =====================================================
          INTEGRATED DESIGN
      ====================================================== */}

      <section
        aria-labelledby="integrated-design-heading"
        className="border-b border-black/5"
      >
        <IntegratedDesign />
      </section>

      {/* =====================================================
          CUSTOMIZATION CTA
      ====================================================== */}

      <section
        aria-labelledby="sofa-cta-heading"
        className="bg-[#1b1c1a] text-white"
      >
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-16 sm:px-8 md:grid-cols-12 md:items-center md:px-12 md:py-20 lg:px-16"
        >
          <div className="md:col-span-8">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a47e]">
              Ready to customise?
            </p>

            <h2
              id="sofa-cta-heading"
              className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
            >
              Let&apos;s create a sofa that belongs in your home.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
              Tell us about your space, preferred style and seating
              requirements. We&apos;ll help you take the next step.
            </p>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-white px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1c1a]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          BACK TO SERVICES
      ====================================================== */}

      <section className="bg-[#fbf9f6]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-8 sm:px-8 md:px-12">
          <Link
            href="/services"
            className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#805533] transition-colors hover:text-[#1b1c1a]"
          >
            ← View all services
          </Link>

          <Link
            href="/3d-studio"
            className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#805533] transition-colors hover:text-[#1b1c1a]"
          >
            Explore 3D Studio →
          </Link>
        </div>
      </section>
    </main>
  );
}