import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Custom Sofas",
      description: "Tailored sofas designed to fit your space and style.",
      href: "/services/sofas",
    },
    {
      number: "02",
      title: "Curtains",
      description: "Bespoke curtains crafted from premium fabrics.",
    },
    {
      number: "03",
      title: "Beds & Mattresses",
      description: "Comfortable, made‑to‑measure bedroom solutions.",
    },
    {
      number: "04",
      title: "Wall Panels",
      description: "Elegant panels to accentuate any interior.",
    },
  ];

  return (
    <section className="px-6 py-12 md:px-16 md:py-20 bg-[#fbf9f6] text-[#1b1c1a]">
      <h2 className="mb-8 text-3xl font-serif md:text-4xl">Everything your home needs.</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((svc) => (
          <div key={svc.title} className="border border-[#747878]/15 p-6 hover:border-[#1b1c1a] transition-colors">
            <p className="text-xs font-medium text-[#805533]">{svc.number}</p>
            {svc.href ? (
              <Link href={svc.href} className="block mt-2 text-xl font-serif text-[#1b1c1a] hover:text-[#000000] transition-colors">
                {svc.title}
              </Link>
            ) : (
              <p className="mt-2 text-xl font-serif text-[#1b1c1a]">{svc.title}</p>
            )}
            <p className="mt-3 text-sm text-[#444748]">{svc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
