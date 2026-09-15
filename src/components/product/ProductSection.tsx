import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
export function ProductSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "max-w-[1440px] mx-auto py-[60px] px-[5%] max-[860px]:py-11 max-[860px]:px-[5%] max-sm:py-[34px] max-sm:px-[4%] max-[390px]:py-7",
        className,
      )}
    />
  );
}
export function ProductSectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-9 max-[860px]:mb-6">
      <span className="block text-[11px] tracking-[2.5px] uppercase text-[#8c827a] mb-2 font-medium font-sans">
        {eyebrow}
      </span>
      <h2 className="text-[clamp(24px,2.4vw,36px)] leading-[1.15] font-light tracking-[1px] uppercase text-[#1a1a1a] m-0 font-sans max-sm:text-[clamp(19px,5vw,26px)]">
        {children}
      </h2>
    </div>
  );
}
