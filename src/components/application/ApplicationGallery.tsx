import type { Application } from "@/types/application";
import { ApplicationImage } from "./ApplicationImage";
import { Heading } from "@/components/ui/Heading";
export function ApplicationGallery({
  application,
}: {
  application: Application;
}) {
  return (
    <section
      id="inspiration"
      className="bg-paper px-[5%] py-[clamp(56px,7vw,112px)]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-end justify-between gap-8 max-phone:flex-col max-phone:items-start">
          <Heading>{application.title} inspiration</Heading>
          <p className="max-w-sm text-sm leading-relaxed">
            Ideas for your next space. Explore ways to bring boards, finishes
            and thoughtful details together.
          </p>
        </div>
        <div className="grid grid-cols-2 items-start gap-x-10 gap-y-14 max-phone:grid-cols-1 max-phone:gap-10">
          {application.gallery.map((image, index) => (
            <figure
              key={image.id}
              className={index % 2 ? "mt-20 max-phone:mt-0" : ""}
            >
              <ApplicationImage
                src={image.src}
                alt={image.alt}
                className="aspect-[3/4]"
              />
              <figcaption className="mt-5 flex gap-5 border-t border-line pt-5">
                <span className="text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-light">{image.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
