import {
  aboutPurposeData as data,
  type MissionItem,
  type MissionTone,
} from "@/data/about-purpose";

const TONE_BG: Record<MissionTone, string> = {
  clay: "bg-[#E9BFB1]",
  sage: "bg-[#CED8C8]",
  blue: "bg-[#BED3DC]",
  sand: "bg-[#E6D8BD]",
};

function MissionPanel({ item }: { item: MissionItem }) {
  return (
    <li
      className={`flex flex-col ${TONE_BG[item.tone]} py-[32px] px-[24px] md:p-[36px] min-[1200px]:py-[30px] min-[1200px]:px-[28px] text-[#252725]`}
    >
      <span
        className="text-[12px] font-normal tracking-[0.08em] text-[#4C5149] tabular-nums"
        aria-hidden="true"
      >
        {item.number}
      </span>

      <p className="mt-[24px] text-[12px] font-medium uppercase tracking-[0.1em] leading-[1.5] text-[#252725]">
        {item.category}
      </p>

      <h4 className="mt-[14px] text-[38px] md:text-[42px] min-[1200px]:text-[38px] font-light leading-[1.08] tracking-[-0.025em] text-[#252725]">
        <span className="block">{item.headingLines[0]}</span>
        <span className="block">{item.headingLines[1]}</span>
      </h4>

      <div
        className="mt-[28px] h-[1px] w-full bg-[#252725]/25"
        aria-hidden="true"
      />

      <p className="mt-[20px] text-[15px] leading-[1.7] font-normal text-[#343A32]">
        {item.description}
      </p>
    </li>
  );
}

export function AboutVisionMission() {
  return (
    <section
      id="about-vision"
      aria-labelledby="about-vision-heading"
      className="w-full font-sans"
    >
      <h2 id="about-vision-heading" className="sr-only">
        Our vision and mission
      </h2>

      {/* A. VISION — FULL-WIDTH DARK STATEMENT */}
      <section
        aria-labelledby="vision-statement-heading"
        className="w-full bg-[#252725] pt-[60px] pb-[48px] md:pt-[80px] md:pb-[64px] min-[1200px]:pt-[104px] min-[1200px]:pb-[88px]"
      >
        <div className="w-full max-w-[1680px] mx-auto px-[20px] md:px-[36px] min-[1200px]:px-[64px] box-border flex flex-col items-center text-center">
          {/* 1. Eyebrow */}
          <p className="text-[12px] font-medium tracking-[0.18em] leading-[1.5] text-[#D1D3CC] uppercase">
            {data.vision.label}
          </p>

          {/* 2. Main Statement */}
          <h3
            id="vision-statement-heading"
            className="mt-[24px] md:mt-[32px] text-[clamp(32px,8.8vw,44px)] md:text-[48px] min-[1200px]:text-[clamp(48px,4.3vw,72px)] font-light leading-[1.08] tracking-[-0.025em] text-[#F5F4EF] max-w-[1180px] mx-auto [text-wrap:balance]"
          >
            <span className="block">{data.vision.headingLines[0]}</span>
            <span className="block">
              Better possibilities{" "}
              <span className="underline decoration-1 underline-offset-[0.13em] decoration-[#F5F4EF]/65">
                tomorrow.
              </span>
            </span>
          </h3>

          {/* 3. Supporting Paragraph */}
          <p className="mt-[24px] md:mt-[32px] text-[16px] md:text-[17px] min-[1200px]:text-[18px] font-normal leading-[1.65] text-[#D1D3CC] max-w-[680px] mx-auto">
            {data.vision.description}
          </p>

          {/* 4. Closing Principles Line */}
          <div className="mt-[36px] md:mt-[56px] w-full max-w-[820px] mx-auto border-t border-white/20 pt-[22px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[24px] text-center text-[13px] md:text-[14px] font-normal text-[#D1D3CC]">
              {data.vision.principles.map((principle) => (
                <span key={principle}>{principle}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B. MISSION — LIGHT INTRODUCTION AND COLOURED PANELS */}
      <section
        aria-labelledby="mission-statement-heading"
        className="w-full bg-[#FFFFFF] py-[48px] md:py-[64px] min-[1200px]:pt-[88px] min-[1200px]:pb-[96px]"
      >
        <div className="w-full max-w-[1680px] mx-auto px-[20px] md:px-[36px] min-[1200px]:px-[64px] box-border">
          {/* 1. Mission Introduction */}
          <div className="w-full max-w-[920px] mx-auto text-center flex flex-col items-center">
            {/* Eyebrow */}
            <p className="text-[12px] font-medium tracking-[0.18em] text-[#62665F] uppercase">
              {data.mission.label}
            </p>

            {/* Heading */}
            <h3
              id="mission-statement-heading"
              className="mt-[24px] text-[32px] md:text-[42px] min-[1200px]:text-[48px] font-light leading-[1.12] tracking-[-0.02em] text-[#252725] [text-wrap:balance]"
            >
              <span className="block">{data.mission.headingLines[0]}</span>
              <span className="block">{data.mission.headingLines[1]}</span>
            </h3>

            {/* Paragraph */}
            <p className="mt-[24px] text-[16px] min-[1200px]:text-[17px] font-normal leading-[1.65] text-[#565B53] max-w-[620px] mx-auto">
              {data.mission.description}
            </p>
          </div>

          {/* 2. Mission Panels */}
          <ol className="mt-[32px] md:mt-[40px] min-[1200px]:mt-[56px] w-full list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-4 gap-0">
            {data.mission.items.map((item) => (
              <MissionPanel key={item.id} item={item} />
            ))}
          </ol>
        </div>
      </section>
    </section>
  );
}
