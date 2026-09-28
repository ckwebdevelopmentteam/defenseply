import Link from "next/link";
import type { Application } from "@/types/application";
import { cn } from "@/lib/cn";
export function ApplicationNavigation({
  categories,
  active,
}: {
  categories: Application[];
  active: string;
}) {
  return (
    <nav
      aria-label="Explore applications"
      className="sticky top-[58px] max-desktop:top-[48px] z-30 w-full border-b border-line/70 bg-white/90 backdrop-blur-md transition-all duration-300 shadow-xs"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-[5%] py-2.5">
        <div className="thin-scrollbar flex items-center gap-2 overflow-x-auto py-1 max-phone:gap-1.5">
          {categories.map((category) => {
            const isActive = category.slug === active;
            return (
              <Link
                key={category.slug}
                href={`/applications/${category.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-full px-4 py-1.5 text-xs font-normal tracking-wide uppercase transition-all duration-200 max-phone:px-3 max-phone:py-1",
                  isActive
                    ? "bg-ink text-white shadow-xs"
                    : "text-ink/75 hover:bg-stone/60 hover:text-ink",
                )}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-6 text-xs tracking-wider uppercase desktop:flex font-light">
          <a
            href="#story"
            className="text-ink/60 transition-colors hover:text-ink"
          >
            Overview
          </a>
          <span className="text-line" aria-hidden="true">/</span>
          <a
            href="#inspiration"
            className="text-ink/60 transition-colors hover:text-ink"
          >
            Inspiration
          </a>
          <span className="text-line" aria-hidden="true">/</span>
          <a
            href="#materials"
            className="text-ink/60 transition-colors hover:text-ink"
          >
            Materials
          </a>
        </div>
      </div>
    </nav>
  );
}
