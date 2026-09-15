import Link from "next/link";
import { ApplicationImage } from "./ApplicationImage";
import { ActionLink } from "@/components/ui/ActionLink";
import type { Application } from "@/types/application";
export function ApplicationHero({ application }: { application: Application }) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap gap-2 px-[5%] pt-[120px] pb-6 text-xs max-desktop:pt-[147px] max-phone:pt-[125px]"
      >
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#applications">Applications</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{application.title}</span>
      </nav>
      <section className="relative isolate flex aspect-video max-h-[850px] min-h-[460px] items-end overflow-hidden text-white max-phone:aspect-[3/4] max-phone:min-h-[440px]">
        <ApplicationImage
          src={application.hero}
          mobileSrc={application.heroMobile}
          alt={application.heroAlt}
          priority
          className="absolute inset-0 -z-20"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
        <div className="w-full px-[5%] py-[clamp(32px,5vw,80px)]">
          <p className="mb-4 text-xs tracking-[.18em] uppercase">
            Defenseply / Applications
          </p>
          <h1 className="text-[clamp(48px,7vw,112px)] leading-none font-light uppercase">
            {application.title}
          </h1>
          <p className="mt-5 max-w-xl text-[clamp(18px,2vw,28px)] font-light">
            {application.headline}
          </p>
          <ActionLink href="#project-form" variant="light" className="mt-8">
            Discuss your project
          </ActionLink>
        </div>
      </section>
    </>
  );
}
