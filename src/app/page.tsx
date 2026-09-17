import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Applications } from "@/components/sections/Applications";
import { Products } from "@/components/sections/Products";
import { InspirationGallery } from "@/components/sections/InspirationGallery";
import { BlogSection } from "@/components/sections/BlogSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FloatingActions } from "@/components/ui/FloatingActions";
/** Edit, reorder, or replace an individual section here. */
export default function Home() {
  return (
    <>
      <main id="main-content" className="overflow-x-clip">
        <Hero />
        <div className="mx-auto w-full px-[38px] max-md:px-5 max-phone:px-5">
          <article>
            <About />
            <Applications />
            <Products />
            <InspirationGallery />
            <BlogSection />
            <Testimonials />
            <FAQ />
          </article>
        </div>
      </main>
      <FloatingActions />
    </>
  );
}
