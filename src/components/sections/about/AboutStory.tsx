const storyStats = [
  { value: "2 Acres", label: "Industrial Site" },
  { value: "NH66", label: "National Highway" },
  { value: "Nationwide", label: "Distribution Reach" },
  { value: "Sustainable", label: "Long-Term Vision" },
];

export function AboutStory() {
  return (
    <section
      id="about-story"
      aria-label="Our story and strategic vision"
      className="w-full bg-[#e7e7e6] py-24 max-[768px]:py-16"
    >
      <div className="mx-auto w-full max-w-[1500px] px-[38px] max-[768px]:px-6">
        {/* Eyebrow */}
        <p className="mb-10 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
          Our Story
        </p>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-2 items-start gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Left — Large heading */}
          <div>
            <h2 className="text-[clamp(28px,2.8vw,52px)] leading-[1.1] font-light uppercase text-[#1a1a1a]">
              Founded to Meet the Accelerating Demand for Sustainable
              Construction Alternatives
            </h2>
          </div>

          {/* Right — Narrative */}
          <div className="space-y-5 text-[15px] leading-[1.7] text-[#555]">
            <p>
              DefensePly brings together decades of industrial manufacturing,
              architectural design, and supply chain leadership — united by a
              shared commitment to replacing conventional timber with advanced,
              eco-responsible composite solutions.
            </p>
            <p>
              Operating on a{" "}
              <strong className="font-medium text-[#1a1a1a]">
                2-acre industrial site along National Highway 66 (NH66)
              </strong>
              , our facility is engineered to support nationwide distribution
              and long-term expansion. Our strategic location along the
              Panvel–Kochi–Kanyakumari National Highway provides seamless raw
              material intake and product delivery connectivity across India.
            </p>
            <p>
              DEFENSEPLY is positioned to lead India's transition toward{" "}
              <strong className="font-medium text-[#1a1a1a]">
                green architectural solutions
              </strong>{" "}
              — delivering products that serve residential, commercial, and
              industrial applications without compromising the environment.
            </p>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid grid-cols-4 gap-px border border-black/8 bg-black/8 max-[600px]:grid-cols-2 max-[600px]:gap-y-px">
          {storyStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-white px-6 py-9 text-center max-[600px]:py-7"
            >
              <span className="mb-2 text-[clamp(28px,2.5vw,44px)] leading-[1.1] font-light text-[#1a1a1a]">
                {stat.value}
              </span>
              <span className="text-[11px] font-medium tracking-[.12em] uppercase text-[#979793]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
