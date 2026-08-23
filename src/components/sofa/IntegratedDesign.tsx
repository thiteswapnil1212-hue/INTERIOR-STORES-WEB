import Image from "next/image";
import Link from "next/link";

const services = [
  "Custom Sofas",
  "Curtains & Blinds",
  "Cushions & Upholstery",
  "Mattresses & Panels",
];

export default function IntegratedDesign() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 md:grid-cols-12 md:gap-16">

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden md:col-span-6">
          <Image
            src="/images/sofas/sofa-detail.jpg"
            alt="Custom sofa detail by Mauli Interior"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
          />

          {/* Small image label */}
          <div className="absolute bottom-5 left-5 bg-[#fbf9f6]/90 px-4 py-2 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#444748]">
              Designed around your space.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-5 md:col-start-8">

          {/* Eyebrow */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#805533]">
            Complete your space.
          </p>

          {/* Heading */}
          <h2 className="font-serif text-4xl leading-[1.08] tracking-tight text-[#1b1c1a] md:text-5xl">
            One room.
            <br />
            Thoughtfully finished.
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-[#444748]">
            Your sofa is only one part of the room. We help bring the
            surrounding details together so your furniture, fabrics and
            finishes feel considered as one complete space.
          </p>

          {/* Services */}
          <div className="mt-8 border-y border-[#747878]/15">
            {services.map((service, index) => (
              <div
                key={service}
                className="flex items-center justify-between border-b border-[#747878]/15 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium tracking-[0.1em] text-[#805533]">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-[#1b1c1a]">
                    {service}
                  </span>
                </div>

                <span className="text-xs text-[#999a98]">
                  →
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 border-b border-[#1b1c1a] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]"
            >
              Discuss Your Space

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}