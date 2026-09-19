"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Factory, MapPin, Mouse } from "lucide-react";
import type { HeroScene } from "@/data/hero";

export function HeroSlider({ scenes }: { scenes?: HeroScene[] }) {
  return (
    <section
      id="home"
      data-section="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
      aria-label="A Stronger Tomorrow from Kerala - DefensePly"
    >
      {/* Background Graphic Pattern Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-background.jpg"
          alt="DefensePly Background Pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Hero Row: Content on Left, Visual Graphic on Right */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 w-full">
          {/* Left Column: Heading, Subtext & Action CTAs */}
          <div className="w-full lg:max-w-[48%] xl:max-w-[46%] flex flex-col items-start gap-4 sm:gap-5">
            {/* Tagline / Subtitle */}
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-[#435249] uppercase">
              BUILT ON NATURE. DRIVEN BY PEOPLE.
            </span>

            {/* Serif Editorial Headline */}
            <h1 className="font-serif text-[clamp(34px,4.3vw,62px)] font-normal text-[#161d19] leading-[1.08] tracking-[-0.015em]">
              A Stronger Tomorrow <span className="text-[#163326]">from Kerala.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="max-w-xl text-[clamp(14px,1.05vw,16.5px)] font-normal leading-relaxed text-[#435249]">
              Decades of industrial expertise and calibrated precision manufacturing, delivering high-grade plywood, blockboards, and veneers across Kerala and beyond.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:pt-3">
              <Link
                href="#products"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#163326] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(22,51,38,0.25)] transition-all duration-200 hover:bg-[#0f241a] hover:shadow-[0_6px_20px_rgba(22,51,38,0.32)] hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-[#163326]/30 bg-white/90 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-[#163326] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:border-[#163326]/60 active:scale-[0.98]"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Composite Visual (Factory, Engineer, Kerala Map & Sustainable Forestry) */}
          <div className="w-full lg:max-w-[52%] xl:max-w-[54%] flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[660px] aspect-[614/565] transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/hero-right-image.png"
                alt="DefensePly Kerala Manufacturing Facility & Sustainable Craftsmanship"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-contain object-center lg:object-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics / Stats Bar */}
      <div className="relative z-10 w-full border-t border-[#E5E1D5]/80 bg-[#FAF9F5]/85 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-12 py-4 sm:py-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* 4 Core Milestones */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 flex-1">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163326]/6 text-[#163326]">
                  <Leaf className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] font-bold text-[#163326] leading-tight">20+</span>
                  <span className="text-[12px] text-[#55645b] leading-tight">Years of Expertise</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163326]/6 text-[#163326]">
                  <Users className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] font-bold text-[#163326] leading-tight">500+</span>
                  <span className="text-[12px] text-[#55645b] leading-tight">Team Members</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163326]/6 text-[#163326]">
                  <Factory className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] font-bold text-[#163326] leading-tight">Modern</span>
                  <span className="text-[12px] text-[#55645b] leading-tight">Manufacturing Facilities</span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163326]/6 text-[#163326]">
                  <MapPin className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] font-bold text-[#163326] leading-tight">Wide</span>
                  <span className="text-[12px] text-[#55645b] leading-tight">Distribution Network</span>
                </div>
              </div>
            </div>

            {/* Right Tagline Slogan & Line */}
            <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-[#E5E1D5]">
              <div className="flex flex-col text-right">
                <span className="text-[11.5px] font-bold tracking-[0.16em] text-[#163326] uppercase">HIGHER STANDARDS.</span>
                <span className="text-[11.5px] font-bold tracking-[0.16em] text-[#163326]/75 uppercase">A GREENER TOMORROW.</span>
              </div>
              <div className="h-0.5 w-7 bg-[#163326]" />
            </div>
          </div>

          {/* Scroll Cue */}
          <div className="mt-3 pt-2.5 border-t border-[#E5E1D5]/60 flex items-center justify-between text-[#55645b] text-[11px]">
            <a href="#who-we-are" className="inline-flex items-center gap-2 hover:text-[#163326] transition-colors">
              <Mouse className="h-3.5 w-3.5" />
              <span className="tracking-[0.18em] uppercase font-medium">Scroll to discover</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
