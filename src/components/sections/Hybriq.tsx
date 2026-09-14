import { Heading } from "@/components/ui/Heading";
import { ActionLink } from "@/components/ui/ActionLink";
export function Hybriq() {
  return (
    <section
      data-section="hybriq"
      className="-mx-[38px] mb-25 flex bg-stone py-15 max-tablet:flex-col max-tablet:gap-12 max-tablet:p-8"
    >
      <div className="flex w-full flex-[1_0_50%] flex-col items-start justify-between overflow-hidden px-[38px] max-tablet:gap-8 max-tablet:px-0">
        <Heading className="max-w-[90%] max-tablet:max-w-full">
          Silestone. The first mineral surface with low silica content. With
          exclusive Hybriq+ technology.
        </Heading>
        <ActionLink>Learn more about Hybriq+</ActionLink>
      </div>
      <div className="relative aspect-[4/3] w-full flex-[1_0_50%] overflow-hidden">
        <img
          className="absolute inset-0 size-full object-cover"
          src="/assets/hybriq.jpg"
          alt=""
          loading="lazy"
          width={743}
          height={531}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,#0006)]" />
      </div>
    </section>
  );
}
