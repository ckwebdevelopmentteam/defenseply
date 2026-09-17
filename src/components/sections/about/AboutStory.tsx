const storyStats = [
  {
    value: "2 Acres",
    label: "Industrial Site",
    detail: "KINFRA Park, Kuttippuram",
  },
  {
    value: "NH66",
    label: "National Highway",
    detail: "Panvel–Kochi Corridor",
  },
  {
    value: "Nationwide",
    label: "Distribution Reach",
    detail: "Pan-India Logistics",
  },
  {
    value: "Sustainable",
    label: "Long-Term Vision",
    detail: "Zero-Deforestation",
  },
];

export function AboutStory() {
  return (
    <section
      id="about-story"
      aria-label="Our story and strategic vision"
      className="w-full bg-[#f4f3ef] py-24 max-[768px]:py-16"
    >
      <div className="w-full px-[38px] max-[768px]:px-6">
        {/* Refined Section Marker with subtle green accent line */}
        <div className="mb-8 flex items-center gap-2.5">
          <span className="h-px w-5 bg-[#1c3f21]" aria-hidden="true" />
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#8a8a86]">
            Our Story
          </p>
        </div>

        {/* Two-column editorial composition */}
        <div className="grid grid-cols-2 items-start gap-16 lg:gap-20 max-[960px]:grid-cols-1 max-[960px]:gap-12">
          {/* Left Column — Headline & Architectural Media Feature */}
          <div className="flex flex-col justify-between">
            <h2 className="text-[clamp(28px,2.6vw,46px)] font-light leading-[1.12] tracking-[-0.02em] uppercase text-[#1a1a1a]">
              Founded to Meet the Accelerating Demand for Sustainable
              Construction Alternatives
            </h2>

            {/* Architectural Infrastructure Media Panel */}
            <div className="group relative mt-10 overflow-hidden border border-black/10 bg-[#181818]">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/assets/york-paramedic-station.jpg"
                  alt="DefensePly 2-acre industrial facility infrastructure and national highway connectivity"
                  loading="lazy"
                  className="size-full object-cover object-center grayscale-[15%] contrast-[0.98] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-1 max-[520px]:p-4">
                  <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#e7e7e6]">
                    Plot 06, KINFRA Park · NH66 Corridor
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#a3d9a5]">
                    2-Acre Infrastructure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Narrative Copy */}
          <div className="space-y-6 text-[15px] leading-[1.78] text-[#555552] lg:pt-2">
            <p className="text-[17.5px] leading-[1.68] font-normal text-[#242423] sm:text-[18.5px]">
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
              DEFENSEPLY is positioned to lead India&apos;s transition toward{" "}
              <strong className="font-medium text-[#1a1a1a]">
                green architectural solutions
              </strong>{" "}
              — delivering products that serve residential, commercial, and
              industrial applications without compromising the environment.
            </p>

            {/* Strategic Highlight Callout */}
            <div className="mt-8 border-l-2 border-[#1c3f21] pl-5 py-1 text-[13.5px] leading-[1.7] text-[#6b6b66] italic">
              &ldquo;Engineered for durability and seamless nationwide accessibility,
              our facility stands at the forefront of India&apos;s composite building
              revolution.&rdquo;
            </div>
          </div>
        </div>

        {/* Architectural Specification Stat Blocks */}
        <div className="mt-16 lg:mt-20 grid grid-cols-4 gap-4 lg:gap-5 max-[1024px]:grid-cols-2 max-[520px]:grid-cols-1">
          {storyStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between border border-black/10 bg-white/90 p-7 lg:p-8 transition-all duration-300 hover:border-[#1c3f21]/60 hover:bg-white"
            >
              {/* Subtle green indicator on hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#1c3f21] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <span className="block text-[clamp(26px,2.2vw,38px)] font-light leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[11px] font-medium tracking-[0.18em] uppercase text-[#8a8a86]">
                  {stat.label}
                </span>
              </div>

              <span className="mt-6 block text-[10px] tracking-[0.14em] uppercase text-[#9e9e9a]">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
