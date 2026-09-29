import Link from "next/link";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Custom Sofas",
    description: "Sofas built to your room's size, comfort and style.",
    href: "/services/sofas",
    image: "/images/sofas/sofa-hero.jpg",
    imageAlt: "Custom-made sofa by Mauli Interior",
    available: true,
  },
  {
    number: "02",
    title: "Curtains",
    description: "Curtains picked for your windows, light and interiors.",
    href: "/services",
    image: "/images/home/featured-curtains.jpg",
    imageAlt: "Custom curtains fitted by Mauli Interior",
    available: true,
  },
  {
    number: "03",
    title: "Beds & Mattresses",
    description: "Beds and mattresses made for your space and sleep.",
    href: "/services",
    image: "/images/home/featured-beds.jpg",
    imageAlt: "Custom bed made by Mauli Interior",
    available: true,
  },
  {
    number: "04",
    title: "Wall & Bed Panels",
    description: "Panels that add warmth and finish to bedrooms and walls.",
    href: "/services",
    image: "/images/home/featured-furnishing.jpg",
    imageAlt: "Decorative wall panels by Mauli Interior",
    available: true,
  },
];

export default function ServicesSection() {
  return (
    <div className="border-t border-[#747878]/15 bg-[#fbf9f6] px-6 py-20 text-[#1b1c1a] md:px-16 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
              What We Make
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Everything your
              <br />
              home needs.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#5c5e5c] md:col-span-5 md:col-start-8">
            Custom seating, curtains, beds and finishing details — made to
            fit your home.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => {
            const card = (
              <>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e3dd]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-[#fbf9f6]/95 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#805533]">
                    {service.number}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl tracking-tight md:text-[26px]">
                      {service.title}
                    </h3>
                    {service.available && (
                      <span
                        aria-hidden="true"
                        className="mt-1 text-lg text-[#805533] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#5c5e5c]">
                    {service.description}
                  </p>

                  <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em]">
                    {service.available ? (
                      <span className="border-b border-[#1b1c1a] pb-1 transition-colors duration-200 group-hover:border-[#805533] group-hover:text-[#805533]">
                        Explore service
                      </span>
                    ) : (
                      <span className="text-[#6b6d69]">Coming soon</span>
                    )}
                  </div>
                </div>
              </>
            );

            const className =
              "group block overflow-hidden border border-[#747878]/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(27,28,26,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

            return service.href ? (
              <Link
                key={service.title}
                href={service.href}
                className={className}
                aria-label={`${service.title} — ${service.available ? "explore service" : "enquire"}`}
              >
                {card}
              </Link>
            ) : (
              <div key={service.title} className={className}>
                {card}
              </div>
            );
          })}
        </div>

        {/* Local service note */}
        <div className="mt-8 flex flex-col gap-2 border-t border-[#747878]/15 pt-6 text-[11px] uppercase tracking-[0.12em] text-[#6b6d69] sm:flex-row sm:items-center sm:justify-between">
          <span>Custom furnishing for homes</span>
          <span>Pune · PCMC · Bhosari · Moshi</span>
        </div>
      </div>
    </div>
  );
}
