/**
 * Affiliate configuration for "Shop Our Picks".
 *
 * The Amazon Associates Store ID below attributes every outbound click to
 * Mauli Interior. Links point at Amazon.in search pages (not specific
 * products) so they never go stale; Amazon's 24-hour cookie credits any
 * qualifying purchase made in that session.
 *
 * REAL PRODUCT IMAGES: Amazon allows affiliates to use product images via
 * SiteStripe (Associates Central → browse any product → SiteStripe bar →
 * Image → Get HTML). Paste the `src` URL into the `image` field below.
 * Never hotlink Amazon images without SiteStripe — it violates the ToS.
 *
 * To feature a specific product, replace a search query with its full
 * Amazon.in product URL + `?tag=mauliinterior-21`.
 */

export const AMAZON_TAG = "mauliinterior-21";

const amazonSearch = (query: string) =>
  `https://www.amazon.in/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

export type AffiliatePick = {
  title: string;
  blurb: string;
  query: string;
  /** Amazon SiteStripe image URL — empty shows the monogram placeholder. */
  image?: string;
};

export const AFFILIATE_PICKS: AffiliatePick[] = [
  {
    title: "Cushion Inserts",
    blurb:
      "Plump microfiber fillers that keep cushions looking full and feeling soft.",
    query: "cushion filler inserts microfiber",
  },
  {
    title: "Curtain Rods",
    blurb:
      "Sturdy stainless-steel rod sets with brackets for any room.",
    query: "curtain rod stainless steel set with brackets",
  },
  {
    title: "Upholstery Cleaner",
    blurb:
      "Gentle fabric and sofa cleaners that lift everyday stains safely.",
    query: "upholstery fabric cleaner sofa",
  },
  {
    title: "Throw Blankets",
    blurb:
      "Soft woven throws that add warmth and texture to sofas and beds.",
    query: "throw blanket woven sofa",
  },
  {
    title: "Fabric Shaver",
    blurb:
      "Electric lint removers that take pilling off sofas and cushions.",
    query: "fabric shaver lint remover electric",
  },
  {
    title: "Sofa Organizer",
    blurb:
      "Armrest caddies for remotes, books and phones.",
    query: "sofa armrest organizer caddy",
  },
];

export const affiliateUrl = (pick: AffiliatePick) => amazonSearch(pick.query);
