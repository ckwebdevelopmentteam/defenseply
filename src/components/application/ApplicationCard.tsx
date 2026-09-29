import Link from "next/link";
import { ApplicationImage } from "./ApplicationImage";
import type { Application } from "@/types/application";

export function ApplicationCard({
  category,
  image,
}: {
  category: Application;
  image: Application["gallery"][number];
  index?: number;
}) {
  return (
    <Link
      href={`/applications/${category.slug}`}
      draggable={false}
      className="keen-slider__slide group relative flex aspect-[4/5] flex-col overflow-hidden rounded-[4px] bg-stone shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c3f21]"
    >
      {/* Full-Height Background Image */}
      <ApplicationImage
        fill
        src={image.src}
        alt={image.alt}
        className="transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
      />

      {/* Dark Gradient Overlay from bottom upward - keeps top image clearly visible */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content positioned at the bottom of the image card */}
      <div className="relative z-10 mt-auto flex flex-col p-5 md:p-6 text-white">
        <h3 className="text-xl md:text-[22px] font-bold text-white tracking-tight leading-snug drop-shadow-sm">
          {image.title}
        </h3>

        {image.caption && (
          <p className="mt-1.5 text-xs md:text-sm text-white/80 leading-relaxed line-clamp-2 drop-shadow-sm">
            {image.caption}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between text-xs font-bold tracking-wider text-white uppercase">
          <span>EXPLORE {category.title}</span>
          <svg
            className="size-4.5 transition-transform duration-300 group-hover:translate-x-1.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

