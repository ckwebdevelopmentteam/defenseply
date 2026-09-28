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

  const isTransparentPage = pathname === "/" || pathname?.startsWith("/about");
  const isDarkHero = !scrolled && isTransparentPage;
  const solid = Boolean(forceSolid || scrolled || !isTransparentPage);

  return (
    <header id="core-main-menu">
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[2147483640] flex h-[76px] justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-desktop:hidden",
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
          solid
            ? "bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E8E5DC] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="flex h-full w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-12">
          {/* Brand Logo with DP Monogram */}
          <BrandLogo solid={!isDarkHero} compact />

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
                        isDarkHero
                          ? isActive
                            ? "font-semibold text-white drop-shadow-sm"
                            : "font-normal text-white/80 hover:text-white drop-shadow-sm"
                          : isActive
                            ? "font-semibold text-[#163326]"
                            : "font-normal text-[#435249] hover:text-[#163326]",
                      )}
                    >
                      <span>{item.name}</span>
                      {/* Active indicator bar */}
                      {isActive && (
                        <span
                          className={cn(
                            "absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full transition-colors",
                            isDarkHero
                              ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                              : "bg-[#163326]",
                          )}
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
              className={cn(
                "group/btn inline-flex items-center gap-2.5 rounded-[4px] px-5 py-2 lg:px-6 lg:py-2.5 text-[13px] lg:text-[13.5px] font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                isDarkHero
                  ? "bg-white text-[#173326] hover:bg-white/90 hover:shadow-md"
                  : "bg-[#173326] text-white hover:bg-[#0f241a] hover:shadow-md",
              )}
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
      <MobileHeader solid={solid} darkHero={isDarkHero} />
    </header>
  );
}
