"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

// Define the shape of a single testimonial
export interface Testimonial {
  type: "user" | "quote";
  quote: string;
  name?: string;
  role?: string;
  avatarSrc?: string;
  avatarFallback?: string;
}

// Define props for the main section component
export interface TestimonialSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  testimonials: Testimonial[];
}

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="48"
    height="36"
    viewBox="0 0 48 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.9951 36C12.4951 36 10.2285 35.0167 8.19513 33.05C6.1618 31.0833 5.14513 28.8333 5.14513 26.3C5.14513 22.8 6.2118 19.4833 8.34513 16.35C10.4785 13.2167 13.2285 10.1 16.5951 7L21.4951 11.25C19.3618 13.1333 17.6785 14.8833 16.4451 16.5C15.2118 18.1167 14.5951 19.9833 14.5951 22.1H19.9951V36H14.9951ZM37.9951 36C35.4951 36 33.2285 35.0167 31.1951 33.05C29.1618 31.0833 28.1451 28.8333 28.1451 26.3C28.1451 22.8 29.2118 19.4833 31.3451 16.35C33.4785 13.2167 36.2285 10.1 39.5951 7L44.4951 11.25C42.3618 13.1333 40.6785 14.8833 39.4451 16.5C38.2118 18.1167 37.5951 19.9833 37.5951 22.1H42.9951V36H37.9951Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const isQuoteType = testimonial.type === "quote";

  const letterDp =
    testimonial.avatarFallback ||
    testimonial.name
      ?.split(" ")
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() ||
    "DP";

  return (
    <div className="w-full flex flex-col h-full">
      {isQuoteType ? (
        <div className="w-full flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-[390px] flex flex-col items-start group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 transform-gpu px-2">
            <QuoteIcon className="h-9 w-12 text-black/35 mb-4 self-start transition-all duration-300 group-hover:scale-110 group-hover:text-black/60" />
            <p className="text-[clamp(17px,1.3vw,19.5px)] font-sans font-medium leading-[1.65] text-[#111] transition-colors duration-300">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "w-full flex flex-col justify-between overflow-hidden rounded-[4px] border border-black/10 bg-[#fafaf8] p-8 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transform-gpu transition-all duration-300 max-phone:p-6 cursor-pointer min-h-[260px] sm:min-h-[280px]",
          )}
        >
          <p className="text-[#333] font-sans text-[15px] sm:text-[16px] max-phone:text-[14.5px] leading-[1.65] font-normal">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="flex flex-row items-center gap-3.5 mt-6 pt-2">
            {/* Letter DP: Clean circular initials badge */}
            <div className="size-11 sm:size-12 rounded-full bg-[#1c3f21]/10 text-[#1c3f21] border border-[#1c3f21]/20 font-semibold text-[13px] sm:text-[14px] flex items-center justify-center tracking-wider shrink-0 font-mono select-none">
              {letterDp}
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-[15px] text-[#111] leading-tight">
                {testimonial.name}
              </p>
              <p className="text-[12px] sm:text-[12.5px] text-[#777] font-mono leading-tight mt-1">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TestimonialSection = React.forwardRef<
  HTMLElement,
  TestimonialSectionProps
>(({ title, description, testimonials, className, ...props }, ref) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileScrollRef = React.useRef<HTMLDivElement>(null);

  // Extract the fixed central quote card
  const centerQuote = testimonials.find((t) => t.type === "quote") || {
    type: "quote" as const,
    quote:
      "We have specified Defenseply WPC Door Frames and 3-Layer Boards across multiple apartment towers in Calicut. The batch-to-batch density uniformity is outstanding, screw holding is rock solid, and our carpenters praise how cleanly the material routes without splintering.",
  };

  // Extract the user testimonials that slide
  const userTestimonials = testimonials.filter((t) => t.type === "user");

  // Total pairs (slides) for desktop (2 cards per slide)
  const totalSlides = Math.max(1, Math.ceil(userTestimonials.length / 2));

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  // Mobile horizontal scroll handlers
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, offsetWidth } = mobileScrollRef.current;
    if (offsetWidth === 0) return;
    const cardEl = mobileScrollRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = cardEl ? cardEl.offsetWidth + 16 : offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveMobileIndex(Math.min(Math.max(newIndex, 0), userTestimonials.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!mobileScrollRef.current) return;
    const cardEl = mobileScrollRef.current.children[index] as HTMLElement | null;
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveMobileIndex(index);
    }
  };

  const scrollPrevMobile = () => {
    const nextIdx = Math.max(0, activeMobileIndex - 1);
    scrollToCard(nextIdx);
  };

  const scrollNextMobile = () => {
    const nextIdx = Math.min(userTestimonials.length - 1, activeMobileIndex + 1);
    scrollToCard(nextIdx);
  };

  // Active pair of user cards for desktop
  const leftCard = userTestimonials[(slideIndex * 2) % userTestimonials.length];
  const rightCard =
    userTestimonials[(slideIndex * 2 + 1) % userTestimonials.length] ||
    userTestimonials[0];

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full bg-white mb-20 max-md:mb-16 max-phone:mb-12 pb-16 sm:pb-20",
        className,
      )}
      {...props}
    >
      {/* Section Heading: Centered */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14 max-phone:mb-7">
        <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-center">
          {title}
        </h2>
        {description && (
          <p className="max-w-[720px] text-fluid font-light leading-[1.5] text-[#5d5d59] text-center mx-auto max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35] max-phone:max-w-[340px]">
            {description}
          </p>
        )}
      </div>

      {/* =========================================================================
          DESKTOP VIEW (lg and above):
          Flanking Arrows + 3 Columns (Left Card, Fixed Center Quote, Right Card)
         ========================================================================= */}
      <div className="hidden lg:flex relative w-full items-center gap-3 sm:gap-5 lg:gap-6">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonials"
          className="size-10 sm:size-11 lg:size-12 rounded-full border border-black/15 bg-white text-neutral-800 flex items-center justify-center transition-all duration-200 hover:bg-[#1c3f21] hover:text-white hover:border-[#1c3f21] shadow-xs active:scale-95 shrink-0 z-10 cursor-pointer"
        >
          <ChevronLeft className="size-5 sm:size-6" />
        </button>

        {/* 3 Columns Layout: Left Card (Slides), Center Quote (Fixed), Right Card (Slides) */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 xl:gap-10 items-center justify-center">
            {/* Column 1: Left Card (Animates on slide change) */}
            <div className="w-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-${slideIndex}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  {leftCard && <TestimonialCard testimonial={leftCard} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Column 2: Center Quote (Permanent & Fixed - Never slides, never changes) */}
            <div className="w-full flex flex-col items-center justify-center lg:py-2">
              <TestimonialCard testimonial={centerQuote} />
            </div>

            {/* Column 3: Right Card (Animates on slide change) */}
            <div className="w-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-${slideIndex}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  {rightCard && <TestimonialCard testimonial={rightCard} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonials"
          className="size-10 sm:size-11 lg:size-12 rounded-full border border-black/15 bg-white text-neutral-800 flex items-center justify-center transition-all duration-200 hover:bg-[#1c3f21] hover:text-white hover:border-[#1c3f21] shadow-xs active:scale-95 shrink-0 z-10 cursor-pointer"
        >
          <ChevronRight className="size-5 sm:size-6" />
        </button>
      </div>

      {/* Desktop Indicators */}
      <div className="hidden lg:flex mt-8 sm:mt-10 items-center justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSlideIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
              slideIndex === idx
                ? "w-6 bg-[#1c3f21]"
                : "w-1.5 bg-black/20 hover:bg-black/40",
            )}
          />
        ))}
      </div>

      {/* =========================================================================
          MOBILE VIEW (below lg):
          Center quote is hidden.
          User reviews in smooth horizontal scroll track (swipeable / carousel model).
         ========================================================================= */}
      <div className="block lg:hidden w-full">
        {/* Horizontal Scroll Track */}
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-4 pt-1 px-1 -mx-1 scroll-smooth no-scrollbar touch-pan-x"
        >
          {userTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[84vw] max-w-[330px] flex flex-col"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls & Progress Bar */}
        <div className="flex items-center justify-between mt-4 px-1 pt-1">
          {/* Numeric Position Counter */}
          <span className="text-[12px] font-mono tracking-wider text-[#666] font-medium select-none">
            {String(activeMobileIndex + 1).padStart(2, "0")} / {String(userTestimonials.length).padStart(2, "0")}
          </span>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {userTestimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  activeMobileIndex === idx
                    ? "w-5 bg-[#1c3f21]"
                    : "w-1.5 bg-black/20 hover:bg-black/40",
                )}
              />
            ))}
          </div>

          {/* Prev / Next Circular Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrevMobile}
              disabled={activeMobileIndex === 0}
              aria-label="Previous testimonial"
              className={cn(
                "size-8.5 rounded-full border border-black/15 bg-white text-neutral-800 flex items-center justify-center shadow-xs active:scale-95 transition-all",
                activeMobileIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#1c3f21] hover:text-white hover:border-[#1c3f21] cursor-pointer",
              )}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={scrollNextMobile}
              disabled={activeMobileIndex === userTestimonials.length - 1}
              aria-label="Next testimonial"
              className={cn(
                "size-8.5 rounded-full border border-black/15 bg-white text-neutral-800 flex items-center justify-center shadow-xs active:scale-95 transition-all",
                activeMobileIndex === userTestimonials.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#1c3f21] hover:text-white hover:border-[#1c3f21] cursor-pointer",
              )}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});


TestimonialSection.displayName = "TestimonialSection";

export { TestimonialSection, TestimonialCard };
export default TestimonialSection;
