import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteActions } from "@/data/site";
export function BrandLogo({
  solid = false,
  compact = false,
  mobile = false,
}: {
  solid?: boolean;
  compact?: boolean;
  mobile?: boolean;
}) {
  const size = mobile
    ? "h-[54px] max-h-[calc(var(--mobile-nav-height)-4px)] max-phone:h-11"
    : compact
      ? "h-[54px]"
      : "h-[76px] max-[1200px]:h-[66px]";
  return (
    <Link
      href="/"
      aria-label="Defenseply home"
      className="relative flex shrink-0 items-center transition-transform hover:scale-[1.03]"
    >
      <img
        src="/assets/defenseply-logo.png"
        alt="Defenseply"
        className={cn(
          "w-auto max-w-none object-contain transition-[height] duration-250 drop-shadow-[0_2px_8px_#0007]",
          size,
          solid ? "hidden" : "block group-hover/header:hidden",
        )}
      />
      <img
        src="/assets/defenseply-logo-dark.png"
        alt="Defenseply"
        className={cn(
          "w-auto max-w-none object-contain transition-[height] duration-250 drop-shadow-[0_2px_6px_#0003]",
          size,
          solid ? "block" : "hidden group-hover/header:block",
        )}
      />
    </Link>
  );
}
export function NavigationActions({
  onNavigate,
  mobile = false,
}: {
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 max-[1200px]:gap-2.5",
        mobile && "w-full flex-col items-stretch",
      )}
    >
      {siteActions.map((item, i) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "whitespace-nowrap text-[13px] leading-4",
            !mobile &&
              i === 0 &&
              "rounded-full bg-black/10 px-[18px] py-2 backdrop-blur-sm max-[1400px]:px-3",
            mobile &&
              "border-b border-white/20 py-[18px] text-[22px] leading-normal font-light",
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
