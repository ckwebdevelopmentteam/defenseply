"use client";

import { useState, useEffect, useRef } from "react";

export type ResolvedMissionItem = {
  id: "innovation" | "responsibility" | "quality" | "partnership";
  number: string;
  category: string;
  headingLines: readonly [string, string];
  description: string;
  imageSrc: string;
  alt: string;
  objectPosition?: string;
};

export function MissionPrinciples({
  items,
}: {
  items: readonly ResolvedMissionItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1100px)");
    let observer: IntersectionObserver | null = null;
    const intersectingMap = new Map<number, IntersectionObserverEntry>();

    function updateActive() {
      if (intersectingMap.size === 0) return;
      const targetY = window.innerHeight * 0.45;
      let closestIndex = -1;
      let closestDist = Infinity;

      intersectingMap.forEach((entry, idx) => {
        const rect = entry.boundingClientRect;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - targetY);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = idx;
        }
      });

      if (closestIndex !== -1) {
        setActiveIndex(closestIndex);
      }
    }

    function setupObserver() {
      if (!mql.matches) {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const idx = rowRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) {
              if (entry.isIntersecting) {
                intersectingMap.set(idx, entry);
              } else {
                intersectingMap.delete(idx);
              }
            }
          });
          updateActive();
        },
        {
          rootMargin: "-40% 0px -45% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      );

      rowRefs.current.forEach((el) => {
        if (el) observer?.observe(el);
      });
    }

    setupObserver();

    const handleMediaChange = () => {
      intersectingMap.clear();
      setupObserver();
    };

    mql.addEventListener("change", handleMediaChange);

    return () => {
      mql.removeEventListener("change", handleMediaChange);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [items]);

  const activeItem = items[activeIndex] ?? items[0];

  return (
    <div className="grid grid-cols-1 min-[1100px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] min-[1100px]:gap-[clamp(48px,5vw,88px)] items-start">
      {/* Desktop Sticky Photograph (Hidden below 1100px) */}
      <div className="hidden min-[1100px]:block sticky top-[128px] self-start w-full [@media(max-height:650px)]:relative [@media(max-height:650px)]:top-auto">
        <figure className="w-full m-0 p-0">
          <div className="relative w-full h-[clamp(360px,60svh,640px)] [@media(max-height:650px)]:h-auto [@media(max-height:650px)]:aspect-[4/5] overflow-hidden bg-[#E8E6DF]">
            {items.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <img
                  key={item.id}
                  src={item.imageSrc}
                  alt={item.alt}
                  style={{ objectPosition: item.objectPosition ?? "center" }}
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${
                    isCurrent
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              );
            })}
          </div>

          <figcaption className="mt-[16px] border-t border-[#D4D7CD] pt-[12px] flex items-center justify-between text-[12px] text-[#555B52]">
            <span className="tabular-nums font-normal" aria-hidden="true">
              {activeItem.number}
            </span>
            <span className="font-medium uppercase tracking-[0.14em]">
              {activeItem.category}
            </span>
          </figcaption>
        </figure>
      </div>

      {/* Right Column: Ordered List of Principles */}
      <ol className="w-full list-none p-0 m-0">
        {items.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <li
              ref={(el) => {
                rowRefs.current[idx] = el;
              }}
              key={item.id}
              className={`border-b transition-colors duration-[250ms] ${
                isActive
                  ? "min-[1100px]:border-[#777F70] border-[#D4D7CD]"
                  : "border-[#D4D7CD]"
              } pt-[32px] pb-[32px] first:pt-0 md:py-[40px] first:md:pt-0 min-[1100px]:pt-[32px] first:min-[1100px]:pt-0 min-[1100px]:pb-[40px] min-[1100px]:min-h-[310px] flex flex-col`}
            >
              <div className="w-full flex flex-col md:grid md:grid-cols-[42%_1fr] md:gap-[32px] md:items-start min-[1100px]:block">
                {/* Tablet-Only Image (768px - 1099px, 4:5 ratio) */}
                <div className="hidden md:block min-[1100px]:hidden w-full aspect-[4/5] overflow-hidden bg-[#E8E6DF]">
                  <img
                    src={item.imageSrc}
                    alt={item.alt}
                    style={{ objectPosition: item.objectPosition ?? "center" }}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content Column */}
                <div className="w-full min-w-0 flex flex-col">
                  {/* Number & Category Metadata */}
                  <div className="flex items-center gap-[16px]">
                    <span
                      className="w-[32px] shrink-0 text-[12px] font-normal tabular-nums text-[#656B61]"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#656B61]">
                      {item.category}
                    </span>
                  </div>

                  {/* Mobile-Only Image (<768px, 4:3 ratio) */}
                  <div className="md:hidden mt-[20px] w-full aspect-[4/3] overflow-hidden bg-[#E8E6DF]">
                    <img
                      src={item.imageSrc}
                      alt={item.alt}
                      style={{ objectPosition: item.objectPosition ?? "center" }}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Heading */}
                  <h4 className="mt-[24px] text-[32px] md:text-[38px] min-[1100px]:text-[clamp(38px,3.5vw,54px)] font-light leading-[1.08] tracking-[-0.025em] text-[#252725]">
                    <span className="block">{item.headingLines[0]}</span>
                    <span className="block">{item.headingLines[1]}</span>
                  </h4>

                  {/* Description */}
                  <p className="mt-[16px] md:mt-[24px] text-[15px] font-normal leading-[1.75] text-[#555B52] max-w-[44ch]">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
