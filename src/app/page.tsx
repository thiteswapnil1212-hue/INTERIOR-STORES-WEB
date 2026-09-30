
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ServicesSection from "../components/home/ServicesSection";
import FeaturedWork from "../components/home/FeaturedWork";
import WhyMauli from "../components/home/WhyMauli";
import FAQSection from "../components/home/FAQSection";
import FinalCTA from "../components/home/FinalCTA";
import Marquee from "../components/home/Marquee";
import Reveal from "../components/motion/Reveal";
import TiltCard from "../components/motion/TiltCard";
import ScrollMoment from "../components/motion/ScrollMoment";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Showcase3D from "../components/home/Showcase3D";

const siteUrl = "https://mauliinterior-stores-web.vercel.app";

const pageTitle =
  "Mauli Interior | Custom Sofas & Home Furnishing in Pune";

const pageDescription =
  "Custom sofas, curtains, beds, mattresses, wall panels and home furnishing solutions crafted by Mauli Interior for homes across Pune, PCMC, Bhosari and Moshi.";

export const metadata: Metadata = {
  // `absolute` opts out of the layout's title template so the
  // homepage title renders exactly once, without duplication.
  title: {
    absolute: pageTitle,
  },
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
        url: "/images/seo/mauli-interior-og.jpg",
        width: 1200,
        height: 630,
        alt: "Custom sofas and home furnishing by Mauli Interior in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/seo/mauli-interior-og.jpg"],
  },
};

const trustPoints = [
  "Custom-made furniture",
  "Home visit available",
  "Pune & PCMC service",
];

/**
 * Quick service cards — only link to pages that actually exist.
 * Curtains and Beds pages do not exist; they link to /contact instead,
 * which provides a genuine path for customer enquiries.
 */
const quickServices = [
  {
    title: "Custom Sofas",
    description:
      "Sofas built around your room and comfort.",
    href: "/services/sofas",
    image: "/images/sofas/sofa-hero.jpg",
    imageAlt: "Custom sofa furnishing by Mauli Interior",
  },
  {
    title: "Curtains",
    description:
      "Curtains chosen and fitted for your space.",
    href: "/contact",
    image: "/images/home/featured-curtains.jpg",
    imageAlt: "Curtains for home interiors",
  },
  {
    title: "Beds & Panels",
    description:
      "Beds and panels that warm up bedrooms.",
    href: "/contact",
    image: "/images/home/featured-beds.jpg",
    imageAlt: "Bedroom furnishing and decorative panels",
  },
];

export default function Home() {
  return (
    <main id="home-main" className="overflow-hidden bg-[#fbf9f6] text-[#1b1c1a]">

      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        className="relative border-b border-black/5"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-8 sm:px-8 sm:py-12 md:min-h-[calc(100svh-80px)] md:grid-cols-12 md:gap-8 md:px-12 lg:px-16 lg:py-16">
          {/* Hero content */}
          <div className="order-2 flex flex-col md:order-1 md:col-span-5">
            <div className="animate-fade-up mb-5 flex items-center gap-3 sm:mb-6">
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
              style={{ animationDelay: "120ms" }}
              className="animate-fade-up max-w-xl font-serif text-[clamp(2.4rem,8vw,5rem)] leading-[0.98] tracking-[-0.04em]"
            >
              Interiors made
              <br />
              <span className="text-[#805533]">
                for your home.
              </span>
            </h1>

            <p
              style={{ animationDelay: "240ms" }}
              className="animate-fade-up mt-5 max-w-lg text-sm leading-7 text-[#555856] sm:mt-7 sm:text-base"
            >
              Custom sofas, curtains, beds and furnishing — made to measure
              for homes across Pune and PCMC.
            </p>

            {/* Main actions */}
            <div
              style={{ animationDelay: "360ms" }}
              className="animate-fade-up mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#1b1c1a] px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2 sm:px-7"
              >
                Explore Our Work
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#1b1c1a]/20 px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-colors duration-300 hover:border-[#805533] hover:bg-[#805533] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2 sm:px-7"
              >
                Get a Quote
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Trust points */}
            <div
              style={{ animationDelay: "480ms" }}
              className="animate-fade-up mt-8 grid grid-cols-1 gap-3 border-t border-black/10 pt-5 sm:mt-10 sm:grid-cols-3 sm:gap-2 sm:pt-6"
            >
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
          <div
            style={{ animationDelay: "200ms" }}
            className="animate-fade-up order-1 min-w-0 md:order-2 md:col-span-7"
          >
            <div className="animate-hero-zoom group relative aspect-[4/3] w-full overflow-hidden bg-[#e8e3dd] sm:aspect-[5/4] md:aspect-[4/5] lg:h-[76vh] lg:aspect-auto">
              <TiltCard className="h-full w-full" maxTilt={4}>
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
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE SOFA — scroll-driven 3D moment */}
      <ScrollMoment
        model="sofa"
        kicker="The signature three-seater"
        title={
          <>
            Made around
            <br />
            <span className="text-[#805533]">you.</span>
          </>
        }
        sub="Sized for your room. Built by hand in our Bhosari workshop."
        cta={{ href: "/3d-studio", label: "Design yours in 3D" }}
        bgClass="bg-[#f6f2ec]"
        label="Three-dimensional model of a terracotta three-seater sofa that turns as you scroll"
      />

      {/* SERVICES TICKER */}
      <Marquee />

      {/* BRAND STATEMENT */}
      <Reveal>
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
                Good interiors aren&apos;t about how a room
                looks.
                <span className="text-[#805533]">
                  {" "}
                  They&apos;re about how it feels to live in.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* SERVICES */}
      <Reveal>
      <section className="border-b border-black/5">
        <ServicesSection />
      </section>
      </Reveal>

      {/* QUICK SERVICE DISCOVERY */}
      <Reveal>
      <section
        aria-labelledby="service-discovery-heading"
        className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-24"
      >
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
            Find your fit
          </p>

          <h2
            id="service-discovery-heading"
            className="font-serif text-3xl tracking-tight sm:text-4xl"
          >
            Where to start.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#656765]">
            Browse our main categories and see what fits your space.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {quickServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              aria-label={`Explore ${service.title}`}
              className="group block min-w-0 transition-transform duration-500 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
                      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
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
      </Reveal>

      {/* FEATURED WORK */}
      <Reveal>
        <FeaturedWork />
      </Reveal>

      {/* 3D SHOWCASE — scroll-driven turntable */}
      <Showcase3D />

      {/* WHY MAULI */}
      <Reveal>
        <WhyMauli />
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <FAQSection />
      </Reveal>

      {/* FINAL CTA */}
      <Reveal>
        <FinalCTA />
      </Reveal>
    </main>
  );
}