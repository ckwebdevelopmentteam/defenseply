import { aboutPurposeData as data } from "@/data/about-purpose";
import { AboutMission } from "./AboutMission";

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
              Better Possibilities{" "}
              <span className="underline decoration-1 underline-offset-[0.13em] decoration-[#F5F4EF]/65">
                Tomorrow.
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

      {/* B. MISSION — EDITORIAL STICKY PHOTOGRAPH & PRINCIPLES */}
      <AboutMission />
    </section>
  );
}
