const features = [
  {
    number: "01",
    title: "Built for Comfort",
    description:
      "Carefully selected cushioning and supportive seating designed for everyday comfort.",
  },
  {
    number: "02",
    title: "Made to Measure",
    description:
      "Every sofa is made according to your room dimensions, ensuring the right fit.",
  },
  {
    number: "03",
    title: "Your Choice of Fabric",
    description:
      "Choose from a range of fabrics, colours and textures to match your interior.",
  },
  {
    number: "04",
    title: "Made to Last",
    description:
      "Strong construction and quality materials create sofas made for years of use.",
  },
];

export default function SeatingFeatures() {
  return (
    <section className="border-t border-[#747878]/15 px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Heading */}
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#805533]">
              Why Choose Custom
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#1b1c1a] md:text-5xl">
              Comfort made
              <br />
              for you.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#444748]">
              Your sofa should feel as good as it looks. We customise every
              detail to create seating that works beautifully for your home.
            </p>
          </div>

          {/* Features */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="divide-y divide-[#747878]/15 border-y border-[#747878]/15">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="grid gap-4 py-7 md:grid-cols-[60px_1fr]"
                >
                  <span className="text-xs font-medium tracking-[0.1em] text-[#805533]">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl text-[#1b1c1a]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#444748]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}