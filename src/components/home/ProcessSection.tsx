export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Home visit & measurement",
      description:
        "We visit your home across Pune and PCMC to take measurements and understand your space.",
    },
    {
      number: "02",
      title: "Fabric & design selection",
      description:
        "Choose fabrics, colours, shapes and finishes around your style and budget.",
    },
    {
      number: "03",
      title: "Handcrafted in Pune",
      description:
        "Skilled craftsmen build your piece in our Bhosari workshop, with care in every detail.",
    },
    {
      number: "04",
      title: "Delivered & fitted",
      description:
        "We deliver your furniture and set it up in your home, ready to live with.",
    },
  ];

  return (
    <section
      aria-labelledby="process-heading"
      className="border-b border-black/5 bg-[#f4f0eb] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#805533]">
            How it works
          </p>
          <h2
            id="process-heading"
            className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
          >
            From your home to your home.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#656765]">
            Custom furniture, without the guesswork. Here&apos;s how an order
            with Mauli Interior moves, step by step.
          </p>
        </div>

        <ol className="grid gap-px overflow-hidden bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="bg-[#f4f0eb] p-7 md:p-8">
              <span className="text-xs font-medium tracking-[0.12em] text-[#805533]">
                {step.number}
              </span>
              <h3 className="mt-6 font-serif text-2xl text-[#1b1c1a]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#656765]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
