"use client";
import { Children, ReactNode, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

export type CarouselHandle = {
  previous: () => void;
  next: () => void;
  page: number;
  pages: number;
};
/** Shared responsive, touch/draggable carousel with the original 16px gutters. */
export function Carousel({
  children,
  className = "",
  desktop = 3,
  tablet = 2,
  mobile = 1.1,
  spacing = 16,
  controls,
  wrapSlider,
  resetKey,
}: {
  children: ReactNode;
  /** Recreate the slider track when replacing a category, preserving control focus. */
  resetKey?: string;
  className?: string;
  desktop?: number;
  tablet?: number;
  mobile?: number;
  spacing?: number;
  controls?: (handle: CarouselHandle) => ReactNode;
  wrapSlider?: (slider: ReactNode) => ReactNode;
}) {
  const count = Children.count(children);
  const [position, setPosition] = useState({ index: 0, perView: desktop });
  const [ref, instance] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: "snap",
    slides: { perView: desktop, spacing },
    breakpoints: {
      "(max-width: 1440px)": {
        slides: { perView: desktop === 5 ? 3 : desktop, spacing },
      },
      "(max-width: 1024px)": { slides: { perView: tablet, spacing } },
      "(max-width: 600px)": { slides: { perView: mobile, spacing: 8 } },
    },
    created(s) {
      const v = s.options.slides;
      setPosition({
        index: 0,
        perView:
          typeof v === "object" ? Number(v?.perView ?? desktop) : desktop,
      });
    },
    updated(s) {
      const v = s.options.slides;
      setPosition({
        index: s.track.details?.rel ?? 0,
        perView:
          typeof v === "object" ? Number(v?.perView ?? desktop) : desktop,
      });
    },
    optionsChanged(s) {
      const v = s.options.slides;
      setPosition({
        index: s.track.details?.rel ?? 0,
        perView:
          typeof v === "object" ? Number(v?.perView ?? desktop) : desktop,
      });
    },
    slideChanged(s) {
      setPosition((p) => ({ ...p, index: s.track.details?.rel ?? 0 }));
    },
  });
  useEffect(() => {
    instance.current?.update();
  }, [count, instance]);
  const step = Math.max(1, Math.floor(position.perView));
  const pages = Math.max(1, Math.ceil(count / step));
  const maxIdx =
    instance.current?.track?.details?.maxIdx ??
    Math.max(0, count - Math.floor(position.perView));
  const page =
    position.index >= maxIdx - 0.1
      ? pages
      : Math.min(pages, Math.floor(position.index / step) + 1);

  const goToPage = (p: number) => {
    if (!instance.current) return;
    const targetPage = Math.max(1, Math.min(pages, p));
    const targetIndex = targetPage === pages ? maxIdx : (targetPage - 1) * step;
    instance.current.moveToIdx(targetIndex);
  };

  const slider = (
    <div
      // A fresh DOM track makes Keen discard cached slide elements and widths.
      key={resetKey}
      ref={ref}
      className={`keen-slider relative h-full overflow-visible! ${className}`}
    >
      {children}
    </div>
  );
  return (
    <>
      {controls?.({
        page,
        pages,
        previous: () => goToPage(page - 1),
        next: () => goToPage(page + 1),
      })}
      {wrapSlider ? wrapSlider(slider) : slider}
    </>
  );
}
export function Arrow({
  direction = "right",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: "left" | "right";
}) {
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex size-[25px] shrink-0 items-center justify-center ${className}`}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        aria-hidden="true"
        className={direction === "left" ? "rotate-180" : undefined}
      >
        <path d="M13 4.5 21 12.5 13 20.5M21 12.5H1" stroke="currentColor" />
      </svg>
    </button>
  );
}
export function Progress({
  handle,
  id,
}: {
  handle: CarouselHandle;
  id: string;
}) {
  return (
    <>
      <p
        className="mt-8 text-[clamp(13px,.87vw,26px)] max-tablet:text-[clamp(13px,1.69vw,26px)] max-phone:text-[clamp(13px,3.71vw,24px)]"
        aria-live="polite"
      >
        {String(handle.page).padStart(2, "0")}/
        {String(handle.pages).padStart(2, "0")}
      </p>
      <div
        id={`slider-nav-${id}`}
        className="mb-8 flex w-full items-center justify-between"
      >
        <div className="mr-12 h-0.5 flex-1 bg-line">
          <div
            className="h-full bg-ink transition-[width] duration-300"
            style={{ width: `${(handle.page / handle.pages) * 100}%` }}
          />
        </div>
        <Arrow
          className="size-[33px]"
          direction="left"
          aria-label="Previous items"
          onClick={handle.previous}
          disabled={handle.page === 1}
        />
        <Arrow
          className="size-[33px]"
          aria-label="Next items"
          onClick={handle.next}
          disabled={handle.page === handle.pages}
        />
      </div>
    </>
  );
}
