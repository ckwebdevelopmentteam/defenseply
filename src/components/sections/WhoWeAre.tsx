"use client";

import Image from "next/image";
import Link from "next/link";
import { SpinningText } from "@/components/ui/spinning-text-02";
import { IsoCertificationCard } from "@/components/ui/IsoCertificationCard";

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      data-section="who-we-are"
      aria-label="DEFENSEPLY International LLP — Backed by AP Group"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Top 3-Column Layout */}
      <div className="mx-auto w-full px-[38px] max-md:px-5 max-phone:px-5 pt-12 sm:pt-16 lg:pt-20 pb-28 sm:pb-36 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_1.15fr_1.08fr] gap-8 xl:gap-14 items-stretch">
          {/* Column 1: Narrative & CTA Button */}
          <div className="flex flex-col justify-between pr-0 lg:pr-4 h-auto lg:h-full">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="text-[11px] sm:text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#6E685E]">
                 ABOUT US 
                </span>
                <span className="h-[1px] w-10 sm:w-14 bg-[#8A8376]/50" />
              </div>

              {/* Large Architectural Headline */}
              <h2 className="text-[clamp(32px,3.2vw,50px)] leading-[1.08] font-normal tracking-[-0.015em] uppercase mb-5 sm:mb-6 select-none">
                <span className="block text-[#161513]">BUILDING</span>
                <span className="block text-[#161513]">A BETTER</span>
                <span className="block text-[#9E7B5A]">TOMORROW</span>
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.72] text-[#555047] max-w-xl font-normal mb-6">
                <p>
                  <strong className="text-[#161513] font-medium">DEFENSEPLY INTERNATIONAL LLP</strong> is a next-generation
                  manufacturing venture backed by the industrial legacy of the <strong className="text-[#161513] font-medium">AP Group</strong>,
                  representing a strategic expansion into advanced composite building materials and architectural polymers.
                </p>
                <p>
                  We specialise in high-density Wood Polymer Composite (WPC) and Polyvinyl
                  Chloride (PVC) cellular foam boards, solid doors, and precision-moulded framing profiles — engineered to
                  deliver the organic warmth and texture of natural timber while permanently eliminating moisture absorption, termite degradation, and seasonal warping.
                </p>
                <p>
                  Operating from our modern 45,000 sq. ft. facility at KINFRA Industrial Park in Kuttippuram, Kerala, our multi-line extrusion infrastructure pairs automated engineering with lead-free, 100% recyclable formulations to deliver calibrated dimensional stability across demanding residential, commercial, and healthcare environments.
                </p>
              </div>
            </div>

            {/* Action Buttons aligned to bottom baseline */}
            <div className="min-h-[48px] sm:min-h-[56px] h-auto flex flex-wrap items-center gap-3 sm:gap-3.5 shrink-0 mt-4 sm:mt-6 mb-6 lg:mb-0">
              {/* Primary Green Button: Discover DEFENSEPLY */}
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-[3px] bg-[#1c3f21] px-5 sm:px-6 py-3 sm:py-3.5 text-[12px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase text-white shadow-sm transition-all duration-300 hover:bg-[#15321a] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Discover DEFENSEPLY</span>
                <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1.5 text-sm">
                  →
                </span>
              </Link>

              {/* Secondary White/Black Button: More About Us */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-[3px] border border-black bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-[12px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase text-black shadow-xs transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>More About Us</span>
                <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1.5 text-sm">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Tall Vertical AP Group Manufacturing Facility Image */}
          <div className="flex flex-col w-full h-full">
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-full lg:flex-1 overflow-hidden rounded-[2px] bg-[#E8E4DC] shadow-sm group">
              <Image
                src="/assets/about/apgroupimage1.png"
                alt="AP Group — Building a Stronger Tomorrow Industrial Manufacturing Ecosystem"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>
          </div>

          {/* Column 3: Quality of Work & Certified Standards */}
          <div className="flex flex-col justify-between w-full h-full">
            {/* Top Visual: Engineering & Manufacturing Quality Card */}
            <div className="relative w-full h-[170px] sm:h-[190px] lg:h-[200px] overflow-hidden rounded-[2px] bg-[#E8E4DC] shadow-sm group shrink-0">
              <Image
                src="/assets/who-we-are/ap-group-engineers.jpg"
                alt="Defenseply Engineering Quality Control and Testing"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute left-4 sm:left-5 bottom-4 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-[2px] bg-white/20 backdrop-blur-md text-[9.5px] font-semibold tracking-[0.16em] uppercase text-white mb-1.5">
                  QUALITY OF WORK
                </span>
                <p className="text-[12.5px] sm:text-[13.5px] font-normal text-white/95 leading-tight">
                  State-of-the-Art Testing & Batch Consistency
                </p>
              </div>
            </div>

            {/* Middle: Certified Operational Benchmarks & Standards Description */}
            <IsoCertificationCard className="mt-4 sm:mt-5 flex-1" />
          </div>
        </div>
      </div>

      {/* Horizontal Divider with Subtle, Narrow Center Dip matching Reference Image 2 */}
      <div className="relative w-full bg-white select-none">
        {/* Understated Circular Brand Badge centered on the baseline, extending into upper section */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10">
          <div className="size-[120px] sm:size-[128px] rounded-full flex items-center justify-center relative group cursor-pointer">
            <SpinningText
              text="• DEFENSEPLY • BUILT FOR THE WAY WE BUILD • "
              radius={40}
              fontSize={11.5}
              speed={22}
              direction="normal"
              className="text-[#8C7356] size-full font-semibold"
            >
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/logo/logodpspinner.png"
                  alt="Defenseply Brown Monogram Logo"
                  width={52}
                  height={74}
                  className="h-8 sm:h-9 w-auto object-contain select-none"
                  priority
                />
              </div>
            </SpinningText>
          </div>
        </div>

        {/* Mostly straight horizontal edge with smooth, rounded downward curve and generous clearance around spinner */}
        <div className="relative w-full flex items-start">
          <div className="flex-1 h-[86px] bg-[#F5F2EB] border-t border-[#E5E0D6]" />
          <div className="shrink-0 w-[260px] h-[86px]">
            <svg
              width="260"
              height="86"
              viewBox="0 0 260 86"
              fill="none"
              className="block w-full h-full"
            >
              {/* Soft warm cream fill under the shallow curve */}
              <path
                d="M 0,0 C 45,0 74,82 130,82 C 186,82 215,0 260,0 L 260,86 L 0,86 Z"
                fill="#F5F2EB"
              />
              {/* Subtle 1px boundary stroke matching horizontal line */}
              <path
                d="M 0,0 C 45,0 74,82 130,82 C 186,82 215,0 260,0"
                stroke="#E5E0D6"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          <div className="flex-1 h-[86px] bg-[#F5F2EB] border-t border-[#E5E0D6]" />
        </div>
      </div>

      {/* Centered Serif Corporate Achievement Section on Cream Background */}
      <div className="relative w-full bg-[#F5F2EB] pt-5 pb-14 sm:pb-16 max-phone:pb-10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow Accent */}
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <span className="h-[1px] w-8 sm:w-14 bg-[#8C7356]/40" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7A6B58]">
              CORPORATE MILESTONES &amp; INDUSTRIAL ACHIEVEMENTS
            </span>
            <span className="h-[1px] w-8 sm:w-14 bg-[#8C7356]/40" />
          </div>

          {/* 4-Line Achievement Content extracted from Architecture Brief & AP Group Heritage */}
          <div className="space-y-2.5 sm:space-y-3.5 font-serif select-none">
            {/* Line 1: Corporate Backing & Industry Legacy */}
            <h3 className="text-[clamp(21px,2.6vw,36px)] font-normal text-[#24211D] leading-[1.24] tracking-[-0.01em]">
              Decades Of Industrial Manufacturing Heritage Backed By AP Group
            </h3>

            {/* Line 2: Advanced Manufacturing Facility */}
            <p className="text-[clamp(17px,2.1vw,28px)] font-normal text-[#4A443C] leading-[1.3] tracking-[-0.005em]">
              State-Of-The-Art 45,000 Sq. Ft. Precision Extrusion Plant At KINFRA
            </p>

            {/* Line 3: Material Science Innovation */}
            <p className="text-[clamp(17px,2.1vw,28px)] font-normal text-[#4A443C] leading-[1.3] tracking-[-0.005em]">
              Pioneering 100% Water, Fire &amp; Termite Proof Advanced Composites
            </p>

            {/* Line 4: Certified Global Compliance */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 pt-1.5 sm:pt-2">
              <span className="h-[1px] w-8 sm:w-16 bg-[#7A7367]/40" />
              <p className="text-[clamp(14.5px,1.8vw,23px)] font-normal tracking-[0.04em] uppercase text-[#8C7356]">
                Engineered To International ISO 9001 · 14001 · 45001 Standards
              </p>
              <span className="h-[1px] w-8 sm:w-16 bg-[#7A7367]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
