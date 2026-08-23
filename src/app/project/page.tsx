import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Custom Sofa",
    category: "Custom Furniture",
    location: "Pune",
    image: "/images/projects/project-01.jpg",
  },
  {
    number: "02",
    title: "Custom Curtains",
    category: "Curtains",
    location: "Pune",
    image: "/images/projects/project-02.jpg",
  },
  {
    number: "03",
    title: "Wall & Bed Panels",
    category: "Interior Panels",
    location: "PCMC",
    image: "/images/projects/project-03.jpg",
  },
  {
    number: "04",
    title: "Custom Furnishing",
    category: "Furnishing",
    location: "Pune",
    image: "/images/projects/project-04.jpg",
  },
];

export const metadata = {
  title: "Projects",
  description:
    "Explore custom sofas, curtains, wall panels and furnishing work by Mauli Interior across Pune and PCMC.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] pt-20 text-[#1b1c1a]">
      {/* INTRO */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#805533]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                Our Work
              </p>
            </div>

            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Selected
              <br />
              <span className="text-[#805533]">work.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#5c5e5c] md:text-base">
              A selection of custom furnishing work created by Mauli Interior
              for homes across Pune and PCMC.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="px-6 pb-20 md:px-16 md:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="group relative aspect-[16/10] overflow-hidden bg-[#e9e5df]">
                <Image
                  src={projects[0].image}
                  alt="Custom sofa project by Mauli Interior in Pune"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="md:col-span-4 md:pb-2 md:pl-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b8d89]">
                {projects[0].number}
              </p>

              <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                {projects[0].title}
              </h2>

              <p className="mt-3 text-sm text-[#6b6d69]">
                {projects[0].category} · {projects[0].location}
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#805533] hover:text-[#805533]"
              >
                Start a similar project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-[#747878]/15 px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                Projects
              </p>

              <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                Crafted for real spaces.
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.14em] text-[#8b8d89] md:block">
              04 Projects
            </span>
          </div>

          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
            {projects.slice(1).map((project) => (
              <article key={project.number} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e5df]">
                  <Image
                    src={project.image}
                    alt={`${project.title} by Mauli Interior in ${project.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b8d89]">
                      {project.number}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#6b6d69]">
                      {project.category} · {project.location}
                    </p>
                  </div>

                  <span className="mt-2 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1440px] border-t border-[#747878]/15 pt-12 md:pt-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                Start something new
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                Have a furnishing project in mind?
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-5 bg-[#1b1c1a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#805533]"
            >
              Start an Enquiry
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}