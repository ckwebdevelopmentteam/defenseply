import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
export function ProductSection({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "w-full px-[5%] py-[clamp(44px,5vw,76px)] max-sm:px-[4%] max-sm:py-8",
        className,
      )}
    >
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
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
