"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  Flame,
  Dumbbell,
  Share2,
  Check,
  QrCode,
  ArrowRight,
  Sparkles,
  Layers,
  Ruler,
  Maximize2,
} from "lucide-react";
import type { ProductDetail } from "@/types/product";
import { cn } from "@/lib/cn";

interface ProductStudioViewerProps {
  product: ProductDetail;
  onEnquire?: (product: ProductDetail) => void;
}

export function ProductStudioViewer({
  product,
  onEnquire,
}: ProductStudioViewerProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Combine card image and gallery
  const images = [
    ...(product.card.image ? [product.card.image] : []),
    ...(product.gallery?.map((g) => g.src) || []),
  ].filter((v, i, a) => a.indexOf(v) === i);

  const currentImage = images[activeImageIndex] || images[0] || "/assets/products/pvcfoamboard(main).jpg";

  const handleShare = async () => {
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
        // fallback
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

  return (
    <div className="rounded-3xl border border-[#E5E2D8] bg-white p-5 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all animate-fade-in">
      {/* Top Header: Category, Title Plate, QR & Share */}
      <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#ECEAE3]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#163326]/10 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-[#163326] uppercase">
              <Sparkles className="size-3" />
              <span>{product.category}</span>
            </span>
            {product.badges?.[0] && (
              <span className="rounded-full border border-[#1c3f21]/30 bg-[#1c3f21]/5 px-2.5 py-0.5 text-[10.5px] font-bold tracking-wider text-[#163326] uppercase">
                {product.badges[0]}
              </span>
            )}
          </div>

          <div className="inline-flex items-stretch overflow-hidden rounded-[4px] shadow-xs">
            <span className="bg-[#12281d] px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-[2px] text-white uppercase font-sans">
              DEFENSEPLY
            </span>
            <span className="bg-gradient-to-r from-[#173827] via-[#1c3f21] to-[#255239] px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-white uppercase font-sans border-l border-white/15">
              {product.title}
            </span>
          </div>
          <p className="mt-1.5 text-xs sm:text-[13px] font-semibold tracking-[1px] uppercase text-[#666]">
            {product.tagline}
          </p>
        </div>

        {/* Right Tools: QR & Share */}
        <div className="flex items-center gap-2.5">
          <div
            className="flex items-center gap-1.5 rounded-xl border border-[#E5E2D8] bg-[#FAF9F5] p-2"
            title="Authentic Defenseply QR Verification"
          >
            <QrCode className="size-6 sm:size-7 text-[#1c3f21]" />
            <div className="flex flex-col leading-none text-[8px] uppercase font-bold tracking-wider text-[#777]">
              <span>Scan</span>
              <span className="text-[#163326]">Verify</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            aria-label="Share product"
            className={cn(
              "relative flex size-10 items-center justify-center rounded-xl border bg-white shadow-xs transition-all",
              copied
                ? "border-[#1c3f21] bg-[#1c3f21] text-white"
                : "border-[#E5E2D8] text-[#555] hover:border-[#1c3f21] hover:text-[#1c3f21] active:scale-95"
            )}
          >
            {copied ? <Check className="size-4" /> : <Share2 className="size-4" />}
            {copied && (
              <span className="absolute -bottom-7 right-0 whitespace-nowrap rounded bg-[#163326] px-2 py-0.5 text-[9.5px] font-medium text-white shadow-sm">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Center Showcase: Large Board Viewer + Thumbnails */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Main Image Stage (7 cols) */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#FAF9F5] border border-[#EAE7DF] shadow-inner group">
            <img
              src={currentImage}
              alt={product.title}
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-[#12281d]/85 backdrop-blur-xs px-3 py-1 text-[10.5px] font-medium uppercase tracking-widest text-white border border-white/10">
              100% Calibrated Surface
            </div>
            <Link
              href={`/products/${product.slug}`}
              className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-xs p-2 text-[#163326] shadow-sm hover:scale-105 transition-transform"
              title="Expand full details"
            >
              <Maximize2 className="size-3.5" />
            </Link>
          </div>

          {/* Image Thumbnail Selector */}
          {images.length > 1 && (
            <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "size-14 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                    activeImageIndex === idx
                      ? "border-[#163326] shadow-xs scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="size-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Narrative & Key Specs Highlights (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#163326] mb-1.5 flex items-center gap-1.5">
              <Layers className="size-3.5 text-[#1c3f21]" />
              <span>Architectural Overview</span>
            </h4>
            <p className="text-[13.5px] leading-relaxed text-[#444] font-sans">
              {product.description}
            </p>
          </div>

          {/* Specifications Matrix Card */}
          <div className="rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] p-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E5E2D8]">
              <span className="text-[#666] flex items-center gap-1">
                <Ruler className="size-3 text-[#1c3f21]" />
                <span>Thickness</span>
              </span>
              <strong className="text-[#163326] font-semibold">{product.specs.thickness}</strong>
            </div>

            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E5E2D8]">
              <span className="text-[#666]">Density Range</span>
              <strong className="text-[#163326] font-semibold">{product.specs.density}</strong>
            </div>

            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E5E2D8]">
              <span className="text-[#666]">Fire Resistance</span>
              <strong className="text-[#163326] font-semibold">
                {product.specs.fireRating || "Class 1 Self-extinguishing"}
              </strong>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#666]">Water Absorption</span>
              <strong className="text-[#163326] font-semibold">
                {product.specs.waterResistance}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Feature Badges Strip */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-2 rounded-2xl bg-[#FAF9F5] border border-[#EAE7DF]">
        <div className="flex items-center gap-2.5 px-2">
          <div className="size-8 rounded-full bg-[#163326]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="size-4 text-[#1c3f21]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#163326] uppercase">Waterproof</div>
            <div className="text-[10.5px] text-[#777]">100% Moisture Proof</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-2">
          <div className="size-8 rounded-full bg-[#163326]/10 flex items-center justify-center shrink-0">
            <Star className="size-4 text-[#1c3f21] fill-[#1c3f21]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#163326] uppercase">Gapless</div>
            <div className="text-[10.5px] text-[#777]">Calibrated German Core</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-2">
          <div className="size-8 rounded-full bg-[#163326]/10 flex items-center justify-center shrink-0">
            <Flame className="size-4 text-[#1c3f21]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#163326] uppercase">Fire Retardant</div>
            <div className="text-[10.5px] text-[#777]">Self-extinguishing</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-2">
          <div className="size-8 rounded-full bg-[#163326]/10 flex items-center justify-center shrink-0">
            <Dumbbell className="size-4 text-[#1c3f21]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#163326] uppercase">High Strength</div>
            <div className="text-[10.5px] text-[#777]">Superior Screw Hold</div>
          </div>
        </div>
      </div>

      {/* Bottom Action Strip: Compound Linear Green Gradient with Two Buttons */}
      <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#12281d] via-[#1a3d2b] to-[#255239] p-4 sm:p-5 shadow-[0_6px_20px_-4px_rgba(28,63,33,0.3)] border border-[#2d5c41]/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <div className="text-sm font-bold tracking-wide">
              Ready to specify {product.title}?
            </div>
            <div className="text-xs text-white/80">
              Access full technical datasheets, CAD assets, and custom quotes.
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-bold text-[#163326] shadow-sm transition-all duration-200 hover:bg-[#FAF9F5] hover:scale-[1.03] active:scale-[0.98]"
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
  );
}
