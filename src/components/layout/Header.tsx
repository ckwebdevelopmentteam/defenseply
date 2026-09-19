"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { MobileHeader } from "./MobileHeader";
import { BrandLogo } from "./NavigationElements";
import { useNavigationState } from "../sections/NavigationState";
import { siteNavigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header({ solid: forceSolid }: { solid?: boolean } = {}) {
  const { scrolled, visible } = useNavigationState();
  const pathname = usePathname();

  const solid = Boolean(
    forceSolid ||
    scrolled ||
    pathname?.startsWith("/contact-us") ||
    pathname?.startsWith("/products") ||
    pathname?.startsWith("/applications") ||
    pathname?.startsWith("/gallery"),
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
                const isActive = isHome
                  ? pathname === "/"
                  : pathname?.startsWith(item.href) &&
                    item.href !== "/#products" &&
                    item.href !== "/#applications" &&
                    item.href !== "/#gallery";

                return (
                  <li key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center text-[13.5px] lg:text-[14px] transition-colors py-1",
                        isActive
                          ? "font-semibold text-[#163326]"
                          : "font-normal text-[#435249] hover:text-[#163326]",
                      )}
                    >
                      <span>{item.name}</span>
                      {/* Active indicator bar */}
                      {isActive && (
                        <span
                          className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#163326] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
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
