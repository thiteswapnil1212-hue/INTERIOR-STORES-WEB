import Image from "next/image";
import Link from "next/link";

export default function SofaHero() {
  return (
    <section
      aria-labelledby="sofa-hero-heading"
      className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-12 md:gap-8 md:px-16 md:py-20"
    >
      {/* Content */}
      <div className="order-2 flex flex-col gap-7 md:order-1 md:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
          Custom Sofas · Pune
        </p>

        <h1
          id="sofa-hero-heading"
          className="font-serif text-5xl leading-[1.1] tracking-tight text-[#1b1c1a] md:text-6xl lg:text-7xl"
        >
          Made to fit
          <br />
          your space.
        </h1>

        <p className="max-w-lg text-base leading-7 text-[#444748] md:text-lg">
          Custom-crafted sofas made around your room, comfort and interior
          style. From L-shaped to straight and made-to-measure sofas, we build
          seating that fits your home beautifully.
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#1b1c1a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#805533] focus:outline-none focus:ring-2 focus:ring-[#805533] focus:ring-offset-2"
          >
            Get a Sofa Quote
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="#sofa-styles-heading"
            className="border-b border-[#1b1c1a] pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#1b1c1a] transition-colors duration-200 hover:border-[#805533] hover:text-[#805533] focus:outline-none"
          >
            Explore Styles
          </Link>
        </div>

        {/* Local service information */}
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.1em] text-[#8b8d89]">
          <span>Made to Measure</span>
          <span>•</span>
          <span>Pune & PCMC</span>
          <span>•</span>
          <span>Home Visits</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="order-1 md:order-2 md:col-span-7">
        <div className="group relative h-[55vh] min-h-[420px] w-full overflow-hidden bg-[#e9e5df] md:h-[70vh]">
          <Image
            src="/images/sofas/sofa-hero.jpg"
            alt="Custom-made sofa in a modern living room by Mauli Interior, Pune"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}