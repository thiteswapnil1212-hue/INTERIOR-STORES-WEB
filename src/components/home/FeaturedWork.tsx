import Image from "next/image";

export default function FeaturedWork() {
  const items = [
    { title: "Sofas", src: "/images/home/featured-sofa.jpg" },
    { title: "Curtains", src: "/images/home/featured-curtains.jpg" },
    { title: "Beds", src: "/images/home/featured-beds.jpg" },
    { title: "Furnishing", src: "/images/home/featured-furnishing.jpg" },
  ];
  return (
    <section className="px-6 py-12 md:px-16 md:py-20 bg-[#fbf9f6] text-[#1b1c1a]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">Featured Work</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative h-64 overflow-hidden border border-[#747878]/15 bg-[#e9e5df]"
            >
              <Image
                src={item.src}
                alt={`Custom ${item.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl text-white drop-shadow-md">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
