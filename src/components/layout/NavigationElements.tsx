import { cn } from "@/lib/cn";
import navigation from "@/data/navigation.json";
export { navigation };
export type MenuName = keyof typeof navigation;
export const navigationLinks = [
  "Colors",
  "Our Brands",
  "Spaces",
  "Inspiration",
  "Showrooms",
  "Professionals",
  "Corporate",
] as const;
export function BrandLogo({ className }: { className?: string }) {
  return (
    <a
      href="/usa/"
      aria-label="Cosentino home"
      className={cn(
        "block h-6 w-[142px] shrink-0 bg-current [mask:url('/assets/cosentino-logo.svg')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}
export function NavigationActions({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 max-[1200px]:gap-2.5",
        mobile && "w-full flex-col gap-2.5",
      )}
    >
      <a
        href="#"
        className={cn(
          "whitespace-nowrap rounded-full px-[18px] py-2 text-[13px] leading-4 backdrop-blur-sm max-[1400px]:px-3",
          mobile
            ? "min-w-[190px] bg-[#1d1d1c] px-6 py-3 text-center text-body text-white"
            : "bg-black/10 group-hover/header:bg-black/10",
        )}
      >
        Where To Buy
      </a>
      <a
        href="#"
        className={cn(
          "whitespace-nowrap text-[13px] leading-4",
          mobile &&
            "min-w-[190px] rounded-full border border-muted px-6 py-3 text-center text-body",
        )}
      >
        Professional Area
      </a>
    </div>
  );
}
