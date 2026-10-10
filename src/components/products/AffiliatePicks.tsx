"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../motion/Reveal";
import { AFFILIATE_PICKS, affiliateUrl } from "../../lib/affiliate";

/**
 * "Shop Our Picks" — affiliate section for the products page.
 * Curated complementary products (nothing Mauli makes itself), each
 * linking to Amazon.in with the Associates tag. Product images come from
 * Amazon SiteStripe (see src/lib/affiliate.ts); until added, each card
 * shows an elegant monogram placeholder.
 */
export default function AffiliatePicks() {
  return (
    <section
      aria-label="Shop our picks — recommended products"
      className="border-b border-black/5 bg-[#1b1c1a] text-[#fbf9f6]"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24">
        <Reveal>
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5a47e]">
                Curated by us
              </p>
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Shop our picks.
              </h2>
              <p className="mt-4 max-w-xl text-[13px] leading-7 text-white/60 sm:text-[14px]">
                Things we don&apos;t make ourselves, but happily recommend —
                everyday essentials that pair well with custom furnishing.
              </p>
            </div>
            <p className="text-[11px] leading-5 text-white/40 md:col-span-5 md:justify-self-end md:text-right">
              As an Amazon Associate, we earn from
              <br className="hidden md:block" /> qualifying purchases.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AFFILIATE_PICKS.map((pick, i) => (
            <Reveal key={pick.title}>
              <article className="group flex h-full flex-col overflow-hidden bg-[#242220] transition-colors duration-300 hover:bg-[#2a2724] motion-reduce:transition-none">
                {/* Product image — SiteStripe URL when added, monogram until then */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2e2b28]">
                  {pick.image ? (
                    <Image
                      src={pick.image}
                      alt={pick.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-serif text-5xl italic text-[#c5a47e]/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-serif text-xl tracking-tight text-[#fbf9f6] md:text-2xl">
                    {pick.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-6 text-white/55">
                    {pick.blurb}
                  </p>
                  <a
                    href={affiliateUrl(pick)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group/link mt-6 inline-flex min-h-11 w-fit items-center gap-3 border-b border-[#fbf9f6]/40 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fbf9f6] transition-colors hover:border-[#c5a47e] hover:text-[#c5a47e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a47e]"
                  >
                    View on Amazon.in
                    <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
