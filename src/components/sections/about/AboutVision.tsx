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
      className="relative isolate w-full bg-[#252725] overflow-hidden min-[1100px]:pt-[80px] min-[1100px]:pb-[72px]"
    >
      {/* Desktop Decorative Image & Overlay Region (>=1100px): Right 36% */}
      {desktopImg && (
        <div
          className="hidden min-[1100px]:block absolute top-0 bottom-0 right-0 w-[36%] overflow-hidden pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <img
            src={desktopImg}
            alt=""
            className="size-full object-cover object-right z-0"
            loading="eager"
            decoding="async"
          />
          {/* Desktop Horizontal Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, #252725 0%, rgba(37,39,37,0.98) 12%, rgba(37,39,37,0.88) 25%, rgba(37,39,37,0.48) 48%, rgba(37,39,37,0.22) 72%, rgba(37,39,37,0.16) 100%)",
            }}
          />
        </div>
      )}

      {/* Protected Text Block in Normal Document Flow (Occupies 70% width on Desktop) */}
      <div className="relative z-20 w-full min-[1100px]:w-[70%] pt-[48px] px-[24px] pb-[32px] md:pt-[56px] md:px-[36px] min-[1100px]:pt-0 min-[1100px]:pb-0 min-[1100px]:px-[clamp(32px,3vw,64px)] box-border">
        <div className="w-full max-w-[960px] mx-auto flex flex-col items-center text-center box-border">
          {/* 1. Eyebrow */}
          <p className="text-[12px] font-medium tracking-[0.18em] leading-[1.5] text-[#D1D3CC] uppercase">
            {data.vision.label}
          </p>

          {/* 2. Main Statement */}
          <h3
            id="vision-statement-heading"
            className="mt-[24px] md:mt-[32px] text-[clamp(30px,8vw,40px)] md:text-[clamp(36px,4.5vw,44px)] min-[1100px]:text-[clamp(36px,3vw,56px)] font-light leading-[1.1] tracking-[-0.025em] text-[#F5F4EF] [text-wrap:balance] uppercase"
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
          <p className="mt-[24px] md:mt-[32px] text-[15px] md:text-[16px] font-normal leading-[1.7] text-[#D1D3CC] max-w-[640px] mx-auto text-center">
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
      </div>

      {/* Mobile/Tablet Decorative Strip (<1100px): Rendered AFTER principles and their 32px bottom padding in normal flow */}
      {mobileImg && (
        <div
          className="block min-[1100px]:hidden w-full h-[clamp(180px,50vw,240px)] md:h-[260px] relative overflow-hidden pointer-events-none select-none z-10"
          aria-hidden="true"
        >
          <img
            src={mobileImg}
            alt=""
            className="size-full object-cover object-[right_bottom]"
            loading="lazy"
            decoding="async"
          />
          {/* Mobile Vertical Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, #252725 0%, rgba(37,39,37,0.88) 12%, rgba(37,39,37,0.38) 42%, rgba(37,39,37,0.18) 100%)",
            }}
          />
        </div>
      )}
    </section>
  );
}
