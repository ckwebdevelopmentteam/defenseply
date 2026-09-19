"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  Flame,
  Share2,
  Check,
  ArrowRight,
} from "lucide-react";
import type { ProductDetail } from "@/types/product";
import { cn } from "@/lib/cn";

interface ProductGridCardProps {
  product: ProductDetail;
  onEnquire?: (product: ProductDetail) => void;
}

export function ProductGridCard({ product, onEnquire }: ProductGridCardProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const url = `${window.location.origin}/products/${product.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.title} - Defenseply`,
          text: product.tagline,
          url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const primaryBadge = product.badges?.[0] || "100% WATERPROOF";

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E5E2D8] bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(28,63,33,0.12)]">
      {/* Top Media Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF9F5]">
        <Link href={`/products/${product.slug}`} className="block size-full">
          <img
            src={product.card.image || product.gallery?.[0]?.src}
            alt={product.title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Floating Top Badges */}
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 pointer-events-none">
          <span className="rounded-full bg-white/95 backdrop-blur-xs border border-[#1c3f21]/30 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#163326] uppercase shadow-xs">
            {primaryBadge}
          </span>
        </div>

        {/* Share Button */}
        <div className="absolute right-3 top-3 z-10">
          <button
            onClick={handleShare}
            aria-label={`Share ${product.title}`}
            className={cn(
              "relative flex size-8 items-center justify-center rounded-full border bg-white/90 backdrop-blur-xs shadow-xs transition-all",
              copied
                ? "border-[#1c3f21] bg-[#1c3f21] text-white"
                : "border-[#E5E2D8] text-[#555] hover:border-[#1c3f21] hover:text-[#1c3f21] hover:scale-105 active:scale-95"
            )}
          >
            {copied ? <Check className="size-3.5" /> : <Share2 className="size-3.5" />}
          </button>
        </div>

        {/* Bottom Corner Tag */}
        <div className="absolute bottom-2.5 left-3 z-10 pointer-events-none">
          <span className="rounded-full bg-[#12281d]/85 backdrop-blur-xs px-2.5 py-0.5 text-[9.5px] font-medium uppercase tracking-widest text-white border border-white/10">
            Calibrated Core
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Brand Plate */}
          <Link
            href={`/products/${product.slug}`}
            className="group/title inline-flex items-stretch overflow-hidden rounded-[3px] shadow-xs mb-1.5"
          >
            <span className="bg-[#12281d] px-2.5 py-1 text-[11px] font-bold tracking-[1.5px] text-white uppercase font-sans">
              DEFENSEPLY
            </span>
            <span className="bg-gradient-to-r from-[#173827] to-[#255239] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase font-sans border-l border-white/15">
              {product.title}
            </span>
          </Link>

          <p className="text-[10.5px] font-semibold tracking-[1px] uppercase text-[#777] line-clamp-1 mb-2">
            {product.tagline}
          </p>

          <p className="text-[12.5px] leading-relaxed text-[#555] line-clamp-2 mb-4 font-sans">
            {product.description}
          </p>

          {/* Quick Specs Strip */}
          <div className="grid grid-cols-3 gap-1.5 rounded-lg border border-[#EAE7DF] bg-[#FAF9F5] p-2 text-center mb-4">
            <div className="flex flex-col items-center">
              <ShieldCheck className="size-3.5 text-[#1c3f21]" />
              <span className="mt-0.5 text-[9.5px] font-bold text-[#163326] uppercase tracking-wider">
                Waterproof
              </span>
            </div>
            <div className="flex flex-col items-center border-x border-[#EAE7DF]">
              <Star className="size-3.5 text-[#1c3f21] fill-[#1c3f21]" />
              <span className="mt-0.5 text-[9.5px] font-bold text-[#163326] uppercase tracking-wider">
                Gapless
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Flame className="size-3.5 text-[#1c3f21]" />
              <span className="mt-0.5 text-[9.5px] font-bold text-[#163326] uppercase tracking-wider">
                Fire Retardant
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-[#12281d] via-[#1a3d2b] to-[#255239] p-2 border border-[#2d5c41]/30">
          <div className="flex items-center justify-between gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-white py-2 text-[12px] font-bold text-[#163326] shadow-xs transition-all hover:bg-[#FAF9F5] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Know More</span>
              <ArrowRight className="size-3" />
            </Link>
            <button
              type="button"
              onClick={() => onEnquire?.(product)}
              className="flex-1 inline-flex items-center justify-center rounded-full bg-white py-2 text-[12px] font-bold text-[#163326] shadow-xs transition-all hover:bg-[#FAF9F5] hover:scale-[1.02] active:scale-[0.98]"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
