import fs from "node:fs";
import path from "node:path";
import { aboutPurposeData as data } from "@/data/about-purpose";

const EXTENSIONS = [".webp", ".avif", ".jpg", ".jpeg", ".png"];

function resolveVisionAsset(basename: string | undefined): string | null {
  if (!basename) return null;
  for (const ext of EXTENSIONS) {
    const relativePath = `${basename}${ext}`;
    const fullPath = path.resolve(process.cwd(), "public", relativePath);
    if (fs.existsSync(fullPath)) {
      return `/${relativePath}`;
    }
  }
  return null;
}

export function AboutVision() {
  const desktopImg = resolveVisionAsset(data.vision.desktopImageBase);
  const mobileImg = resolveVisionAsset(data.vision.mobileImageBase);

  return (
    <section
      aria-labelledby="vision-statement-heading"
      className="relative w-full bg-[#252725] overflow-hidden pt-[60px] pb-[160px] md:pt-[80px] md:pb-[200px] min-[1100px]:pt-[104px] min-[1100px]:pb-[88px]"
    >
      {/* Desktop Background Layer (>=1100px) */}
      {desktopImg && (
        <div
          className="hidden min-[1100px]:block absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <img
            src={desktopImg}
            alt=""
            className="size-full object-cover object-right"
            loading="eager"
            decoding="async"
          />
          {/* Horizontal Protective Overlay: Protects center text while preserving right-side architectural detail */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,39,37,0.45)_0%,rgba(37,39,37,0.35)_50%,rgba(37,39,37,0.3)_60%,rgba(37,39,37,0)_78%,transparent_100%)]" />
        </div>
      )}

      {/* Tablet & Mobile Background Layer (<1100px) */}
      {mobileImg && (
        <div
          className="block min-[1100px]:hidden absolute bottom-0 left-0 w-full aspect-[2/3] max-h-[85%] pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={mobileImg}
            alt=""
            className="size-full object-cover object-[right_bottom]"
            loading="lazy"
            decoding="async"
          />
          {/* Subtle top fade to blend into the solid charcoal section background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#252725_0%,rgba(37,39,37,0.6)_15%,transparent_35%)]" />
        </div>
      )}

      {/* Foreground Content in Normal Document Flow */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-[20px] md:px-[36px] min-[1200px]:px-[64px] box-border flex flex-col items-center text-center">
        {/* 1. Eyebrow */}
        <p className="text-[12px] font-medium tracking-[0.18em] leading-[1.5] text-[#D1D3CC] uppercase">
          {data.vision.label}
        </p>

        {/* 2. Main Statement */}
        <h3
          id="vision-statement-heading"
          className="mt-[24px] md:mt-[32px] text-[clamp(32px,8.8vw,44px)] md:text-[48px] min-[1200px]:text-[clamp(48px,4.3vw,72px)] font-light leading-[1.08] tracking-[-0.025em] text-[#F5F4EF] max-w-[1180px] mx-auto [text-wrap:balance] uppercase"
        >
          <span className="block">{data.vision.headingLines[0]}</span>
          <span className="block">
            BETTER POSSIBILITIES{" "}
            <span className="underline decoration-1 underline-offset-[0.13em] decoration-[#F5F4EF]/65">
              TOMORROW.
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
  );
}
