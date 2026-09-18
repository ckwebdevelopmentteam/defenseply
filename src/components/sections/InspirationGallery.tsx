"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gallery from "@/data/gallery.json";
import { Carousel } from "@/components/ui/Carousel";
import { SectionHeading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import { Dialog } from "@/components/ui/Dialog";

const categories = Object.keys(gallery) as (keyof typeof gallery)[];

export function InspirationGallery() {
  const [category, setCategory] = useState<keyof typeof gallery>("All Applications");
  const [selected, setSelected] = useState<number | null>(null);

  const items = gallery[category] || [];
  const groups = Array.from({ length: Math.ceil(items.length / 4) }, (_, i) =>
    items.slice(i * 4, i * 4 + 4),
  );

  return (
    <section data-section="gallery" id="gallery" className="mb-20 max-phone:mb-12 max-md:mb-12">
      <SectionHeading title="INSPIRATION GALLERIES" />
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <ul
              className="flex min-w-0 flex-1 items-center gap-5 sm:gap-6 overflow-x-auto thin-scrollbar py-1 scroll-smooth"
              aria-label="Gallery applications"
            >
              {categories.map((c) => (
                <li key={c} className="shrink-0">
                  <button
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
                  </button>
                </li>
              ))}
            </ul>

            {/* Link to dedicated full gallery page */}
            <Link
              href="/gallery"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-ink/80 transition-colors hover:text-[#1c3f21]"
            >
              <span className="max-phone:hidden">View Full Gallery</span>
              <span className="phone:hidden">Gallery</span>
              <ArrowRight size={13} className="text-[#1c3f21] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="overflow-hidden">
            <Carousel
              key={category}
              desktop={1}
              tablet={1}
              mobile={1}
            >
              {groups.map((group, g) => (
                <div
                  className="keen-slider__slide grid grid-cols-4 max-tablet:grid-cols-2 max-phone:grid-cols-2 gap-4 max-phone:gap-2.5"
                  key={g}
                >
                  {group.map((item) => (
                    <button
                      className="group relative aspect-square overflow-hidden bg-stone text-left cursor-pointer"
                      key={item.image}
                      aria-label={`View ${item.title}`}
                      onClick={() => setSelected(items.indexOf(item))}
                    >
                      <span className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <Plus size={44} strokeWidth={1.5} />
                      </span>
                      <img
                        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        draggable={false}
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        label="Project gallery"
        className="h-dvh max-h-dvh! w-screen max-w-[100vw]! bg-transparent text-white! backdrop:bg-[#111]"
      >
        {selected !== null && (
          <div className="flex h-full flex-col items-center justify-center gap-5 p-15 max-phone:px-[30px] max-phone:py-[50px]">
            <button
              className="absolute top-[25px] right-[30px]"
              aria-label="Close gallery"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <button
              className="absolute top-1/2 left-0 p-5"
              aria-label="Previous image"
              onClick={() =>
                setSelected((selected + items.length - 1) % items.length)
              }
            >
              <ChevronLeft />
            </button>
            <img
              className="h-[75vh] max-w-[85vw] object-contain max-phone:h-[60vh]"
              src={items[selected].fullImage || items[selected].image}
              alt={items[selected].title}
            />
            <button
              className="absolute top-1/2 right-0 p-5"
              aria-label="Next image"
              onClick={() => setSelected((selected + 1) % items.length)}
            >
              <ChevronRight />
            </button>
            <div className="text-center mt-2">
              <p className="text-[16px] font-medium text-white">{items[selected].title}</p>
              {items[selected].spec && (
                <p className="mt-1 font-mono text-[11px] text-white/60 uppercase tracking-[0.1em]">
                  {items[selected].spec}
                </p>
              )}
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
