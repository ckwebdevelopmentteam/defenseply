import { ShieldCheck, Droplets, TreePine, Sparkles } from "lucide-react";
import { ProductSection } from "./ProductSection";
export function ProductGreenPromise() {
  return (
    <ProductSection aria-label="Defenseply Green Promise">
      <div className="bg-[url('/assets/green-promise-bg.png')] bg-cover bg-center no-repeat rounded-lg py-[52px] px-12 grid grid-cols-[1fr_1.3fr] gap-12 items-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(10,50,30,0.38)_0%,rgba(10,50,30,0.10)_60%,rgba(10,50,30,0.05)_100%)] before:pointer-events-none before:z-0 max-[860px]:grid-cols-1 max-[860px]:gap-7 max-[860px]:py-9 max-[860px]:px-7 max-[860px]:bg-left max-sm:py-7 max-sm:px-[18px] max-sm:gap-[22px] max-sm:bg-left reveal-on-scroll">
        <div className="relative z-[1]">
          <span className="block text-[11px] tracking-[2.5px] uppercase text-white/75 mb-2 font-medium font-sans">
            Sustainable Eco-Architecture
          </span>
          <h3 className="text-[clamp(22px,2.2vw,34px)] font-light leading-[1.18] text-white m-0 mb-3.5 font-sans tracking-[1px] uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.15)] max-sm:text-[clamp(19px,5vw,26px)]">
            The Defenseply Green Promise
          </h3>
          <p className="text-[15px] leading-[1.65] text-white/90 m-0 max-sm:text-sm">
            Defenseply products are the guardians of tomorrow&apos;s greenery.
            By choosing composite boards and architectural profiles, you choose
            a future of conscious luxury.
          </p>
        </div>
        <div className="relative z-[1] grid grid-cols-2 gap-3 max-sm:grid-cols-2 max-sm:gap-2.5">
          <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
            <TreePine size={18} /> Zero Deforestation
          </div>
          <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
            <Sparkles size={18} /> Lower Carbon Footprint
          </div>
          <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
            <Droplets size={18} /> 100% Recyclable
          </div>
          <div className="flex items-center gap-2.5 bg-white/[0.22] backdrop-blur-[10px] border border-white/[0.38] py-3.5 px-4 rounded-md text-[12.5px] font-medium text-white font-sans tracking-[0.6px] uppercase [&>svg]:text-white [&>svg]:shrink-0 [&>svg]:opacity-90 max-sm:py-[11px] max-sm:px-3 max-sm:text-[11.5px] max-sm:gap-2">
            <ShieldCheck size={18} /> Sustainable Living
          </div>
        </div>
      </div>
    </ProductSection>
  );
}
