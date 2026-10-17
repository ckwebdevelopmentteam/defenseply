"use client";

import { Leaf, Users, FileCheck2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const esgPillars = [
  {
    letter: "E",
    title: "Environmental Stewardship",
    badge: "ISO 14001:2015",
    accent: "text-[#1c3f21]",
    items: [
      "100% Lead-Free Calcium-Zinc polymer formulations.",
      "Zero hazardous emissions and eco-conscious closed resource loops.",
      "100% recyclable composite matrix eliminating timber deforestation.",
      "Energy-efficient automated extrusion reducing carbon intensity.",
    ],
  },
  {
    letter: "S",
    title: "Social Responsibility",
    badge: "ISO 45001:2018",
    accent: "text-[#9E7B5A]",
    items: [
      "Certified workplace safety protocols across automated plant lines.",
      "Dedicated on-site corporate canteen providing daily nutrition.",
      "On-campus residential accommodations for workforce stability.",
      "Equal opportunity hiring and continuous technical development.",
    ],
  },
  {
    letter: "G",
    title: "Corporate Governance",
    badge: "ISO 9001:2015",
    accent: "text-[#2B4C32]",
    items: [
      "Uncompromising batch-to-batch quality management standards.",
      "End-to-end supply chain transparency and ethical raw material sourcing.",
      "Strict statutory compliance within KINFRA Industrial Park ecosystem.",
      "Robust anti-corruption, safety audits, and transparent corporate reporting.",
    ],
  },
];

export function SustainabilityESG() {
  return (
    <section
      id="sustainability"
      data-section="sustainability"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 mb-20 max-md:py-12 max-md:mb-16 max-phone:py-10 max-phone:mb-12"
      aria-label="Sustainability & ESG — Environmental, Social, & Governance"
    >
      <div className="mx-auto w-full px-[38px] max-md:px-5 max-phone:px-5">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 max-phone:mb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 sm:w-12 bg-[#8C7356]/50" />
            <span className="text-[11px] sm:text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#6B655B] font-sans">
              SUSTAINABILITY &amp; ESG (ENVIRONMENTAL, SOCIAL, &amp; GOVERNANCE)
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#8C7356]/50" />
          </div>
          <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-center">
            Pioneering Sustainable Material Science
          </h2>
          <p className="max-w-[760px] text-fluid font-light leading-[1.6] text-[#55534e] text-center mx-auto max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35]">
            Proving alignment with international environmental benchmarks and ethical procurement protocols across composite manufacturing, workforce well-being, and transparent corporate governance.
          </p>
        </div>

        {/* 3 ESG Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-10">
          {esgPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[4px] border border-black/8 bg-[#FAF9F5] p-7 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#1c3f21]/40"
            >
              <div>
                {/* Top Badge & Letter */}
                <div className="flex items-center justify-between pb-4 border-b border-black/8 mb-6">
                  <span className={`text-[32px] sm:text-[36px] font-bold font-serif leading-none ${pillar.accent}`}>
                    {pillar.letter}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-white border border-black/8 text-[11px] font-mono font-medium tracking-[0.06em] text-[#6B655B] uppercase">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-[20px] font-medium text-[#161513] leading-snug tracking-tight mb-5 font-sans">
                  {pillar.title}
                </h3>

                <ul className="space-y-3.5">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-[#59554D] font-sans">
                      <span className="size-1.5 rounded-full bg-[#1c3f21] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-black/8 flex items-center justify-between">
                <span className="text-[11.5px] font-mono uppercase tracking-[0.08em] text-[#6E685E]">
                  International Compliance
                </span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1c3f21] hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SustainabilityESG;
