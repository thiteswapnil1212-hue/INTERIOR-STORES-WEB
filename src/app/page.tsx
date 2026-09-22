
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import FeaturedWork from "../components/home/FeaturedWork";
import WhyMauli from "../components/home/WhyMauli";
import FinalCTA from "../components/home/FinalCTA";

const siteUrl = "https://mauliinterior-stores-web.vercel.app";
const ogImage = "/images/seo/mauli-interior-og.jpg";

const pageTitle =
  "Mauli Interior | Custom Sofas & Home Furnishing in Pune";

const pageDescription =
  "Custom sofas, curtains, beds, mattresses, wall panels and home furnishing solutions crafted by Mauli Interior for homes across Pune, PCMC, Bhosari and Moshi.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

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
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: "Mauli Interior",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Custom sofa and home furnishing by Mauli Interior in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
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
    imageAlt: "Custom sofa furnishing",
  },
  {
    title: "Curtains",
    description:
      "Curtains selected and fitted to complement your space.",
    href: "/services/curtains",
    image: "/images/home/services/curtains.jpg",
    imageAlt: "Curtains for home interiors",
  },
  {
    title: "Beds & Panels",
    description:
      "Beds and decorative panels to bring warmth and character to bedrooms.",
    href: "/services/beds",
    image: "/images/home/services/bed.jpg",
    imageAlt: "Bedroom furnishing and decorative panels",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbf9f6] text-[#1b1c1a]">
      {/* HERO */}

      <section
        aria-labelledby="hero-heading"
        className="relative border-b border-black/5"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-8 sm:px-8 sm:py-12 md:min-h-[calc(100svh-80px)] md:grid-cols-12 md:gap-8 md:px-12 lg:px-16 lg:py-16">
          {/* Hero content */}

          <div className="order-2 flex flex-col md:order-1 md:col-span-5">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#805533] sm:w-10"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533] sm:text-[11px] sm:tracking-[0.2em]">
                Home Interiors & Furnishing
              </p>
            </div>

            <h1
              id="hero-heading"
              className="max-w-xl font-serif text-[clamp(2.8rem,9vw,5.2rem)] leading-[0.98] tracking-[-0.04em]"
            >
              Interiors made
              <br />
              <span className="text-[#805533]">
                for your home.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#555856] sm:mt-7 sm:text-base">
              Thoughtfully crafted sofas, curtains, beds and
              furnishing solutions designed around your space,
              comfort and everyday life.
            </p>

            {/* Main actions */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/project"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#1b1c1a] px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2 sm:px-7"
              >
                Explore Our Work
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#1b1c1a]/20 px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-colors duration-300 hover:border-[#805533] hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2 sm:px-7"
              >
                Get a Quote
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* Trust points */}

            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-black/10 pt-5 sm:mt-10 sm:grid-cols-3 sm:gap-2 sm:pt-6">
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

          {/* Hero image */}

          <div className="order-1 min-w-0 md:order-2 md:col-span-7">
            <div className="group relative aspect-[4/3] w-full overflow-hidden bg-[#e8e3dd] sm:aspect-[5/4] md:aspect-[4/5] lg:h-[76vh] lg:aspect-auto">
              <Image
                src="/images/home/hero.jpg"
                alt="Living room with home furnishing by Mauli Interior"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 900px"
                className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none md:group-hover:scale-[1.025]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
              />

              {/* Service area badge */}

              <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] bg-white/95 px-4 py-3 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:px-5 sm:py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                  Serving
                </p>

                <p className="mt-1 text-xs font-medium leading-5 text-[#1b1c1a] sm:text-sm">
                  Pune · PCMC · Bhosari · Moshi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}

      <section className="border-b border-black/5 bg-[#f4f0eb]">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">
          <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                Made for living
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Good interiors are not just about how a room
                looks.
                <span className="text-[#805533]">
                  {" "}
                  They are about how it feels to live in it.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        aria-labelledby="services-heading"
        className="border-b border-black/5"
      >
        <div className="mx-auto max-w-[1600px] px-5 pt-14 sm:px-8 sm:pt-16 md:px-12 lg:px-16">
          <div className="mb-2 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
                What we make
              </p>

              <h2
                id="services-heading"
                className="font-serif text-3xl tracking-tight sm:text-5xl"
              >
                Furnishing for every room.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex min-h-10 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533] transition-colors hover:text-[#1b1c1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <ServicesSection />
      </section>

      {/* QUICK SERVICE DISCOVERY */}

      <section
        aria-label="Explore popular furnishing services"
        className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-24"
      >
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
            Find your fit
          </p>

          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            A little inspiration for your space.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#656765]">
            Explore a few of our furnishing categories and find
            the right starting point for your home.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {quickServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              aria-label={`Explore ${service.title}`}
              className="group block min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-4"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e3dd]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none md:group-hover:scale-[1.04]"
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

      {/* ABOUT */}

      <section aria-label="About Mauli Interior">
        <AboutSection />
      </section>

      {/* FEATURED WORK */}

      <section aria-label="Featured interior projects">
        <FeaturedWork />
      </section>

      {/* 3D STUDIO */}

      <section className="bg-[#1b1c1a] text-white">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-12 md:gap-10 md:px-12 md:py-20 lg:px-16">
          <div className="md:col-span-8">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a47e]">
              Design before you decide
            </p>

            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
              See your furniture ideas come together in our
              3D Studio.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
              Explore furniture configurations, materials and
              finishes as you plan a design for your home.
            </p>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <Link
              href="/3d-studio"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-white/25 px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#1b1c1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1c1a] sm:w-auto sm:px-7"
            >
              Explore 3D Studio
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY MAULI */}

      <section aria-label="Why choose Mauli Interior">
        <WhyMauli />
      </section>

      {/* FINAL CTA */}

      <section aria-label="Contact Mauli Interior">
        <FinalCTA />
      </section>
    </main>
  );
}