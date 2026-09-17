"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { BrandLogo } from "./NavigationElements";
import { useNavigationState } from "../sections/NavigationState";
import { siteNavigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileHeader({ solid }: { solid: boolean }) {
  const { mobileOpen: open, setMobileOpen: setOpen, visible } = useNavigationState();
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

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

  // Close drawer on path changes
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  const toggleExpand = (name: string) => {
    setExpanded((curr) => (curr === name ? null : name));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[2147483640] flex flex-col desktop:hidden">
      <div
        data-testid="mobile-navbar"
        className={cn(
          "pointer-events-auto flex shrink-0 items-center justify-between px-4 sm:px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "h-[var(--mobile-nav-height)] bg-[#FAF9F5] text-[#163326] border-b border-[#E8E5DC] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)]",
          !visible && !open ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
        )}
      >
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="p-2 text-[#163326] transition-transform active:scale-95"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <BrandLogo mobile />

        <Link
          href="/contact-us"
          onClick={() => setOpen(false)}
          className="rounded-full bg-[#173326] px-3.5 py-1.5 text-[11px] font-medium text-white shadow-sm transition-all hover:bg-[#0f241a] active:scale-95"
        >
          Contact
        </Link>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="pointer-events-auto flex flex-1 flex-col justify-between overflow-y-auto bg-[#FAF9F5] px-6 py-6 text-[#163326]"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1">
            {siteNavigation.map((item) => {
              const isHome = item.href === "/";
              const isActive = isHome ? pathname === "/" : pathname?.startsWith(item.href) && item.href !== "/#products" && item.href !== "/#applications";
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = expanded === item.name;

              return (
                <div key={item.name} className="border-b border-[#E8E5DC]/80">
                  <div className="flex items-center justify-between py-3.5">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-[18px] transition-colors",
                        isActive ? "font-semibold text-[#163326]" : "font-normal text-[#38473e]",
                      )}
                    >
                      {item.name}
                    </Link>

                    {hasChildren && (
                      <button
                        onClick={() => toggleExpand(item.name)}
                        aria-label={`Toggle ${item.name} submenu`}
                        aria-expanded={isExpanded}
                        className="p-2 text-[#79887E]"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isExpanded ? "rotate-180 text-[#163326]" : "",
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  {hasChildren && isExpanded && (
                    <div className="pb-3 pl-3 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg py-1.5 px-2 text-[14px] text-[#48564e] hover:bg-[#EFECE3] hover:text-[#163326]"
                        >
                          <span className="font-medium">{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 pb-2">
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#173326] py-3.5 text-[14px] font-medium text-white shadow-md transition-all hover:bg-[#0f241a] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
