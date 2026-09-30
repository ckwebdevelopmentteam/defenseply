"use client";

import Link from "next/link";
import { useNavigationState } from "@/components/sections/NavigationState";
import { cn } from "@/lib/cn";

export function FloatingActions({
  quoteHref = "/contact-us#quote-form",
}: { quoteHref?: string } = {}) {
  const { mobileOpen, visible } = useNavigationState();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/contact-us") {
      const el = document.getElementById("quote-form");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", "/contact-us#quote-form");
      }
    }
  };

  return (
    <Link
      data-testid="quote-banner"
      className={cn(
        "fixed bottom-[15%] right-0 z-[900] flex h-16 w-[289px] items-center justify-center gap-2.5 rounded-l bg-[#1c3f21] px-[30px] py-[19px] text-base leading-[22px] font-medium text-white shadow-[0_4px_16px_rgba(28,63,33,0.35)] transition-all duration-300 hover:bg-[#15321a] hover:translate-x-[-4px] max-desktop:inset-x-0 max-desktop:h-[36px] max-desktop:w-auto max-desktop:rounded-none max-desktop:px-4 max-desktop:py-1 max-desktop:text-[13px] max-desktop:leading-tight max-desktop:hover:translate-x-0 max-desktop:duration-500 max-desktop:ease-[cubic-bezier(0.16,1,0.3,1)]",
        visible ? "max-desktop:top-[var(--mobile-nav-height)]" : "max-desktop:top-0",
        mobileOpen && "max-desktop:hidden",
      )}
      href={quoteHref}
      onClick={handleClick}
    >
      Request a quote{" "}
      <img
        src="/assets/Arrow_circle-Copy.avif"
        alt=""
        width="24"
        height="24"
        className="brightness-0 invert"
      />
    </Link>
  );
}
