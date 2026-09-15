const facts = [
  { value: "45,000 sq. ft.", label: "Manufacturing Facility" },
  { value: "WPC & PVC", label: "Composite Specialisation" },
  { value: "KINFRA Park", label: "Kuttippuram, Kerala" },
  { value: "AP Group", label: "Strategic Backing" },
];

export function AboutWho() {
  return (
    <section
      id="about-who"
      aria-label="Who we are"
      className="w-full bg-white py-24 max-[768px]:py-16"
    >
      <div className="mx-auto w-full max-w-[1500px] px-[38px] max-[768px]:px-6">
        {/* Eyebrow */}
        <p className="mb-10 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
          Who We Are
        </p>

        {/* Split layout */}
        <div className="grid grid-cols-[1.1fr_1fr] items-start gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Left — Company narrative */}
          <div>
            <h2 className="mb-8 text-[clamp(28px,2.5vw,44px)] leading-[1.14] font-light uppercase text-[#1a1a1a]">
              Redefining Building Materials Through Sustainable Innovation
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.7] text-[#555]">
              <p>
                <strong className="font-medium text-[#1a1a1a]">
                  DEFENSEPLY INTERNATIONAL LLP
                </strong>{" "}
                is a new WPC manufacturing venture backed by the{" "}
                <strong className="font-medium text-[#1a1a1a]">AP Group</strong>
                , representing a strategic expansion into advanced composite
                building materials.
              </p>
              <p>
                The company specialises in{" "}
                <strong className="font-medium text-[#1a1a1a]">
                  Wood Polymer Composite (WPC)
                </strong>{" "}
                and{" "}
                <strong className="font-medium text-[#1a1a1a]">
                  Polyvinyl Chloride (PVC)
                </strong>{" "}
                form boards, doors, and frames — engineered to deliver the
                timeless warmth and aesthetic appeal of natural wood, while
                entirely eliminating traditional structural flaws such as water
                damage, termite degradation, and warping.
              </p>
              <p>
                Headquartered at our{" "}
                <strong className="font-medium text-[#1a1a1a]">
                  45,000 sq. ft. facility within KINFRA Industrial Park,
                  Kuttippuram, Kerala
                </strong>
                , our operations harness cutting-edge extrusion technology to
                produce sustainable, durable, and resilient alternatives for
                modern construction and interior architecture.
              </p>
            </div>
          </div>

          {/* Right — Key facts grid */}
          <div className="grid grid-cols-2 gap-px bg-black/8 border border-black/8">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col justify-between bg-[#f7f8f9] px-7 py-8 max-[520px]:px-5 max-[520px]:py-6"
              >
                <span className="mb-3 text-[clamp(20px,1.8vw,30px)] leading-[1.15] font-light text-[#1a1a1a]">
                  {fact.value}
                </span>
                <span className="text-[11px] font-medium tracking-[.12em] uppercase text-[#979793]">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
