import Image from "next/image";
import Link from "next/link";

export default function IntegratedDesign() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-12 md:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden md:col-span-6">
          <Image
            src="/images/sofas/sofa-detail.jpg"
            alt="Custom sofa detail by Mauli Interior"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-5 md:col-start-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
            Complete the Space
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#1b1c1a] md:text-5xl">
            More than a sofa.
            <br />
            A complete interior.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#444748]">
            Your sofa is only one part of the room. We can help coordinate
            curtains, cushions, mattresses and other furnishing details so
            everything works together naturally.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#000000] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#30312f]"
            >
              Discuss Your Space
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}