import type { ReactNode } from "react";
import { ArrowIcon } from "./ActionLink";
import { cn } from "@/lib/cn";
export type SurfaceCardContent = {
  image: string;
  title?: string;
  description?: string;
  logo?: string;
  action?: string;
  href?: string;
};
/** Shared image/gradient/hover treatment for space and brand cards. */
export function SurfaceCard({
  image,
  title,
  description,
  logo,
  action,
  href = "#",
  className,
  children,
}: SurfaceCardContent & { className?: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      className={cn(
        "keen-slider__slide group relative block aspect-[3/4] overflow-hidden text-white",
        className,
      )}
    >
      <img
        src={image}
        alt={title || description || "Architectural surface"}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-[transform,filter] duration-500 group-hover:scale-110 group-hover:brightness-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.34)_0.01%,transparent_23.01%,transparent_70.5%,rgba(0,0,0,.34)_99.99%)]" />
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-[8%]">
        {logo ? (
          <img
            src={logo}
            alt={title || ""}
            className="h-[50px] w-40 object-contain object-left max-phone:w-[130px]"
          />
        ) : (
          <h3 className="text-fluid leading-[1.2] tracking-[.5px] font-normal">
            {title}
          </h3>
        )}
        <div>
          {description && (
            <p className="max-w-[60%] pb-5 text-fluid font-light leading-[1.34] max-phone:max-w-[80%]">
              {description}
            </p>
          )}
          <span className="flex items-center gap-2.5 text-fluid-xs">
            {action}
            <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
          </span>
          {children}
        </div>
      </div>
    </a>
  );
}
