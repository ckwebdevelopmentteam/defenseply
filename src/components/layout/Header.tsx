"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileHeader } from "./MobileHeader";
import { BrandLogo, NavigationActions } from "./NavigationElements";
import { useNavigationState } from "../sections/NavigationState";
import { siteNavigation } from "@/data/site";
import { cn } from "@/lib/cn";
export function Header() {
  const { scrolled } = useNavigationState();
  const pathname = usePathname();
  const solid = scrolled || pathname.startsWith("/contact-us");
  return (
    <header id="core-main-menu">
      <div
        className={cn(
          "group/header fixed inset-x-0 top-0 z-[2147483640] flex justify-center px-8 transition-colors max-desktop:hidden",
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
                  className="whitespace-nowrap text-[13px] max-[1200px]:text-xs"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <NavigationActions />
        </div>
      </div>
      <MobileHeader solid={solid} />
    </header>
  );
}
