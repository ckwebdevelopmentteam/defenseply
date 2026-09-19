"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Star,
  Flame,
  Dumbbell,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { ProductDetail } from "@/types/product";
import { cn } from "@/lib/cn";

interface ProductStoryRowProps {
  product: ProductDetail;
  index: number;
  onEnquire?: (product: ProductDetail) => void;
}

export function ProductStoryRow({
  product,
  index,
  onEnquire,
}: ProductStoryRowProps) {
  const isEven = index % 2 === 1; // Alternating flag

  // Application preview image (if available)
  const appImage = product.applications?.[0]?.image || product.gallery?.[1]?.src;

  return (
    <article
      className={cn(
        "relative rounded-3xl border border-[#E5E2D8] bg-white p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(28,63,33,0.08)]",
        isEven ? "bg-[#FAF9F5]/50" : "bg-white"
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center",
          isEven && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
        )}
      >
        {/* Visual Column (Board Texture & Application Preview) - 6 cols */}
        <div className="lg:col-span-6 relative">
          {/* Main Board Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#FAF9F5] border border-[#EAE7DF] shadow-md group/media">
            <Link href={`/products/${product.slug}`} className="block size-full">
              <img
                src={product.card.image || product.gallery?.[0]?.src}
                alt={product.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover/media:scale-105"
              />
            </Link>

            {/* Top Badges */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pointer-events-none">
              <span className="rounded-full bg-white/95 backdrop-blur-xs border border-[#1c3f21]/30 px-3 py-1 text-[10.5px] font-bold tracking-wider text-[#163326] uppercase shadow-xs">
                {product.badges?.[0] || "100% Waterproof"}
              </span>
            </div>

            {/* Bottom Tag */}
            <div className="absolute bottom-3 left-3 pointer-events-none">
              <span className="rounded-full bg-[#12281d]/85 backdrop-blur-xs px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white border border-white/10">
                100% Calibrated Core
              </span>
            </div>
          </div>

          {/* Secondary Floating Application Pill (if available) */}
          {appImage && (
            <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-2.5 shadow-xl backdrop-blur-md max-w-[240px] animate-fade-in">
              <img
                src={appImage}
                alt=""
                className="size-14 rounded-xl object-cover shrink-0"
              />
              <div className="text-left leading-tight pr-2">
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#1c3f21] block">
                  Application Space
                </span>
                <span className="text-[11.5px] font-semibold text-[#1a1a1a] line-clamp-1">
                  {product.applications?.[0]?.title || "Interior Installations"}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Narrative & Specification Column - 6 cols */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            {/* Top Meta: Category & Badges */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#163326]/10 px-3 py-1 text-[11px] font-bold tracking-wider text-[#163326] uppercase">
                <Sparkles className="size-3" />
                <span>{product.category}</span>
              </span>
              {product.badges?.[1] && (
                <span className="rounded-full border border-[#1c3f21]/30 bg-[#1c3f21]/5 px-2.5 py-0.5 text-[10.5px] font-bold tracking-wider text-[#163326] uppercase">
                  {product.badges[1]}
                </span>
              )}
            </div>

            {/* Product Title Plate */}
            <div className="mt-4">
              <Link
                href={`/products/${product.slug}`}
                className="group/title inline-flex items-stretch overflow-hidden rounded-[3px] shadow-xs mb-1.5"
              >
                <span className="bg-[#12281d] px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-[2px] text-white uppercase font-sans transition-colors group-hover/title:bg-[#0b1b13]">
                  DEFENSEPLY
                </span>
                <span className="bg-gradient-to-r from-[#173827] via-[#1c3f21] to-[#255239] px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-white uppercase font-sans border-l border-white/15">
                  {product.title}
                </span>
              </Link>
              <h3 className="mt-2 text-xl sm:text-2xl lg:text-[26px] font-bold text-[#163326] font-sans tracking-tight">
                {product.tagline}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-3.5 text-[14px] sm:text-[14.5px] leading-relaxed text-[#444] font-sans">
              {product.description}
            </p>

            {/* Technical Specifications Quick Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] p-2.5 text-center">
                <span className="text-[10px] uppercase tracking-wider text-[#777] block">Thickness</span>
                <strong className="text-xs font-bold text-[#163326] truncate block mt-0.5">
                  {product.specs.thickness}
                </strong>
              </div>
              <div className="rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] p-2.5 text-center">
                <span className="text-[10px] uppercase tracking-wider text-[#777] block">Density</span>
                <strong className="text-xs font-bold text-[#163326] truncate block mt-0.5">
                  {product.specs.density}
                </strong>
              </div>
              <div className="rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] p-2.5 text-center">
                <span className="text-[10px] uppercase tracking-wider text-[#777] block">Fire Rating</span>
                <strong className="text-xs font-bold text-[#163326] truncate block mt-0.5">
                  Class 1 Flame
                </strong>
              </div>
              <div className="rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] p-2.5 text-center">
                <span className="text-[10px] uppercase tracking-wider text-[#777] block">Water Proof</span>
                <strong className="text-xs font-bold text-[#163326] truncate block mt-0.5">
                  Zero Swell
                </strong>
              </div>
            </div>

            {/* 4 Feature Icons Row */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#163326] py-2 border-y border-[#ECEAE3]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-[#1c3f21]" />
                <span>100% Waterproof</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="size-4 text-[#1c3f21] fill-[#1c3f21]" />
                <span>Gapless Core</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="size-4 text-[#1c3f21]" />
                <span>Fire Retardant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Dumbbell className="size-4 text-[#1c3f21]" />
                <span>High Screw Hold</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#12281d] via-[#1a3d2b] to-[#255239] p-3 sm:p-4 shadow-[0_6px_20px_-4px_rgba(28,63,33,0.25)] border border-[#2d5c41]/30">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-white text-xs font-medium pl-2 hidden sm:block">
                Specification datasheet & architectural samples available
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-bold text-[#163326] shadow-sm transition-all duration-200 hover:bg-[#FAF9F5] hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Know More</span>
                  <ArrowRight className="size-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => onEnquire?.(product)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-bold text-[#163326] shadow-sm transition-all duration-200 hover:bg-[#FAF9F5] hover:scale-[1.03] active:scale-[0.98]"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
