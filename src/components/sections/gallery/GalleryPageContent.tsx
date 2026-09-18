"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Grid2X2,
  Columns2,
  Square,
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gallery from "@/data/gallery.json";
import { cn } from "@/lib/cn";
import { Dialog } from "@/components/ui/Dialog";
import { Arrow } from "@/components/ui/Carousel";

type GalleryCategory = keyof typeof gallery;
const categories = Object.keys(gallery) as GalleryCategory[];

type ViewMode = "grid-4" | "grid-2" | "grid-1";
type MobileViewMode = "vertical" | "carousel";

function ProjectCard({
  item,
  idx,
  aspectClass = "aspect-[4/3]",
  className,
  onOpen,
}: {
  item: (typeof gallery)[GalleryCategory][number];
  idx: number;
  aspectClass?: string;
  className?: string;
  onOpen: () => void;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden bg-[#f7f8f9] border border-black/6 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Enlarge image: ${item.title}`}
        className={cn(
          "relative w-full overflow-hidden bg-stone cursor-pointer block text-left",
          aspectClass,
        )}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
        />

        {/* Subtle vignette on hover */}
        <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur-xs transition-transform duration-300 group-hover:scale-110">
            <Plus size={24} strokeWidth={1.5} />
          </span>
        </div>
      </button>

      {/* Caption & Metadata */}
      <div className="flex items-center justify-between p-4 border-t border-black/5 bg-white">
        <div className="flex flex-col min-w-0 pr-2">
          <span className="font-mono text-[10px] text-ink/40 tracking-[0.14em] uppercase">
            PROJECT {String(idx + 1).padStart(2, "0")}
          </span>
          <h2 className="text-[14px] font-medium leading-snug text-ink line-clamp-1 group-hover:text-[#1c3f21] transition-colors">
            {item.title}
          </h2>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="shrink-0 p-1.5 text-ink/40 hover:text-ink transition-colors cursor-pointer"
          aria-label={`View full project details for ${item.title}`}
        >
          <Plus size={16} />
        </button>
      </div>
    </article>
  );
}

export function GalleryPageContent() {
  const [category, setCategory] = useState<GalleryCategory>("All Applications");
  const [view, setView] = useState<ViewMode>("grid-4");
  const [mobileView, setMobileView] = useState<MobileViewMode>("vertical");
  const [selected, setSelected] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const items = gallery[category] || [];

  // Reset carousel horizontal scroll position when category changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [category]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "ArrowLeft") {
        setSelected((prev) =>
          prev !== null ? (prev + items.length - 1) % items.length : null,
        );
      } else if (e.key === "ArrowRight") {
        setSelected((prev) =>
          prev !== null ? (prev + 1) % items.length : null,
        );
      } else if (e.key === "Escape") {
        setSelected(null);
      }
    },
    [selected, items.length],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="w-full bg-white text-ink pb-24 max-md:pb-16">
      {/* 1. Page Header & Intro */}
      <section className="mx-auto w-full max-w-[1650px] px-8 pt-14 pb-10 max-md:px-5 max-phone:pt-10 max-phone:pb-8 border-b border-black/8">
        <div className="mx-auto flex max-w-[880px] flex-col items-center text-center gap-3.5">
          <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#1c3f21] font-medium">
            DefensePly Architectural Portfolio
          </span>
          <h1 className="text-[clamp(36px,4.5vw,68px)] font-light uppercase tracking-tight text-ink leading-[1.08] text-center">
            Inspiration <span className="font-bold text-[#1c3f21]">Gallery</span>
          </h1>
          <p className="max-w-[720px] text-[15.5px] leading-[1.65] text-[#555] max-phone:text-[14px] text-center">
            Explore real-world residential, commercial, and architectural applications engineered with DefensePly
            high-performance Wood Polymer Composite (WPC) and PVC board systems.
          </p>
        </div>
      </section>

      {/* 2. Controls Bar: Categories & View Switchers */}
      <section className=" top-[68px] max-phone:top-[56px] z-20 bg-white/95 backdrop-blur-md border-b border-black/8 py-3.5 px-8 max-md:px-5">
        <div className="mx-auto flex max-w-[1650px] items-center justify-between gap-4">
          {/* Category Tabs: Smooth horizontal swipe on all devices (No broken dropdown) */}
          <ul
            className="flex min-w-0 flex-1 items-center gap-5 sm:gap-7 overflow-x-auto thin-scrollbar py-1 scroll-smooth"
            aria-label="Gallery category filters"
          >
            {categories.map((c) => (
              <li key={c} className="shrink-0">
                <button
                  type="button"
                  className={cn(
                    "whitespace-nowrap border-b-2 py-1 text-sm font-sans transition-colors cursor-pointer",
                    category === c
                      ? "border-[#1c3f21] font-medium text-[#1c3f21]"
                      : "border-transparent text-ink/60 hover:text-ink",
                  )}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                >
                  {c}
                  <span className="ml-1.5 font-mono text-[11px] text-ink/40">
                    ({gallery[c].length})
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop 3 Grid View Switcher Icons (>= 600px) */}
          <div className="hidden phone:flex items-center gap-4 shrink-0 pl-3 border-l border-black/8">
            {[
              { id: "grid-4", icon: Grid2X2, label: "Four-column grid view" },
              { id: "grid-2", icon: Columns2, label: "Two-column wide view" },
              { id: "grid-1", icon: Square, label: "Single-column full view" },
            ].map(({ id, icon: Icon, label }) => {
              const isActive = view === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setView(id as ViewMode)}
                  aria-label={label}
                  aria-pressed={isActive}
                  className={cn(
                    "relative flex size-8 items-center justify-center transition-opacity cursor-pointer",
                    isActive
                      ? "text-ink opacity-100 after:absolute after:-bottom-2 after:left-[10%] after:w-[80%] after:border-b-2 after:border-ink"
                      : "text-ink/40 hover:text-ink/80 opacity-60",
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                </button>
              );
            })}
          </div>

          {/* Mobile 2 Icons View Switcher (< 600px): Vertical stack ("one like this") vs Carousel ("one line scroll to right") */}
          <div className="flex phone:hidden items-center gap-3 shrink-0 pl-2 border-l border-black/8">
            {/* Icon 1: Vertical stack ("one like this") */}
            <button
              type="button"
              onClick={() => setMobileView("vertical")}
              aria-label="Vertical full card view"
              aria-pressed={mobileView === "vertical"}
              className={cn(
                "relative flex size-8 items-center justify-center transition-opacity cursor-pointer",
                mobileView === "vertical"
                  ? "text-ink opacity-100 after:absolute after:-bottom-2 after:left-[10%] after:w-[80%] after:border-b-2 after:border-ink"
                  : "text-ink/40 hover:text-ink/80 opacity-60",
              )}
            >
              <Square className="size-5" strokeWidth={1.5} />
            </button>

            {/* Icon 2: Horizontal carousel ("one line scroll to right an corossil") */}
            <button
              type="button"
              onClick={() => setMobileView("carousel")}
              aria-label="Single-line horizontal carousel view"
              aria-pressed={mobileView === "carousel"}
              className={cn(
                "relative flex size-8 items-center justify-center transition-opacity cursor-pointer",
                mobileView === "carousel"
                  ? "text-ink opacity-100 after:absolute after:-bottom-2 after:left-[10%] after:w-[80%] after:border-b-2 after:border-ink"
                  : "text-ink/40 hover:text-ink/80 opacity-60",
              )}
            >
              <Columns2 className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Images Display Section */}
      <section className="mx-auto w-full max-w-[1650px] px-8 pt-8 max-md:px-5">
        {/* Desktop Grid Layout (>= 600px) */}
        <div className="hidden phone:block">
          <div
            className={cn(
              "grid gap-6 max-md:gap-4 transition-all duration-300",
              view === "grid-4" &&
                "grid-cols-4 max-desktop:grid-cols-3 max-tablet:grid-cols-2",
              view === "grid-2" && "grid-cols-2",
              view === "grid-1" &&
                "grid-cols-1 max-w-[1100px] mx-auto gap-10",
            )}
          >
            {items.map((item, idx) => (
              <ProjectCard
                key={item.image + idx}
                item={item}
                idx={idx}
                aspectClass={
                  view === "grid-4"
                    ? "aspect-[4/3]"
                    : view === "grid-2"
                      ? "aspect-[16/10]"
                      : "aspect-[16/9]"
                }
                onOpen={() => setSelected(idx)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout (< 600px) */}
        <div className="phone:hidden">
          {mobileView === "carousel" ? (
            /* Mode 2: Horizontal Carousel ("one line scroll to right an corossil") */
            <div className="w-full">
              {/* Header cue & prev/next controls */}
              <div className="flex items-center justify-end pb-3 text-xs text-ink/60 font-mono tracking-wider uppercase">
                {/* <span className="text-[#1c3f21] font-medium flex items-center gap-1.5">
                  Swipe right to explore →
                </span> */}
                <div className="flex items-center gap-3 text-ink">
                  <Arrow
                    direction="left"
                    aria-label="Previous project"
                    className="size-[28px] text-ink transition-opacity hover:opacity-60 cursor-pointer"
                    onClick={() => scrollCarousel("left")}
                  />
                  <Arrow
                    direction="right"
                    aria-label="Next project"
                    className="size-[28px] text-ink transition-opacity hover:opacity-60 cursor-pointer"
                    onClick={() => scrollCarousel("right")}
                  />
                </div>
              </div>

              {/* One line horizontal carousel container */}
              <div
                ref={carouselRef}
                className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory thin-scrollbar -mx-5 px-5 pb-6 pt-1 scroll-smooth"
              >
                {items.map((item, idx) => (
                  <ProjectCard
                    key={item.image + idx}
                    item={item}
                    idx={idx}
                    className="w-[84vw] max-w-[340px] shrink-0 snap-center shadow-xs"
                    aspectClass="aspect-[4/3]"
                    onOpen={() => setSelected(idx)}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Mode 1: Vertical Stack ("one like this") */
            <div className="flex flex-col gap-5">
              {items.map((item, idx) => (
                <ProjectCard
                  key={item.image + idx}
                  item={item}
                  idx={idx}
                  className="w-full"
                  aspectClass="aspect-[4/3]"
                  onOpen={() => setSelected(idx)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Fullscreen Lightbox Modal */}
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        label="Project gallery full view"
        className="h-dvh max-h-dvh! w-screen max-w-[100vw]! bg-transparent text-white! backdrop:bg-[#0c0c0c]/90"
      >
        {selected !== null && (
          <div className="relative flex h-full size-full flex-col items-center justify-center p-8 max-phone:p-4">
            {/* Top Toolbar */}
            <div className="absolute top-6 inset-x-8 flex items-center justify-between max-phone:top-4 max-phone:inset-x-4 z-50">
              <div className="font-mono text-xs tracking-[0.15em] text-white/80 uppercase">
                {category} · {selected + 1} / {items.length}
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close fullscreen gallery"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Nav Button */}
            <button
              type="button"
              onClick={() =>
                setSelected((selected + items.length - 1) % items.length)
              }
              aria-label="Previous project image"
              className="absolute left-6 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-black/40 text-white transition-all hover:bg-black/80 hover:scale-105 max-phone:left-2 max-phone:size-10 z-40 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Stage Image */}
            <div className="flex flex-col items-center justify-center max-w-[90vw] max-h-[80vh]">
              <img
                src={items[selected].fullImage || items[selected].image}
                alt={items[selected].title}
                className="max-h-[75vh] max-w-[85vw] object-contain rounded-xs shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-[16px] font-light text-white tracking-wide">
                  {items[selected].title}
                </p>
                <span className="font-mono text-[11px] text-white/50 tracking-[0.15em] uppercase">
                  DEFENSEPLY ARCHITECTURAL COMPOSITES
                </span>
              </div>
            </div>

            {/* Right Nav Button */}
            <button
              type="button"
              onClick={() => setSelected((selected + 1) % items.length)}
              aria-label="Next project image"
              className="absolute right-6 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-black/40 text-white transition-all hover:bg-black/80 hover:scale-105 max-phone:right-2 max-phone:size-10 z-40 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </Dialog>
    </div>
  );
}
