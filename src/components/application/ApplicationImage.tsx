import { cn } from "@/lib/cn";

/** Shared responsive media slot. Assets can be supplied later without broken images. */
export function ApplicationImage({
  src,
  mobileSrc,
  alt,
  priority = false,
  fill = false,
  className,
}: {
  src: string | null;
  mobileSrc?: string | null;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-stone",
        fill ? "absolute inset-0" : "relative",
        className,
      )}
    >
      {src || mobileSrc ? (
        <picture>
          {mobileSrc && (
            <source media="(max-width: 600px)" srcSet={mobileSrc} />
          )}
          <img
            src={src ?? mobileSrc!}
            alt={alt}
            draggable={false}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            className="absolute inset-0 size-full object-cover select-none pointer-events-none"
          />
        </picture>
      ) : (
        <div
          role="img"
          aria-label={`${alt} — image pending`}
          className="absolute inset-0 bg-linear-to-br from-[#2c2b29] via-[#201f1d] to-[#151413] flex items-center justify-center"
        >
          <span
            aria-hidden="true"
            className="absolute inset-[12%] border border-white/10"
          />
        </div>
      )}
    </div>
  );
}
