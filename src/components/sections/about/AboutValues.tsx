const values = [
  {
    title: "Sustainability",
    description:
      "Committed to zero deforestation, lower carbon footprints, and fully recyclable product lifecycles.",
  },
  {
    title: "Precision & Quality",
    description:
      "Rigorous quality control at every stage of extrusion, blending, and surface finishing.",
  },
  {
    title: "Integrity",
    description:
      "Transparent commercial practices, reliable delivery, and long-term partnerships with dealers and clients.",
  },
  {
    title: "Customer-Centric Innovation",
    description:
      "Developing continuous solutions tailored to modern architectural demands, custom textures, and precise specifications.",
  },
];

export function AboutValues() {
  return (
    <section
      id="about-values"
      aria-label="Core values"
      className="w-full bg-[#f4f3ef] py-24 max-[768px]:py-16"
    >
      <div className="w-full px-[38px] max-[768px]:px-6">
        <div className="mb-12 flex items-end justify-between gap-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4">
          <div>
            <p className="mb-4 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
              Core Values
            </p>
            <h2 className="text-[clamp(28px,2.5vw,44px)] leading-[1.14] font-light uppercase text-[#1a1a1a]">
              What We Stand For
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[520px]:grid-cols-1">
          {values.map((value, i) => (
            <article
              key={value.title}
              className="relative flex flex-col overflow-hidden border border-black/6 bg-[#f7f8f9] px-7 py-8 transition-[transform,box-shadow] duration-350 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_#0000000f] max-[768px]:px-6 max-[768px]:py-7"
            >
              {/* Number accent */}
              <span className="mb-6 block text-[10px] font-medium tracking-[.2em] uppercase text-[#979793]">
                0{i + 1}
              </span>
              <h3 className="mb-4 text-[13px] font-medium uppercase tracking-[.05em] text-[#1a1a1a]">
                {value.title}
              </h3>
              <p className="mt-auto text-[13px] leading-[1.7] text-[#666]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
