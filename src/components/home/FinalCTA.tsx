import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28 bg-[#fbf9f6] text-[#1b1c1a] text-center">
      <h2 className="font-serif text-3xl md:text-4xl mb-6">
        Let's create a space that feels like yours.
      </h2>
      <Link
        href="/contact"
        className="inline-block bg-[#000000] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#30312f]"
      >
        Get a Quote
      </Link>
    </section>
  );
}
