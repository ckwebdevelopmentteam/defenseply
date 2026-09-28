import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
export function Heading({ className, ...props }: ComponentProps<"h2">) {
  const hasWeight = className?.includes("font-");
  return (
    <h2
      {...props}
      className={cn(
        !hasWeight && "font-light",
        "uppercase text-heading max-tablet:text-heading-tablet max-phone:text-heading-phone leading-[1.04]",
        className,
      )}
    />
  );
}
export function SectionHeading({
  title,
  descriptions = [],
  className,
}: {
  title: string;
  descriptions?: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full items-start justify-between pb-8 max-phone:pb-6 max-tablet:flex-wrap max-phone:flex-col max-phone:gap-6",
        className,
      )}
    >
      <div className="w-full flex-[1_1_33.33%] max-tablet:flex-[0_0_100%]">
        <h2 className="max-w-[26vw] text-display font-semibold uppercase antialiased max-tablet:mb-6 max-tablet:max-w-[75%] max-phone:max-w-none max-phone:text-center">
          {title}
        </h2>
      </div>
      {descriptions.map((text, i) => (
        <div
          key={text}
          className={cn(
            "w-full flex-[1_1_25%] max-tablet:flex-[0_0_46%]",
            i > 0 && "max-phone:hidden",
          )}
        >
          <p className="max-w-[22vw] text-fluid font-light leading-[1.4] max-tablet:max-w-full max-phone:text-center">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
