import { Heading } from "@/components/ui/Heading";

const facts = [
  {
    value: "45,000 sq. ft.",
    label: "Manufacturing Facility",
    image: "/assets/About_Us.jpg",
    alt: "45,000 sq. ft. manufacturing facility",
  },
  {
    value: "WPC & PVC",
    label: "Composite Specialisation",
    image: "/assets/00-Furniture-Hero.avif",
    alt: "WPC and PVC composite building materials",
  },
  {
    value: "KINFRA Park",
    label: "Kuttippuram, Kerala",
    image: "/assets/antas-build.jpg",
    alt: "KINFRA Industrial Park Kuttippuram Kerala facility",
  },
  {
    value: "AP Group",
    label: "Strategic Backing",
    image: "/assets/kes-group.jpg",
    alt: "AP Group strategic industrial backing",
  },
];

export function AboutWho() {
  return (
    <section
      id="about-who"
      aria-label="Who we are"
      className="w-full bg-white py-24 max-[768px]:py-16"
    >
      <div className="w-full px-[38px] max-[768px]:px-6">
        {/* Header styled like Spaces section / Cosentino Architectural Surfaces */}
        <div className="mx-auto mb-14 flex w-full max-w-[920px] flex-col gap-[25px] px-2.5 text-center max-[768px]:mb-10 max-phone:max-w-full">
          <p className="text-center text-fluid">
            Who We Are
          </p>
          <Heading className="mx-auto max-w-[860px] text-center max-tablet:max-w-full">
            Redefining Building Materials
            <br className="hidden sm:inline" />
            {" "}Through Sustainable Innovation
          </Heading>
        </div>

        {/* Editorial Description Block (900-1050px, Centered Container, Left-Aligned Text) */}
        <div className="mx-auto mb-16 lg:mb-20 max-w-[1000px] text-left max-[768px]:mb-12">
          {/* Lead Introductory Statement */}
          <p className="mb-8 text-[17.5px] leading-[1.68] font-normal text-[#242423] sm:text-[18.5px] max-[768px]:mb-6">
            <strong className="font-medium text-[#1a1a1a]">
              DEFENSEPLY INTERNATIONAL LLP
            </strong>{" "}
            is a new WPC manufacturing venture backed by the{" "}
            <strong className="font-medium text-[#1a1a1a]">AP Group</strong>
            , representing a strategic expansion into advanced composite
            building materials.
          </p>

          {/* Two-Column Editorial Company Description */}
          <div className="grid grid-cols-2 gap-10 lg:gap-14 max-[768px]:grid-cols-1 max-[768px]:gap-6 text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555552]">
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
                45,000 sq. ft. facility
              </strong>{" "}
              within{" "}
              <strong className="font-medium text-[#1a1a1a]">
                KINFRA Industrial Park, Kuttippuram, Kerala
              </strong>
              , our operations harness cutting-edge extrusion technology to
              produce sustainable, durable, and resilient alternatives for
              modern construction and interior architecture.
            </p>
          </div>
        </div>

        {/* Architectural Specification Panels in 1 Horizontal Row */}
        <div className="grid grid-cols-4 gap-4 lg:gap-5 max-[1024px]:grid-cols-2 max-[520px]:grid-cols-1">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-black/10 bg-[#181818] p-7 lg:min-h-[285px] lg:p-8 max-[520px]:min-h-[190px] max-[520px]:p-5 transition-colors duration-300 hover:border-[#d9c34a]/60"
            >
              {/* Normalized background architectural image */}
              <img
                src={fact.image}
                alt={fact.alt}
                loading="lazy"
                className="absolute inset-0 size-full object-cover object-center grayscale-[20%] contrast-[0.95] opacity-70 transition-[transform,opacity] duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-85"
              />

              {/* Subtle multi-stop gradient overlay supporting typography */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.72)_0%,rgba(17,17,17,0.38)_45%,rgba(17,17,17,0.85)_100%)] transition-opacity duration-300 group-hover:opacity-90" />

              {/* Subtle gold accent indicator on hover at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#d9c34a] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Primary Value (Top/Left) */}
              <span className="relative z-10 text-[clamp(21px,1.55vw,28px)] font-light leading-[1.12] tracking-[-0.015em] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                {fact.value}
              </span>

              {/* Secondary Label (Bottom/Left) */}
              <span className="relative z-10 text-[10px] font-medium tracking-[0.18em] uppercase text-[#dedcd5] [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
