"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Anchor, Plane, Train, Building2, Zap, ShieldCheck } from "lucide-react";

const transitHubs = [
  {
    icon: Anchor,
    name: "Cochin International Seaport (ICTT)",
    distance: "135 km",
    type: "Deepwater Container Terminal",
    detail: "Direct highway access for rapid container stuffing and maritime transshipment.",
  },
  {
    icon: Anchor,
    name: "New Mangalore Port",
    distance: "240 km",
    type: "All-Weather Deepwater Port",
    detail: "Direct sea freight connectivity for bulk international consignments.",
  },
  {
    icon: Plane,
    name: "Calicut International Airport (CCJ)",
    distance: "42 km",
    type: "Air Cargo Terminal",
    detail: "Express air transit and rapid international sample dispatch corridor.",
  },
  {
    icon: Train,
    name: "Direct Railway Freight Siding",
    distance: "4 km",
    type: "National Rail Network",
    detail: "Heavy bulk polymer movement and containerized raw material logistics.",
  },
];

const infrastructurePillars = [
  {
    icon: Building2,
    stat: "45,000 Sq. Ft.",
    label: "Advanced Extrusion Facility",
    description: "State-of-the-art multi-line automated polymer compounding and calibrated board extrusion.",
  },
  {
    icon: Zap,
    stat: "100% Uninterrupted",
    label: "Dedicated Industrial Utilities",
    description: "High-tension power substations and industrial water networks ensure 24/7 continuous manufacturing.",
  },
  {
    icon: ShieldCheck,
    stat: "Government-Backed",
    label: "KINFRA Industrial Park Ecosystem",
    description: "Institutional zoning, statutory environmental clearances, and rapid multi-acre scalability.",
  },
];

export function StrategicInfrastructure() {
  return (
    <section
      id="infrastructure"
      data-section="infrastructure"
      className="relative w-full overflow-hidden bg-white pt-16 pb-20 mb-20 max-md:pt-12 max-md:pb-16 max-md:mb-16 max-phone:pt-10 max-phone:pb-12 max-phone:mb-12"
      aria-label="Strategic Infrastructure & Global Footprint"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 max-phone:mb-8 max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 sm:w-12 bg-[#8C7356]/50" />
          <span className="text-[11px] sm:text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#6B655B] font-sans">
            STRATEGIC INFRASTRUCTURE &amp; GLOBAL FOOTPRINT
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-[#8C7356]/50" />
        </div>
        <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-center">
          Industrial Backbone &amp; Export Readiness
        </h2>
        <p className="max-w-[760px] text-fluid font-light leading-[1.6] text-[#55534e] text-center mx-auto max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35]">
          Operating from the government-supported KINFRA Industrial Park along the NH 66 corridor, Defenseply bridges high-capacity automated extrusion with seamless direct access to major international seaports, air cargo hubs, and global trade corridors.
        </p>
      </div>

      {/* Main 2-Column Industrial & Logistics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
        {/* Left Column: KINFRA Industrial Park Backbone (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-[4px] border border-black/8 bg-[#FAF9F5] p-7 sm:p-9 shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-black/8 mb-6">
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E685E] font-sans">
                MANUFACTURING BACKBONE
              </span>
              <span className="px-2.5 py-0.5 rounded-[2px] bg-[#1c3f21]/10 text-[10.5px] font-semibold tracking-[0.08em] text-[#1c3f21] uppercase">
                KINFRA INDUSTRIAL PARK
              </span>
            </div>

            <div className="space-y-6">
              {infrastructurePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.label} className="group">
                    <div className="flex items-baseline gap-3 mb-1">
                      <div className="size-8 rounded-full bg-[#1c3f21] text-white flex items-center justify-center shrink-0">
                        <Icon size={16} strokeWidth={2} />
                      </div>
                      <div>
                        <span className="text-[20px] sm:text-[22px] font-semibold tracking-[-0.01em] text-[#161513] font-sans">
                          {pillar.stat}
                        </span>
                        <p className="text-[12.5px] font-medium text-[#6B655B] uppercase tracking-[0.05em] mt-0.5">
                          {pillar.label}
                        </p>
                      </div>
                    </div>
                    <p className="text-[13px] leading-[1.6] text-[#59554D] pl-11">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-black/8 mt-6">
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-between w-full rounded-[3px] bg-[#1c3f21] px-6 py-3.5 text-[12.5px] font-medium tracking-[0.08em] uppercase text-white shadow-sm transition-all duration-300 hover:bg-[#15321a] hover:shadow-md"
            >
              <span>Schedule Factory Inspection</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Export Logistics Map & Transit Hubs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-[4px] border border-black/8 bg-white overflow-hidden shadow-sm">
          {/* Top: Global Route Map Graphic */}
          <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-[#FAF9F5] border-b border-black/8 group">
            <Image
              src="/assets/about/global-logistics-map.jpg"
              alt="DEFENSEPLY Global Supply Chain and Seaport Export Map"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between z-10 text-white">
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-[2px]">
                EXPORT READINESS MAP
              </span>
              <span className="text-[11px] font-medium tracking-[0.06em] text-white/90">
                NH 66 Strategic Corridor
              </span>
            </div>
          </div>

          {/* Bottom: Transit Distance Breakdown Grid */}
          <div className="p-6 sm:p-7 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {transitHubs.map((hub) => {
                const Icon = hub.icon;
                return (
                  <div
                    key={hub.name}
                    className="p-3.5 rounded-[3px] bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between transition-all duration-300 hover:border-[#1c3f21]/40"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon size={15} className="text-[#1c3f21] shrink-0" />
                        <span className="text-[12.5px] font-semibold text-[#161513] leading-tight">
                          {hub.name}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-[2px] bg-[#1c3f21] text-white text-[11px] font-bold shrink-0">
                        {hub.distance}
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#635E54] leading-[1.5] mt-1">
                      {hub.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3.5 border-t border-black/6 flex items-center justify-between text-[11.5px] text-[#6E685E]">
              <span>⚓ Reduced transshipment turnaround to Middle East, Europe &amp; Global ports</span>
              <span className="font-semibold text-[#1c3f21] uppercase tracking-[0.08em]">Direct Containerized Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicInfrastructure;
