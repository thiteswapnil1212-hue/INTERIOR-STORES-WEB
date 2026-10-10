import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Reveal from "../../components/motion/Reveal";
import SplitText from "../../components/motion/SplitText";
import { AFFILIATE_PICKS, affiliateUrl } from "../../lib/affiliate";

export const metadata: Metadata = {
  title: "Shop Our Picks",
  description:
    "Handpicked complementary home products recommended by Mauli Interior — cushion inserts, curtain rods, fabric care and more, available on Amazon.in.",
  alternates: {
    canonical: "/picks",
  },
  openGraph: {
    title: "Shop Our Picks | Mauli Interior",
    description:
      "Handpicked complementary home products recommended by Mauli Interior, available on Amazon.in.",
    url: "/picks",
    type: "website",
  },
};

export default function PicksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf9f6] pt-16 text-[#1b1c1a] md:pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Shop Our Picks", path: "/picks" },
        ]}
      />

      {/* INTRO */}
      <section aria-labelledby="picks-heading" className="px-5 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 md:px-16 md:pt-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#805533]" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                Curated by us
              </p>
            </div>

            <SplitText
              as="h1"
              id="picks-heading"
              className="font-serif text-4xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl"
              lines={[
                { text: "Shop our" },
                { text: "picks.", accent: true },
              ]}
            />

            <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#5c5e5c] sm:text-[15px]">
              Things we don&apos;t make ourselves, but happily recommend —
              everyday essentials that pair well with custom furnishing. When
              you shop through our links, we may earn a small commission at no
              extra cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* PICKS GRID */}
      <section aria-label="Recommended products" className="px-5 pb-16 sm:px-6 sm:pb-24 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-px border border-[#747878]/15 bg-[#747878]/15 sm:grid-cols-2 lg:grid-cols-3">
            {AFFILIATE_PICKS.map((pick, i) => (
              <Reveal key={pick.title}>
                <article className="group flex h-full flex-col bg-[#fbf9f6] p-7 transition-colors duration-300 hover:bg-[#f6f3ee] motion-reduce:transition-none md:p-9">
                  <p className="font-serif text-sm italic text-[#805533]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl tracking-tight text-[#1b1c1a] md:text-[28px]">
                    {pick.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13px] leading-6 text-[#5c5e5c]">
                    {pick.blurb}
                  </p>
                  <a
                    href={affiliateUrl(pick)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group/link mt-7 inline-flex min-h-11 w-fit items-center gap-3 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1b1c1a] transition-colors hover:border-[#805533] hover:text-[#805533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805533]"
                  >
                    View on Amazon.in
                    <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Disclosure — required by the Associates Program */}
          <p className="mx-auto mt-10 max-w-2xl text-center text-[11px] leading-5 text-[#8b8d89]">
            As an Amazon Associate, Mauli Interior earns from qualifying
            purchases made through links on this page, at no extra cost to
            you.
          </p>
        </div>
      </section>
    </main>
  );
}
