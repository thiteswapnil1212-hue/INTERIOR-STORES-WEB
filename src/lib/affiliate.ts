/**
 * Affiliate configuration for the "Shop Our Picks" page.
 *
 * The Amazon Associates Store ID below attributes every outbound click to
 * Mauli Interior. Links point at Amazon.in search pages (not specific
 * products) so they never go stale; Amazon's 24-hour cookie credits any
 * qualifying purchase made in that session.
 *
 * To feature a specific product later, replace a search URL with its full
 * product URL + `?tag=mauliinterior-21`.
 */

export const AMAZON_TAG = "mauliinterior-21";

const amazonSearch = (query: string) =>
  `https://www.amazon.in/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

export type AffiliatePick = {
  title: string;
  blurb: string;
  query: string;
};

export const AFFILIATE_PICKS: AffiliatePick[] = [
  {
    title: "Cushion Inserts",
    blurb:
      "Plump microfiber fillers that keep cushions looking full and feeling soft — the easiest upgrade for tired seating.",
    query: "cushion filler inserts microfiber",
  },
  {
    title: "Curtain Rods",
    blurb:
      "Sturdy stainless-steel rod sets with brackets — a clean, lasting way to hang curtains in any room.",
    query: "curtain rod stainless steel set with brackets",
  },
  {
    title: "Upholstery Cleaner",
    blurb:
      "Gentle fabric and sofa cleaners that lift everyday stains without harming upholstery.",
    query: "upholstery fabric cleaner sofa",
  },
  {
    title: "Throw Blankets",
    blurb:
      "Soft woven throws that add warmth and texture to sofas and beds — an instant styling lift.",
    query: "throw blanket woven sofa",
  },
  {
    title: "Fabric Shaver",
    blurb:
      "Electric lint removers that take pilling off sofas and cushions, keeping fabric looking new.",
    query: "fabric shaver lint remover electric",
  },
  {
    title: "Sofa Organizer",
    blurb:
      "Armrest caddies that hold remotes, books and phones — small comfort, big convenience.",
    query: "sofa armrest organizer caddy",
  },
];

export const affiliateUrl = (pick: AffiliatePick) => amazonSearch(pick.query);
