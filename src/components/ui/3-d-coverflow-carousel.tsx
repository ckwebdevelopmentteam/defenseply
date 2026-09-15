"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

// Inline Icons (Zero external dependencies)
const ChevronLeftIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export interface CarouselItem {
  id?: string;
  tag?: string;
  titleLine1: string;
  titleLine2?: string;
  desc?: string;
  img: string;
  ctaText?: string;
  ctaUrl?: string;
  rating?: number;
  role?: string;
  company?: string;
  location?: string;
  quote?: string;
}

export interface CoverFlowCarouselProps {
  items?: CarouselItem[];
  sectionLabel?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  onCtaClick?: (item: CarouselItem) => void;
}

export const defaultDishes: CarouselItem[] = [
  {
    tag: "#Signature",
    titleLine1: "BUTTER CHICKEN",
    titleLine2: "– DELHI HERITAGE",
    desc: "Velvety roasted tomato and fenugreek gravy with tender charred chicken",
    img: "https://cdn.21st.dev/assets/mirror/84/84cb320f9692895054c9e1774ca48848f1c9c62ccba43ad8ad0b186460bb3751.jpg",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#ChefSpecial",
    titleLine1: "TANDOORI CHOPS",
    titleLine2: "– SMOKED SPICE",
    desc: "Grass-fed lamb chops charred in live charcoal tandoor with Kashmiri spices",
    img: "https://cdn.21st.dev/assets/mirror/a4/a4712dee84e12432f1d3a1a3234914c0281c9bb12692e4bc8da5eaa4355bec33.jpg",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#Vegetarian",
    titleLine1: "PANEER TIKKA",
    titleLine2: "– CLAY ROASTED",
    desc: "Artisan cottage cheese marinated in spiced yogurt, bell peppers & saffron",
    img: "https://cdn.21st.dev/assets/mirror/56/56a6950cf4a436af231cf7cd707189e121e65934066f851c744bdab0cfee64d4.jpg",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#CoastalCatch",
    titleLine1: "MALABAR PRAWNS",
    titleLine2: "– COCONUT GRAVY",
    desc: "Jumbo wild tiger prawns simmered in fragrant curry leaves and coconut milk",
    img: "https://cdn.21st.dev/assets/mirror/a3/a32877b070c563bbbcf54b6104761b1516814625209c806ee8b60f8a69598cd1.jpg",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#ArtisanBake",
    titleLine1: "TRUFFLE NAAN",
    titleLine2: "– CHARCOAL OVEN",
    desc: "Crispy puffed leavened bread brushed with pure ghee and black winter truffle",
    img: "https://cdn.21st.dev/assets/mirror/5c/5c1b6f03cc2ace649f9025f304ca4fdce74cd413504e65a00ef3f68152e8ed92.jpg",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
];

export function CoverFlowCarousel({
  items = defaultDishes,
  sectionLabel = "WHAT OUR CLIENTS SAY",
  autoplay = true,
  autoplayDelay = 5000,
  className = "",
  onCtaClick,
}: CoverFlowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const total = items.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx % total);
  };

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const interval = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section
      className={`relative w-full min-h-[760px] max-phone:min-h-[640px] flex items-center justify-center overflow-hidden py-12 select-none rounded-[4px] bg-white text-[#111] ${className}`}
      style={{
        backgroundColor: "#ffffff",
        color: "#111111",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Light Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={items[currentIndex]?.img}
          alt="ambience background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(1.05) saturate(0.8) blur(48px)",
            opacity: 0.12,
            transform: "scale(1.2)",
            transition: "opacity 1000ms ease, filter 1000ms ease",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.96) 100%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* Section Heading */}
        {sectionLabel && (
          <div className="flex items-center justify-center gap-4 mb-10 max-phone:mb-6">
            <span style={{ width: "44px", height: "1.5px", background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.35))" }} />
            <h2
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.85rem)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#111111",
                margin: 0,
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {sectionLabel}
            </h2>
            <span style={{ width: "44px", height: "1.5px", background: "linear-gradient(90deg, rgba(0,0,0,0.35), transparent)" }} />
          </div>
        )}

        {/* 3D Coverflow Stage */}
        <div
          className="relative w-full h-[520px] max-phone:h-[460px] flex justify-center items-center mb-8"
          style={{ perspective: "1400px" }}
        >
          {items.map((item, idx) => {
            const offset = (idx - currentIndex + total) % total;

            let transform = "translateX(0px) scale(0.4) rotateY(0deg)";
            let opacity = 0;
            let zIndex = 0;
            let filter = "brightness(0.4) blur(2px)";
            let isCenter = false;

            const tX1 = isMobile ? 165 : 285;
            const tX2 = isMobile ? 275 : 510;

            if (offset === 0) {
              isCenter = true;
              transform = "translateX(0px) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 30;
              filter = "brightness(1)";
            } else if (offset === 1) {
              transform = `translateX(${tX1}px) scale(0.84) rotateY(-24deg)`;
              opacity = 0.65;
              zIndex = 20;
              filter = "brightness(0.75)";
            } else if (offset === 2) {
              transform = `translateX(${tX2}px) scale(0.68) rotateY(-38deg)`;
              opacity = 0.38;
              zIndex = 10;
              filter = "brightness(0.55) blur(1px)";
            } else if (offset === total - 1) {
              transform = `translateX(-${tX1}px) scale(0.84) rotateY(24deg)`;
              opacity = 0.65;
              zIndex = 20;
              filter = "brightness(0.75)";
            } else if (offset === total - 2) {
              transform = `translateX(-${tX2}px) scale(0.68) rotateY(38deg)`;
              opacity = 0.38;
              zIndex = 10;
              filter = "brightness(0.55) blur(1px)";
            }

            return (
              <div
                key={idx}
                onClick={() => !isCenter && goToSlide(idx)}
                style={{
                  position: "absolute",
                  width: isMobile ? "280px" : "330px",
                  height: isMobile ? "450px" : "500px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  backgroundColor: "#171311",
                  border: isCenter ? "1px solid rgba(184, 146, 88, 0.45)" : "1px solid rgba(0, 0, 0, 0.08)",
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transformOrigin: "center center",
                  transition: "all 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                  boxShadow: isCenter
                    ? "0 28px 65px rgba(0,0,0,0.20), 0 0 35px rgba(184,146,88,0.2)"
                    : "0 14px 35px rgba(0,0,0,0.10)",
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                {/* Photo */}
                <img
                  src={item.img}
                  alt={item.titleLine1}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.68) 60%, rgba(0,0,0,0.96) 100%)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    padding: isMobile ? "16px 14px 18px" : "20px 18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    zIndex: 20,
                    opacity: isCenter ? 1 : 0,
                    transform: isCenter ? "translateY(0px)" : "translateY(16px)",
                    transition: "opacity 500ms ease, transform 500ms ease",
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  {/* Tag and Rating Header */}
                  <div className="flex items-center justify-between w-full px-1">
                    {item.rating ? (
                      <div className="flex items-center gap-0.5 text-[#e5c088]">
                        {Array.from({ length: item.rating }).map((_, rIdx) => (
                          <svg key={rIdx} width="12" height="12" fill="#c5a880" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    ) : (
                      <span />
                    )}

                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        color: "rgba(255,255,255,0.9)",
                        textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "3px",
                      marginTop: "auto",
                      paddingBottom: "4px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: isMobile ? "1.35rem" : "1.65rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "#ffffff",
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: "0 3px 12px rgba(0,0,0,0.95)",
                      }}
                    >
                      {item.titleLine1}
                    </h2>

                    {item.titleLine2 && (
                      <span
                        style={{
                          fontSize: isMobile ? "0.95rem" : "1.05rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "#f3f0ea",
                          lineHeight: 1.2,
                          textShadow: "0 3px 10px rgba(0,0,0,0.9)",
                        }}
                      >
                        {item.titleLine2}
                      </span>
                    )}

                    <div
                      style={{
                        width: "34px",
                        height: "2px",
                        backgroundColor: "#c5a880",
                        borderRadius: "2px",
                        margin: "5px auto 4px",
                        boxShadow: "0 0 8px rgba(197,168,128,0.7)",
                      }}
                    />

                    {item.desc && (
                      <p
                        style={{
                          fontSize: isMobile ? "0.78rem" : "0.82rem",
                          fontStyle: "italic",
                          color: "rgba(255,255,255,0.92)",
                          maxWidth: "280px",
                          margin: "0 0 10px",
                          lineHeight: 1.35,
                          textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        &ldquo;{item.desc}&rdquo;
                      </p>
                    )}

                    <a
                      href={item.ctaUrl || "#"}
                      onClick={(e) => {
                        if (onCtaClick) {
                          e.preventDefault();
                          onCtaClick(item);
                        }
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "7px 18px",
                        borderRadius: "9999px",
                        background: "linear-gradient(135deg, #c5a880 0%, #a48256 100%)",
                        color: "#110d0c",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.4), 0 0 15px rgba(197,168,128,0.3)",
                        cursor: "pointer",
                        transition: "transform 200ms ease, box-shadow 200ms ease",
                      }}
                    >
                      <span>{item.ctaText || "View Project"}</span>
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: isMobile ? "8px" : "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            color: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
          className="hover:bg-black hover:text-white hover:border-black hover:scale-105 active:scale-95"
        >
          <ChevronLeftIcon />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: isMobile ? "8px" : "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            color: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
          className="hover:bg-black hover:text-white hover:border-black hover:scale-105 active:scale-95"
        >
          <ChevronRightIcon />
        </button>

        {/* Pagination Dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", zIndex: 30 }}>
          {items.map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: "8px",
                width: idx === currentIndex ? "28px" : "8px",
                borderRadius: "9999px",
                backgroundColor: idx === currentIndex ? "#b89258" : "rgba(0, 0, 0, 0.18)",
                border: "none",
                cursor: "pointer",
                boxShadow: idx === currentIndex ? "0 0 10px rgba(184, 146, 88, 0.5)" : "none",
                transition: "all 300ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Component = CoverFlowCarousel;
export default CoverFlowCarousel;
