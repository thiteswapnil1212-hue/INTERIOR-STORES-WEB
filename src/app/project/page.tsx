
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Custom Sofa",
    category: "Custom Furniture",
    location: "Pune",
    description:
      "Made-to-order seating designed around your space, comfort, and fabric preferences.",
    image: "/images/projects/project-01.jpg",
    imageLabel: "Sofa",
  },
  {
    number: "02",
    title: "Custom Curtains",
    category: "Curtains & Furnishing",
    location: "Pune",
    description:
      "Curtain styles and fabrics selected to complement the character of your home.",
    image: "/images/projects/project-02.jpg",
    imageLabel: "Curtains",
  },
  {
    number: "03",
    title: "Wall & Bed Panels",
    category: "Interior Panels",
    location: "PCMC",
    description:
      "Decorative panels made to bring a considered finish to bedrooms and living spaces.",
    image: "/images/projects/project-03.jpg",
    imageLabel: "Panels",
  },
  {
    number: "04",
    title: "Custom Furnishing",
    category: "Home Furnishing",
    location: "Pune",
    description:
      "A tailored approach to furnishing, with details chosen to suit your requirements.",
    image: "/images/projects/project-04.jpg",
    imageLabel: "Furnishing",
  },
];

function ProjectImage({
  image,
  imageLabel,
  featured = false,
}: {
  image: string;
  imageLabel: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden bg-[#e9e4dc] ${
        featured ? "aspect-[16/10]" : "aspect-[4/3]"
      }`}
    >
      {/* Decorative placeholder until real project photos are added */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f6f1e9] via-[#e9e4dc] to-[#d8cfc2]" />

        <div className="relative flex flex-col items-center gap-3 text-center">
          <span className="font-serif text-4xl text-[#805533]/50 sm:text-5xl">
            M.
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#805533]/75">
            {imageLabel}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 border border-black/[0.03]" />

      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
        <span className="inline-flex items-center gap-2 bg-[#fbf9f6]/90 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#444748] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#805533]" />
          Project showcase
        </span>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Our Projects | Mauli Interior",
  description:
    "Explore custom sofas, curtains, wall panels and furnishing work by Mauli Interior across Pune and PCMC.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf9f6] pt-20 text-[#1b1c1a]">

      {/* INTRO */}
      <section className="px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 md:px-16 md:pt-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#805533]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#805533]">
                  Our Work
                </p>
              </div>

              <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
                Made for
                <br />
                <span className="text-[#805533]">your space.</span>
              </h1>
            </div>

            <div className="max-w-md md:col-span-4 md:justify-self-end">
              <p className="text-[14px] leading-7 text-[#5c5e5c] sm:text-[15px]">
                Every home has its own character. We help bring it to life
                through custom sofas, curtains, panels, and thoughtful
                furnishing.
              </p>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#805533]">
                Pune · PCMC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-24 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8b8d89]">
              Featured category
            </p>
            <span className="text-[9px] uppercase tracking-[0.14em] text-[#8b8d89]">
              01 / 04
            </span>
          </div>

          <div className="grid gap-7 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-8">
              <ProjectImage
                image={projects[0].image}
                imageLabel={projects[0].imageLabel}
                featured
              />
            </div>

            <div className="md:col-span-4 md:pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#805533]">
                {projects[0].category}
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                {projects[0].title}
              </h2>

              <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#6b6d69]">
                {projects[0].description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#8b8d89]">
                <span className="h-1 w-1 rounded-full bg-[#805533]" />
                {projects[0].location}
              </div>

              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-11 items-center gap-4 border-b border-[#1b1c1a] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#805533] hover:text-[#805533]"
              >
                Enquire about a sofa
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="border-t border-[#747878]/15 px-5 py-16 sm:px-6 sm:py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                Explore our services
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Crafted around you.
              </h2>
            </div>

            <p className="max-w-xs text-[12px] leading-6 text-[#8b8d89]">
              Made-to-order furnishing for homes across Pune and PCMC.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:gap-x-8">
            {projects.slice(1).map((project) => (
              <article key={project.number} className="group">
                <ProjectImage
                  image={project.image}
                  imageLabel={project.imageLabel}
                />

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8b8d89]">
                      {project.number} / {project.category}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-md text-[12px] leading-6 text-[#6b6d69] sm:text-[13px]">
                      {project.description}
                    </p>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-[#8b8d89]">
                      {project.location}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    aria-label={`Enquire about ${project.title}`}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#747878]/25 text-lg transition-all duration-300 hover:border-[#805533] hover:bg-[#805533] hover:text-white"
                  >
                    ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM WORK CTA */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-28 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden bg-[#e9e4dc] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16">
            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#805533]/15 sm:-right-8 sm:-top-24 sm:h-80 sm:w-80" />
            <div className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#805533]/10 sm:h-64 sm:w-64" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
                  Have something in mind?
                </p>

                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                  Let&apos;s create something for your home.
                </h2>

                <p className="mt-4 max-w-lg text-[13px] leading-6 text-[#5c5e5c]">
                  Tell us what you need. We&apos;ll discuss your space,
                  preferences, and next steps.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-fit shrink-0 items-center gap-5 bg-[#1b1c1a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#805533]"
              >
                Start an Enquiry
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}