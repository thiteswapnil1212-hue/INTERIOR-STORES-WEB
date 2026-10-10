import { ArrowRight } from "lucide-react";
import Reveal from "../motion/Reveal";

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
        <div className="mb-14 grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
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

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e8e3dd]">
              <video
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                poster="/images/media-pack/cushions-detail.jpg"
                aria-label="Close-up of premium fabric craftsmanship"
                className="h-full w-full object-cover"
              >
                <source src="/images/media-pack/whymauli-fabric.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Reasons — editorial index list */}
        <div className="border-t border-[#1b1c1a]/15">
          {reasons.map((reason) => (
            <Reveal key={reason.number}>
              <div className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b border-[#1b1c1a]/15 py-7 transition-colors duration-300 hover:bg-[#f6f3ee] motion-reduce:transition-none md:py-8">
                <span className="col-span-2 font-serif text-sm italic text-[#805533] md:col-span-1 md:text-base">
                  {reason.number}
                </span>
                <h3 className="col-span-10 font-serif text-2xl tracking-tight text-[#1b1c1a] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none md:col-span-5 md:text-3xl">
                  {reason.title}
                </h3>
                <p className="col-span-10 col-start-3 max-w-md text-sm leading-6 text-[#555755] md:col-span-5 md:col-start-7">
                  {reason.description}
                </p>
                <span className="hidden justify-self-end text-[#999a98] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#805533] motion-reduce:transition-none md:col-span-1 md:block" aria-hidden="true">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Reveal>
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
