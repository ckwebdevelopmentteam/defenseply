"use client";

import { useState } from "react";
import type { Application } from "@/types/application";
import { ApplicationImage } from "./ApplicationImage";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ApplicationGallery({
  application,
}: {
  application: Application;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = application.gallery;

  if (!gallery || gallery.length === 0) return null;

  const activeItem = gallery[activeIndex] ?? gallery[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="inspiration"
      className="bg-paper px-[5%] py-[clamp(44px,5vw,72px)] scroll-mt-24"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between gap-8 max-phone:flex-col max-phone:items-start">
          <div>
            <p className="mb-2 text-xs tracking-[.2em] uppercase text-muted font-medium">
              Defenseply Lookbook
            </p>
            <Heading>{application.title} inspiration</Heading>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/75 font-light">
            Ideas for your next space. Select an application to inspect finishes,
            proportions, and interior details.
          </p>
        </div>

        {/* Mobile Tab Strip (shown only on small screens) */}
        <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-2 thin-scrollbar lg:hidden">
          {gallery.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-1.5 text-xs tracking-wide uppercase transition-all duration-200",
                  isActive
                    ? "bg-ink text-white shadow-xs font-normal"
                    : "bg-stone/50 text-ink/70 hover:bg-stone hover:text-ink font-light",
                )}
              >
                {String(index + 1).padStart(2, "0")} {item.title}
              </button>
            );
          })}
        </div>

        {/* Desktop Split Showcase */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Left Column: Interactive Room List */}
          <div className="hidden flex-col justify-center space-y-2 lg:col-span-5 lg:flex">
            {gallery.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "group relative cursor-pointer rounded-xs border-b border-line/60 p-4 transition-all duration-300",
                    isActive
                      ? "bg-white/70 shadow-xs border-transparent pl-5"
                      : "hover:bg-white/40",
                  )}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-ink"
                    />
                  )}
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className={cn(
                        "text-xs font-mono transition-colors",
                        isActive ? "text-ink font-medium" : "text-muted",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={cn(
                        "flex-1 text-lg transition-colors",
                        isActive
                          ? "font-normal text-ink"
                          : "font-light text-ink/75 group-hover:text-ink",
                      )}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "mt-1.5 pl-7 text-xs leading-relaxed transition-all duration-300",
                      isActive
                        ? "text-ink/80 opacity-100 max-h-20"
                        : "text-muted opacity-0 max-h-0 overflow-hidden group-hover:opacity-60 group-hover:max-h-20",
                    )}
                  >
                    {item.caption}
                  </p>
                </div>
              );
            })}
            <p className="pt-2 text-[11px] uppercase tracking-widest text-muted">
              Select or hover on any room to inspect view
            </p>
          </div>

          {/* Right Column: Architectural Viewport Showcase */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-stone shadow-md lg:col-span-7">
            {gallery.map((image, index) => {
              const isCurrent = index === activeIndex;
              return (
                <div
                  key={image.id}
                  className={cn(
                    "absolute inset-0 size-full transition-opacity duration-500 ease-in-out",
                    isCurrent
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none",
                  )}
                >
                  <ApplicationImage
                    src={image.src}
                    alt={image.alt}
                    priority={index === 0}
                    fill
                    className="size-full"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
                </div>
              );
            })}

            {/* Overlaid Information Badge */}
            <div className="absolute inset-x-4 bottom-4 z-20 flex items-center justify-between gap-4 text-white max-phone:inset-x-3 max-phone:bottom-3">
              <div className="rounded-full bg-black/50 px-4 py-1.5 backdrop-blur-md border border-white/15 max-phone:px-3">
                <p className="text-xs font-light tracking-wide max-phone:text-[11px]">
                  <span className="font-normal uppercase">{activeItem.title}</span>
                  <span className="mx-2 opacity-50" aria-hidden="true">|</span>
                  <span className="opacity-90">{activeItem.caption}</span>
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous space"
                  className="flex size-8 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-md border border-white/15 transition-all hover:bg-white hover:text-ink"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next space"
                  className="flex size-8 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-md border border-white/15 transition-all hover:bg-white hover:text-ink"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
