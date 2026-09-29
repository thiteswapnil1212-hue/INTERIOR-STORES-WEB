const items = [
  "Custom Sofas",
  "Curtains",
  "Beds",
  "Mattresses",
  "Cushions",
  "Wall Panels",
];

/**
 * Slim scrolling strip of service names below the hero.
 * Decorative — hidden from assistive tech since the same
 * services are listed in the page content.
 */
export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-b border-black/5 bg-[#f4f0eb] py-3.5"
    >
      <div className="animate-marquee flex w-max items-center">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6b6d69]"
          >
            <span className="px-6">{item}</span>
            <span className="h-1 w-1 rounded-full bg-[#805533]" />
          </span>
        ))}
      </div>
    </div>
  );
}
