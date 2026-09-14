import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Spaces } from "@/components/sections/Spaces";
import { NewCollections } from "@/components/sections/NewCollections";
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
      <Header />
      <main id="main-content">
        <section className="core-container">
          <article>
            <Hero />
            <About />
            <Spaces />
            <NewCollections />
            <ColorCollection />
            <FreePower />
            <InspirationGallery />
            <Hybriq />
            <Renovation />
            <BrandShowcase />
            <CityShowroom />
            <Newsletter />
          </article>
        </section>
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
