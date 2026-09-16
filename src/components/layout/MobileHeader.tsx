"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./NavigationElements";
import { useNavigationState } from "./NavigationState";
import { siteNavigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileHeader({ solid }: { solid: boolean }) {
  const { mobileOpen: open, setMobileOpen: setOpen } = useNavigationState();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", close);
    };
  }, [open, setOpen]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2147483640] flex flex-col desktop:hidden">
      <div
        data-testid="mobile-navbar"
        className={cn(
          "pointer-events-auto flex shrink-0 items-center justify-between px-5 transition-colors",
          "h-[var(--mobile-nav-height)]",
          solid || open ? "bg-white text-ink shadow-sm" : "text-white",
        )}
      >
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <BrandLogo solid={solid || open} mobile />
        <span className="w-6" aria-hidden="true" />
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="pointer-events-auto flex-1 overflow-y-auto bg-ink px-6 py-8 text-white"
          aria-label="Mobile navigation"
        >
          {siteNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/20 py-[18px] text-[22px] font-light"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
