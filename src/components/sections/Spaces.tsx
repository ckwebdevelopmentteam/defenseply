"use client";
import { useState } from "react";
import spaces from "@/data/spaces.json";
import { Carousel, Arrow } from "@/components/ui/Carousel";
import { Heading } from "@/components/ui/Heading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/cn";
export function Spaces({ items = spaces }: { items?: typeof spaces }) {
  const categories = Object.keys(items) as (keyof typeof items)[];
  const [active, setActive] = useState(categories[0]);
  return (
    <section
      id="product"
      data-section="spaces"
      className="relative -mx-[38px] overflow-hidden bg-white px-[38px] py-20 max-phone:py-12"
    >
      <div className="mx-auto flex w-full max-w-[80%] flex-col gap-4 px-2.5 pb-8 max-phone:max-w-full max-phone:pb-6">
        <p className="text-center text-fluid">
          Cosentino Architectural Surfaces
        </p>
        <Heading className="mx-auto max-w-1/2 text-center max-tablet:max-w-full">
          Meaningful Design to Inspire People’s Lives
        </Heading>
      </div>
      <div className="relative flex h-full flex-col gap-6">
        <Carousel
          key={active}
          wrapSlider={(slider) => (
            <div role="tabpanel" id="spaces-panel" aria-label={active}>
              {slider}
            </div>
          )}
          controls={(h) => (
            <div className="flex items-center justify-between max-phone:mr-[calc(-50vw+50%)]">
              <div
                className="thin-scrollbar flex gap-7 overflow-x-auto max-phone:mb-4 max-phone:gap-5"
                role="tablist"
                aria-label="Explore spaces"
              >
                {categories.map((name) => (
                  <button
                    key={name}
                    role="tab"
                    aria-selected={name === active}
                    aria-controls="spaces-panel"
                    className={cn(
                      "shrink-0 py-1 text-fluid-sm leading-[normal]",
                      name === active
                        ? "border-b border-ink font-normal"
                        : "font-light",
                    )}
                    onClick={() => setActive(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className="flex gap-[1.7rem] max-phone:hidden">
                <Arrow
                  direction="left"
                  aria-label="Previous spaces"
                  onClick={h.previous}
                  disabled={h.page === 1}
                />
                <Arrow
                  aria-label="Next spaces"
                  onClick={h.next}
                  disabled={h.page === h.pages}
                />
              </div>
            </div>
          )}
        >
          {items[active].map((item) => (
            <SurfaceCard key={item.title} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
