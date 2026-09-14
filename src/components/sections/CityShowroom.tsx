import { ActionLink } from "@/components/ui/ActionLink";
export function CityShowroom() {
  return (
    <section
      data-section="city"
      className="flex bg-stone max-tablet:flex-col max-tablet:gap-12"
    >
      <div className="flex w-full flex-[1_0_50%] flex-col items-center justify-between gap-12 overflow-hidden px-[38px] pt-[77px] pb-12 max-phone:gap-8 max-phone:pb-0">
        <img
          src="/assets/LOGO-CITY.svg"
          alt="Cosentino City"
          loading="lazy"
          width={256}
          height={21}
        />
        <img
          className="aspect-square h-auto w-[clamp(342px,55%,1000px)] max-w-none object-cover"
          src="/assets/we-talk-design.jpg"
          alt="We talk design"
          loading="lazy"
          width={1026}
          height={978}
        />
        <div className="flex flex-col items-center gap-8 min-[768px]:px-12">
          <p className="text-center text-fluid">
            A space for inspiration, connection, and creation to bring any
            design or architectural project to life.
          </p>
          <ActionLink href="#contact">More information</ActionLink>
        </div>
      </div>
      <div className="relative aspect-square w-full flex-[1_0_50%] overflow-hidden">
        <img
          className="absolute inset-0 size-full object-cover"
          src="/assets/JoseManuelFerrao2023_002.jpg"
          alt=""
          loading="lazy"
          width={1618}
          height={1080}
        />
      </div>
    </section>
  );
}
