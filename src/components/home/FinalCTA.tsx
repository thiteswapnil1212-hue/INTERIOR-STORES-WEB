import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="border-t border-[#747878]/15 bg-[#1b1c1a] px-6 py-24 text-[#fbf9f6] md:px-16 md:py-32">
      <div className="mx-auto max-w-[1000px] text-center">

        {/* Eyebrow */}
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c29a78]">
          Start Your Project
        </p>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">
          Let&apos;s create a space
          <br />
          that feels like yours.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#b8bab7] md:text-base">
          Tell us about your space, your ideas and what you have in mind.
          We&apos;ll help turn them into something made specifically for you.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-5 border border-[#fbf9f6]/30 bg-[#fbf9f6] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b1c1a] transition-all duration-300 hover:bg-transparent hover:text-[#fbf9f6]"
          >
            <span>Discuss Your Space</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Bottom Details */}
        <div className="mt-16 grid grid-cols-1 gap-5 border-t border-[#fbf9f6]/15 pt-6 text-[10px] uppercase tracking-[0.14em] text-[#858784] md:grid-cols-3">
          <span>Custom Furniture</span>
          <span>Interior Furnishing</span>
          <span>Pune · PCMC</span>
        </div>

      </div>
    </section>
  );
}