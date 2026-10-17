"use client";

import Image from "next/image";
import { Utensils, Home, HeartHandshake, ShieldCheck } from "lucide-react";

export function PeopleCulture() {
  return (
    <section
      id="people-culture"
      data-section="people-culture"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 mb-20 max-md:py-12 max-md:mb-16 max-phone:py-10 max-phone:mb-12"
      aria-label="People, Culture & Communities — Human Capital Focus"
    >
      <div className="mx-auto w-full px-[38px] max-md:px-5 max-phone:px-5">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 max-phone:mb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 sm:w-12 bg-[#8C7356]/50" />
            <span className="text-[11px] sm:text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#6B655B] font-sans">
              PEOPLE, CULTURE &amp; COMMUNITIES (HUMAN CAPITAL FOCUS)
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#8C7356]/50" />
          </div>
          <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-center">
            Empowering the Minds that Build the Future
          </h2>
          <p className="max-w-[760px] text-fluid font-light leading-[1.6] text-[#55534e] text-center mx-auto max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35]">
            Demonstrating robust social governance, ethical industrial operations, and a stable, highly supported workforce through comprehensive on-site employee welfare ecosystems.
          </p>
        </div>

        {/* 2-Card Prominent Campus Welfare Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Card 1: Dedicated Corporate Canteen */}
          <div className="group rounded-[4px] border border-black/8 bg-[#FAF9F5] overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#1c3f21]/40">
            <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-stone">
              <Image
                src="/assets/about/campus-canteen.jpg"
                alt="DEFENSEPLY Dedicated On-Site Corporate Canteen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] bg-black/60 backdrop-blur-md text-[10.5px] font-semibold tracking-[0.12em] uppercase text-white font-sans">
                  <Utensils size={13} className="text-[#94B799]" />
                  <span>ON-SITE CORPORATE DINING</span>
                </span>
              </div>
            </div>

            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-medium text-[#161513] leading-snug tracking-tight mb-2.5 font-sans">
                  Dedicated Corporate Canteen &amp; Nutrition Ecosystem
                </h3>
                <p className="text-[13.5px] leading-[1.65] text-[#59554D] font-normal mb-5 font-sans">
                  A modern, chef-managed corporate canteen providing balanced daily nutrition in a clean, expansive architectural hall. Dedicated dining infrastructure ensures the vitality and sustained health of our operational team.
                </p>
              </div>

              <div className="pt-4 border-t border-black/8 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-[14px] font-semibold text-[#1c3f21] font-sans">Daily</span>
                  <p className="text-[10.5px] text-[#7A7367] uppercase font-mono mt-0.5">Fresh Nutrition</p>
                </div>
                <div>
                  <span className="text-[14px] font-semibold text-[#1c3f21] font-sans">Hygienic</span>
                  <p className="text-[10.5px] text-[#7A7367] uppercase font-mono mt-0.5">Dining Hall</p>
                </div>
                <div>
                  <span className="text-[14px] font-semibold text-[#1c3f21] font-sans">100%</span>
                  <p className="text-[10.5px] text-[#7A7367] uppercase font-mono mt-0.5">Staff Welfare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Modern On-Site Employee Accommodations */}
          <div className="group rounded-[4px] border border-black/8 bg-[#FAF9F5] overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#1c3f21]/40">
            <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-stone">
              <Image
                src="/assets/about/campus-accommodation.jpg"
                alt="DEFENSEPLY Modern On-Site Employee Accommodation Facilities"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] bg-black/60 backdrop-blur-md text-[10.5px] font-semibold tracking-[0.12em] uppercase text-white font-sans">
                  <Home size={13} className="text-[#94B799]" />
                  <span>ON-SITE ACCOMMODATIONS</span>
                </span>
              </div>
            </div>

            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-medium text-[#161513] leading-snug tracking-tight mb-2.5 font-sans">
                  On-Campus Residential Quarters &amp; Housing
                </h3>
                <p className="text-[13.5px] leading-[1.65] text-[#59554D] font-normal mb-5 font-sans">
                  Modern, secure on-site employee accommodation facilities situated within our campus green zone. Eliminating transit stress and fatigue ensures unmatched workforce stability, rapid multi-shift scalability, and ethical operations.
                </p>
              </div>

              <div className="pt-4 border-t border-black/8 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-[14px] font-semibold text-[#1c3f21] font-sans">Zero</span>
                  <p className="text-[10.5px] text-[#7A7367] uppercase font-mono mt-0.5">Commute Fatigue</p>
                </div>
                <div>
                  <span className="text-[14px] font-semibold text-[#1c3f21] font-sans">Secure</span>
                  <p className="text-[10.5px] text-[#7A7367] uppercase font-mono mt-0.5">Campus Living</p>
                </div>
                <div>
                  <span className="text-[14px] font-semibold text-[#1c3f21] font-sans">24/7</span>
                  <p className="text-[10.5px] text-[#7A7367] uppercase font-mono mt-0.5">Workforce Stability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Institutional Trust Banner */}
        <div className="p-5 sm:p-6 rounded-[3px] bg-[#FAF8F5] border border-[#E8E3DA] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-[#1c3f21] text-white flex items-center justify-center shrink-0">
              <HeartHandshake size={18} />
            </div>
            <p className="text-[13px] text-[#555] font-sans">
              <strong className="text-[#161513] font-medium">Ethical Workforce Governance:</strong> Dedicated healthcare, safety compliance, and continuous technical training aligned with international labor standards.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#1c3f21]">
            <ShieldCheck size={16} />
            <span>ISO 45001 CERTIFIED SOCIAL GOVERNANCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleCulture;
