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
        description="Industry perspectives on composite material performance, moisture resistance, and fabrication reliability."
        testimonials={items}
        className="bg-white"
      />
    </div>
  );
}
