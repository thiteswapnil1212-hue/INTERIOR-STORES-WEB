import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Reveal from "../../components/motion/Reveal";
import TiltCard from "../../components/motion/TiltCard";
import ParallaxImage from "../../components/motion/ParallaxImage";
import SplitText from "../../components/motion/SplitText";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Mauli Interior's furnishing services — custom sofas, curtains, beds, mattresses, cushions and wall panels for homes across Pune and PCMC.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    number: "01",
    title: "Custom Sofas",
    description:
      "Made-to-measure sofas designed around your room, comfort and interior style. Pick the size, fabric and finish — we build it in our Pune workshop.",
    image: "/images/services/sofas.jpg",
    alt: "Premium custom sofa in a bright modern living room",
    href: "/services/sofas",
    cta: "Explore sofas",
  },
  {
    number: "02",
    title: "Curtains",
    description:
      "Custom curtains selected to complement your interiors, windows and furnishing — from sheer day curtains to full blackout drapes.",
    image: "/images/services/curtains.jpg",
    alt: "Elegant grey curtains in a sunlit living room",
    href: "/contact",
    cta: "Get a quote",
  },
  {
    number: "03",
    title: "Beds & Mattresses",
    description:
      "Comfortable bedroom solutions made to suit your space and everyday needs — upholstered beds with mattresses in every size.",
    image: "/images/services/beds.jpg",
    alt: "Luxury upholstered bed with tufted headboard",
    href: "/contact",
    cta: "Get a quote",
  },
  {
    number: "04",
    title: "Wall & Bed Panels",
    description:
      "Decorative panels designed to add warmth, character and a refined finish — padded headboard walls, moulding and feature panelling.",
    image: "/images/services/panels.jpg",
    alt: "Padded wall panel headboard in a premium bedroom",
    href: "/contact",
    cta: "Get a quote",
  },
  {
    number: "05",
    title: "Cushions",
    description:
      "Custom cushions made to match your existing furnishing and colour palette — the finishing touch for sofas and beds.",
    image: "/images/services/cushions.jpg",
    alt: "Decorative blue cushions on a beige sofa",
    href: "/contact",
    cta: "Get a quote",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] pt-16 text-[#1b1c1a] md:pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      {/* HERO */}
      <section
        aria-labelledby="services-page-heading"
        className="border-b border-black/5 px-5 py-14 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#805533]" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
              What We Make
            </p>
          </div>

          <SplitText
            as="h1"
            id="services-page-heading"
            className="font-serif text-4xl leading-[1.0] tracking-tight sm:text-6xl md:text-7xl"
            lines={[
              { text: "Furnishing for" },
              { text: "every room.", accent: true },
            ]}
          />

          <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#5c5e5c] sm:text-[15px]">
            From custom seating to complete bedroom furnishing, we create
            practical pieces made specifically for your home across Pune and
            Pimpri-Chinchwad.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        aria-label="Our services"
        className="px-5 py-14 sm:px-8 sm:py-20 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px] space-y-16 sm:space-y-24">
          {services.map((service, index) => (
            <Reveal key={service.title}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <TiltCard maxTilt={5}>
                <Link
                  href={service.href}
                  className="group relative block bg-[#ece7de] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
                  aria-label={`${service.title} — ${service.cta}`}
                >
                  <ParallaxImage
                    src={service.image}
                    alt={service.alt}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="aspect-[4/3] w-full"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 bg-[#1b1c1a]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {service.number}
                  </span>
                </Link>
                </TiltCard>

                <div className="max-w-lg">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                    Service {service.number}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[14px] leading-7 text-[#5c5e5c] sm:text-[15px]">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="group mt-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-colors duration-300 hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
                  >
                    {service.cta}
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Contact for a service enquiry"
        className="border-t border-black/5 bg-[#f4f0eb] px-5 py-14 sm:px-8 sm:py-20 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
              Don&apos;t see what you need?
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Get in touch directly.
            </h2>
            <p className="mt-3 max-w-lg text-[13px] leading-6 text-[#5c5e5c]">
              We also take on custom requirements not listed here. Tell us about
              your space and we&apos;ll let you know how we can help.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center gap-5 bg-[#1b1c1a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
          >
            Contact Us
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
