"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { MobileHeader } from "./MobileHeader";
import { BrandLogo } from "./NavigationElements";
import { useNavigationState } from "../sections/NavigationState";
import { siteNavigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header({ solid: forceSolid }: { solid?: boolean } = {}) {
  const { scrolled, visible } = useNavigationState();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const solid = Boolean(
    forceSolid ||
    scrolled ||
    pathname?.startsWith("/contact-us") ||
    pathname?.startsWith("/products") ||
    pathname?.startsWith("/applications"),
  );

  return (
    <header id="core-main-menu">
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[2147483640] flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-desktop:hidden",
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
          scrolled
            ? "py-2.5 bg-[#FAF9F5]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-b border-[#E8E5DC]"
            : "py-4 sm:py-5 bg-[#FAF9F5] border-b border-transparent",
        )}
      >
        <div className="flex w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-12">
          {/* Brand Logo with DP Monogram */}
          <BrandLogo compact={scrolled} />

          {/* Center Navigation Links */}
          <nav aria-label="Main navigation" className="flex items-center">
            <ul className="flex items-center gap-6 lg:gap-8">
              {siteNavigation.map((item) => {
                const isHome = item.href === "/";
                const isActive = isHome ? pathname === "/" : pathname?.startsWith(item.href) && item.href !== "/#products" && item.href !== "/#applications" && item.href !== "/#gallery";
                const hasChildren = Boolean(item.children?.length);

                return (
                  <li
                    key={item.name}
                    className="relative group/nav"
                    onMouseEnter={() => hasChildren && setOpenDropdown(item.name)}
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center gap-1 text-[13.5px] lg:text-[14px] transition-colors py-1",
                        isActive
                          ? "font-semibold text-[#163326]"
                          : "font-normal text-[#435249] hover:text-[#163326]",
                      )}
                    >
                      <span>{item.name}</span>
                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            "w-3 h-3 text-[#79887E] transition-transform duration-200",
                            openDropdown === item.name ? "rotate-180 text-[#163326]" : "group-hover/nav:text-[#163326]",
                          )}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      )}
                      {/* Active indicator bar */}
                      {isActive && (
                        <span
                          className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#163326] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && (
                      <div
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-60 transition-all duration-200",
                          openDropdown === item.name
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-1 pointer-events-none",
                        )}
                      >
                        <div className="rounded-xl border border-[#E5E2D8] bg-[#FAF9F5] p-2 shadow-lg shadow-black/5 backdrop-blur-md">
                          {item.children?.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="group/item block rounded-lg px-3 py-2 text-[13px] text-[#334239] transition-colors hover:bg-[#EFECE3] hover:text-[#163326]"
                            >
                              <div className="font-medium">{child.title}</div>
                              {child.description && (
                                <div className="mt-0.5 text-[11px] text-[#718076] font-normal leading-tight line-clamp-1">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action: Get in Touch Button */}
          <div className="flex items-center">
            <Link
              href="/contact-us"
              className="group/btn inline-flex items-center gap-2.5 rounded-full bg-[#173326] px-5 py-2 lg:px-6 lg:py-2.5 text-[13px] lg:text-[13.5px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#0f241a] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
      <MobileHeader solid={solid} />
    </header>
  );
}
