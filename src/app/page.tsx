import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { InnovationTechnology } from "@/components/sections/InnovationTechnology";
import { InspirationGallery } from "@/components/sections/InspirationGallery";
import { BlogSection } from "@/components/sections/BlogSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <>
      <main id="main-content" className="overflow-x-clip">
        {/* 1. Visionary Hero (Untouched) */}
        <Hero />

        {/* 2. Industrial Heritage & Enterprise Vision */}
        <WhoWeAre />

        <div className="mx-auto w-full px-[38px] max-md:px-5 max-phone:px-5">
          <article>
            {/* 3. New Section 1: Corporate Leadership & Strategic Backing (Board of Directors + AP Group & NGH Group) */}
            <About />

            {/* 4. Our Products (Original product cards carousel) */}
            <Products />

            {/* 5. New Section 2: Corporate Center of Excellence (Simplified Quality, Strength & Testing) */}
            <InnovationTechnology />

            {/* 6. Inspiration Gallery */}
            {/* <InspirationGallery /> */}

            {/* 7. Articles & Updates */}
            <BlogSection />

            {/* 8. Client Testimonials */}
            <Testimonials />

            {/* 9. Frequently Asked Questions */}
            {/* <FAQ /> */}
          </article>
        </div>
      </main>
      <FloatingActions />
    </>
  );
}
