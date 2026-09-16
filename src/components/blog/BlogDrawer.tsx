// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import gsap from "gsap";
import type { BlogArticle } from "@/types/blog";
import { ArticleCard } from "./ArticleCard";
import { ArticleDetail } from "./ArticleDetail";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export interface BlogDrawerProps {
  /** Editorial articles shown in the grid. */
  articles: BlogArticle[];
  /** Optional badge pill text above title. */
  badge?: string;
  /** Heading above the grid. */
  title?: string;
  /** Intro paragraph under the heading. */
  description?: string;
  /** GSAP tween duration (seconds) for the drawer panel and overlay. */
  duration?: number;
  /** GSAP ease for the drawer panel and overlay. */
  ease?: string;
  /** GSAP tween delay (seconds) for the drawer panel and overlay. */
  delay?: number;
  /** Drawer panel background color. */
  backgroundColor?: string;
  /** Drawer panel text color. */
  textColor?: string;
  /** Drawer panel width on desktop. Numbers are treated as percentages. */
  sidebarWidth?: string | number;
  /** Backdrop opacity while the drawer is open. */
  overlayOpacity?: number;
  /** GSAP tween duration (seconds) for the staged content fade in/out. */
  contentDuration?: number;
  /** Optional className for the section */
  className?: string;
}

/**
 * A responsive grid that opens a full-height detail drawer per article/article. The overlay
 * and panel slide in with GSAP, then the rich editorial content fades in once the panel
 * settles. Background page scroll is locked while the drawer is open.
 */
