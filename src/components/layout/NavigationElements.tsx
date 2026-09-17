import Link from "next/link";
import { cn } from "@/lib/cn";

export function BrandLogo({
  solid = false,
  compact = true,
  mobile = false,
}: {
  solid?: boolean;
  compact?: boolean;
  mobile?: boolean;
}) {
  const size = mobile
    ? "h-[36px] max-h-[calc(var(--mobile-nav-height)-8px)]"
    : "h-[54px]";
  return (
    <Link
      href="/"
      aria-label="DefensePly home"
      className="relative flex shrink-0 items-center transition-transform hover:scale-[1.03]"
    >
      <img
        src="/assets/defenseply-logo.png"
        alt="DefensePly"
        className={cn(
          "w-auto max-w-none object-contain transition-[height] duration-250 drop-shadow-[0_2px_8px_#0007]",
          size,
          solid ? "hidden" : "block group-hover/header:hidden",
        )}
      />
      <img
        src="/assets/defenseply-logo-dark.png"
        alt="DefensePly"
        className={cn(
          "w-auto max-w-none object-contain transition-[height] duration-250 drop-shadow-[0_2px_6px_#0003]",
          size,
          solid ? "block" : "hidden group-hover/header:block",
        )}
      />
    </Link>
  );
}
