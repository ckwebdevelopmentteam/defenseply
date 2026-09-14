import { Heading } from "@/components/ui/Heading";
import { ActionLink } from "@/components/ui/ActionLink";
export function Renovation() {
  return (
    <section
      data-section="renovation"
      className="flex min-h-[525px] max-tablet:flex-col-reverse max-phone:page-bleed"
    >
      <div className="flex flex-[1_1_50%] flex-col justify-between gap-[198px] bg-stone py-12 pl-[38px] pr-10 max-phone:gap-10 max-phone:px-6">
        <Heading className="max-w-[80%] max-phone:max-w-full">
          DO YOU HAVE A RENOVATION? WE CAN HELP YOU
        </Heading>
        <div>
          <p className="max-w-[50%] text-fluid max-phone:hidden">
            Our extensive network of collaborators allows us to offer you advice
            for any renovation across five continents.
          </p>
          <ActionLink variant="dark" className="mt-8">
            Where to buy
          </ActionLink>
        </div>
      </div>
      <div className="relative flex-[1_1_50%]">
        <img
          className="absolute inset-0 size-full object-cover max-tablet:relative max-tablet:h-auto"
          src="/assets/Casa-Navacerrada-LGC-2.jpg"
          alt=""
          loading="lazy"
          width={2000}
          height={1333}
        />
      </div>
    </section>
  );
}
