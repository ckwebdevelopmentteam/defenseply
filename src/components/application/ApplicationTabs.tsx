"use client";
import { useRef, useState } from "react";
import { Carousel, Arrow } from "@/components/ui/Carousel";
import { ApplicationCard } from "./ApplicationCard";
import type { Application } from "@/types/application";
import { cn } from "@/lib/cn";

export function ApplicationTabs({ categories }: { categories: Application[] }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = categories[index];
  if (!active) return null;
  return (
    <div className="flex flex-col gap-6">
      <Carousel
        resetKey={active.slug}
        wrapSlider={(slider) => (
          <div
            role="tabpanel"
            id="applications-panel"
            aria-labelledby={`applications-tab-${active.slug}`}
            tabIndex={0}
          >
            {slider}
          </div>
        )}
        controls={(handle) => (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              className="thin-scrollbar flex min-w-0 max-w-full gap-7 overflow-x-auto max-phone:gap-5"
              role="tablist"
              aria-label="Application categories"
            >
              {categories.map((category, i) => (
                <button
                  key={category.slug}
                  ref={(node) => {
                    tabs.current[i] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`applications-tab-${category.slug}`}
                  aria-selected={i === index}
                  aria-controls="applications-panel"
                  tabIndex={i === index ? 0 : -1}
                  className={cn(
                    "min-h-11 shrink-0 border-b py-2 text-fluid-sm focus-visible:outline-2 focus-visible:outline-offset-[-2px]",
                    i === index
                      ? "border-ink"
                      : "border-transparent font-light",
                  )}
                  onClick={() => setIndex(i)}
                  onKeyDown={(event) => {
                    let next = i;
                    if (event.key === "ArrowRight")
                      next = (i + 1) % categories.length;
                    else if (event.key === "ArrowLeft")
                      next = (i - 1 + categories.length) % categories.length;
                    else if (event.key === "Home") next = 0;
                    else if (event.key === "End") next = categories.length - 1;
                    else return;
                    event.preventDefault();
                    setIndex(next);
                    tabs.current[next]?.focus();
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <div className="ml-auto flex shrink-0 gap-3">
              <Arrow
                direction="left"
                aria-label="Previous applications"
                className="min-h-11 min-w-11 disabled:opacity-30"
                onClick={handle.previous}
                disabled={handle.page === 1}
              />
              <Arrow
                aria-label="Next applications"
                className="min-h-11 min-w-11 disabled:opacity-30"
                onClick={handle.next}
                disabled={handle.page === handle.pages}
              />
            </div>
          </div>
        )}
      >
        {active.gallery.map((image) => (
          <ApplicationCard key={image.id} category={active} image={image} />
        ))}
      </Carousel>
    </div>
  );
}
