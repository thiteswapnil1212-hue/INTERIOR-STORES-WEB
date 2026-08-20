import Image from "next/image";
import Link from "next/link";

const sofaStyles = [
  {
    title: "L-Shape Sofas",
    description:
      "Comfortable L-shaped sofas designed for modern living rooms, family spaces and larger seating areas.",
    image: "/images/sofas/l-shape-sofa.jpg",
    alt: "Custom L-shaped sofa for a modern living room by Mauli Interior",
  },
  {
    title: "Straight Sofas",
    description:
      "Clean and timeless straight sofas made to fit beautifully into compact and contemporary interiors.",
    image: "/images/sofas/straight-sofa.jpg",
    alt: "Custom straight sofa for a modern home by Mauli Interior",
  },
  {
    title: "Custom Sofas",
    description:
      "Made-to-measure sofas created around your room dimensions, comfort preferences and interior style.",
    image: "/images/sofas/custom-sofa.jpg",
    alt: "Custom-made sofa designed for a home in Pune by Mauli Interior",
  },
];

export default function SofaStyles() {
  return (
    <section
      aria-labelledby="sofa-styles-heading"
      className="border-t border-[#747878]/15 px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
              Sofa Styles
            </p>

            <h2
              id="sofa-styles-heading"
              className="font-serif text-4xl leading-tight tracking-tight text-[#1b1c1a] md:text-5xl"
            >
              Designed around
              <br />
              your home.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#444748] md:col-span-5 md:col-start-8">
            From compact seating to spacious family sofas, every piece is
            custom-crafted to match your space, lifestyle and preferred style
            across Pune and PCMC.
          </p>
        </div>

        {/* Sofa Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {sofaStyles.map((sofa) => (
            <article key={sofa.title} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e5df]">
                <Image
                  src={sofa.image}
                  alt={sofa.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="pt-5">
                <h3 className="font-serif text-2xl text-[#1b1c1a]">
                  {sofa.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[#444748]">
                  {sofa.description}
                </p>

                <Link
                  href="/contact"
                  className="group/link mt-5 inline-flex items-center gap-2 border-b border-[#1b1c1a] pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-colors hover:border-[#805533] hover:text-[#805533]"
                >
                  Enquire about this
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}