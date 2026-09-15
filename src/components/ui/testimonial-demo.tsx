"use client";

import { TestimonialSection, type Testimonial } from "@/components/ui/testimonial";

const testimonialsData: Testimonial[] = [
  {
    type: "user",
    quote: "Switching to Defenseply PVC Foam Boards for our coastal commercial project eliminated moisture swelling and warping completely. The edges cut clean and hold hardware exceptionally well.",
    name: "Ar. Rajesh Menon",
    role: "Principal Architect, Menon & Associates",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    avatarFallback: "RM",
  },
  {
    type: "quote",
    quote: "Defenseply delivered zero water absorption and calibrated density across 40,000 sq.ft of modular joinery. A true benchmark in structural cellular composite materials.",
    name: "Vikramaditya Shah",
    role: "Director of Infrastructure, Skyline Spaces",
  },
  {
    type: "user",
    quote: "The 3-layer multi boards machined effortlessly on our CNC routers without edge burrs or post-cut putty work. Outstanding screw retention for high-traffic modular kitchens.",
    name: "Priya Sundaram",
    role: "Chief Design Officer, Studio Parametric",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    avatarFallback: "PS",
  },
];

export default function TestimonialSectionDemo() {
  return (
    <div className="w-full bg-white py-12">
      <TestimonialSection
        title="What Our Clients Say"
        description="Verified architectural evaluations from leading commercial developers, modular interior designers, and precision fabricators."
        testimonials={testimonialsData}
      />
    </div>
  );
}
