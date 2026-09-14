"use client";
import { useState } from "react";
import {
  Plus,
  Grid2X2,
  Columns2,
  Square,
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
  const [category, setCategory] = useState<keyof typeof gallery>("All spaces"),
    [view, setView] = useState("grid-2x2"),
    [selected, setSelected] = useState<number | null>(null);
  const items = gallery[category];
  const groups = Array.from({ length: Math.ceil(items.length / 4) }, (_, i) =>
    items.slice(i * 4, i * 4 + 4),
  );
  return (
    <section data-section="gallery" id="inspiration">
      <SectionHeading title="INSPIRATION GALLERIES" />
      <div>
        <div className="flex flex-col gap-6 pb-10">
          <div className="flex items-center justify-between">
            <select
              className="hidden border-b border-ink bg-transparent py-2 pr-[30px] text-fluid-sm max-tablet:block"
              aria-label="Gallery space"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as keyof typeof gallery)
              }
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <ul
              className="flex gap-7 overflow-auto thin-scrollbar max-tablet:hidden"
              aria-label="Gallery space"
            >
              {categories.map((c) => (
                <li key={c}>
                  <button
                    className={cn(
                      "whitespace-nowrap border-b py-2 text-body",
                      category === c ? "border-ink" : "border-transparent",
                    )}
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              {[
                [Grid2X2, "grid-2x2", "Four-image grid"],
                [Columns2, "grid-2x1", "Two-image layout"],
                [Square, "grid-1x1", "Large-image layout"],
              ].map(([Icon, id, label]) => {
                const I = Icon as typeof Grid2X2;
                return (
                  <button
                    key={String(id)}
                    className={cn(
                      "relative h-[2.15vw] min-w-[30px] max-tablet:h-[4.3vw] max-phone:h-[7vw]",
                      id === "grid-2x1" && "max-tablet:hidden",
                      view === id &&
                        "after:absolute after:-bottom-[.417vw] after:left-[15%] after:w-[70%] after:border-b after:border-ink max-tablet:after:-bottom-[.833vw] max-phone:after:-bottom-[1.4vw]",
                    )}
                    aria-label={String(label)}
                    aria-pressed={view === id}
                    onClick={() => setView(String(id))}
                  >
                    <I className="size-[30px]" strokeWidth={1} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden">
            <Carousel
              key={category + view}

              desktop={view === "grid-2x2" ? 2 : view === "grid-2x1" ? 1 : 0.5}
              tablet={view === "grid-2x2" ? 1 : 1}
              mobile={view === "grid-2x2" ? 2 : 1}
            >
              {groups.map((group, g) => (
                <div
                  className={cn(
                    "keen-slider__slide grid gap-4 max-phone:gap-2",
                    view === "grid-2x2"
                      ? "grid-flow-col grid-cols-2 grid-rows-2 max-phone:grid-cols-1 max-phone:grid-rows-4"
                      : view === "grid-2x1"
                        ? "grid-cols-4 grid-rows-1"
                        : "grid-cols-4 grid-rows-1 gap-2 max-phone:grid-flow-col max-phone:grid-cols-2 max-phone:grid-rows-2",
                  )}
                  key={g}
                >
                  {group.map((item) => (
                    <button
                      className={cn(
                        "group relative aspect-square overflow-hidden bg-stone text-left",
                        view === "grid-1x1" &&
                          "h-[900px] aspect-auto max-phone:h-auto max-phone:aspect-square",
                      )}
                      key={item.image}
                      aria-label={`View ${item.title}`}
                      onClick={() => setSelected(items.indexOf(item))}
                    >
                      <span className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <Plus size={48} strokeWidth={1} />
                      </span>
                      <img
                        className="absolute inset-0 size-full object-cover transition-[filter]"
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
            <a href={items[selected].href}>{items[selected].title}</a>
          </div>
        )}
      </Dialog>
    </section>
  );
}
