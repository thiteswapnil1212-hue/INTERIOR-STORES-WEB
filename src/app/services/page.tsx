
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";

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
      "Made-to-measure sofas designed around your room, comfort and interior style.",
    href: "/services/sofas",
    available: true,
  },
  {
    number: "02",
    title: "Curtains",
    description:
      "Custom curtains selected to complement your interiors, windows and furnishing.",
    available: false,
  },
  {
    number: "03",
    title: "Beds & Mattresses",
    description:
      "Comfortable bedroom solutions made to suit your space and everyday needs.",
    available: false,
  },
  {
    number: "04",
    title: "Wall & Bed Panels",
    description:
      "Decorative panels designed to add warmth, character and a refined finish.",
    available: false,
  },
  {
    number: "05",
    title: "Cushions",
    description:
      "Custom cushions made to match your existing furnishing and colour palette.",
    available: false,
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

          <h1
            id="services-page-heading"
            className="font-serif text-4xl leading-[1.0] tracking-tight sm:text-6xl md:text-7xl"
          >
            Furnishing for
            <br />
            <span className="text-[#805533]">every room.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#5c5e5c] sm:text-[15px]">
            From custom seating to complete bedroom furnishing, we create
            practical pieces made specifically for your home across Pune and
            Pimpri-Chinchwad.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section
        aria-label="Available services"
        className="px-5 py-14 sm:px-8 sm:py-20 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="border-y border-[#747878]/15">
            {services.map((service) =>
              service.available && service.href ? (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex items-center justify-between border-b border-[#747878]/15 py-7 last:border-b-0 hover:bg-[#f5f1eb] px-2 -mx-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-inset"
                >
                  <div className="flex items-center gap-7 min-w-0">
                    <span className="text-xs text-[#805533] shrink-0">{service.number}</span>
                    <div className="min-w-0">
                      <h2 className="font-serif text-2xl sm:text-3xl">{service.title}</h2>
                      <p className="mt-1 text-[13px] leading-5 text-[#6b6d69] max-w-lg">{service.description}</p>
                    </div>
                  </div>
                  <span
                    className="ml-4 shrink-0 text-[#805533] text-lg transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ) : (
                <div
                  key={service.title}
                  className="flex items-center justify-between border-b border-[#747878]/15 py-7 last:border-b-0 px-2 -mx-2"
                  aria-label={`${service.title} — coming soon`}
                >
                  <div className="flex items-center gap-7 min-w-0">
                    <span className="text-xs text-[#8b8d89] shrink-0">{service.number}</span>
                    <div className="min-w-0">
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#8b8d89]">{service.title}</h2>
                      <p className="mt-1 text-[13px] leading-5 text-[#aaa9a5] max-w-lg">{service.description}</p>
                    </div>
                  </div>
                  <span className="ml-4 shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b8d89]">
                    Coming soon
                  </span>
                </div>
              )
            )}
          </div>
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
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
