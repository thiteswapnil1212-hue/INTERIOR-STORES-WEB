
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import ParallaxImage from "../../components/motion/ParallaxImage";
import SplitText from "../../components/motion/SplitText";
import HorizontalGallery from "../../components/projects/HorizontalGallery";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore custom sofas, curtains, wall panels and furnishing work by Mauli Interior across Pune and PCMC.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | Mauli Interior",
    description:
      "Explore custom sofas, curtains, wall panels and furnishing work by Mauli Interior across Pune and PCMC.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/images/seo/mauli-interior-og.jpg",
        width: 1200,
        height: 630,
        alt: "Custom furnishing projects by Mauli Interior in Pune",
      },
    ],
  },
};

const projects = [
  {
    number: "01",
    title: "Custom Sofa",
    category: "Custom Furniture",
    location: "Pune",
    description:
      "Made-to-order seating designed around your space, comfort, and fabric preferences.",
    image: "/images/sofas/sofa-hero.jpg",
    imageAlt: "Custom-made sofa by Mauli Interior in a Pune home",
  },
  {
    number: "02",
    title: "Custom Curtains",
    category: "Curtains & Furnishing",
    location: "Pune",
    description:
      "Curtain styles and fabrics selected to complement the character of your home.",
    image: "/images/home/featured-curtains.jpg",
    imageAlt: "Custom curtains fitted by Mauli Interior",
  },
  {
    number: "03",
    title: "Wall & Bed Panels",
    category: "Interior Panels",
    location: "PCMC",
    description:
      "Decorative panels made to bring a considered finish to bedrooms and living spaces.",
    image: "/images/home/featured-beds.jpg",
    imageAlt: "Bedroom with decorative wall and bed panels by Mauli Interior",
  },
  {
    number: "04",
    title: "Custom Furnishing",
    category: "Home Furnishing",
    location: "Pune",
    description:
      "A tailored approach to furnishing, with details chosen to suit your requirements.",
    image: "/images/home/featured-furnishing.jpg",
    imageAlt: "Custom home furnishing by Mauli Interior",
  },
];

function ProjectImage({
  src,
  alt,
  featured = false,
}: {
  src: string;
  alt: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative isolate bg-[#e9e4dc] ${
        featured ? "aspect-[16/10]" : "aspect-[4/3]"
      }`}
    >
      <ParallaxImage
        src={src}
        alt={alt}
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 66vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        }
        className="absolute inset-0"
        imgClassName="transition-transform duration-700 ease-out motion-reduce:transition-none md:group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 border border-black/[0.03]" />

      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
        <span className="inline-flex items-center gap-2 bg-[#fbf9f6]/90 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#444748] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#805533]" aria-hidden="true" />
          Project showcase
        </span>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf9f6] pt-16 text-[#1b1c1a] md:pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />

      {/* INTRO */}
      <section aria-labelledby="projects-heading" className="px-5 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:px-16 md:pt-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#805533]" aria-hidden="true" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                  Our Work
                </p>
              </div>

              <SplitText
                as="h1"
                id="projects-heading"
                className="font-serif text-4xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
                lines={[
                  { text: "Made for" },
                  { text: "your space.", accent: true },
                ]}
              />
            </div>

            <div className="max-w-md md:col-span-4 md:justify-self-end">
              <p className="text-[14px] leading-7 text-[#5c5e5c] sm:text-[15px]">
                Every home has its own character. We help bring it to life
                through custom sofas, curtains, panels, and thoughtful
                furnishing.
              </p>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#805533]">
                Pune · PCMC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section
        aria-label="Featured project category"
        className="px-5 pb-16 sm:px-6 sm:pb-24 md:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6b6d69]">
              Featured category
            </p>
            <span className="text-[9px] uppercase tracking-[0.14em] text-[#6b6d69]">
              01 / 04
            </span>
          </div>

          <div className="grid gap-7 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-8">
              <ProjectImage
                src={projects[0].image}
                alt={projects[0].imageAlt}
                featured
              />
            </div>

            <div className="md:col-span-4 md:pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#805533]">
                {projects[0].category}
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                {projects[0].title}
              </h2>

              <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#6b6d69]">
                {projects[0].description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#6b6d69]">
                <span className="h-1 w-1 rounded-full bg-[#805533]" aria-hidden="true" />
                {projects[0].location}
              </div>

              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-11 items-center gap-4 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
              >
                Enquire about a sofa
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY — scroll-driven horizontal sweep */}
      <HorizontalGallery projects={projects.slice(1)} />

      {/* CUSTOM WORK CTA */}
      <section aria-label="Start an enquiry" className="px-5 pb-20 sm:px-6 sm:pb-28 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden bg-[#e9e4dc] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16">
            <div
              className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#805533]/15 sm:-right-8 sm:-top-24 sm:h-80 sm:w-80"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#805533]/10 sm:h-64 sm:w-64"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                  Have something in mind?
                </p>

                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                  Let&apos;s create something for your home.
                </h2>

                <p className="mt-4 max-w-lg text-[13px] leading-6 text-[#5c5e5c]">
                  Tell us what you need. We&apos;ll discuss your space,
                  preferences, and next steps.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-fit shrink-0 items-center gap-5 bg-[#1b1c1a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
              >
                Start an Enquiry
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