export default function BlogDrawer({
  articles,
  badge,
  title = "Latest Blogs",
  description = "",
  duration = 0.65,
  ease = "power2.inOut",
  delay = 0,
  backgroundColor = "#ffffff",
  textColor = "#111111",
  sidebarWidth = "55%",
  overlayOpacity = 0.45,
  contentDuration = 0.25,
  className = "",
}: BlogDrawerProps) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(
    null,
  );
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const articleItems: BlogArticle[] = Array.isArray(articles) ? articles : [];

  const handleDetail = (article: BlogArticle) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setSelectedArticle(article);
    setDetailOpen(true);
  };

  const handleClose = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);

    // Fade the content out first, then slide the drawer away.
    const fadeOut = prefersReducedMotion ? 0 : contentDuration;

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: fadeOut,
        ease,
        overwrite: "auto",
        onComplete: () => setDetailOpen(false),
      });
    } else {
      setDetailOpen(false);
    }

    // Clear the article only once the panel has finished sliding out.
    closeTimeout.current = setTimeout(
      () => {
        setSelectedArticle(null);
        closeTimeout.current = null;
      },
      (fadeOut + (prefersReducedMotion ? 0 : duration + delay)) * 1000,
    );
  }, [contentDuration, duration, delay, ease, prefersReducedMotion]);

  const drawerWidth = useMemo(() => {
    if (typeof sidebarWidth === "number") return `${sidebarWidth}%`;
    return sidebarWidth;
  }, [sidebarWidth]);

  useEffect(() => {
    if (typeof window === "undefined" || !overlayRef.current) return;

    gsap.to(overlayRef.current, {
      opacity: detailOpen ? overlayOpacity : 0,
      duration: prefersReducedMotion ? 0 : duration,
      ease,
      delay: prefersReducedMotion ? 0 : delay,
      overwrite: "auto",
    });
  }, [detailOpen, duration, ease, delay, overlayOpacity, prefersReducedMotion]);

  // Fade the content in only after the drawer panel has finished sliding open.
  useEffect(() => {
    if (typeof window === "undefined" || !detailOpen || !contentRef.current)
      return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: prefersReducedMotion ? 0 : contentDuration,
        ease,
        delay: prefersReducedMotion ? 0 : delay + duration,
        overwrite: "auto",
      },
    );
  }, [
    detailOpen,
    selectedArticle,
    duration,
    contentDuration,
    ease,
    delay,
    prefersReducedMotion,
  ]);

  const panelRef = useRef<HTMLElement>(null);
  const dialogActive = selectedArticle !== null;
  useEffect(() => {
    if (!dialogActive) return;
    const trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("drawer-open");
    panelRef.current?.focus({ preventScroll: true });
    const handleKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
      if (event.key !== "Tab") return;
      const controls = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex="0"]',
        ) ?? [],
      );
      const first = controls[0],
        last = controls[controls.length - 1];
      if (!first) {
        event.preventDefault();
        return;
      }
      if (
        event.shiftKey &&
        (document.activeElement === first ||
          document.activeElement === panelRef.current)
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("drawer-open");
      trigger?.focus({ preventScroll: true });
    };
  }, [dialogActive, handleClose]);
  useEffect(
    () => () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    },
    [],
  );

  const sectionStyle = {
    "--information-drawer-text-color": textColor,
  } as CSSProperties;
  const drawerStyle = {
    backgroundColor,
    color: textColor,
    width: drawerWidth,
    transform: detailOpen ? "translateX(0)" : "translateX(100%)",
    transitionDelay: prefersReducedMotion ? "0s" : `${delay}s`,
    transitionDuration: prefersReducedMotion ? "0s" : `${duration}s`,
  } as CSSProperties;

  return (
    <section
      id="blog"
      data-section="blog"
      className={`relative w-full mb-20 max-phone:mb-12 ${className}`}
      style={sectionStyle}
      aria-label="Editorial Journal & Insights"
    >
      <div
        className={`w-full ${detailOpen ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        {/* Left-aligned Header matching Defenseply standard */}
        <div className="flex flex-col items-start text-left mb-10 max-phone:mb-8">
          {badge && (
            <span className="mb-3 inline-block rounded-full border border-black/80 px-5 py-1 text-[11px] font-medium tracking-[2.5px] uppercase font-sans">
              {badge}
            </span>
          )}
          <h2 className="text-display font-light uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-left">
            {title}
          </h2>
          {description && (
            <p className="max-w-[720px] text-fluid font-light leading-[1.5] text-[#5d5d59] text-left">
              {description}
            </p>
          )}
        </div>

        {/* Article Cards Grid */}
        <div className="w-full overflow-hidden max-md:overflow-x-auto max-md:overflow-y-hidden max-[1025px]:overflow-x-auto max-[1025px]:overflow-y-hidden">
          <div className="grid grid-cols-3 gap-6 justify-between max-md:flex max-md:flex-nowrap max-md:w-fit max-md:gap-4 max-[1025px]:flex max-[1025px]:flex-nowrap max-[1025px]:w-fit max-[1025px]:gap-5">
            {articleItems.length > 0 ? (
              articleItems.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onOpen={handleDetail}
                />
              ))
            ) : (
              <p className="col-span-full py-10 text-center font-mono text-[#666]">
                No articles yet.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* GSAP Sliding Drawer Overlay & Panel */}
      <div
        id="article-detail"
        className={`fixed inset-0 z-[2147483646] overflow-visible bg-transparent ${
          detailOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          ref={overlayRef}
          onClick={handleClose}
          className={`absolute inset-0 bg-black opacity-0 ${
            detailOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none"
          }`}
        />
        <aside
          ref={panelRef}
          role="dialog"
          aria-modal={dialogActive || undefined}
          aria-hidden={!dialogActive}
          inert={!dialogActive}
          tabIndex={-1}
          className="fixed inset-y-0 right-0 z-[2147483647] flex flex-col overflow-y-auto overflow-x-hidden px-8 py-10 max-phone:px-5 max-phone:py-6 pointer-events-auto transition-transform ease-in-out max-md:!w-full shadow-2xl"
          style={drawerStyle}
          aria-label="Article Details"
        >
          <div ref={contentRef} className="flex flex-col opacity-0">
            <ArticleDetail
              articles={articleItems}
              article={selectedArticle}
              handleClose={handleClose}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
