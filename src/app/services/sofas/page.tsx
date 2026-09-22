
import type { Metadata } from "next";
import Link from "next/link";

import SofaHero from "../../../components/sofa/SofaHero";
import SofaStyles from "../../../components/sofa/SofaStyles";
import SeatingFeatures from "../../../components/sofa/SeatingFeatures";
import IntegratedDesign from "../../../components/sofa/IntegratedDesign";

export const metadata: Metadata = {
  title: "Custom Sofas in Pune | Mauli Interior",
  description:
    "Discover custom sofas by Mauli Interior. Explore sofa styles, seating configurations and fabric finishes for your home. Serving Pune, PCMC, Bhosari and Moshi.",

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
      "Explore custom-made sofas designed around your space, seating needs and preferred finish. Serving Pune and PCMC.",
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
      "Explore custom sofas designed around your space and furnishing preferences.",
    images: ["/images/seo/mauli-interior-og.jpg"],
  },
};

const steps = [
  {
    number: "01",
    title: "Share your idea",
    description:
      "Tell us about your room, seating needs, preferred style and budget.",
  },
  {
    number: "02",
    title: "Discuss the details",
    description:
      "We can discuss suitable configurations, fabric options and measurements.",
  },
  {
    number: "03",
    title: "Plan your sofa",
    description:
      "Finalize the requirements with our team before moving ahead.",
  },
];

export default function SofasPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf9f6] text-[#1b1c1a]">

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1600px] px-5 pt-5 sm:px-8 md:px-12 lg:px-16"
      >
        <ol className="flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-[#77736e] sm:text-[10px]">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li>
            <Link
              href="/services"
              className="transition-colors hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
            >
              Services
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li aria-current="page" className="font-semibold text-[#1b1c1a]">
            Sofas
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section aria-label="Custom sofa introduction">
        <SofaHero />
      </section>

      {/* INTRODUCTION */}
      <section
        aria-labelledby="sofa-intro-heading"
        className="border-y border-black/5 bg-[#f3eee8]"
      >
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-12 md:items-start md:px-12 md:py-24 lg:px-16">

          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#805533]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                Made for your space
              </p>
            </div>

            <p className="mt-5 max-w-xs text-[12px] leading-6 text-[#77736e]">
              Your room. Your preferences. A sofa planned around your needs.
            </p>
          </div>

          <div className="md:col-span-8">
            <h2
              id="sofa-intro-heading"
              className="max-w-4xl font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              A sofa should fit your home,
              <span className="text-[#805533]">
                {" "}
                not the other way around.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[#62625e] sm:text-[15px] sm:leading-8">
              From compact two-seaters to spacious L-shaped sofas, explore
              furniture options shaped around your room, seating requirements
              and preferred finish. We can help you discuss the details before
              you decide.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex min-h-11 items-center gap-4 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
            >
              Discuss your sofa
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SOFA STYLES */}
      <section
        aria-label="Explore sofa styles"
        className="border-b border-black/5"
      >
        <SofaStyles />
      </section>

      {/* SEATING FEATURES */}
      <section
        aria-label="Sofa seating features"
        className="border-b border-black/5"
      >
        <SeatingFeatures />
      </section>

      {/* INTEGRATED DESIGN */}
      <section
        aria-label="Sofa design details"
        className="border-b border-black/5"
      >
        <IntegratedDesign />
      </section>

      {/* HOW TO GET STARTED */}
      <section
        aria-labelledby="sofa-process-heading"
        className="bg-[#f3eee8]"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16">

          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#805533]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                  Getting started
                </p>
              </div>

              <h2
                id="sofa-process-heading"
                className="max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                From your idea to a sofa plan.
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-7 text-[#62625e] md:col-span-5 md:justify-self-end">
              Start with a conversation. Share your requirements and discuss
              the details with the Mauli Interior team.
            </p>
          </div>

          <div className="mt-10 grid gap-0 border-t border-[#747878]/20 sm:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`py-7 sm:py-8 ${
                  index !== 0
                    ? "border-t border-[#747878]/20 sm:border-l sm:border-t-0 sm:pl-6 md:pl-8"
                    : "sm:pr-6 md:pr-8"
                }`}
              >
                <p className="text-[10px] font-semibold tracking-[0.16em] text-[#805533]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-[13px] leading-6 text-[#6b6d69]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION CTA */}
      <section
        aria-labelledby="sofa-cta-heading"
        className="bg-[#1b1c1a] text-white"
      >
        <div className="mx-auto grid max-w-[1400px] gap-9 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-12 md:items-center md:px-12 md:py-24 lg:px-16">

          <div className="md:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#c5a47e]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5a47e]">
                Ready to customise?
              </p>
            </div>

            <h2
              id="sofa-cta-heading"
              className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            >
              Let&apos;s create a sofa that belongs in your home.
            </h2>

            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-white/60 sm:text-[14px]">
              Tell us about your space, preferred style and seating
              requirements. We&apos;ll help you discuss the next steps.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-5 bg-[#fbf9f6] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1b1c1a] transition-colors duration-300 hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1c1a] sm:w-fit"
            >
              Get a Quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/3d-studio"
              className="inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore 3D Studio
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="bg-[#fbf9f6]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-12">

          <Link
            href="/services"
            className="inline-flex min-h-10 w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#805533] transition-colors hover:text-[#1b1c1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
          >
            <span>←</span>
            View all services
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-10 w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#805533] transition-colors hover:text-[#1b1c1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
          >
            Have a question?
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}