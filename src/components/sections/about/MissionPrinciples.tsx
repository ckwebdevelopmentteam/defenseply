"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { aboutPurposeData as data } from "@/data/about-purpose";

export type ResolvedMissionItem = {
  id: "innovation" | "responsibility" | "quality" | "partnership";
  number: string;
  category: string;
  headingLines: readonly [string, string];
  description: string;
  imageSrc: string | null;
  alt: string;
  desktopObjectPosition: string;
  mobileObjectPosition: string;
};

function MissionIntro({ mode }: { mode: "pinned" | "normal" }) {
  const isPinned = mode === "pinned";
  return (
    <div className="w-full">
      {/* 1. Top label row */}
      <div className="w-full flex items-center justify-between text-[11px] font-medium tracking-[0.16em] leading-[1.5] text-[#656B61] uppercase">
        <span>{data.mission.label}</span>
        <span aria-hidden="true">{data.mission.sequenceLabel}</span>
      </div>

      {/* 2. Heading and supporting copy */}
      <div
        className={`mt-[16px] grid grid-cols-1 min-[1100px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[1100px]:gap-[48px] min-[1100px]:items-end gap-[24px] text-left`}
      >
        <h3
          id="mission-statement-heading"
          className={`font-light leading-[1.08] tracking-[-0.02em] text-[#252725] uppercase ${
            isPinned
              ? "text-[clamp(32px,2.5vw,46px)]"
              : "text-[clamp(30px,8vw,38px)] md:text-[40px] min-[1100px]:text-[clamp(32px,2.5vw,46px)]"
          }`}
        >
          <span className="block">{data.mission.headingLines[0]}</span>
          <span className="block">{data.mission.headingLines[1]}</span>
          <span className="block">{data.mission.headingLines[2]}</span>
        </h3>

        <p
          className={`text-[15px] font-normal leading-[1.65] text-[#555B52] ${
            isPinned ? "max-w-[40ch]" : "max-w-[40ch] md:text-[16px]"
          }`}
        >
          {data.mission.description}
        </p>
      </div>

      {/* 3. Divider */}
      <div
        className={`w-full h-[1px] bg-[#D4D7CD] ${
          isPinned ? "mt-[20px]" : "mt-[28px] md:mt-[36px] min-[1100px]:mt-[48px]"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}

export function MissionPrinciples({
  items,
}: {
  items: readonly ResolvedMissionItem[];
}) {
  const [mounted, setMounted] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [topOffset, setTopOffset] = useState(80);
  const [availableImageHeight, setAvailableImageHeight] = useState(420);
  const [totalTravel, setTotalTravel] = useState(1800);
  const [trackHeight, setTrackHeight] = useState(2500);
  const [activeIndex, setActiveIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  // Preload images
  useEffect(() => {
    items.forEach((item) => {
      if (item.imageSrc) {
        const img = new Image();
        img.src = item.imageSrc;
      }
    });
  }, [items]);

  const measureAndEvaluate = useCallback(() => {
    if (typeof window === "undefined") return;

    // Measure visible fixed desktop header
    const fixedHeader =
      document.querySelector("#core-main-menu > div:not(.hidden)") ||
      document.querySelector("header > div.fixed");
    let headerBottom = 0;
    if (fixedHeader) {
      const rect = fixedHeader.getBoundingClientRect();
      headerBottom = Math.max(0, rect.bottom);
    }

    const calculatedTopOffset = Math.round(headerBottom + 16);
    const calculatedAvailableHeight = Math.max(
      0,
      Math.round(window.innerHeight - calculatedTopOffset - 24),
    );

    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Check width and height eligibility
    if (
      window.innerWidth < 1100 ||
      calculatedAvailableHeight < 680 ||
      isReducedMotion
    ) {
      setIsPinned(false);
      return;
    }

    // Measure intro height to determine available image height
    const introH = introRef.current ? introRef.current.offsetHeight : 180;
    const imgH = Math.max(220, calculatedAvailableHeight - introH - 56);
    const estStageHeight = introH + imgH + 56;

    // If stage would exceed available viewport height, disable pinning
    if (estStageHeight > calculatedAvailableHeight) {
      setIsPinned(false);
      return;
    }

    const travel = Math.round(4 * calculatedAvailableHeight * 0.65);
    const totalH = Math.round(estStageHeight + travel);

    setTopOffset(calculatedTopOffset);
    setAvailableImageHeight(imgH);
    setTotalTravel(travel);
    setTrackHeight(totalH);
    setIsPinned(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      measureAndEvaluate();
    };

    const rafId = requestAnimationFrame(() => {
      setMounted(true);
      measureAndEvaluate();
    });

    window.addEventListener("resize", handleResize);

    // Also observe the fixed header for height changes
    const fixedHeader =
      document.querySelector("#core-main-menu > div:not(.hidden)") ||
      document.querySelector("header > div.fixed");
    let headerObserver: ResizeObserver | null = null;
    if (fixedHeader && typeof ResizeObserver !== "undefined") {
      headerObserver = new ResizeObserver(() => {
        measureAndEvaluate();
      });
      headerObserver.observe(fixedHeader);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      if (headerObserver) headerObserver.disconnect();
    };
  }, [measureAndEvaluate]);

  // Scroll listener for pinned mode
  useEffect(() => {
    if (!isPinned) return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const scrollDist = topOffset - rect.top;
        const progress = Math.max(0, Math.min(1, scrollDist / totalTravel));
        const newIdx = Math.min(3, Math.floor(progress * 4));
        setActiveIndex((prev) => (prev !== newIdx ? newIdx : prev));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isPinned, topOffset, totalTravel]);

  const scrollToItem = (targetIndex: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const trackPageTop = rect.top + window.scrollY;
    const targetProgress = (targetIndex + 0.5) / 4;
    const targetDistance = targetProgress * totalTravel;
    const targetY = trackPageTop - topOffset + targetDistance;
    window.scrollTo({
      top: Math.round(targetY),
      behavior: "smooth",
    });
  };

  const maxImageWidth = Math.round(availableImageHeight * 1.5);

  // 1. PINNED DESKTOP PRESENTATION (Enabled on desktop >=1100px with sufficient height)
  if (mounted && isPinned) {
    return (
      <section
        id="about-mission"
        aria-labelledby="mission-statement-heading"
        ref={trackRef}
        style={{ height: `${trackHeight}px` }}
        className="w-full bg-[#F5F3EE] text-[#252725] font-sans relative"
      >
        <div
          ref={stageRef}
          style={{
            position: "sticky",
            top: `${topOffset}px`,
          }}
          className="w-full bg-[#F5F3EE] py-[24px] box-border"
        >
          <div className="w-full px-6 md:px-[38px] box-border">
            {/* Mission Introduction */}
            <div ref={introRef}>
              <MissionIntro mode="pinned" />
            </div>

            {/* Main Stage Area: 3:2 Image on Left + Active Principle on Right */}
            <div className="mt-[24px] grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-[clamp(40px,4vw,72px)] items-center">
              {/* Left Column: Shared 3:2 Image Window */}
              <div className="w-full flex justify-start">
                <div
                  style={{
                    maxWidth: `${maxImageWidth}px`,
                    maxHeight: `${availableImageHeight}px`,
                  }}
                  className="aspect-[3/2] w-full overflow-hidden rounded-[4px] bg-[#E8E6DF] relative"
                >
                  {items.map((item, idx) => {
                    const isCurrent = idx === activeIndex;
                    if (!item.imageSrc) {
                      return isCurrent ? (
                        <div
                          key={item.id}
                          className="absolute inset-0 size-full bg-[#E2E0D8] flex items-center justify-center text-[#656B61] text-[13px]"
                        >
                          <span>Image pending</span>
                        </div>
                      ) : null;
                    }
                    return (
                      <img
                        key={item.id}
                        src={item.imageSrc}
                        alt={item.alt}
                        style={{
                          objectPosition: item.desktopObjectPosition || "50% 50%",
                        }}
                        className={`absolute inset-0 size-full object-cover transition-opacity duration-[350ms] ease-in-out motion-reduce:transition-none ${
                          isCurrent
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0 pointer-events-none"
                        }`}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active Principle Details & Keyboard Navigation Buttons */}
              <div className="w-full min-w-0 flex flex-col justify-center">
                {/* Principles stacked in a single grid cell to keep height rock-stable */}
                <div className="grid grid-cols-1 items-center">
                  {items.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <div
                        key={item.id}
                        className={`col-start-1 row-start-1 flex flex-col justify-center transition-opacity duration-300 ${
                          isActive
                            ? "opacity-100 z-10 visible"
                            : "opacity-0 z-0 pointer-events-none invisible"
                        }`}
                        aria-hidden={!isActive}
                      >
                        {/* Number & Category */}
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

                        {/* Heading */}
                        <h4 className="mt-[20px] text-[clamp(34px,3vw,50px)] font-light leading-[1.08] tracking-[-0.025em] text-[#252725]">
                          <span className="block">{item.headingLines[0]}</span>
                          <span className="block">{item.headingLines[1]}</span>
                        </h4>

                        {/* Description */}
                        <p className="mt-[20px] text-[15px] font-normal leading-[1.75] text-[#555B52] max-w-[44ch]">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Keyboard Navigation Buttons */}
                <div className="mt-[24px] flex flex-wrap items-center gap-x-[24px] gap-y-[8px] pt-[16px] border-t border-[#D4D7CD]">
                  {items.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToItem(idx)}
                        className={`min-h-[44px] inline-flex items-center text-[12px] tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#252725] ${
                          isActive
                            ? "font-medium text-[#252725] underline decoration-1 underline-offset-[0.25em]"
                            : "font-normal text-[#656B61] hover:text-[#252725]"
                        }`}
                      >
                        <span className="tabular-nums font-normal mr-[6px]">
                          {item.number}
                        </span>
                        <span>{item.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 2. NORMAL-FLOW FALLBACK (Used on tablet, mobile, short windows, reduced motion, or pre-hydration)
  return (
    <section
      id="about-mission"
      aria-labelledby="mission-statement-heading"
      className="w-full bg-[#F5F3EE] py-[56px] md:py-[72px] min-[1100px]:py-[104px] text-[#252725] font-sans"
    >
      <div className="w-full px-6 md:px-[38px] box-border">
        {/* Mission Introduction */}
        <MissionIntro mode="normal" />

        {/* Principles List: Each principle with its own inline photograph */}
        <ol className="w-full list-none p-0 m-0 mt-[32px] md:mt-[40px]">
          {items.map((item) => (
            <li
              key={item.id}
              className="border-b border-[#D4D7CD] py-[32px] first:pt-0 md:py-[40px] first:md:pt-0"
            >
              <div className="w-full flex flex-col md:grid md:grid-cols-[42%_1fr] md:gap-[32px] md:items-start">
                {/* Tablet Image (4:5 ratio) */}
                <div className="hidden md:block w-full aspect-[4/5] overflow-hidden rounded-[4px] bg-[#E8E6DF]">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.alt}
                      style={{
                        objectPosition:
                          item.desktopObjectPosition || "50% 50%",
                      }}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="size-full flex items-center justify-center text-[#656B61] text-[13px]">
                      <span>Image pending</span>
                    </div>
                  )}
                </div>

                {/* Text Content Column */}
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

                  {/* Mobile Image (4:3 ratio) */}
                  <div className="md:hidden mt-[20px] w-full aspect-[4/3] overflow-hidden rounded-[4px] bg-[#E8E6DF]">
                    {item.imageSrc ? (
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        style={{
                          objectPosition:
                            item.mobileObjectPosition || "50% 50%",
                        }}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="size-full flex items-center justify-center text-[#656B61] text-[13px]">
                        <span>Image pending</span>
                      </div>
                    )}
                  </div>

                  {/* Heading */}
                  <h4 className="mt-[24px] text-[32px] md:text-[38px] font-light leading-[1.08] tracking-[-0.025em] text-[#252725]">
                    <span className="block">{item.headingLines[0]}</span>
                    <span className="block">{item.headingLines[1]}</span>
                  </h4>

                  {/* Description */}
                  <p className="mt-[16px] md:mt-[20px] text-[15px] font-normal leading-[1.75] text-[#555B52] max-w-[44ch]">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
