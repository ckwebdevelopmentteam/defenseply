"use client";

import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProductGalleryProps {
  gallery: GalleryImage[];
  title: string;
  badge?: string;
}

export function ProductGallery({ gallery, title, badge }: ProductGalleryProps) {
  const displayGallery = gallery.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = displayGallery[activeIndex] || displayGallery[0];

  if (!activeImage) return null;
  return (
    <div className="sticky top-[100px] flex flex-col gap-4 max-lg:static max-lg:top-auto max-sm:gap-2.5 animate-fade-up">
      {/* Main Preview */}
      <div className="group relative bg-white rounded overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#ebe9e4]">
        {badge && (
          <span className="absolute top-[18px] left-[18px] bg-[rgba(26,26,26,0.88)] backdrop-blur-md text-white text-[10px] tracking-[1.5px] uppercase py-1.5 px-3.5 rounded-[2px] z-[2] font-medium font-sans max-sm:top-3 max-sm:left-3 max-sm:text-[9px] max-sm:py-[5px] max-sm:px-2.5">
            {badge}
          </span>
        )}
        <div className="w-full aspect-square bg-[#faf9f6] overflow-hidden flex items-center justify-center max-sm:aspect-[4/3] max-[390px]:aspect-[3/2]">
          <img
            src={activeImage.src}
            alt={activeImage.alt || title}
            className="w-full h-full object-cover object-center transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
        {activeImage.caption && (
          <p className="py-3 px-[18px] text-xs leading-[1.5] text-[#6d6b68] border-t border-[#f0ede7] bg-white italic">
            {activeImage.caption}
          </p>
        )}
      </div>

      {/* Thumbnails */}
      {displayGallery.length > 1 && (
        <div
          className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:thin]"
          role="group"
          aria-label="Product image gallery"
        >
          {displayGallery.map((item, idx) => (
            <button
              key={item.src + idx}
              type="button"

              aria-pressed={activeIndex === idx}
              aria-label={`View image ${idx + 1}: ${item.alt}`}
              className={`shrink-0 basis-[72px] h-[72px] rounded-[3px] overflow-hidden border-2 cursor-pointer p-0 transition-all duration-200 bg-white max-sm:basis-[58px] max-sm:h-[58px] ${
                activeIndex === idx
                  ? "border-[#1c3f21] opacity-100 shadow-xs"
                  : "border-transparent opacity-65 hover:opacity-95 hover:-translate-y-0.5"
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={item.src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
