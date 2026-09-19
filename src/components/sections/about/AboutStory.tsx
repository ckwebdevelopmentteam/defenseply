const storyFacts = [
  {
    number: "01",
    value: "2 Acres",
    label: "Industrial Site",
    detail: "KINFRA Park, Kuttippuram",
  },
  {
    number: "02",
    value: "NH66",
    label: "National Highway",
    detail: "Panvel–Kochi Corridor",
  },
  {
    number: "03",
    value: "Nationwide",
    label: "Distribution Reach",
    detail: "Pan-India Logistics",
  },
  {
    number: "04",
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
      className="w-full bg-[#f4f3ef] py-20 lg:py-24 max-[768px]:py-14 max-phone:py-12"
    >
      <div className="w-full px-[38px] max-[768px]:px-6 max-phone:px-4">
        {/* Header: Left-aligned editorial title and headline */}
        <div className="mb-12 lg:mb-16 flex w-full max-w-[1020px] flex-col gap-3.5 sm:gap-5 text-left items-start max-[768px]:mb-10 max-phone:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-[#1c3f21]" aria-hidden="true" />
            <p className="text-fluid text-left">
              Our Story
            </p>
          </div>
          <h2 className="max-w-[1020px] text-left text-[clamp(28px,2.8vw,46px)] font-light leading-[1.12] tracking-[-0.02em] uppercase text-[#1a1a1a]">
            Founded to Meet the Accelerating Demand for Sustainable Construction Alternatives
          </h2>
        </div>

        {/* Two-Column Editorial Layout: Image / Facility Visual + Structured Narrative */}
        <div className="grid grid-cols-[1.08fr_1fr] items-stretch gap-12 lg:gap-16 max-[960px]:grid-cols-1 max-[960px]:gap-10">
          {/* Left: Architectural Media Feature with Integrated Metadata */}
          <div className="group relative flex min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] w-full flex-col justify-between overflow-hidden border border-black/10 bg-[#181818]">
            <img
              src="/assets/york-paramedic-station.jpg"
              alt="DefensePly 2-acre industrial facility infrastructure and national highway connectivity"
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-center grayscale-[12%] contrast-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Subtle architectural gradient for text legibility */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

            {/* Top Metadata Badge */}
            <div className="relative z-10 m-5 flex items-center gap-2 self-start border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md max-[520px]:m-3.5">
              <span className="size-1.5 rounded-full bg-[#d9c34a]" aria-hidden="true" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/90">
                Facility Infrastructure
              </span>
            </div>

            {/* Bottom Integrated Specification Strip */}
            <div className="relative z-10 border-t border-white/15 bg-black/50 p-5 backdrop-blur-md max-[520px]:p-4">
              <div className="flex items-end justify-between gap-4 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-2">
                <div>
                  <span className="block text-[9.5px] font-medium tracking-[0.22em] uppercase text-[#d9c34a]">
                    Location & Corridor
                  </span>
                  <span className="mt-0.5 block text-[12px] font-light tracking-[0.06em] uppercase text-white/95">
                    Plot 06, KINFRA Park · NH66 Corridor
                  </span>
                </div>
                <div className="text-right max-[520px]:text-left">
                  <span className="block text-[9.5px] font-medium tracking-[0.22em] uppercase text-[#a3d9a5]">
                    Industrial Scale
                  </span>
                  <span className="mt-0.5 block text-[12px] font-light tracking-[0.06em] uppercase text-white/95">
                    2-Acre Infrastructure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Story Content */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Lead Paragraph */}
              <p className="text-[17px] sm:text-[18px] leading-[1.65] font-normal text-[#242423]">
                <strong className="font-medium text-[#1a1a1a]">DefensePly</strong> brings together decades of industrial manufacturing, architectural design, and supply chain leadership — united by a shared commitment to replacing conventional timber with advanced, eco-responsible composite solutions.
              </p>

              {/* Physical Infrastructure & Nationwide Logistics */}
              <div className="border-t border-black/8 pt-5">
                <span className="mb-2 block text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#8a8a86]">
                  Strategic Logistics & Reach
                </span>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#555552]">
                  Operating on a{" "}
                  <strong className="font-medium text-[#1a1a1a]">
                    2-acre industrial site along National Highway 66 (NH66)
                  </strong>
                  , our facility is engineered to support nationwide distribution and long-term expansion. Our strategic location along the Panvel–Kochi–Kanyakumari National Highway provides seamless raw material intake and product delivery connectivity across India.
                </p>
              </div>

              {/* Green Transition & Sustainability Mission */}
              <div className="border-t border-black/8 pt-5">
                <span className="mb-2 block text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#8a8a86]">
                  Sustainable Transition
                </span>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#555552]">
                  DEFENSEPLY is positioned to lead India&apos;s transition toward{" "}
                  <strong className="font-medium text-[#1a1a1a]">
                    green architectural solutions
                  </strong>{" "}
                  — delivering products that serve residential, commercial, and industrial applications without compromising the environment.
                </p>
              </div>
            </div>

            {/* Highlighted Statement Callout */}
            <div className="mt-6 border-l-2 border-[#1c3f21] bg-black/[0.025] py-3.5 pl-5 pr-4">
              <p className="text-[13.5px] leading-[1.68] font-light text-[#444440] italic">
                &ldquo;Engineered for durability and seamless nationwide accessibility, our facility stands at the forefront of India&apos;s composite building revolution.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Four Story Markers / Facts — Integrated Editorial Information Strip */}
        <div className="mt-14 lg:mt-18 border-t border-black/10 pt-10 lg:pt-12">
          <div className="grid grid-cols-4 gap-6 lg:gap-8 max-[1024px]:grid-cols-2 max-[520px]:grid-cols-1">
            {storyFacts.map((fact) => (
              <div
                key={fact.label}
                className="group flex flex-col justify-between border-l border-black/10 pl-6 transition-colors duration-250 hover:border-[#1c3f21]"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-[0.16em] text-[#979793]">
                      {fact.number}
                    </span>
                    <span className="h-px w-3 bg-[#1c3f21]/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                  </div>
                  <span className="block text-[clamp(24px,1.9vw,32px)] font-light leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
                    {fact.value}
                  </span>
                  <span className="mt-1.5 block text-[11px] font-medium tracking-[0.18em] uppercase text-[#666661]">
                    {fact.label}
                  </span>
                </div>

                <span className="mt-5 block text-[10px] tracking-[0.14em] uppercase text-[#999994]">
                  {fact.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
