"use client";
import brands from "@/data/brands.json";
import { Carousel } from "@/components/ui/Carousel";
import { SectionHeading } from "@/components/ui/Heading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export function BrandShowcase({ items = brands }: { items?: typeof brands }) {
  return (
    <section id="brands" data-section="brands" className="pb-15">
      <SectionHeading
        title="Versatile solutions for any space"
        descriptions={[
          "The low porosity and high resistance of our surfaces, along with the wide variety of finishes, thicknesses, and formats available, make us the perfect ally for all types of spaces.",
          "We offer the best solutions for flooring, cladding, countertops, facades... both for residential and commercial use. Discover the properties and applications of each of our brands.",
        ]}
      />
      <Carousel>
        {items.map((item) => (
          <SurfaceCard key={item.image} {...item} action="Learn More" />
        ))}
      </Carousel>
    </section>
  );
}
