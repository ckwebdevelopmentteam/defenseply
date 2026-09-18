"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Star,
  Flame,
  Dumbbell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ProductDetail } from "@/types/product";

interface ProductShowcaseCardProps {
  product: ProductDetail;
  onEnquire?: (product: ProductDetail) => void;
}

export function ProductShowcaseCard({
  product,
  onEnquire,
}: ProductShowcaseCardProps) {

  // Derive badges from product data
  const displayBadges =
    product.badges && product.badges.length > 0
      ? product.badges.slice(0, 3)
      : ["WATERPROOF", "LUXURY", "ECO-FRIENDLY"];

  return (
    <div className="group relative rounded-2xl border border-[#E5E2D8] bg-white p-3 sm:p-4 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_12px_36px_-6px_rgba(28,63,33,0.1)]">
      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        {/* Left Side: Product Board Image */}
        <Link
          href={`/products/${product.slug}`}
          className="relative lg:w-[380px] xl:w-[420px] shrink-0 overflow-hidden rounded-xl bg-[#FAF9F5] border border-[#EFECE3] flex items-center justify-center group/img"
        >
          <div className="aspect-square w-full max-h-[380px] overflow-hidden">
            <img
              src={product.card.image || product.gallery?.[0]?.src}
              alt={product.title}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
          </div>
          {/* Subtle Corner Tag */}
          <span className="absolute bottom-3 left-3 rounded-full bg-[#12281d]/85 backdrop-blur-xs px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white border border-white/10">
            100% Calibrated
          </span>
        </Link>

        {/* Right Side: Showcase Content */}
        <div className="flex flex-1 flex-col justify-between pt-1 pb-2 pr-2 sm:pr-4">
          <div>
            {/* Top Row: Pill Badges */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {displayBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-[#1c3f21]/30 bg-gradient-to-r from-[#163326]/8 to-[#1c3f21]/12 px-3 py-0.5 text-[10.5px] font-bold tracking-wider text-[#163326] uppercase"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Brand / Product Title Plate */}
            <div className="mt-4 flex flex-col items-start gap-1">
              <Link
                href={`/products/${product.slug}`}
                className="group/title inline-flex items-stretch overflow-hidden rounded-[3px] shadow-xs"
              >
                <span className="bg-[#12281d] px-3.5 py-1.5 text-xs sm:text-[13px] font-bold tracking-[2px] text-white uppercase font-sans transition-colors group-hover/title:bg-[#0b1b13]">
                  DEFENSEPLY
                </span>
                <span className="bg-gradient-to-r from-[#173827] via-[#1c3f21] to-[#255239] px-3 py-1.5 text-xs sm:text-[13px] font-semibold tracking-wide text-white uppercase font-sans border-l border-white/15">
                  {product.title}
                </span>
              </Link>
              <p className="mt-1 text-[11px] sm:text-[11.5px] font-semibold tracking-[1.5px] uppercase text-[#666]">
                {product.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="mt-3.5 text-[13px] sm:text-[13.5px] leading-relaxed text-[#444] line-clamp-3">
              {product.description}
            </p>

            {/* Divider Line */}
            <div className="my-4 border-t border-[#EAE7DF]" />

            {/* Feature Highlights Row with Icons & Navigation */}
            <div className="relative flex items-center justify-between py-1">
              <button
                type="button"
                aria-label="Previous feature"
                className="hidden sm:flex size-6 items-center justify-center rounded-full text-[#888] hover:text-[#1c3f21] hover:bg-black/5"
              >
                <ChevronLeft className="size-4" />
              </button>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full px-1 sm:px-3">
                {/* Feature 1: Waterproof */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 font-bold text-[12px] sm:text-[13px] text-[#163326] uppercase tracking-wide">
                    <ShieldCheck className="size-4 text-[#1c3f21]" />
                    <span>WATERPROOF</span>
                  </div>
                  <span className="mt-0.5 text-[11px] text-[#777]">100% Immune</span>
                </div>

                {/* Feature 2: Gapless Core */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 font-bold text-[12px] sm:text-[13px] text-[#163326] uppercase tracking-wide">
                    <Star className="size-4 text-[#1c3f21] fill-[#1c3f21]" />
                    <span>GAPLESS</span>
                  </div>
                  <span className="mt-0.5 text-[11px] text-[#777]">Calibrated Core</span>
                </div>

                {/* Feature 3: Fire Retardant */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 font-bold text-[12px] sm:text-[13px] text-[#163326] uppercase tracking-wide">
                    <Flame className="size-4 text-[#1c3f21]" />
                    <span>FIREWALL</span>
                  </div>
                  <span className="mt-0.5 text-[11px] text-[#777]">Class 1 Retardant</span>
                </div>

                {/* Feature 4: Strength */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 font-bold text-[12px] sm:text-[13px] text-[#163326] uppercase tracking-wide">
                    <Dumbbell className="size-4 text-[#1c3f21]" />
                    <span>STRENGTH</span>
                  </div>
                  <span className="mt-0.5 text-[11px] text-[#777]">High Screw Hold</span>
                </div>
              </div>

              <button
                type="button"
                aria-label="Next feature"
                className="hidden sm:flex size-6 items-center justify-center rounded-full text-[#888] hover:text-[#1c3f21] hover:bg-black/5"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Bottom Action Bar: Compound Linear Green Gradient with Know More and Enquire Now Buttons */}
          <div className="mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#12281d] via-[#1a3d2b] to-[#255239] px-4 py-3 sm:px-6 sm:py-3.5 shadow-[0_4px_16px_-3px_rgba(28,63,33,0.25)] border border-[#2d5c41]/30">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-white px-7 py-2 text-[13.5px] font-bold text-[#163326] shadow-xs transition-all duration-200 hover:bg-[#FAF9F5] hover:scale-[1.03] active:scale-[0.98]"
              >
                Know More
              </Link>
              <button
                type="button"
                onClick={() => onEnquire?.(product)}
                className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-white px-7 py-2 text-[13.5px] font-bold text-[#163326] shadow-xs transition-all duration-200 hover:bg-[#FAF9F5] hover:scale-[1.03] active:scale-[0.98]"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
