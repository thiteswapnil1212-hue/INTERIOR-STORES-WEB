import Image from "next/image";
import Link from "next/link";

const items = [
  {
    number: "01",
    title: "Sofas",
    description:
      "Custom seating designed around your room, comfort and everyday life.",
    src: "/images/home/featured-sofa.jpg",
    href: "/services/sofas",
  },
  {
    number: "02",
    title: "Curtains",
    description:
      "Carefully selected fabrics and textures that bring softness and character to a room.",
    src: "/images/home/featured-curtains.jpg",
    href: "/services/curtains",
  },
  {
    number: "03",
    title: "Beds",
    description:
      "Made-to-measure beds and panels designed for comfort and proportion.",
    src: "/images/home/featured-beds.jpg",
    href: "/services/beds",
  },
  {
    number: "04",
    title: "Furnishing",
    description:
      "Thoughtful finishing details that bring the different elements of a room together.",
    src: "/images/home/featured-furnishing.jpg",
    href: "/services/furnishing",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-[#fbf9f6] px-6 py-20 text-[#1b1c1a] md:px-16 md:py-28">
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
            className="group inline-flex items-center gap-3 self-start border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] md:self-auto"
          >
            View Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Work List */}
        <div className="border-t border-[#747878]/20">
          {items.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group grid gap-7 border-b border-[#747878]/20 py-8 md:grid-cols-12 md:items-center md:gap-10 md:py-10"
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
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden md:col-span-7 md:aspect-[16/8]">
                <Image
                  src={item.src}
                  alt={`Custom ${item.title} by Mauli Interior`}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}