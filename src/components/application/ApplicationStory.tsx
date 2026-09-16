import type { Application } from "@/types/application";
import { ApplicationImage } from "./ApplicationImage";
import { Heading } from "@/components/ui/Heading";
import { ActionLink } from "@/components/ui/ActionLink";
export function ApplicationStory({
  application,
}: {
  application: Application;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-[5%] py-[clamp(56px,7vw,112px)]">
      <div className="mb-16 grid grid-cols-2 gap-12 max-tablet:grid-cols-1 max-tablet:gap-6 max-phone:mb-10">
        <Heading>{application.storyTitle}</Heading>
        <p className="max-w-xl text-fluid font-light leading-relaxed">
          {application.description}
        </p>
      </div>
      <div className="grid grid-cols-2 items-center gap-[8%] max-tablet:gap-8 max-phone:grid-cols-1">
        <ApplicationImage
          src={application.gallery[0].src}
          alt={application.gallery[0].alt}
          className="aspect-[3/4]"
        />
        <div className="max-w-lg py-8 max-phone:py-0">
          <p className="mb-6 text-xs tracking-[.15em] uppercase">
            Materials meet possibility
          </p>
          <h3 className="mb-6 text-[clamp(28px,3vw,48px)] leading-tight font-light">
            {application.headline}
          </h3>
          <p className="text-base leading-relaxed font-light">
            {application.story}
          </p>
          <ActionLink href="#inspiration" className="mt-8">
            Explore the possibilities
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
