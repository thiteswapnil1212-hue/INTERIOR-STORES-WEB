import Link from "next/link";

const services = [
  "Custom Sofas",
  "Curtains",
  "Mattresses",
  "Cushions",
  "Sofa Covers",
  "Wall / Bed Panels",
];

const process = [
  {
    number: "01",
    title: "Visit & Understand",
    description:
      "We visit your space, understand your requirement and look at the dimensions and practical needs.",
  },
  {
    number: "02",
    title: "Quotation",
    description:
      "We discuss your requirement and provide a clear quotation.",
  },
  {
    number: "03",
    title: "Measure & Plan",
    description:
      "After confirmation, we take the required measurements and plan the work.",
  },
  {
    number: "04",
    title: "Craft & Complete",
    description:
      "We complete the work within the committed time with attention to quality and finish.",
  },
];

const strengths = [
  "Better Pricing",
  "Trusted Service",
  "Good Quality Work",
  "More Variety",
  "Custom Measurements",
  "Home Visits",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a]">
      
      {/* HERO */}
      <section className="flex min-h-[calc(100vh-80px)] items-center px-6 pt-20 md:px-16">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#805533]">
            About Mauli Interior · Since 2009
          </p>

          <h1 className="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight md:text-8xl lg:text-[100px]">
            Made around
            <br />
            <span className="text-[#805533]">your space.</span>
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base leading-7 text-[#5c5e5c]">
                Mauli Interior creates custom furnishing solutions for homes
                across Pune and Pimpri-Chinchwad, with a focus on comfort,
                quality, practical design and personal service.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-[#747878]/20 pt-5">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.16em] text-[#8b8d89]">
              <span>Pune · Pimpri-Chinchwad</span>
              <span>Since 2009</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-t border-[#747878]/15 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Our Story
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Experience that
              <br />
              understands the details.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-7 text-[#5c5e5c]">
              <p>
                Mauli Interior has been serving customers since 2009, building
                its work around a simple idea — furnishing should fit the
                people and spaces it is made for.
              </p>

              <p>
                With 20+ years of hands-on furniture and furnishing experience,
                we understand the practical details behind comfortable
                seating, accurate measurements, suitable materials and a good
                finish.
              </p>

              <p>
                Today, we work with homeowners and interior designers across
                Pune and Pimpri-Chinchwad, taking on custom requirements and
                turning them into finished furnishing pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#1b1c1a] px-6 py-20 text-[#fbf9f6] md:px-16 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#b38a67]">
            Built on experience
          </p>

          <div className="grid border border-white/10 md:grid-cols-2">
            <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-12">
              <span className="font-serif text-7xl md:text-8xl">
                2009
              </span>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#b9bab6]">
                The year Mauli Interior began serving customers with custom
                furnishing work.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <span className="font-serif text-7xl md:text-8xl">
                20+
              </span>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#b9bab6]">
                Years of hands-on furniture and furnishing experience behind
                the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              What We Do
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              One place for
              <br />
              your furnishing needs.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="border-y border-[#747878]/15">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group flex items-center justify-between border-b border-[#747878]/15 py-6 last:border-b-0"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-[#805533]">
                      0{index + 1}
                    </span>

                    <h3 className="font-serif text-2xl transition-transform duration-300 group-hover:translate-x-2">
                      {service}
                    </h3>
                  </div>

                  <span className="text-[#8b8d89] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f2eee8] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
            How We Work
          </p>

          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
            Simple process.
            <br />
            Clear communication.
          </h2>

          <div className="mt-16 grid border border-[#747878]/15 md:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-b border-[#747878]/15 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8"
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-[#805533]">
                  {step.number}
                </span>

                <h3 className="mt-16 font-serif text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#5c5e5c]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MAULI */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Why Mauli
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Good work,
              <br />
              honestly delivered.
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-[#5c5e5c]">
              We believe a furnishing project should feel straightforward,
              from the first conversation to the finished piece.
            </p>
          </div>

          <div className="grid md:col-span-6 md:col-start-7 md:grid-cols-2">
            {strengths.map((strength, index) => (
              <div
                key={strength}
                className="border-t border-[#747878]/15 py-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#805533]">
                    0{index + 1}
                  </span>

                  <h3 className="font-serif text-xl">
                    {strength}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-t border-[#747878]/15 px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Where We Work
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Pune &amp;
              <br />
              Pimpri-Chinchwad.
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[15px] leading-7 text-[#5c5e5c]">
              Home visits are available across Pune and Pimpri-Chinchwad.
              Tell us about your space and we can discuss your furnishing
              requirement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#805533] px-6 py-24 text-[#fbf9f6] md:px-16 md:py-32">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#e1cdbb]">
              Start a conversation
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Have a space
              <br />
              in mind?
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-5 bg-[#fbf9f6] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-all duration-300 hover:bg-[#1b1c1a] hover:text-[#fbf9f6]"
          >
            Start an Enquiry
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}