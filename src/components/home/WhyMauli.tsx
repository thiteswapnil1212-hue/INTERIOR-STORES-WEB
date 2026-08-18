export default function WhyMauli() {
  const reasons = [
    { number: "01", title: "Made to Measure", description: "Every piece is crafted to fit your exact dimensions and needs." },
    { number: "02", title: "Quality Materials", description: "We use premium fabrics, woods, and hardware for lasting durability." },
    { number: "03", title: "Personalised Design", description: "Collaborative design process that reflects your style and space." },
    { number: "04", title: "Local Craftsmanship", description: "Hand‑crafted by skilled artisans in Pune and surrounding areas." },
  ];
  return (
    <section className="px-6 py-12 md:px-16 md:py-20 bg-[#fbf9f6] text-[#1b1c1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">Why Mauli</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.number} className="border border-[#747878]/15 p-6 hover:border-[#1b1c1a] transition-colors">
              <p className="text-xs font-medium text-[#805533] mb-2">{r.number}</p>
              <h3 className="font-serif text-2xl text-[#1b1c1a] mb-2">{r.title}</h3>
              <p className="text-[#444748] text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
