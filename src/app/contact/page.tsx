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
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col justify-between border-b border-[#747878]/20 py-12 md:w-[42%] md:border-b-0 md:border-r md:py-14 md:pr-16">
          <div>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#805533]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                Contact Mauli Interior
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-lg font-serif text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-[72px]">
              Let&apos;s talk
              <br />
              about your
              <br />
              <span className="text-[#805533]">space.</span>
            </h1>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-[#5c5e5c]">
              Have a furnishing requirement? Tell us what you&apos;re looking
              for and let&apos;s create something that fits your home.
            </p>

            {/* Home Visit Highlight */}
            <div className="mt-9 flex max-w-md items-center gap-4 border-l-2 border-[#805533] bg-[#f3eee8] px-5 py-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
                  Home Visits Available
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#6b6d69]">
                  We visit homes across Pune & PCMC for measurements and
                  requirements.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-10 md:grid-cols-1 md:gap-y-7">
            {/* Phone */}
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                Call Us
              </p>

              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919921260926"
                  className="w-fit text-[14px] transition-colors hover:text-[#805533]"
                >
                  +91 99212 60926
                </a>

                <a
                  href="tel:+918208811046"
                  className="w-fit text-[14px] transition-colors hover:text-[#805533]"
                >
                  +91 82088 11046
                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                Email
              </p>

              <a
                href="mailto:thiteswapnil1212@gmail.com"
                className="break-all text-[14px] transition-colors hover:text-[#805533]"
              >
                thiteswapnil1212@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="col-span-2 md:col-span-1">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                Workshop
              </p>

              <p className="text-[14px] leading-6 text-[#444748]">
                Godown Chowk, Alankapuram Road,
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
            className="group mt-9 flex w-fit items-center gap-3 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#805533] hover:text-[#805533]"
          >
            Continue on WhatsApp
            <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="w-full py-12 md:w-[58%] md:py-14 md:pl-16 lg:pl-20">
          <div className="mx-auto max-w-2xl">
            {/* FORM HEADER */}
            <div className="mb-9 flex items-end justify-between border-b border-[#747878]/20 pb-6">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-6 bg-[#805533]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                    Enquiry
                  </p>
                </div>

                <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                  Tell us what you need.
                </h2>
              </div>

              <span className="hidden text-[10px] tracking-[0.12em] text-[#8b8d89] sm:block">
                01 / 04
              </span>
            </div>

            <form className="space-y-7">
              {/* NAME + PHONE */}
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[14px] outline-none transition-all placeholder:text-[#aaa9a5] focus:border-[#805533]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                    className="w-full border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[14px] outline-none transition-all placeholder:text-[#aaa9a5] focus:border-[#805533]"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                >
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full cursor-pointer border-0 border-b border-[#747878]/30 bg-[#fbf9f6] px-0 py-3 text-[14px] outline-none transition-all focus:border-[#805533]"
                >
                  <option value="" disabled>
                    Select what you&apos;re looking for
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* REQUIREMENT */}
              <div>
                <label
                  htmlFor="requirement"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                >
                  Requirement
                </label>

                <textarea
                  id="requirement"
                  name="requirement"
                  required
                  rows={3}
                  placeholder="Briefly describe your requirement..."
                  className="w-full resize-none border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[14px] leading-6 outline-none transition-all placeholder:text-[#aaa9a5] focus:border-[#805533]"
                />
              </div>

              {/* SERVICE LIST */}
              <div className="border-y border-[#747878]/15 py-5">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8b8d89]">
                  We specialise in
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="text-[12px] text-[#444748]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* SUBMIT */}
              <div className="flex flex-col gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#805533]" />

                  <p className="text-[10px] leading-5 text-[#8b8d89]">
                    We&apos;ll get back to you shortly.
                  </p>
                </div>

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-6 bg-[#1b1c1a] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#805533]"
                >
                  Send Enquiry

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>

            {/* DIRECT CONTACT */}
            <div className="mt-10 grid grid-cols-2 border-t border-[#747878]/15 pt-6">
              <div>
                <p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-[#8b8d89]">
                  Prefer a conversation?
                </p>

                <a
                  href="tel:+919921260926"
                  className="text-[13px] transition-colors hover:text-[#805533]"
                >
                  Call +91 99212 60926
                </a>
              </div>

              <div className="text-right">
                <p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-[#8b8d89]">
                  Quick response
                </p>

                <a
                  href="https://wa.me/919921260926"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] transition-colors hover:text-[#805533]"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}