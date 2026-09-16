import {
  aboutPurposeData as data,
  type MissionItem,
} from "@/data/about-purpose";

function MissionRow({ item }: { item: MissionItem }) {
  return (
    <li className="flex items-start gap-[14px] md:gap-[20px] border-t border-[#D7D8D0] last:border-b py-[22px] md:py-[24px] bg-transparent">
      <span
        className="w-[24px] md:w-[28px] shrink-0 pt-[4px] text-[12px] font-normal tabular-nums text-[#686D63]"
        aria-hidden="true"
      >
        {item.number}
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="text-[18px] md:text-[19px] font-normal leading-[1.3] text-[#292C28]">
          {item.title}
        </h4>
        <p className="mt-[8px] text-[14px] leading-[1.7] text-[#555A52] max-w-[48ch]">
          {item.description}
        </p>
      </div>
    </li>
  );
}

export function AboutVisionMission() {
  return (
    <section
      id="about-vision"
      aria-labelledby="about-vision-heading"
      className="w-full bg-white py-[48px] md:py-[64px] min-[1100px]:py-[96px] px-[20px] md:px-[28px] min-[1100px]:px-[38px] font-sans"
    >
      <h2 id="about-vision-heading" className="sr-only">
        Our vision and mission
      </h2>

      <div className="mx-auto w-full max-w-[1440px] flex flex-col min-[1100px]:flex-row min-[1100px]:items-stretch gap-0">
        {/* Left Panel: Vision (44% on desktop >=1100px) */}
        <div className="w-full min-[1100px]:w-[44%] min-[1100px]:basis-[44%] shrink-0 grow-0 bg-[#292C28] py-[32px] px-[24px] md:p-[48px] min-[1100px]:p-[56px] flex flex-col">
          <div className="flex flex-col min-[1100px]:mb-[48px]">
            {/* Top Eyebrow */}
            <div className="flex items-center gap-[12px]">
              <span
                className="h-[1px] w-[24px] shrink-0 bg-[#D6C58E]"
                aria-hidden="true"
              />
              <span className="text-[11px] font-medium tracking-[0.18em] text-[#D1D3CA] uppercase">
                {data.vision.label}
              </span>
            </div>

            {/* Editorial Statement */}
            <h3 className="mt-[28px] md:mt-[32px] min-[1100px]:mt-[40px] text-[clamp(32px,8.5vw,40px)] md:text-[48px] min-[1100px]:text-[52px] font-light leading-[1.08] tracking-[-0.025em] max-w-[11.5em] [text-wrap:balance]">
              <span className="block text-[#F4F3EF]">
                {data.vision.statement[0]}
              </span>
              <span className="mt-[12px] block text-[#D1D3CA]">
                {data.vision.statement[1]}
              </span>
            </h3>

            {/* Body Copy */}
            <p className="mt-[28px] text-[15px] md:text-[16px] font-normal leading-[1.75] text-[#D1D3CA] max-w-[38ch]">
              {data.vision.description}
            </p>
          </div>

          {/* Bottom Caption Area */}
          <div className="mt-[40px] min-[1100px]:mt-auto border-t border-white/20 pt-[18px]">
            <p className="text-[12px] leading-[1.5] text-[#D1D3CA]">
              {data.vision.caption}
            </p>
          </div>
        </div>

        {/* Right Panel: Mission (56% on desktop >=1100px) */}
        <div className="w-full min-[1100px]:w-[56%] min-[1100px]:basis-[56%] shrink-0 grow-0 bg-[#F4F3EF] py-[32px] px-[24px] md:p-[48px] min-[1100px]:p-[56px] flex flex-col">
          {/* Top Eyebrow */}
          <p className="text-[11px] font-medium tracking-[0.18em] text-[#686D63] uppercase">
            {data.mission.label}
          </p>

          {/* Mission Heading */}
          <h3 className="mt-[24px] text-[30px] md:text-[36px] min-[1100px]:text-[38px] font-light leading-[1.15] tracking-[-0.02em] text-[#292C28] max-w-[19ch]">
            <span className="block">{data.mission.heading[0]}</span>
            <span className="block">{data.mission.heading[1]}</span>
          </h3>

          {/* Intro Paragraph */}
          <p className="mt-[20px] text-[15px] leading-[1.7] text-[#555A52] max-w-[48ch]">
            {data.mission.intro}
          </p>

          {/* Mission List */}
          <ol className="mt-[28px] md:mt-[36px] list-none p-0 m-0 w-full">
            {data.mission.items.map((item) => (
              <MissionRow key={item.id} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
