import Link from "next/link";

const services = [
  "Custom Sofas",
  "Curtains",
  "Beds",
  "Mattresses",
  "Cushions",
  "Wall / Bed Panels",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] pt-20 text-[#1b1c1a]">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1440px] flex-col px-6 md:flex-row md:px-16">
        {/* LEFT — Contact Information */}
        <div className="flex w-full flex-col justify-between border-b border-[#747878]/20 py-12 md:w-[42%] md:border-b-0 md:border-r md:py-14 md:pr-16">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
              Contact Mauli Interior
            </p>

            <h1 className="max-w-lg font-serif text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
              Let&apos;s talk
              <br />
              about your
              <br />
              <span className="text-[#805533]">space.</span>
            </h1>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-[#5c5e5c]">
              Tell us what you have in mind. From a custom sofa to complete
              furnishing, we&apos;ll help you find the right solution for your
              home.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:mt-10 md:grid-cols-1">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b8d89]">
                Call
              </p>

              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919921260926"
                  className="w-fit text-[15px] transition-colors hover:text-[#805533]"
                >
                  +91 99212 60926
                </a>

                <a
                  href="tel:+918208811046"
                  className="w-fit text-[15px] transition-colors hover:text-[#805533]"
                >
                  +91 82088 11046
                </a>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b8d89]">
                Email
              </p>

              <a
                href="mailto:thiteswapnil1212@gmail.com"
                className="text-[15px] transition-colors hover:text-[#805533]"
              >
                thiteswapnil1212@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b8d89]">
                Workshop
              </p>

              <p className="max-w-xs text-[15px] leading-6 text-[#444748]">
                Godown Chowk,
                <br />
                Alankapuram Road,
                <br />
                Bhosari, Pune
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919921260926"
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex w-fit items-center gap-3 border-b border-[#1b1c1a] pb-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-[#805533] hover:text-[#805533]"
          >
            WhatsApp us
            <span className="text-base">↗</span>
          </a>
        </div>

        {/* RIGHT — Enquiry */}
        <div className="w-full py-12 md:w-[58%] md:py-14 md:pl-16 lg:pl-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 flex items-end justify-between border-b border-[#747878]/20 pb-6">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                  Enquiry
                </p>

                <h2 className="font-serif text-3xl md:text-4xl">
                  Tell us what you need.
                </h2>
              </div>

              <span className="hidden text-[11px] uppercase tracking-[0.12em] text-[#8b8d89] sm:block">
                01 — 04
              </span>
            </div>

            <form className="space-y-8">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#747878]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[15px] outline-none transition-colors placeholder:text-[#a1a29f] focus:border-[#1b1c1a]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#747878]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91"
                  className="w-full border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[15px] outline-none transition-colors placeholder:text-[#a1a29f] focus:border-[#1b1c1a]"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#747878]"
                >
                  What are you looking for?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full border-0 border-b border-[#747878]/30 bg-[#fbf9f6] px-0 py-3 text-[15px] outline-none transition-colors focus:border-[#1b1c1a]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Requirement */}
              <div>
                <label
                  htmlFor="requirement"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#747878]"
                >
                  Requirement
                </label>

                <textarea
                  id="requirement"
                  name="requirement"
                  required
                  rows={3}
                  placeholder="Briefly tell us about your requirement..."
                  className="w-full resize-none border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[15px] leading-6 outline-none transition-colors placeholder:text-[#a1a29f] focus:border-[#1b1c1a]"
                />
              </div>

              {/* Home Visit */}
              <div className="flex items-center justify-between border-y border-[#747878]/15 py-5">
                <div>
                  <p className="text-[12px] font-medium text-[#1b1c1a]">
                    Home visits available
                  </p>

                  <p className="mt-1 text-[12px] text-[#747878]">
                    Across Pune & PCMC
                  </p>
                </div>

                <span className="text-[11px] uppercase tracking-[0.1em] text-[#805533]">
                  Available
                </span>
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[11px] leading-5 text-[#8b8d89]">
                  We&apos;ll contact you to understand your requirement and
                  discuss the next steps.
                </p>

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-5 bg-[#1b1c1a] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:bg-[#805533]"
                >
                  Send Enquiry
                  <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}