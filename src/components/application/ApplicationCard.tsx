import Link from "next/link";
import { ApplicationImage } from "./ApplicationImage";
import { ArrowIcon } from "@/components/ui/ActionLink";
import type { Application } from "@/types/application";
export function ApplicationCard({
  category,
  image,
}: {
  category: Application;
  image: Application["gallery"][number];
}) {
  return (
    <Link
      href={`/applications/${category.slug}`}
      className="keen-slider__slide group relative block aspect-[3/4] overflow-hidden text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <ApplicationImage
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/45 via-transparent to-black/50" />
      <div className="relative flex h-full flex-col justify-between p-[8%]">
        <h3 className="text-fluid font-normal">{image.title}</h3>
        <span className="flex items-center justify-between gap-3 text-sm">
          Explore {category.title.toLowerCase()}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
