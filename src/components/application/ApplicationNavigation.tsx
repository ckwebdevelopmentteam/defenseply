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
      className="thin-scrollbar flex gap-8 overflow-x-auto border-b border-line px-[5%] py-5 max-phone:gap-6"
    >
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/applications/${category.slug}`}
          aria-current={category.slug === active ? "page" : undefined}
          className={cn(
            "flex min-h-11 shrink-0 items-center border-b text-base",
            category.slug === active
              ? "border-ink"
              : "border-transparent font-light hover:border-line",
          )}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  );
}
