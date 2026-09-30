import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "../motion/ParallaxImage";

/**
 * Only /services/sofas has a dedicated page.
 * Curtains, Beds, and Furnishing redirect to /contact for enquiries
 * rather than pointing to pages that do not exist.
 */
const items = [
  {
    number: "01",
    title: "Sofas",
    description:
      "Seating built to your room and comfort.",
    src: "/images/home/featured-sofa.jpg",
    href: "/services/sofas",
  },
  {
    number: "02",
    title: "Curtains",
    description:
      "Fabrics picked to soften your rooms.",
    src: "/images/home/featured-curtains.jpg",
    href: "/contact",
  },
  {
    number: "03",
    title: "Beds",
    description:
      "Beds and panels made for comfort and proportion.",
    src: "/images/home/featured-beds.jpg",
    href: "/contact",
  },
  {
    number: "04",
    title: "Furnishing",
    description:
      "Finishing details that tie a room together.",
    src: "/images/home/featured-furnishing.jpg",
    href: "/contact",
  },
];

export default function FeaturedWork() {
  return (
    <section aria-label="Featured interior projects" className="bg-[#fbf9f6] px-6 py-20 text-[#1b1c1a] md:px-16 md:py-28">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              What We Create
            </p>

            <h2 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">
              Made for the way
              <br />
              you live.
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 self-start border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] md:self-auto"
          >
            View Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        {/* Work List */}
        <div className="border-t border-[#747878]/20">
          {items.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group grid gap-7 border-b border-[#747878]/20 py-8 md:grid-cols-12 md:items-center md:gap-10 md:py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-xs font-medium tracking-[0.12em] text-[#805533]">
                  {item.number}
                </span>
              </div>

              {/* Text */}
              <div className="md:col-span-4">
                <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#555755]">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
                  Explore
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                </span>
              </div>

              {/* Image */}
              <ParallaxImage
                src={item.src}
                alt={`Custom ${item.title} by Mauli Interior`}
                sizes="(max-width: 768px) 100vw, 58vw"
                className="w-full aspect-[4/3] md:aspect-[16/8] md:col-span-7"
                imgClassName="transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.025]"
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}