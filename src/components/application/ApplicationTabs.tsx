"use client";
import { useRef, useState, useMemo } from "react";
import { Carousel, Arrow } from "@/components/ui/Carousel";
import { ApplicationCard } from "./ApplicationCard";
import type { Application } from "@/types/application";
import { cn } from "@/lib/cn";

type TabMeta = {
  label: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

const TAB_CONFIG: Record<string, TabMeta> = {
  interiors: {
    label: "Interiors",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
        <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
      </svg>
    ),
  },
  commercial: {
    label: "Commercial",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="8" height="17" rx="0.75" />
        <rect x="13" y="9" width="8" height="12" rx="0.75" />
        <line x1="6" y1="8" x2="8" y2="8" />
        <line x1="6" y1="12" x2="8" y2="12" />
        <line x1="6" y1="16" x2="8" y2="16" />
        <line x1="16" y1="13" x2="18" y2="13" />
        <line x1="16" y1="17" x2="18" y2="17" />
      </svg>
    ),
  },
  creative: {
    label: "Creative",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  wardrobe: {
    label: "Wardrobe",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="3" width="16" height="17" rx="1" />
        <line x1="12" y1="3" x2="12" y2="20" />
        <line x1="9" y1="10" x2="9" y2="13" />
        <line x1="15" y1="10" x2="15" y2="13" />
        <line x1="6" y1="20" x2="6" y2="22" />
        <line x1="18" y1="20" x2="18" y2="22" />
      </svg>
    ),
  },
  bedroom: {
    label: "Bedroom",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 4v16" />
        <path d="M2 13h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6" />
        <path d="M2 17h20" />
        <path d="M22 13v7" />
        <circle cx="9" cy="9" r="1.5" />
      </svg>
    ),
  },
  kitchen: {
    label: "Kitchen",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="10" width="18" height="11" rx="0.75" />
        <line x1="12" y1="10" x2="12" y2="21" />
        <line x1="3" y1="14" x2="21" y2="14" />
        <rect x="11" y="3" width="10" height="5" rx="0.75" />
        <circle cx="7.5" cy="12" r="0.75" fill="currentColor" />
        <circle cx="16.5" cy="12" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
};

const CATEGORY_ORDER = [
  "interiors",
  "commercial",
  "creative",
  "wardrobe",
  "bedroom",
  "kitchen",
];

export function ApplicationTabs({ categories }: { categories: Application[] }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Sort categories according to reference screenshot order
  const sortedCategories = useMemo(() => {
    return [...categories].sort((a, b) => {
      const idxA = CATEGORY_ORDER.indexOf(a.slug);
      const idxB = CATEGORY_ORDER.indexOf(b.slug);
      return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
    });
  }, [categories]);

  const active = sortedCategories[index];
  if (!active) return null;

  return (
    <div className="flex flex-col gap-8">
      <Carousel
        resetKey={active.slug}
        desktop={4}
        tablet={2}
        mobile={1.15}
        spacing={24}
        controls={(handle) => (
          /* Top Tabs with Icons, Vertical Dividers (Center-aligned) and Right Arrow Navigation */
          <div className="relative mb-6 flex items-center justify-center">
            {/* Centered Tabs */}
            <div
              className="thin-scrollbar flex items-center overflow-x-auto max-w-full px-1 py-1"
              role="tablist"
              aria-label="Application categories"
            >
              {sortedCategories.map((category, i) => {
                const tabInfo = TAB_CONFIG[category.slug] || {
                  label: category.title,
                  icon: (props: { className?: string }) => (
                    <svg
                      {...props}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  ),
                };
                const Icon = tabInfo.icon;
                const isActive = i === index;

                return (
                  <div key={category.slug} className="flex items-center">
                    {i > 0 && (
                      <span
                        className="h-5 w-px bg-neutral-300/80 mx-2.5 sm:mx-3.5 md:mx-5 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <button
                      ref={(node) => {
                        tabs.current[i] = node;
                      }}
                      type="button"
                      role="tab"
                      id={`applications-tab-${category.slug}`}
                      aria-selected={isActive}
                      aria-controls="applications-panel"
                      tabIndex={isActive ? 0 : -1}
                      className="group relative flex flex-col items-center justify-center shrink-0 cursor-pointer px-2 sm:px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c3f21]"
                      onClick={() => setIndex(i)}
                      onKeyDown={(event) => {
                        let next = i;
                        if (event.key === "ArrowRight")
                          next = (i + 1) % sortedCategories.length;
                        else if (event.key === "ArrowLeft")
                          next = (i - 1 + sortedCategories.length) % sortedCategories.length;
                        else if (event.key === "Home") next = 0;
                        else if (event.key === "End") next = sortedCategories.length - 1;
                        else return;
                        event.preventDefault();
                        setIndex(next);
                        tabs.current[next]?.focus();
                      }}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-2.5 text-sm md:text-[15px] transition-colors duration-200",
                          isActive
                            ? "text-[#1c3f21] font-bold"
                            : "text-neutral-500 hover:text-neutral-800 font-medium",
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-5 shrink-0 transition-colors duration-200",
                            isActive
                              ? "text-[#1c3f21]"
                              : "text-neutral-500 group-hover:text-neutral-700",
                          )}
                        />
                        <span className="whitespace-nowrap">{tabInfo.label}</span>
                      </div>
                      <div
                        className={cn(
                          "absolute -bottom-1 left-0 right-0 h-[3px] rounded-full transition-all duration-300",
                          isActive ? "bg-[#1c3f21]" : "bg-transparent",
                        )}
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right: Products-style Simple Arrow Navigation (hidden on mobile) */}
            <div className="absolute right-0 hidden md:flex shrink-0 items-center gap-2 pl-3">
              <Arrow
                direction="left"
                aria-label="Previous applications"
                className="size-[32px] text-neutral-800 transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25"
                onClick={handle.previous}
                disabled={handle.page === 1}
              />
              <Arrow
                direction="right"
                aria-label="Next applications"
                className="size-[32px] text-neutral-800 transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25"
                onClick={handle.next}
                disabled={handle.page === handle.pages}
              />
            </div>
          </div>
        )}
        wrapSlider={(slider) => (
          <div
            role="tabpanel"
            id="applications-panel"
            aria-labelledby={`applications-tab-${active.slug}`}
            tabIndex={0}
            className="relative w-full overflow-hidden"
          >
            {slider}
          </div>
        )}
      >
        {active.gallery.map((image) => (
          <ApplicationCard
            key={image.id}
            category={active}
            image={image}
          />
        ))}
      </Carousel>
    </div>
  );
}

