"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function InnovationTechnology() {
  return (
    <section
      id="quality-testing"
      data-section="quality-testing"
      className="relative w-full bg-white mb-30 max-md:mb-16 max-phone:mb-12"
      aria-label="Built for Strength. Tested for Life."
    >
      {/* Top Row: Aligned directly with the 5-column grid below (Paragraph starts from 2nd card) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.75fr_1fr_1fr_1fr_1fr] gap-3.5 sm:gap-4 items-start mb-12 sm:mb-14">
        {/* Left Eyebrow with small line - spans Column 1 (directly above the image card) */}
        <div className="flex items-center gap-3 pt-1.5 lg:pt-2.5">
          <span className="h-[2px] w-8 sm:w-10 bg-[#9E7B5A]" />
          <span className="text-sm md:text-base font-mono tracking-[0.2em] uppercase text-[#9E7B5A] font-semibold">
            QUALITY &amp; TESTING
          </span>
        </div>

        {/* Right Large Headline: spans Columns 2-5 (starts above 2nd card and covers full remaining width) */}
        <div className="lg:col-span-4">
          <h2 className="text-[clamp(26px,2.5vw,44px)] leading-[1.2] font-light tracking-[-.01em] uppercase text-[#1a1a1a] max-md:text-[20px] max-md:leading-[1.28] max-phone:text-[clamp(15.5px,4.4vw,17.5px)] max-phone:leading-[1.32] font-sans">
            Built for strength and tested for life. Every Defenseply composite board is rigorously verified in our in-house testing laboratory — guaranteeing 100% waterproof performance, heavy load strength, zero wood rot, and safe lead-free living.
          </h2>
        </div>
      </div>

      {/* Middle Row: 5 Cards Grid with Staggered One-by-One Animation */}
      {/* First image card is wider (1.75fr) with increased height and quality descriptions */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.75fr_1fr_1fr_1fr_1fr] gap-3.5 sm:gap-4 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Card 1: Wide Facility & Lab Photo Card */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-between h-[210px] sm:h-[260px] lg:h-[400px]"
        >
          <div className="relative w-full h-full rounded-[3px] overflow-hidden bg-neutral-900 group shadow-xs">
            <Image
              src="/assets/about/indian_lab_scientist.jpg"
              alt="Defenseply Materials Quality Testing Laboratory at KINFRA Industrial Park"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Card 2: Signature Forest Green Accent Card [01] */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-between h-[210px] sm:h-[260px] lg:h-[400px] p-4 sm:p-5 lg:p-6 rounded-[3px] bg-[#1c3f21] text-white shadow-xs"
        >
          <span className="text-white/60 font-mono text-[11px] sm:text-[11.5px] tracking-wider">
            [01]
          </span>
          <div>
            <div className="text-[clamp(30px,3.2vw,48px)] font-bold tracking-tight text-white leading-none font-sans">
              100%
            </div>
            <p className="text-[12.5px] sm:text-[13.5px] font-semibold text-white mt-2 sm:mt-3 leading-snug font-sans">
              Waterproof &amp; termite-proof
            </p>
            <p className="text-[11px] sm:text-[12px] text-white/80 font-sans mt-1.5 sm:mt-2 leading-[1.45] sm:leading-[1.55] font-light">
              Closed-cell polymer matrix guarantees zero rotting, swelling, or insect degradation in high-moisture zones.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Clean White Card with Subtle Border [02] */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-between h-[210px] sm:h-[260px] lg:h-[400px] p-4 sm:p-5 lg:p-6 rounded-[3px] bg-white border border-black/12 text-[#161513] shadow-xs"
        >
          <span className="text-[#8C8578] font-mono text-[11px] sm:text-[11.5px] tracking-wider">
            [02]
          </span>
          <div>
            <div className="text-[clamp(30px,3.2vw,48px)] font-bold tracking-tight text-[#161513] leading-none font-sans">
              0%
            </div>
            <p className="text-[12.5px] sm:text-[13.5px] font-semibold text-[#161513] mt-2 sm:mt-3 leading-snug font-sans">
              Swelling &amp; edge peeling
            </p>
            <p className="text-[11px] sm:text-[12px] text-[#6E685E] font-sans mt-1.5 sm:mt-2 leading-[1.45] sm:leading-[1.55] font-light">
              High-density composite crusts eliminate delamination and warping under heavy seasonal changes.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Signature Warm Brown Card [03] matching spinner DP */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-between h-[210px] sm:h-[260px] lg:h-[400px] p-4 sm:p-5 lg:p-6 rounded-[3px] bg-[#8C7356] text-white shadow-xs"
        >
          <span className="text-white/60 font-mono text-[11px] sm:text-[11.5px] tracking-wider">
            [03]
          </span>
          <div>
            <div className="text-[clamp(30px,3.2vw,48px)] font-bold tracking-tight text-white leading-none font-sans">
              110K+
            </div>
            <p className="text-[12.5px] sm:text-[13.5px] font-semibold text-white mt-2 sm:mt-3 leading-snug font-sans">
              Annual calibrated capacity
            </p>
            <p className="text-[11px] sm:text-[12px] text-white/85 font-sans mt-1.5 sm:mt-2 leading-[1.45] sm:leading-[1.55] font-light">
              Automated extrusion line delivers uniform density, high screw-holding power, and continuous supply.
            </p>
          </div>
        </motion.div>

        {/* Card 5: Modern Dark Charcoal Card [04] */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-between h-[210px] sm:h-[260px] lg:h-[400px] p-4 sm:p-5 lg:p-6 rounded-[3px] bg-[#161513] text-white shadow-xs"
        >
          <span className="text-white/50 font-mono text-[11px] sm:text-[11.5px] tracking-wider">
            [04]
          </span>
          <div>
            <div className="text-[clamp(30px,3.2vw,48px)] font-bold tracking-tight text-white leading-none font-sans">
              24/7
            </div>
            <p className="text-[12.5px] sm:text-[13.5px] font-semibold text-white mt-2 sm:mt-3 leading-snug font-sans">
              Testing &amp; fire safety
            </p>
            <p className="text-[11px] sm:text-[12px] text-white/75 font-sans mt-1.5 sm:mt-2 leading-[1.45] sm:leading-[1.55] font-light">
              Round-the-clock batch inspection, Class-1 fire resistance, and 100% lead-free formulation for healthy air.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Row: Divider Line, Compliance Left, Our Story Right */}
      <div className="mt-10 sm:mt-12 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left Certification Strip */}
        <p className="text-[11.5px] sm:text-[12px] text-[#6E685E] font-mono tracking-[0.04em]">
          Certified: ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018 · 100% Lead-Free &amp; Recyclable
        </p>

        {/* Right Our Story Button going to /about */}
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 rounded-[3px] border border-black/20 bg-transparent px-5 py-2.5 text-[12.5px] font-medium tracking-[0.04em] text-[#161513] transition-all duration-300 hover:bg-[#161513] hover:text-white hover:border-[#161513]"
        >
          <span>Our story</span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

export default InnovationTechnology;
