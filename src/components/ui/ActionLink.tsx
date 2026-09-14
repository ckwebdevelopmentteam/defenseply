import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[25px] shrink-0", className)}
      viewBox="0 0 25 25"
      fill="none"
      aria-hidden="true"
    >
      <path d="M13 4.5 21 12.5 13 20.5M21 12.5H1" stroke="currentColor" />
    </svg>
  );
}
const variants = {
  dark: "border-ink bg-ink text-white hover:bg-[#c3ffff] hover:text-ink hover:border-[#c3ffff]",
  light:
    "border-white bg-white text-ink hover:bg-[#c3ffff] hover:border-[#c3ffff]",
  outline:
    "border-ink bg-transparent text-ink hover:bg-[#c3ffff] hover:border-[#c3ffff]",
};
/** All promotional destinations remain inert until a local href is deliberately supplied. */
export function ActionLink({
  children,
  variant = "outline",
  className,
  href = "#",
  ...props
}: ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...props}
      className={cn(
        "group inline-flex items-center gap-2.5 border px-[23px] py-[11px] text-fluid-xs leading-normal transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowIcon className="h-[17px] w-[18px] transition-transform duration-500 group-hover:translate-x-1" />
    </a>
  );
}
