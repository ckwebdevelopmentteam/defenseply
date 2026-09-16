"use client";

import { useNavigationState } from "@/components/sections/NavigationState";
import { cn } from "@/lib/cn";

export function FloatingActions({
  quoteHref = "#contact",
}: { quoteHref?: string } = {}) {
  const { mobileOpen, visible } = useNavigationState();

  return (
    <a
      data-testid="quote-banner"
      className={cn(
        "fixed bottom-[15%] right-0 z-[900] flex h-16 w-[289px] items-center justify-center gap-2.5 rounded-l bg-[#1c3f21] px-[30px] py-[19px] text-base leading-[22px] font-medium text-white shadow-[0_4px_16px_rgba(28,63,33,0.35)] transition-all duration-300 hover:bg-[#15321a] hover:translate-x-[-4px] max-desktop:left-0 max-desktop:h-[41px] max-desktop:w-full max-desktop:rounded-none max-desktop:px-4 max-desktop:py-2 max-desktop:leading-6 max-desktop:hover:translate-x-0",
        visible ? "max-desktop:top-[var(--mobile-nav-height)]" : "max-desktop:top-0",
        mobileOpen && "max-desktop:hidden",
      )}
      href={quoteHref}
    >
      Request a quote{" "}
      <img
        src="/assets/Arrow_circle-Copy.avif"
        alt=""
        width="24"
        height="24"
        className="brightness-0 invert"
      />
    </a>
  );
}
