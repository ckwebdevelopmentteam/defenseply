"use client";

import { ArrowRight } from "lucide-react";
import { productCards } from "@/data/products";
import { Carousel, Arrow } from "@/components/ui/Carousel";

const productTaglines: Record<string, string> = {
  "pvc-foam-boards": "Lightweight. Durable. Versatile.",
  "pvc-colour-boards": "Vibrant finishes for modern spaces.",
  "wpc-boards": "The natural look. Greater performance.",
  "wpc-door-frames": "Tough, stylish & built to last.",
  "wpc-window-frames": "Architectural precision framing.",
  "wpc-doors": "Robust solid composite doors.",
  "3-layer-boards": "Enhanced strength & waterproof surface.",
  "3-layer-wpc-board": "High strength & structural performance.",
  "3-layer-wpc-colour-board": "Pre-coloured designer panels.",
  "3-layer-multi-board": "Co-extrusion technology for interiors.",
};

export function Products({
  items = productCards,
}: {
  items?: typeof productCards;
} = {}) {
  return (
    <section
      id="products"
      data-section="products"
      className="page-bleed relative mb-20 overflow-hidden border-y border-black/8 bg-[#f5f3ee] px-[38px] pt-12 pb-14 max-phone:mb-12 max-phone:px-5 max-phone:pt-8 max-phone:pb-10 max-md:mb-12 max-md:px-5"
      aria-label="Our Products"
    >
      {/* Ambient Section Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.65),transparent_70%)]" />

      {/* Centered Heading with Description - No image, centered layout */}
      <div className="relative z-10 mx-auto mb-10 flex max-w-[840px] flex-col items-center text-center max-phone:mb-6">
        <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-center">
          Our Products
        </h2>
        <p className="max-w-[700px] text-fluid font-light leading-[1.6] text-[#55534e] text-center mx-auto max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35] max-phone:max-w-[340px]">
          Calibrated cellular composite boards, waterproof formulations, and precision-moulded architectural profiles engineered for demanding interior and structural environments.
        </p>
      </div>

      {/* Carousel with Custom Progress & Application-style Arrow Navigation */}
      <Carousel
        spacing={24}
        desktop={3}
        tablet={2}
        mobile={1.15}
        controls={(handle) => (
          <div className="relative z-10 mb-6 flex items-center justify-between border-t border-b border-black/10 py-3.5 max-phone:py-2.5">
            {/* Left: Counter & Sleek Track Line */}
            <div className="flex flex-1 items-center gap-5 max-phone:gap-3">
              <div className="flex items-baseline gap-1 text-sm font-sans whitespace-nowrap" aria-live="polite">
                <span className="font-semibold text-[#1a1a1a]">
                  {String(handle.page).padStart(2, "0")}
                </span>
                <span className="text-[#8c8984]">
                  / {String(handle.pages).padStart(2, "0")}
                </span>
              </div>

              {/* Progress Line */}
              <div className="relative h-[2px] w-full max-w-[480px] flex-1 overflow-hidden rounded-full bg-[#dcd8d1] max-phone:max-w-none">
                <div
                  className="h-full bg-[#1a1a1a] transition-all duration-300 ease-out"
                  style={{ width: `${(handle.page / handle.pages) * 100}%` }}
                />
              </div>
            </div>

            {/* Right: Application-style Arrows (no vertical divider in between) */}
            <div className="flex items-center gap-2 pl-5 text-[#1a1a1a] max-phone:pl-2">
              <Arrow
                direction="left"
                aria-label="Previous products"
                className="size-[33px] transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25"
                onClick={handle.previous}
                disabled={handle.page === 1}
              />
              <Arrow
                direction="right"
                aria-label="Next products"
                className="size-[33px] transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25"
                onClick={handle.next}
                disabled={handle.page === handle.pages}
              />
            </div>
          </div>
        )}
      >
        {items.map((item) => {
          const tagline =
            ("slug" in item && item.slug && productTaglines[item.slug as string]) ||
            ("tagline" in item && item.tagline) ||
            "Engineered for architectural excellence.";

          return (
            <div
              className="keen-slider__slide group relative flex h-[480px] max-desktop:h-[420px] max-phone:h-[380px] flex-col overflow-hidden bg-[#222]"
              key={item.title}
            >
              <a
                href={item.href}
                className="relative block size-full overflow-hidden no-underline"
              >
                {/* Base Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Secondary Image */}
                {"hoverImage" in item && item.hoverImage && (
                  <img
                    src={item.hoverImage}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                  />
                )}

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 pointer-events-none" />

                {/* Card Body */}
                <div className="relative z-10 flex h-full flex-col justify-between p-7 max-phone:p-5 text-white">
                  {/* Top Meta */}
                  <div className="flex flex-col">
                    <span className="text-[11.5px] font-sans tracking-[1.5px] uppercase text-white/80 font-normal">
                      Defenseply
                    </span>
                    <span className="mt-1.5 mb-3 block h-[1px] w-6 bg-white/60" aria-hidden="true" />
                    <h3 className="text-[20px] max-phone:text-[18px] font-medium uppercase tracking-[0.5px] text-white leading-tight font-sans">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-[85%] text-[13px] leading-[1.5] text-white/80 font-normal font-sans">
                      {tagline}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="flex items-center justify-between pt-4">
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.5px] text-white/90 transition-colors group-hover:text-white font-sans">
                      Explore products
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
