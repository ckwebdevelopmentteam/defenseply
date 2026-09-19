import Link from "next/link";
import { cn } from "@/lib/cn";

export function DefenseplyMonogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 sm:h-9 w-auto text-[#163326] shrink-0", className)}
      aria-hidden="true"
    >
      {/* Interlocking D glyph */}
      <path
        d="M17 12V6C17 4.34315 15.6569 3 14 3H5C3.34315 3 2 4.34315 2 6V30C2 31.6569 3.34315 33 5 33H14C15.6569 33 17 31.6569 17 30V24"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Interlocking P glyph */}
      <path
        d="M17 11H23C26.3137 11 29 13.6863 29 17C29 20.3137 26.3137 23 23 23H17M17 9V37"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandLogo({
  solid = true,
  compact = true,
  mobile = false,
  className,
}: {
  solid?: boolean;
  compact?: boolean;
  mobile?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="DefensePly home"
      className={cn(
        "relative flex items-center shrink-0 transition-opacity duration-200 hover:opacity-90",
        className,
      )}
    >
      <img
        src="/assets/defenseply-logo-brand.png"
        alt="DefensePly - Plywood | Veneer | Blockboard"
        className={cn(
          "w-auto object-contain transition-all duration-300",
          mobile
            ? "h-11 sm:h-12 max-phone:h-10"
            : compact
              ? "h-12 lg:h-14"
              : "h-14 sm:h-16 lg:h-[72px] xl:h-[76px]",
          !solid && "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]",
        )}
      />
    </Link>
  );
}
