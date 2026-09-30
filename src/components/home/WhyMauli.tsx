import { ArrowRight } from "lucide-react";
import TiltCard from "../motion/TiltCard";

export default function WhyMauli() {
  const reasons = [
    {
      number: "01",
      title: "Made to Measure",
      description:
        "Built to your exact dimensions and layout.",
    },
    {
      number: "02",
      title: "Quality Materials",
      description:
        "Fabrics, wood, cushioning and hardware picked to last.",
    },
    {
      number: "03",
      title: "Personalised Design",
      description:
        "Fabric, colour, shape, finish — chosen around your space.",
    },
    {
      number: "04",
      title: "Local Craftsmanship",
      description:
        "Made by skilled craftsmen in Pune, with care in every detail.",
    },
  ];

  return (
    <section aria-label="Why choose Mauli Interior" className="bg-[#fbf9f6] px-6 py-16 text-[#1b1c1a] md:px-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Intro */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#805533]">
            Why Mauli
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Made around you.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#555755] md:text-base">
            No catalogue pieces. Everything is made for your home — your
            measurements, your fabric, your style.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid border-t border-[#747878]/15 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <TiltCard
              key={reason.number}
              maxTilt={4}
              glare={false}
              className={`border-b border-[#747878]/15 ${
                index % 2 === 0
                  ? "md:border-r md:border-[#747878]/15"
                  : ""
              }`}
            >
              <div
                className="group h-full p-7 transition-colors duration-300 hover:bg-[#f6f3ee] motion-reduce:transition-none md:p-9"
              >
              {/* Number */}
              <div className="mb-8 flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.12em] text-[#805533]">
                  {reason.number}
                </span>

                <span className="text-xs text-[#999a98] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-[#1b1c1a] md:text-3xl">
                {reason.title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#555755]">
                {reason.description}
              </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Trust / Craft Strip */}
        <div className="mt-12 grid grid-cols-2 border-y border-[#747878]/15 md:grid-cols-4">
          <div className="border-b border-[#747878]/15 px-5 py-6 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">
              Custom Made
            </p>
          </div>

          <div className="border-b border-[#747878]/15 px-5 py-6 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">
              Local Craft
            </p>
          </div>

          <div className="border-b border-[#747878]/15 px-5 py-6 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">
              Quality Materials
            </p>
          </div>

          <div className="px-5 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">
              Pune & PCMC
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}