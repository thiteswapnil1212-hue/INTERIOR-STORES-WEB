/**
 * Customer testimonials section.
 *
 * HOW TO USE:
 * 1. Add REAL customer reviews to the `testimonials` array below.
 *    Do not invent reviews — only use genuine feedback from customers.
 * 2. Import and render <Testimonials /> in src/app/page.tsx
 *    (suggested position: after <WhyMauli />, before <FinalCTA />).
 *
 * The section renders nothing while the array is empty, so it is
 * safe to leave mounted before reviews are added.
 */

type Testimonial = {
  quote: string;
  name: string;
  detail: string; // e.g. "2BHK, Wakad" or "Custom L-shape sofa"
};

const testimonials: Testimonial[] = [
  // Example (replace with real reviews):
  // {
  //   quote: "The sofa fits our living room perfectly and the fabric quality is excellent.",
  //   name: "Priya S.",
  //   detail: "Custom sofa, Baner",
  // },
];

export default function Testimonials() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-[#747878]/15 bg-[#f4f0eb]"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
          Customer words
        </p>

        <h2
          id="testimonials-heading"
          className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
        >
          Homes we&apos;ve furnished.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={`${testimonial.name}-${testimonial.detail}`}
              className="flex flex-col border border-[#747878]/15 bg-[#fbf9f6] p-7"
            >
              <blockquote className="flex-1 text-sm leading-7 text-[#444748]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 border-t border-[#747878]/15 pt-4">
                <p className="text-sm font-medium text-[#1b1c1a]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#6b6d69]">
                  {testimonial.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
