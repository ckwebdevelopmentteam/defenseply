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
  className = "core-slider",
  desktop = 3,
  tablet = 2,
  mobile = 1.15,
  spacing = 16,
  controls,
  wrapSlider,
}: {
  children: ReactNode;
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
        index: s.track.details.rel,
        perView:
          typeof v === "object" ? Number(v?.perView ?? desktop) : desktop,
      });
    },
    slideChanged(s) {
      setPosition((p) => ({ ...p, index: s.track.details.rel }));
    },
  });
  useEffect(() => {
    instance.current?.update();
  }, [count, instance]);
  const step = Math.max(1, Math.floor(position.perView));
  const pages = Math.ceil(count / step);
  const page =
    position.index >= count - position.perView - 0.1
      ? pages
      : Math.floor(position.index / step) + 1;
  const slider = <div ref={ref} className={`keen-slider ${className}`}>{children}</div>;
  return (
    <>
      {controls?.({
        page,
        pages,
        previous: () => instance.current?.moveToIdx(position.index - step),
        next: () => instance.current?.moveToIdx(position.index + step),
      })}
      {wrapSlider ? wrapSlider(slider) : slider}
    </>
  );
}
export function Arrow({
  direction = "right",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: "left" | "right";
}) {
  return (
    <button
      type="button"
      className={`carousel-arrow arrow-link__${direction}`}
      {...props}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        aria-hidden="true"
        style={{
          transform: direction === "left" ? "rotate(180deg)" : undefined,
        }}
      >
        <path
          d="M13 4.5 21 12.5 13 20.5M21 12.5H1"
          stroke="currentColor"
          strokeWidth="1"
        />
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
      <div className="slider-page">
        <p className="font-13">
          {String(handle.page).padStart(2, "0")}/
          {String(handle.pages).padStart(2, "0")}
        </p>
      </div>
      <div
        id={`slider-nav-${id}`}
        className="slider-nav d-flex align-items-center justify-content-between"
      >
        <div className="progress-container mr-5 ml-0">
          <div
            id={`progress-bar-${id}`}
            style={{ width: `${(handle.page / handle.pages) * 100}%` }}
          />
        </div>
        <Arrow
          direction="left"
          aria-label="Previous items"
          onClick={handle.previous}
          disabled={handle.page === 1}
        />
        <Arrow
          aria-label="Next items"
          onClick={handle.next}
          disabled={handle.page === handle.pages}
        />
      </div>
    </>
  );
}
