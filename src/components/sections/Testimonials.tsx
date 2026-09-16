import testimonialContent from "@/data/testimonials.json";

import {
  TestimonialSection,
  type Testimonial,
} from "@/components/testimonial/TestimonialSection";

export function Testimonials({
  items = testimonialContent as Testimonial[],
}: { items?: Testimonial[] } = {}) {
  return (
    <div className="relative w-full bg-white">
      <TestimonialSection
        id="testimonials"
        data-section="testimonials"
        title="What Our Clients Say"
        description="Verified architectural evaluations from leading commercial developers, modular interior designers, and precision fabricators."
        testimonials={items}
        className="bg-white"
      />
    </div>
  );
}
