import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import SplitText from "../../components/motion/SplitText";
import ImageReveal from "../../components/motion/ImageReveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Mauli Interior in Pune",
  description:
    "Learn about Mauli Interior — custom furnishing solutions for homes across Pune and Pimpri-Chinchwad since 2009. Quality sofas, curtains, beds, panels and more.",
  alternates: {
    canonical: "/about",
  },
};

const services = [
  "Custom Sofas",
  "Curtains",
  "Mattresses",
  "Cushions",
  "Sofa Covers",
  "Wall / Bed Panels",
];

const process = [
  {
    number: "01",
    title: "Visit & Understand",
    description:
      "We visit your space, understand your requirement and look at the dimensions and practical needs.",
  },
  {
    number: "02",
    title: "Quotation",
    description:
      "We discuss your requirement and provide a clear quotation.",
  },
  {
    number: "03",
    title: "Measure & Plan",
    description:
      "After confirmation, we take the required measurements and plan the work.",
  },
  {
    number: "04",
    title: "Craft & Complete",
    description:
      "We complete the work within the committed time with attention to quality and finish.",
  },
];

const strengths = [
  "Better Pricing",
  "Trusted Service",
  "Good Quality Work",
  "More Variety",
  "Custom Measurements",
  "Home Visits",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] pt-16 text-[#1b1c1a] md:pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* HERO */}
      <section className="flex min-h-[50vh] items-center px-6 pt-10 md:min-h-[calc(100vh-80px)] md:px-16 md:pt-0">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#805533]">
            About Mauli Interior · Since 2009
          </p>

          <SplitText
            as="h1"
            className="max-w-5xl font-serif text-[clamp(2.8rem,8vw,7rem)] leading-[0.98] tracking-tight"
            lines={[
              { text: "Made around" },
              { text: "your space.", accent: true },
            ]}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base leading-7 text-[#5c5e5c]">
                Mauli Interior creates custom furnishing solutions for homes
                across Pune and Pimpri-Chinchwad, with a focus on comfort,
                quality, practical design and personal service.
              </p>
            </div>
          </div>

          <ImageReveal
            src="/images/media-pack/about-living.jpg"
            alt="Warm living room with beige sofa, cushions and soft lighting"
            sizes="100vw"
            aspectClassName="mt-12 aspect-[16/8] w-full md:mt-16"
          />

          <div className="mt-20 border-t border-[#747878]/20 pt-5">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.16em] text-[#6b6d69]">
              <span>Pune · Pimpri-Chinchwad</span>
              <span>Since 2009</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-t border-[#747878]/15 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Our Story
            </p>
            <ImageReveal
              src="/images/media-pack/workshop-wood.jpg"
              alt="Craftsman planing wood in a furniture workshop"
              sizes="(max-width: 768px) 100vw, 33vw"
              aspectClassName="mt-8 aspect-[3/4] w-full"
            />
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Experience that
              <br />
              understands the details.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-7 text-[#5c5e5c]">
              <p>
                Mauli Interior has been serving customers since 2009, building
                its work around a simple idea — furnishing should fit the
                people and spaces it is made for.
              </p>

              <p>
                With 17 years of hands-on furniture and furnishing experience,
                we understand the practical details behind comfortable
                seating, accurate measurements, suitable materials and a good
                finish.
              </p>

              <p>
                Today, we work with homeowners and interior designers across
                Pune and Pimpri-Chinchwad, taking on custom requirements and
                turning them into finished furnishing pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*
        FOUNDER PHOTO — to add a founder portrait to the story section:
        1. Save the photo as public/images/about/founder.jpg
        2. Add `import Image from "next/image";` at the top of this file
        3. Uncomment the block below and set the name in the caption.
      */}
      {/*
      <section className="border-t border-[#747878]/15 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/images/about/founder.jpg"
              alt="Founder of Mauli Interior"
              width={640}
              height={800}
              className="w-full object-cover"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              The Founder
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              [Founder name]
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-7 text-[#5c5e5c]">
              [Two or three sentences about the founder — how the work started,
              what they care about in the craft.]
            </p>
          </div>
        </div>
      </section>
      */}

      {/* EXPERIENCE */}
      <section className="bg-[#1b1c1a] px-6 py-20 text-[#fbf9f6] md:px-16 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#b38a67]">
            Built on experience
          </p>

          <div className="grid border border-white/10 md:grid-cols-2">
            <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-12">
              <span className="font-serif text-7xl md:text-8xl">
                2009
              </span>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#b9bab6]">
                The year Mauli Interior began serving customers with custom
                furnishing work.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <span className="font-serif text-7xl md:text-8xl">
                17
              </span>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#b9bab6]">
                Years of hands-on furniture and furnishing experience behind
                the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              What We Do
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              One place for
              <br />
              your furnishing needs.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="border-y border-[#747878]/15">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center justify-between border-b border-[#747878]/15 py-6 last:border-b-0"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-[#805533]">
                      0{index + 1}
                    </span>

                    <h3 className="font-serif text-2xl">
                      {service}
                    </h3>
                  </div>

                  {/* Decorative — these services are not separate pages */}
                  <span className="text-[#c9cbc7]" aria-hidden="true">—</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f2eee8] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
            How We Work
          </p>

          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
            Simple process.
            <br />
            Clear communication.
          </h2>

          <div className="mt-16 grid border border-[#747878]/15 md:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-b border-[#747878]/15 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8"
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-[#805533]">
                  {step.number}
                </span>

                <h3 className="mt-16 font-serif text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#5c5e5c]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MAULI */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Why Mauli
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Good work,
              <br />
              honestly delivered.
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-[#5c5e5c]">
              We believe a furnishing project should feel straightforward,
              from the first conversation to the finished piece.
            </p>
          </div>

          <div className="grid md:col-span-6 md:col-start-7 md:grid-cols-2">
            {strengths.map((strength, index) => (
              <div
                key={strength}
                className="border-t border-[#747878]/15 py-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#805533]">
                    0{index + 1}
                  </span>

                  <h3 className="font-serif text-xl">
                    {strength}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-t border-[#747878]/15 px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Where We Work
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Pune &amp;
              <br />
              Pimpri-Chinchwad.
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[15px] leading-7 text-[#5c5e5c]">
              Home visits are available across Pune and Pimpri-Chinchwad.
              Tell us about your space and we can discuss your furnishing
              requirement.
            </p>
          </div>
        </div>
      </section>

      {/* WORKSHOP — photo banner */}
      <section
        aria-labelledby="workshop-heading"
        className="border-t border-[#747878]/15 bg-[#f2eee8]"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-16 md:py-28">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              From our workshop
            </p>

            <h2
              id="workshop-heading"
              className="font-serif text-4xl leading-tight md:text-6xl"
            >
              Built in
              <br />
              <span className="text-[#805533]">Bhosari.</span>
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-[#5c5e5c]">
              Beds, sofas and panels — made by hand, made to measure, made to
              last.
            </p>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-colors duration-300 hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
            >
              See what we make
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e8e3dd]">
            <video
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              poster="/images/media-pack/workshop-sewing.jpg"
              aria-label="Craftsmanship in the Mauli Interior workshop"
              className="h-full w-full object-cover"
            >
              <source src="/images/media-pack/workshop-craft.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="border-t border-[#747878]/15 bg-[#f2eee8] px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Visit Us
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              See where
              <br />
              it&apos;s made.
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <address className="not-italic text-[15px] leading-7 text-[#5c5e5c]">
              Godown Chowk, Alankapuram Road,
              <br />
              Bhosari, Pune 411039
            </address>

            <p className="mt-4 text-[15px] leading-7 text-[#5c5e5c]">
              Open all days · 8:00 AM – 8:00 PM
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Godown+Chowk,+Alankapuram+Road,+Bhosari,+Pune+411039"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
            >
              Get Directions
              <span className="text-base transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#805533] px-6 py-16 text-[#fbf9f6] md:px-16 md:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#e1cdbb]">
              Start a conversation
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Have a space
              <br />
              in mind?
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-5 bg-[#fbf9f6] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-[background-color,color] duration-300 hover:bg-[#1b1c1a] hover:text-[#fbf9f6]"
          >
            Start an Enquiry
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}