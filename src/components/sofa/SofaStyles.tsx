import Image from "next/image";

const sofaStyles = [
  {
    title: "L-Shape Sofas",
    description: "Comfortable layouts designed for modern living spaces.",
    image: "/images/sofas/l-shape-sofa.jpg",
  },
  {
    title: "Straight Sofas",
    description: "Clean, timeless designs that fit beautifully anywhere.",
    image: "/images/sofas/straight-sofa.jpg",
  },
  {
    title: "Custom Sofas",
    description: "Made around your room, measurements and comfort needs.",
    image: "/images/sofas/custom-sofa.jpg",
  },
];

export default function SofaStyles() {
  return (
    <section className="border-t border-[#747878]/15 px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
              Sofa Styles
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#1b1c1a] md:text-5xl">
              Designed around
              <br />
              your home.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#444748] md:col-span-5 md:col-start-8">
            From compact seating to spacious family sofas, every piece is
            crafted to match your space, lifestyle and preferred style.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sofaStyles.map((sofa) => (
            <article key={sofa.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e5df]">
                <Image
                  src={sofa.image}
                  alt={sofa.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-5">
                <h3 className="font-serif text-2xl text-[#1b1c1a]">
                  {sofa.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[#444748]">
                  {sofa.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}