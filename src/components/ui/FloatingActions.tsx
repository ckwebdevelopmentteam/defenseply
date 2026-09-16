"use client";

import { useNavigationState } from "@/components/layout/NavigationState";
import { cn } from "@/lib/cn";

export function FloatingActions({
  quoteHref = "#contact",
}: { quoteHref?: string } = {}) {
  const { mobileOpen } = useNavigationState();

  return (
    <a
      data-testid="quote-banner"
      className={cn(
        "fixed top-[40%] right-0 z-[900] flex h-16 w-[289px] items-center justify-center gap-2.5 rounded-l bg-quote px-[30px] py-[19px] text-base leading-[22px] font-medium text-[#131313] shadow-[0_1px_5px_#0003] max-desktop:left-0 max-desktop:h-[41px] max-desktop:w-full max-desktop:rounded-none max-desktop:px-4 max-desktop:py-2 max-desktop:leading-6",
        "max-desktop:top-[var(--mobile-nav-height)]",
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
      />
    </a>
  );
}
