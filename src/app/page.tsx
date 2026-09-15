import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Spaces } from "@/components/sections/Spaces";
import { Products } from "@/components/sections/Products";
import { ColorCollection } from "@/components/sections/ColorCollection";
import { FreePower } from "@/components/sections/FreePower";
import { InspirationGallery } from "@/components/sections/InspirationGallery";
import { Hybriq } from "@/components/sections/Hybriq";
import { Renovation } from "@/components/sections/Renovation";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { CityShowroom } from "@/components/sections/CityShowroom";
import { Newsletter } from "@/components/sections/Newsletter";
import { FloatingActions } from "@/components/ui/FloatingActions";
/** Edit, reorder, or replace an individual section here. */
export default function Home() {
  return (
    <>
      <main id="main-content" className="overflow-hidden">
        <div className="mx-auto w-full px-[38px] max-phone:px-5">
          <article>
            <Hero />
            <About />
            <Spaces />
            <Products />
            <ColorCollection />
            <FreePower />
            <InspirationGallery />
            <Hybriq />
            <Renovation />
            <BrandShowcase />
            <CityShowroom />
            <Newsletter />
          </article>
        </div>
      </main>
      <FloatingActions />
    </>
  );
}
