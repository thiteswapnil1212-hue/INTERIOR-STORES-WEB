import StudioViewer from "../../components/studio/StudioViewer";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] pt-20 text-[#1b1c1a]">
      <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-16 md:py-14">
        <div className="mb-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#805533]">
            Mauli 3D Studio
          </p>

          <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
            Visualise your space.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c5e5c]">
            Explore your interior in an interactive 3D space.
          </p>
        </div>

        <StudioViewer />
      </section>
    </main>
  );
}