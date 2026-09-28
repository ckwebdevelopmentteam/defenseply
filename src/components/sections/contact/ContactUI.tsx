import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
export const contactCopy =
  "px-[clamp(24px,6.8vw,104px)] py-[clamp(48px,7vw,104px)] max-[800px]:px-[22px] max-[800px]:py-9";
export const contactGrid =
  "grid grid-cols-[1fr_1.15fr] max-[800px]:grid-cols-1";
export const contactHeading =
  "max-w-[580px] text-[clamp(35px,4vw,58px)] leading-[.98] font-light uppercase max-[520px]:text-[31px]";
export const contactLede =
  "mt-[26px] max-w-[440px] text-[15px] leading-[1.5] text-contact-muted max-[520px]:mt-4 max-[520px]:text-[13px]";
export const contactAction =
  "mt-[30px] inline-flex w-fit min-w-[146px] items-center justify-between gap-7 px-[17px] py-[13px] text-[11px] leading-none uppercase text-contact-ink max-[520px]:min-h-[38px] max-[520px]:mt-5 max-[520px]:px-[13px] max-[520px]:py-2.5 max-[520px]:text-[10px]";
export const contactOutline =
  contactAction +
  " border border-[#8e8d88] hover:bg-[#1c3f21] hover:border-[#1c3f21] hover:text-white transition-colors";
export const contactSubmit =
  contactAction + " border-0 bg-[#1c3f21] !text-white hover:bg-[#15321a] transition-colors";
export function ContactEyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "mb-[22px] text-[10px] leading-[1.2] font-medium tracking-[.22em] uppercase text-contact-muted max-[520px]:mb-3.5 max-[520px]:text-[9px]",
        className,
      )}
    />
  );
}
