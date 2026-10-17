"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroScene } from "@/data/hero";

export function HeroSlider({ scenes: _scenes }: { scenes?: HeroScene[] } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 8) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  return (
    <section
      id="home"
      data-section="hero"
      className="relative flex min-h-[580px] sm:min-h-[640px] lg:h-[88vh] lg:min-h-[680px] w-full items-end overflow-hidden bg-black"
      aria-label="Defenseply International — WPC & PVC Composite Manufacturing"
    >
      {/* Video Container cleanly extending underneath transparent header */}
      <div className="relative flex h-full w-full items-end overflow-hidden">
        {/* Background Manufacturing Facility Video (plays up to 8s) */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className="h-full w-full object-cover"
          >
            <source src="/assets/hero-facility.mp4#t=0,8" type="video/mp4" />
            <source
              src="/Plywood_manufacturing_facility_p._1080p_20260917175126.mp4#t=0,8"
              type="video/mp4"
            />
          </video>
          {/* Subtle top vignette gradient for header legibility over hero content */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-28 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
          {/* Lighter Cinematic Overlays to keep the factory video bright while maintaining text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 via-45% to-transparent" />
        </div>

        {/* Content Area - Styled to match reference design */}
        <div className="relative z-[3] w-full px-6 sm:px-10 lg:px-14 pb-8 sm:pb-10 lg:pb-12 pt-24 sm:pt-28">
          <div className="flex max-w-3xl flex-col items-start gap-4 sm:gap-5">
            {/* Eyebrow / Tag */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 sm:w-10 bg-[#94B799]" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-white/90 font-sans">
                ENGINEERED COMPOSITE MATERIALS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(38px,5.2vw,74px)] font-normal text-white leading-[1.08] tracking-[-0.018em] select-none">
              <span className="block">Built for</span>
              <span className="block">
                <span className="text-[#94B799]">the way </span>
                <span>we build.</span>
              </span>
            </h1>

            {/* Description */}
            <div className="text-[clamp(15px,1.2vw,19px)] font-light leading-[1.5] text-white/85 max-w-xl">
              <p>High-performance WPC and cellular PVC solutions</p>
              <p>for modern architecture.</p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1.5 sm:pt-2">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] font-medium text-[#1c3f21] shadow-lg transition-all duration-200 hover:bg-white/95 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4 text-[#1c3f21]" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-white/40 bg-black/25 px-6 sm:px-7 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] font-normal text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/70 active:translate-y-0"
              >
                <span>Talk to Our Team</span>
              </Link>
            </div>

            {/* Bottom Feature Line */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-3">
              <span className="h-[1.5px] w-8 sm:w-10 bg-white/50" />
              <span className="text-[10px] sm:text-[11.5px] font-medium tracking-[0.22em] uppercase text-white/75 font-sans">
                WPC &nbsp;•&nbsp; CELLULAR PVC &nbsp;•&nbsp; ARCHITECTURAL PROFILES
              </span>
            </div>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <a
          href="#who-we-are"
          className="absolute bottom-3 left-1/2 z-[9] -translate-x-1/2 max-tablet:hidden opacity-60 transition-opacity hover:opacity-100"
          aria-label="Scroll down"
        >
          <span className="relative inline-block h-7 w-4.5 rounded-[40px] border border-white/50">
            <span className="absolute top-1.5 left-[7px] h-1.5 w-0.5 animate-scroll-cue rounded-full bg-white" />
          </span>
        </a>
      </div>
    </section>
  );
}
