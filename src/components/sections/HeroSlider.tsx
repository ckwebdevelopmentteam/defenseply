"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroScene } from "@/data/hero";

export function HeroSlider({ scenes }: { scenes?: HeroScene[] }) {
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
      className="relative flex h-[80vh] min-h-[480px] sm:min-h-[520px] w-full items-end overflow-hidden bg-black"
      aria-label="One of Kerala's biggest plywood manufacturing companies"
    >
      {/* Video Container cleanly extending to 70% viewport underneath transparent header */}
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
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-black/75 via-black/35 to-transparent" />
          {/* Cinematic Overlays to blend smoothly and highlight bottom corner content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>

        {/* Content Area - Placed at corner side below */}
        <div className="relative z-[3] w-full px-6 sm:px-10 lg:px-14 pb-7 sm:pb-9 lg:pb-10 pt-20">
          <div className="flex max-w-2xl flex-col items-start gap-3.5 sm:gap-4.5">
            {/* Non-bold, Well-proportioned Headline */}
            <h1 className="text-[clamp(28px,3.4vw,48px)] font-normal text-white leading-[1.18] tracking-normal">
              One of the biggest plywood manufacturing companies in Kerala
            </h1>

            {/* Description */}
            <p className="max-w-xl text-[clamp(15px,1.08vw,18px)] font-light leading-relaxed text-white/85">
              Decades of industrial expertise and calibrated precision manufacturing, delivering high-grade plywood, blockboards, and veneers across Kerala.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#products"
                className="inline-flex items-center gap-2.5  bg-white px-6 py-3 text-sm font-medium text-[#163326] shadow-md transition-all duration-200 hover:bg-white/90 hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 border border-white/35 bg-white/10 px-6 py-3 text-sm font-normal text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-[0.98]"
              >
                <span>Contact Us</span>
              </Link>
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
