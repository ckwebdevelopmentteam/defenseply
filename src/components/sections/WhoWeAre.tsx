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
      className="relative w-full bg-[#F4F2EB] border-b border-[#E0DBD0] overflow-hidden"
    >
      {/* Container with standard homepage margins */}
      <div className="mx-auto w-full px-[38px] max-md:px-5 max-phone:px-5 py-12 sm:py-16 lg:py-20">
        {/* Main 3-Column Layout: Left Narrative | Center Feature Image | Right 3-Card Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.48fr_1fr_0.76fr] gap-5 xl:gap-6 items-stretch">
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
                  className="group inline-flex items-center gap-4 bg-[#16331D] hover:bg-[#1e4527] text-white px-6 py-3 sm:px-7 sm:py-3.5 text-[12.5px] font-medium tracking-[0.08em] uppercase transition-all duration-300 shadow-[0_2px_8px_rgba(22,51,29,0.18)] hover:shadow-[0_4px_16px_rgba(22,51,29,0.28)] hover:-translate-y-0.5"
                >
                  <span>Discover DEFENSEPLY</span>
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

          {/* Center Column: Tall Architectural Feature Facade Image */}
          <div className="flex w-full min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
            <div className="relative w-full h-full overflow-hidden bg-[#E2DED5] group">
              <Image
                src="/assets/who-we-are/feature-facade-2x.webp"
                alt="DEFENSEPLY Sustainable Architecture with timber slats, glass doors and inscribed concrete facade"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>
          </div>

          {/* Right Column: 3 Stacked Visual Cards with Crisp Typography */}
          <div className="flex flex-col gap-3 justify-between w-full h-full min-h-[460px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* Card 1: Engineered For Real Spaces */}
            <div className="relative w-full flex-1 min-h-[140px] sm:min-h-[155px] overflow-hidden bg-[#242220] group">
              <Image
                src="/assets/who-we-are/card-engineered-clean-hd.webp"
                alt="DEFENSEPLY Engineered Composite Planks and Materials"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-4 sm:left-5 bottom-4 sm:bottom-4 z-10">
                <p className="text-[11px] sm:text-[11.5px] font-semibold tracking-[0.18em] uppercase text-white leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                  ENGINEERED
                  <br />
                  FOR REAL SPACES
                </p>
                <span className="block mt-2 h-[1px] w-6 sm:w-7 bg-white/80" />
              </div>
            </div>

            {/* Card 2: Performance Meets Design */}
            <div className="relative w-full flex-1 min-h-[140px] sm:min-h-[155px] overflow-hidden bg-[#242220] group">
              <Image
                src="/assets/who-we-are/card-performance-clean.webp"
                alt="DEFENSEPLY Performance Meets Design - Modern Architectural Wood Paneling"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-4 sm:left-5 bottom-4 sm:bottom-4 z-10">
                <p className="text-[11px] sm:text-[11.5px] font-semibold tracking-[0.18em] uppercase text-white leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                  PERFORMANCE
                  <br />
                  MEETS DESIGN
                </p>
                <span className="block mt-2 h-[1px] w-6 sm:w-7 bg-white/80" />
              </div>
            </div>

            {/* Card 3: Quote Card with Clean Woodgrain and Crisp Serif Typography */}
            <div className="relative w-full flex-1 min-h-[140px] sm:min-h-[155px] overflow-hidden bg-[#EDEAE3] p-5 sm:p-6 flex flex-col justify-center group">
              <Image
                src="/assets/who-we-are/card-quote-clean-bg.webp"
                alt="DEFENSEPLY architectural wood grain"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="relative z-10 flex flex-col justify-center pl-1">
                <blockquote className="font-serif text-[clamp(17px,1.45vw,21px)] text-[#1C1A17] font-normal leading-[1.3] tracking-[-0.01em] select-none">
                  “Innovative materials
                  <br />
                  for modern living.”
                </blockquote>
                <cite className="block not-italic text-[10px] sm:text-[10.5px] font-medium tracking-[0.22em] uppercase text-[#635E54] mt-3 sm:mt-3.5">
                  — DEFENSEPLY
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
