
"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Custom Sofas",
  "Curtains",
  "Beds",
  "Mattresses",
  "Cushions",
  "Wall / Bed Panels",
];

const WHATSAPP_NUMBER = "919921260926";

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openError, setOpenError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpenError(false);

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const requirement = String(data.get("requirement") ?? "").trim();

    const message = [
      "Hello Mauli Interior!",
      "",
      "I'd like to enquire about your services.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Requirement: ${requirement}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(true);

    try {
      const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!newWindow) {
        // Popup was blocked — show a direct link fallback
        setOpenError(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf9f6] pt-16 text-[#1b1c1a] md:pt-20">
      <section className="mx-auto flex max-w-[1440px] flex-col px-5 sm:px-6 md:min-h-[calc(100vh-80px)] md:flex-row md:px-16">

        {/* LEFT SIDE */}
        <div className="flex w-full flex-col border-b border-[#747878]/20 py-10 sm:py-12 md:w-[42%] md:justify-between md:border-b-0 md:border-r md:py-14 md:pr-16">

          <div>
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-7 bg-[#805533] sm:w-8" aria-hidden="true" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533] sm:text-[10px]">
                Contact Mauli Interior
              </p>
            </div>

            <h1 className="max-w-lg font-serif text-[42px] leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-[72px]">
              Let&apos;s talk
              <br />
              about your
              <br />
              <span className="text-[#805533]">space.</span>
            </h1>

            <p className="mt-6 max-w-md text-[14px] leading-6 text-[#5c5e5c] sm:mt-7 sm:text-[15px] sm:leading-7">
              Have a furnishing requirement? Tell us what you&apos;re looking
              for and let&apos;s create something that fits your home.
            </p>

            {/* HOME VISITS */}
            <div className="mt-7 flex max-w-md border-l-2 border-[#805533] bg-[#f3eee8] px-4 py-4 sm:mt-9 sm:px-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[11px]">
                  Home Visits Available
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#6b6d69] sm:text-[12px]">
                  We visit homes across Pune &amp; PCMC for measurements and
                  requirements.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:mt-10 md:grid-cols-1 md:gap-y-7">

            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                Call or WhatsApp
              </p>
              <div className="flex flex-col">
                <a
                  href="tel:+919921260926"
                  className="flex min-h-10 w-fit items-center text-[14px] transition-colors hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
                >
                  +91 99212 60926
                </a>
                <p className="text-[11px] leading-4 text-[#8b8d89]">
                  Primary · WhatsApp available
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#8b8d89]">
                  For urgent enquiries, please call this number.
                </p>
                <a
                  href="tel:+918208811046"
                  className="mt-2 flex min-h-10 w-fit items-center text-[14px] transition-colors hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
                >
                  +91 82088 11046
                </a>
                <p className="text-[11px] leading-4 text-[#8b8d89]">
                  Secondary
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                Workshop Hours
              </p>
              <p className="text-[14px] leading-6 text-[#444748]">
                Open all days
                <br />
                8:00 AM – 8:00 PM
              </p>
            </div>

            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                Email
              </p>
              <a
                href="mailto:thiteswapnil1212@gmail.com"
                className="flex min-h-10 items-center break-all text-[14px] transition-colors hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
              >
                thiteswapnil1212@gmail.com
              </a>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8d89]">
                Workshop
              </p>
              <address className="not-italic text-[14px] leading-6 text-[#444748]">
                Godown Chowk, Alankapuram Road,
                <br />
                Bhosari, Pune 411039
              </address>
            </div>
          </div>

          {/* WHATSAPP CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 flex min-h-11 w-fit items-center gap-3 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] sm:mt-9"
          >
            Continue on WhatsApp
            <span className="text-base transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="w-full py-10 sm:py-12 md:w-[58%] md:py-14 md:pl-16 lg:pl-20">
          <div className="mx-auto max-w-2xl">

            {/* FORM HEADER */}
            <div className="mb-8 border-b border-[#747878]/20 pb-5 sm:mb-9 sm:pb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-[#805533]" aria-hidden="true" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533] sm:text-[10px]">
                  Enquiry
                </p>
              </div>

              <h2 className="font-serif text-[28px] leading-tight tracking-tight sm:text-3xl md:text-4xl">
                Tell us what you need.
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-7 sm:space-y-8"
              noValidate
            >

              {/* NAME + PHONE */}
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                  >
                    Your Name <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    minLength={2}
                    maxLength={80}
                    placeholder="Enter your name"
                    className="min-h-11 w-full border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[14px] outline-none transition-colors placeholder:text-[#aaa9a5] focus:border-[#805533] focus-visible:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                  >
                    Phone Number <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[+]?[0-9 ()-]{10,18}"
                    title="Enter a valid phone number (10–18 digits)"
                    placeholder="+91  XXXXX XXXXX"
                    className="min-h-11 w-full border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[14px] outline-none transition-colors placeholder:text-[#aaa9a5] focus:border-[#805533] focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                >
                  Service <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  defaultValue=""
                  required
                  className="min-h-11 w-full cursor-pointer border-0 border-b border-[#747878]/30 bg-[#fbf9f6] px-0 py-3 text-[14px] outline-none transition-colors focus:border-[#805533] focus-visible:ring-0"
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
                  htmlFor="contact-requirement"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#747878]"
                >
                  Requirement <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="contact-requirement"
                  name="requirement"
                  required
                  minLength={5}
                  maxLength={1500}
                  rows={4}
                  placeholder="Tell us about your space, measurements, preferred design, or anything else..."
                  className="w-full resize-y border-0 border-b border-[#747878]/30 bg-transparent px-0 py-3 text-[14px] leading-6 outline-none transition-colors placeholder:text-[#aaa9a5] focus:border-[#805533] focus-visible:ring-0"
                />
                <p className="mt-2 text-[10px] text-[#8b8d89]">
                  You can share photos and measurements directly on WhatsApp.
                </p>
              </div>

              {/* SERVICE LIST */}
              <div className="border-y border-[#747878]/15 py-5">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8b8d89]">
                  We specialise in
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="text-[11px] text-[#444748] sm:text-[12px]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popup blocked warning */}
              {openError && (
                <div role="alert" className="border-l-2 border-[#805533] bg-[#f3eee8] px-4 py-3">
                  <p className="text-[12px] leading-5 text-[#444748]">
                    Your browser blocked the WhatsApp window.{" "}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline hover:text-[#805533]"
                    >
                      Open WhatsApp directly →
                    </a>
                  </p>
                </div>
              )}

              {/* SUBMIT */}
              <div className="flex flex-col gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#805533]" aria-hidden="true" />
                  <p className="text-[10px] leading-5 text-[#8b8d89]">
                    Your enquiry opens in WhatsApp for you to send.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex min-h-12 w-full items-center justify-center gap-6 bg-[#1b1c1a] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#805533] disabled:cursor-wait disabled:opacity-70 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533] focus-visible:ring-offset-2"
                >
                  {isSubmitting ? "Opening WhatsApp…" : "Send Enquiry"}
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* VISIT — MAP */}
      <section
        aria-labelledby="visit-heading"
        className="border-t border-[#747878]/20 bg-[#f3eee8]"
      >
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:items-center md:gap-12 md:px-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#805533]" aria-hidden="true" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#805533] sm:text-[10px]">
                Visit Us
              </p>
            </div>

            <h2
              id="visit-heading"
              className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl"
            >
              See the work before you decide.
            </h2>

            <address className="mt-5 not-italic text-[14px] leading-7 text-[#444748]">
              Godown Chowk, Alankapuram Road,
              <br />
              Bhosari, Pune 411039
            </address>

            <p className="mt-3 text-[13px] leading-6 text-[#6b6d69]">
              Open all days · 8:00 AM – 8:00 PM
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Godown+Chowk,+Alankapuram+Road,+Bhosari,+Pune+411039"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
            >
              Get Directions
              <span className="text-base transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="overflow-hidden border border-[#747878]/20">
            <iframe
              title="Mauli Interior workshop location map"
              src="https://www.google.com/maps?q=Godown%20Chowk%2C%20Alankapuram%20Road%2C%20Bhosari%2C%20Pune%20411039&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[380px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
