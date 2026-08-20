import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Custom Sofas",
    description:
      "Made-to-measure sofas designed around your room, comfort and interior style.",
    href: "/services/sofas",
    available: true,
  },
  {
    number: "02",
    title: "Curtains",
    description:
      "Custom curtains selected to complement your interiors, windows and furnishing.",
    available: false,
  },
  {
    number: "03",
    title: "Beds & Mattresses",
    description:
      "Comfortable bedroom solutions made to suit your space and everyday needs.",
    available: false,
  },
  {
    number: "04",
    title: "Wall & Bed Panels",
    description:
      "Decorative panels designed to add warmth, character and a refined finish.",
    available: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="border-t border-[#747878]/15 bg-[#fbf9f6] px-6 py-20 text-[#1b1c1a] md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
              What We Make
            </p>

            <h2
              id="services-heading"
              className="font-serif text-4xl leading-tight tracking-tight md:text-5xl"
            >
              Everything your
              <br />
              home needs.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#5c5e5c] md:col-span-5 md:col-start-8">
            From custom seating to complete furnishing details, we create
            practical pieces that fit naturally into your home.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-px overflow-hidden border border-[#747878]/15 bg-[#747878]/15 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const content = (
              <>
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-medium tracking-[0.12em] text-[#805533]">
                    {service.number}
                  </span>

                  {service.available && (
                    <span
                      aria-hidden="true"
                      className="text-lg text-[#805533] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  )}
                </div>

                <div className="mt-14">
                  <h3 className="font-serif text-2xl tracking-tight md:text-[26px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#5c5e5c]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]">
                  {service.available ? (
                    <>
                      <span className="border-b border-[#1b1c1a] pb-1 transition-colors duration-200 group-hover:border-[#805533] group-hover:text-[#805533]">
                        Explore service
                      </span>
                    </>
                  ) : (
                    <span className="text-[#8b8d89]">Coming soon</span>
                  )}
                </div>
              </>
            );

            return service.href ? (
              <Link
                key={service.title}
                href={service.href}
                className="group min-h-[280px] bg-[#fbf9f6] p-7 transition-colors duration-300 hover:bg-[#f2eee8] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#805533] md:p-8"
              >
                {content}
              </Link>
            ) : (
              <div
                key={service.title}
                className="group min-h-[280px] bg-[#fbf9f6] p-7 md:p-8"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Local service note */}
        <div className="mt-8 flex flex-col gap-2 border-t border-[#747878]/15 pt-6 text-[11px] uppercase tracking-[0.12em] text-[#8b8d89] sm:flex-row sm:items-center sm:justify-between">
          <span>Custom furnishing for homes</span>
          <span>Pune · PCMC · Bhosari · Moshi</span>
        </div>
      </div>
    </section>
  );
}