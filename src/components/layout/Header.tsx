"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    pathname?.startsWith("/applications"),
  );

  return (
    <header id="core-main-menu">
      <div
        className={cn(
          "group/header fixed inset-x-0 top-0 z-[2147483640] flex justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-desktop:hidden",
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
          scrolled ? "py-2.5" : "py-[18px]",
          solid
            ? "bg-white text-ink shadow-sm"
            : "bg-[linear-gradient(180deg,#0006,transparent)] text-white hover:bg-white hover:bg-none hover:text-ink",
        )}
      >
        <div className="flex w-full max-w-[1650px] items-center justify-between gap-5 max-[1200px]:gap-2.5">
          <BrandLogo solid={solid} compact={scrolled} />
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 max-[1400px]:gap-[18px] max-[1200px]:gap-2.5">
              {siteNavigation.map((item) => (
                <li
                  key={item.name}
                  className="whitespace-nowrap text-[13px] transition-opacity hover:opacity-80 max-[1200px]:text-xs"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <MobileHeader solid={solid} />
    </header>
  );
}
