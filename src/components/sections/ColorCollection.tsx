"use client";
import { useState } from "react";
import colors from "@/data/colors.json";
import { Carousel, Arrow } from "@/components/ui/Carousel";
import { ArrowIcon } from "@/components/ui/ActionLink";
const brands = [
  ["all", "All brands"],
  ["eclos", "Ēclos"],
  ["dekton", "Dekton"],
  ["silestone", "Silestone"],
  ["sensa", "Sensa"],
];
export function ColorCollection({ items = colors }: { items?: typeof colors }) {
  const [brand, setBrand] = useState("all");
  const filtered = items.filter((c) => brand === "all" || c.brand === brand);
  return (
    <section
      id="colors"
      data-section="colors"
      className="flex flex-col items-center justify-center py-15 max-phone:pt-10"
    >
      <div className="relative flex w-full max-w-[1616px] flex-col gap-8 max-[768px]:pb-5">
        <Carousel
          key={brand}
          desktop={5}
          tablet={4}
          mobile={2.2}
          controls={(h) => (
            <div className="flex w-full justify-end">
              <div className="flex w-4/5 flex-col items-start justify-between gap-2 max-[1344px]:w-full max-[768px]:pt-16">
                <p className="mb-3 text-body">
                  {String(h.page).padStart(2, "0")}/
                  {String(h.pages).padStart(2, "0")}
                </p>
                <div className="flex w-full items-center gap-6">
                  <div className="mr-4 h-0.5 flex-1 bg-line">
                    <div
                      className="h-full bg-ink transition-[width]"
                      style={{ width: `${(h.page / h.pages) * 100}%` }}
                    />
                  </div>
                  <Arrow
                    direction="left"
                    className="size-6"
                    aria-label="Previous colors"
                    onClick={h.previous}
                    disabled={h.page === 1}
                  />
                  <Arrow
                    className="size-6"
                    aria-label="Next colors"
                    onClick={h.next}
                    disabled={h.page === h.pages}
                  />
                </div>
              </div>
            </div>
          )}
          wrapSlider={(slider) => (
            <div className="flex w-full gap-4">
              <aside className="min-w-[18%] border-r border-line max-[768px]:absolute max-[768px]:-top-[25px] max-[768px]:inset-x-0 max-[768px]:z-[3] max-[768px]:w-full">
                <div className="flex flex-col gap-4 max-[768px]:hidden">
                  <p className="text-body font-light text-[#898985]">Brands</p>
                  <nav
                    aria-label="Filter colors by brand"
                    className="flex flex-col items-start gap-2 tracking-[.5px]"
                  >
                    {brands.map(([id, name]) => (
                      <button
                        key={id}
                        className={`text-body text-left ${id === brand ? "font-medium" : "font-light"}`}
                        aria-pressed={id === brand}
                        onClick={() => setBrand(id)}
                      >
                        {name}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="hidden flex-col gap-4 max-[768px]:flex">
                  <label
                    htmlFor="brand-filter"
                    className="text-body font-light text-[#898985]"
                  >
                    Brands
                  </label>
                  <select
                    id="brand-filter"
                    className="w-full border border-line bg-white px-4 py-3"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    {brands.map(([id, name]) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </aside>
              <div className="min-w-0 flex-1 overflow-hidden">{slider}</div>
            </div>
          )}
        >
          {filtered.map((item) => (
            <div
              key={item.title}
              className="keen-slider__slide px-4 max-[1680px]:px-1"
            >
              <a href={item.href} className="group flex h-full flex-col">
                <h3 className="mb-3 text-body font-normal tracking-[.5px] max-tablet:mb-2.5">
                  {item.title}
                </h3>
                <div className="relative h-[380px] overflow-hidden max-[768px]:h-[200px]">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={`${item.title} surface`}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex pt-3">
                  <span className="flex items-center border-b border-black text-body max-tablet:mt-2.5">
                    View color
                    <ArrowIcon />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
