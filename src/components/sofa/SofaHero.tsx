import Image from "next/image";
import Link from "next/link";

export default function SofaHero() {
  return (
    <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-12 md:gap-8 md:px-16 md:py-20">
      <div className="order-2 flex flex-col gap-7 md:order-1 md:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
          Custom Sofas
        </p>

        <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-[#1b1c1a] md:text-6xl lg:text-7xl">
          Made to fit
          <br />
          your space.
        </h1>

        <p className="max-w-lg text-base leading-7 text-[#444748] md:text-lg">
          Custom-crafted sofas designed for the comfort, style and unique
          dimensions of your home.
        </p>

        <div>
          <Link
            href="/contact"
            className="inline-block bg-[#000000] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#30312f]"
          >
            Get a Sofa Quote
          </Link>
        </div>
      </div>

      <div className="order-1 md:order-2 md:col-span-7">
        <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden md:h-[70vh]">
          <Image
            src="/images/sofas/sofa-hero.jpg"
            alt="Custom sofa in a modern living room by Mauli Interior"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}