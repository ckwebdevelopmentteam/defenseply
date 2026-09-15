import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Spaces } from "@/components/sections/Spaces";
import { NewCollections } from "@/components/sections/NewCollections";
// import { ColorCollection } from "@/components/sections/ColorCollection";
// import { FreePower } from "@/components/sections/FreePower";
import { InspirationGallery } from "@/components/sections/InspirationGallery";
import { BlogSection } from "@/components/sections/BlogSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
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
            <NewCollections />
            {/* Hidden: Brand / Color collection section */}
            {/* <ColorCollection /> */}
            {/* Hidden: CTA image section (FreePower) */}
            {/* <FreePower /> */}
            <InspirationGallery />
            <BlogSection />
            <Testimonials />
            <FAQ />
            <Newsletter />
          </article>
        </div>
      </main>
      <FloatingActions />
    </>
  );
}
