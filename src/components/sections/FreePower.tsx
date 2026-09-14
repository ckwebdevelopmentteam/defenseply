import { ActionLink } from "@/components/ui/ActionLink";
export function FreePower() {
  return (
    <section data-section="freepower" className="flex justify-center">
      <div className="my-[38px] flex h-[400px] max-w-[1616px] bg-[linear-gradient(169deg,#986d55_12.11%,#e2ae8d_160.7%)] max-tablet:h-auto max-tablet:flex-col-reverse max-phone:page-bleed max-phone:max-w-screen">
        <div className="ml-20 mr-30 flex h-full flex-[1_1_50%] flex-col justify-evenly text-white max-tablet:mx-8 max-tablet:pt-4 max-tablet:pb-8 max-[450px]:mx-4">
          <div>
            <p className="text-[35px] leading-[37px] font-light uppercase">
              FreePower Valet.
            </p>
            <h2 className="text-[35px] leading-[37px] font-extralight uppercase max-tablet:mb-4">
              the most luxurious charging experience CRAFTED WITH SILESTONE®
              VERSAILLES IVORY
            </h2>
          </div>
          <div>
            <ActionLink variant="light">Discover more</ActionLink>
          </div>
        </div>
        <div className="h-full w-full flex-[1_1_50%] max-tablet:aspect-video max-phone:aspect-[4/3]">
          <img
            className="size-full object-contain"
            src="/assets/free-power-cta.png"
            alt=""
            loading="lazy"
            width={752}
            height={470}
          />
        </div>
      </div>
    </section>
  );
}
