const missionItems = [
  {
    title: "Innovation in Composite Technology",
    description:
      "To manufacture world-class WPC and PVC building materials utilising state-of-the-art extrusion technology and continuous process optimisation.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "To actively conserve natural forests by replacing conventional timber with 100% recyclable, toxin-free composite solutions that minimise environmental impact.",
  },
  {
    title: "Uncompromised Quality",
    description:
      "To deliver unmatched product durability, superior screw-holding capacity, and complete resistance to moisture, fire, and pests across residential, commercial, and industrial applications.",
  },
  {
    title: "Customer & Partner Success",
    description:
      "To empower architects, contractors, interior designers, and homeowners with reliable supply chains, seamless customisation, and exceptional service standards.",
  },
];

export function AboutVisionMission() {
  return (
    <section
      id="about-vision"
      aria-label="Vision and mission"
      className="w-full bg-white py-24 max-[768px]:py-16"
    >
      <div className="w-full px-[38px] max-[768px]:px-6">
        {/* Vision */}
        <div className="mb-20 border-t border-black/8 pt-12 max-[768px]:mb-14 max-[768px]:pt-9">
          <p className="mb-6 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
            Our Vision
          </p>
          <blockquote className="max-w-[900px] text-[clamp(22px,2.2vw,38px)] leading-[1.25] font-light text-[#1a1a1a]">
            To be India&apos;s premier manufacturer of advanced composite
            building materials, leading the global evolution toward
            zero-deforestation, sustainable eco-architecture and
            high-performance structural solutions.
          </blockquote>
        </div>

        {/* Mission */}
        <div>
          <p className="mb-10 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
            Our Mission
          </p>
          <div className="grid grid-cols-2 gap-px bg-black/8 border border-black/8 max-[768px]:grid-cols-1">
            {missionItems.map((item, i) => (
              <article
                key={item.title}
                className="relative bg-[#f7f8f9] px-8 py-9 max-[768px]:px-6 max-[768px]:py-7"
              >
                <span className="mb-5 block text-[10px] font-medium tracking-[.2em] uppercase text-[#979793]">
                  0{i + 1}
                </span>
                <h3 className="mb-4 text-[15px] font-medium uppercase tracking-[.02em] text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#666]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
