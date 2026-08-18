import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Hero */}
      <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-12 md:gap-8 md:px-16 md:py-20">
        
        {/* Content */}
        <div className="order-2 flex flex-col gap-7 md:order-1 md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
            Home Interiors & Furnishing
          </p>

          <h1 className="font-serif text-5xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            Interiors made
            <br />
            for your home.
          </h1>

          <p className="max-w-lg text-base leading-7 text-[#444748] md:text-lg">
            Thoughtfully crafted sofas, curtains, beds and furnishing solutions
            designed around your space, comfort and lifestyle.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/sofas"
              className="bg-[#000000] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#30312f]"
            >
              Explore Our Work
            </Link>

            <Link
              href="/contact"
              className="border border-[#1b1c1a]/20 px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#1b1c1a] transition-colors hover:bg-[#1b1c1a] hover:text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 md:order-2 md:col-span-7">
          <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden md:h-[70vh]">
            <Image
              src="/images/home/hero.jpg"
              alt="Beautifully furnished living room by Mauli Interior"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}