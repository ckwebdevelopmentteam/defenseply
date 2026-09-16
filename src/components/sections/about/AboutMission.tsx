import fs from "node:fs";
import path from "node:path";
import { aboutPurposeData as data } from "@/data/about-purpose";
import {
  MissionPrinciples,
  type ResolvedMissionItem,
} from "./MissionPrinciples";

const EXTENSIONS = [".webp", ".avif", ".jpg", ".jpeg", ".png"];

function resolveItemImage(
  preferredFileBase: string,
  fallbackSrc: string,
): string {
  for (const ext of EXTENSIONS) {
    const relativePath = `${preferredFileBase}${ext}`;
    const fullPath = path.resolve(process.cwd(), "public", relativePath);
    if (fs.existsSync(fullPath)) {
      return `/${relativePath}`;
    }
  }

  const fallbackRel = fallbackSrc.startsWith("/")
    ? fallbackSrc.slice(1)
    : fallbackSrc;
  const fallbackFullPath = path.resolve(process.cwd(), "public", fallbackRel);
  if (fs.existsSync(fallbackFullPath)) {
    return fallbackSrc;
  }

  return fallbackSrc;
}

export function AboutMission() {
  const resolvedItems: readonly ResolvedMissionItem[] = data.mission.items.map(
    (item) => ({
      id: item.id,
      number: item.number,
      category: item.category,
      headingLines: item.headingLines,
      description: item.description,
      imageSrc: resolveItemImage(item.preferredFileBase, item.fallbackSrc),
      alt: item.alt,
      objectPosition: item.objectPosition,
    }),
  );

  return (
    <section
      id="about-mission"
      aria-labelledby="mission-statement-heading"
      className="w-full bg-[#F5F3EE] py-[56px] md:py-[72px] min-[1100px]:py-[104px] text-[#252725] font-sans"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[36px] min-[1100px]:px-[64px] box-border">
        {/* 1. Top label row */}
        <div className="w-full flex items-center justify-between text-[11px] font-medium tracking-[0.16em] leading-[1.5] text-[#656B61] uppercase">
          <span>{data.mission.label}</span>
          <span aria-hidden="true">{data.mission.sequenceLabel}</span>
        </div>

        {/* 2. Heading and supporting copy */}
        <div className="mt-[28px] grid grid-cols-1 min-[1100px]:grid-cols-[60%_1fr] gap-[24px] min-[1100px]:gap-[48px] min-[1100px]:items-end text-left">
          <h3
            id="mission-statement-heading"
            className="text-[clamp(32px,8.5vw,40px)] md:text-[46px] min-[1100px]:text-[clamp(44px,4vw,64px)] font-light leading-[1.08] tracking-[-0.025em] text-[#252725] [text-wrap:balance]"
          >
            <span className="block">{data.mission.headingLines[0]}</span>
            <span className="block">{data.mission.headingLines[1]}</span>
            <span className="block">{data.mission.headingLines[2]}</span>
          </h3>

          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] text-[#555B52] max-w-[38ch]">
            {data.mission.description}
          </p>
        </div>

        {/* 3. Divider */}
        <div
          className="w-full h-[1px] bg-[#D4D7CD] mt-[28px] md:mt-[36px] min-[1100px]:mt-[48px]"
          aria-hidden="true"
        />

        {/* 4. Main Editorial Layout */}
        <div className="mt-[32px] md:mt-[40px] min-[1100px]:mt-[56px]">
          <MissionPrinciples items={resolvedItems} />
        </div>
      </div>
    </section>
  );
}
