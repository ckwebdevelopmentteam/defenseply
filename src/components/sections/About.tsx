import type { ComponentProps } from "react";
import {
  Compass,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import content from "@/data/about.json";
import { cn } from "@/lib/cn";
const featureIcons = { shield: ShieldCheck, clock: Clock, sparkles: Sparkles };
const photoPositions = {
  left: "left-[calc(50%-110px)] z-[1] [transform:rotate(-12deg)_translateY(6px)] group-hover/gallery:[transform:rotate(-18deg)_translateX(-14px)_translateY(8px)]",
  center:
    "left-[calc(50%-60px)] z-[2] [transform:translateY(-8px)_scale(1.04)] shadow-[0_16px_36px_#0000002e] group-hover/gallery:[transform:translateY(-14px)_scale(1.08)]",
  right:
    "left-[calc(50%-10px)] z-[1] [transform:rotate(14deg)_translateY(4px)] group-hover/gallery:[transform:rotate(20deg)_translateX(14px)_translateY(6px)]",
};
function AboutCard({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      {...props}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-none border border-black/6 bg-[#f7f8f9] transition-[transform,box-shadow] duration-350 hover:shadow-[0_16px_36px_#0000000f]",
        className,
      )}
    />
  );
}
const actionClass =
  "inline-flex h-12 items-center justify-center bg-[#111] text-white transition-[background-color,transform,box-shadow] duration-250 hover:-translate-y-px hover:bg-[#2d2d2d] hover:shadow-[0_6px_18px_#00000026]";
export function About({ data = content }: { data?: typeof content }) {
  return (
    <section
      data-section="about"
      id="about"
      aria-label="About DEFENSEPLY INTERNATIONAL LLP"
      className="relative w-full overflow-hidden bg-white pt-20 pb-25 max-[768px]:pt-15 max-[768px]:pb-[70px]"
    >
      <header className="mb-14 max-desktop:mb-10">
        <h2 className="max-w-[1300px] text-[clamp(28px,2.5vw,48px)] leading-[1.18] font-light tracking-[-.01em] uppercase text-[#1a1a1a]">
          {data.headline}
        </h2>
      </header>
      <div className="mb-[72px] grid grid-cols-[1fr_1.2fr_1fr] items-stretch gap-7 max-desktop:grid-cols-2 max-[768px]:mb-12 max-[768px]:grid-cols-1 max-[768px]:gap-5">
        <AboutCard className="justify-between px-8 pt-9 pb-8">
          <div>
            <div
              className="mb-6 flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#1a1a1a] shadow-[0_2px_8px_#0000000a]"
              aria-hidden="true"
            >
              <Compass size={22} strokeWidth={1.75} />
            </div>
            <p className="mb-7 text-[15px] leading-[1.6] text-[#555]">
              {data.description}
            </p>
          </div>
          <div>
            <div className="mb-8 flex flex-wrap gap-4 border-t border-black/7 pt-4 max-[768px]:gap-3">
              {data.features.map((feature) => {
                const Icon =
                  featureIcons[feature.icon as keyof typeof featureIcons];
                return (
                  <div
                    key={feature.label}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#333]"
                  >
                    <span
                      className="flex items-center text-[#666]"
                      aria-hidden="true"
                    >
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto flex items-center gap-3">
              <a
                href={data.action.href}
                className={cn(
                  actionClass,
                  "flex-1 rounded-full px-6 text-sm font-medium",
                )}
              >
                {data.action.label}
              </a>
              <a
                href={data.action.href}
                className={cn(
                  actionClass,
                  "w-12 shrink-0 rounded-full hover:rotate-45",
                )}
                aria-label="Contact DEFENSEPLY team"
              >
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </AboutCard>
        <AboutCard className="group/image min-h-[420px] bg-[#1c1c1e] max-[768px]:min-h-[320px]">
          <div className="relative min-h-[inherit] w-full flex-1 overflow-hidden">
            <img
              src={data.hero.image}
              alt={data.hero.alt}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-650 ease-[cubic-bezier(.16,1,.3,1)] group-hover/image:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#0000008c_0%,#00000026_40%,#00000073_100%)]" />
            <h3 className="absolute top-8 left-8 z-[2] text-[26px] leading-[1.2] font-normal tracking-[-.01em] text-white [text-shadow:0_2px_10px_#0000004d]">
              {data.hero.title}
            </h3>
          </div>
        </AboutCard>
        <AboutCard className="group/gallery justify-between px-8 pt-9 pb-8 max-desktop:col-span-2 max-desktop:flex-row max-desktop:items-center max-desktop:gap-9 max-[768px]:col-span-1 max-[768px]:flex-col max-[768px]:items-stretch">
          <div
            className="relative mb-6 flex h-[200px] w-full items-center justify-center max-desktop:mb-0 max-desktop:w-[280px] max-desktop:shrink-0 max-[768px]:mb-6 max-[768px]:w-full"
            aria-hidden="true"
          >
            {data.gallery.map((photo) => (
              <div
                key={photo.position}
                className={cn(
                  "absolute h-[150px] w-30 overflow-hidden rounded-[14px] border-[3px] border-white bg-white shadow-[0_12px_28px_#00000024] transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(.16,1,.3,1)]",
                  photoPositions[photo.position as keyof typeof photoPositions],
                )}
              >
                <img
                  className="size-full object-cover"
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-[15px] leading-[1.6] text-[#555]">
            {data.galleryDescription}
          </p>
        </AboutCard>
      </div>
      <div className="grid grid-cols-4 gap-8 border-t border-black/8 pt-12 max-desktop:grid-cols-2 max-desktop:gap-x-6 max-desktop:gap-y-9 max-[768px]:gap-x-4 max-[768px]:gap-y-7 max-[768px]:pt-9">
        {data.statistics.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center"
          >
            <span className="mb-2 text-[clamp(36px,3.5vw,52px)] leading-[1.1] font-light tracking-[-.02em] text-[#111]">
              {stat.value}
            </span>
            <span className="text-sm tracking-[.1px] text-[#777]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
