"use client";

import Image from "next/image";
import Link from "next/link";

interface WhoWeAreMetric {
  value: string;
  label: string;
}

const metrics: WhoWeAreMetric[] = [
  {
    value: "WPC & PVC",
    label: "core materials",
  },
  {
    value: "Kuttippuram, Kerala",
    label: "our location",
  },
  {
    value: "AP Group",
    label: "strategic backing",
  },
];

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      data-section="who-we-are"
      aria-label="Who We Are - DEFENSEPLY INTERNATIONAL LLP"
      className="relative w-full bg-[#F5F3EC] border-b border-[#E0DBD0] overflow-hidden"
    >
      {/* Container with standard homepage margins */}
      <div className="mx-auto w-full px-[38px] max-md:px-5 max-phone:px-5 py-12 sm:py-16 lg:py-20">
        {/* Main 3-Column Layout: Left Narrative | Center Factory Image | Right 3-Card Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.28fr_1.18fr_0.64fr] gap-3.5 xl:gap-4 items-stretch">
          {/* Left Column: Narrative, Metrics, CTA & Commitment */}
          <div className="flex flex-col justify-between pr-0 lg:pr-2 xl:pr-4">
            <div>
              {/* Eyebrow / Tag */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase text-[#6B655B]">
                  WHO WE ARE
                </span>
                <span className="h-[1px] w-12 sm:w-16 bg-[#8A8376]/50" />
              </div>

              {/* Large Architectural Headline */}
              <h2 className="text-[clamp(32px,3.3vw,56px)] leading-[1.08] font-normal tracking-[-0.015em] uppercase mb-6 sm:mb-7 select-none">
                <span className="block text-[#161513]">BUILDING</span>
                <span className="block text-[#161513]">A BETTER</span>
                <span className="block text-[#9E7B5A]">TOMORROW</span>
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-[14.5px] sm:text-[15px] xl:text-[15.5px] leading-[1.68] text-[#3D3A34] max-w-2xl font-normal">
                <p>
                  DEFENSEPLY INTERNATIONAL LLP is a new WPC manufacturing
                  venture backed by the AP Group, representing a strategic
                  expansion into advanced composite building materials.
                </p>
                <p className="text-[#59554D]">
                  We specialise in Wood Polymer Composite (WPC) and Polyvinyl
                  Chloride (PVC) form boards, doors, and frames — engineered to
                  deliver the timeless warmth and aesthetic appeal of natural
                  wood, while eliminating traditional structural flaws such as
                  water damage, termite degradation, and warping.
                </p>
              </div>
            </div>

            {/* Metrics Row (3 items) */}
            <div className="pt-6 sm:pt-8 my-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 py-4 sm:py-5 border-y border-[#D6D0C3] mb-6 sm:mb-7">
                {metrics.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className={`flex flex-col justify-center ${
                      idx < metrics.length - 1
                        ? "sm:border-r sm:border-[#D6D0C3] sm:pr-4 sm:mr-4"
                        : ""
                    }`}
                  >
                    <span className="text-[19px] sm:text-[21px] xl:text-[23px] font-normal tracking-tight text-[#161513] leading-none">
                      {metric.value}
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] text-[#6E685E] mt-1.5 font-light tracking-normal leading-tight">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Discover Button */}
              <div className="mb-6 sm:mb-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 rounded-[4px] bg-[#16331D] hover:bg-[#1e4527] text-white px-6 py-3 sm:px-7 sm:py-3.5 text-[12.5px] font-medium tracking-[0.08em] uppercase transition-all duration-300 shadow-[0_2px_8px_rgba(22,51,29,0.18)] hover:shadow-[0_4px_16px_rgba(22,51,29,0.28)] hover:-translate-y-0.5"
                >
                  <span>DISCOVER DEFENSEPLY</span>
                  <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1.5 text-sm">
                    →
                  </span>
                </Link>
              </div>

              {/* Commitment Row */}
              <div className="pt-4 sm:pt-5 border-t border-[#D9D3C7]/60 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6">
                <div className="flex flex-col gap-1 shrink-0">
                  <span className="h-[1px] w-8 bg-[#8A8376]/70" />
                  <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2B2925]">
                    OUR COMMITMENT
                  </span>
                </div>
                <p className="text-[12.5px] sm:text-[13px] text-[#635E54] font-normal leading-relaxed">
                  Sustainable materials. Stronger spaces. A better tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Defenseply Factory Facility Image */}
          <div className="flex w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px]">
            <div className="relative w-full h-full overflow-hidden rounded-[4px] bg-[#E2DED5] group">
              <Image
                src="/811bae52-f843-43a1-9dab-0a2b815dda3a.png"
                alt="DEFENSEPLY Modern WPC & PVC Manufacturing Facility and Factory"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

          {/* Right Column: 3 Stacked Visual Cards matching design */}
          <div className="flex flex-col gap-2.5 sm:gap-3 justify-between w-full h-full min-h-[440px] sm:min-h-[460px] lg:min-h-[480px]">
            {/* Card 1: Engineered For Real Spaces */}
            <div className="relative w-full flex-1 min-h-[135px] sm:min-h-[145px] overflow-hidden rounded-[4px] bg-[#242220] group">
              <Image
                src="/assets/who-we-are/card-engineered-clean-hd.webp"
                alt="DEFENSEPLY Engineered Composite Planks and Materials"
                fill
                sizes="(max-width: 1024px) 100vw, 24vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute left-3.5 sm:left-4 bottom-3 sm:bottom-3.5 z-10">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
                  ENGINEERED
                  <br />
                  FOR REAL SPACES
                </p>
                <span className="block mt-1.5 h-[1px] w-6 bg-white/90" />
              </div>
            </div>

            {/* Card 2: Performance Meets Design */}
            <div className="relative w-full flex-1 min-h-[135px] sm:min-h-[145px] overflow-hidden rounded-[4px] bg-[#242220] group">
              <Image
                src="/assets/who-we-are/card-performance-clean.webp"
                alt="DEFENSEPLY Performance Meets Design - Modern Architectural Wood Paneling"
                fill
                sizes="(max-width: 1024px) 100vw, 24vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute left-3.5 sm:left-4 bottom-3 sm:bottom-3.5 z-10">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
                  PERFORMANCE
                  <br />
                  MEETS DESIGN
                </p>
                <span className="block mt-1.5 h-[1px] w-6 bg-white/90" />
              </div>
            </div>

            {/* Card 3: Modern Quote Card with Plant and Typography */}
            <div className="relative w-full flex-1 min-h-[135px] sm:min-h-[145px] overflow-hidden rounded-[4px] bg-[#EDEAE3] group">
              <Image
                src="/assets/who-we-are/card-quote-modern-2x.webp"
                alt="Innovative materials for modern living. — DEFENSEPLY"
                fill
                sizes="(max-width: 1024px) 100vw, 24vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
