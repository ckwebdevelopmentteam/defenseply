"use client";

import InteractiveImageBentoGallery, {
  type ImageItem,
} from "@/components/ui/bento-gallery";

const bentoGalleryItems: ImageItem[] = [
  {
    id: 1,
    title: "Architectural Lounge & Wall Paneling",
    desc: "Pre-finished acoustic & moisture-impervious composite wall systems.",
    url: "/assets/applications/interiors/brochure-interiors-lounge.webp",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Waterproof Kitchen Carcass & Sink Cabinetry",
    desc: "100% moisture-proof calibrated WPC sink cabinetry with zero swelling.",
    url: "/assets/applications/kitchen/waterproof-wpc-sink-carcass.jpg",
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "Precision CNC Parametric Jali",
    desc: "High-density PVC foam board with chip-free 90° architectural routing.",
    url: "/assets/applications/creative/brochure-creative-cnc-cutting.webp",
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Floor-to-Ceiling Luxury Wardrobe System",
    desc: "High load-bearing WPC carcase with matte finish and integrated lighting.",
    url: "/assets/applications/wardrobe/full-height-wardrobes.webp",
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "Fluted Bedroom Headboard Paneling",
    desc: "Natural timber grain texture with termite and borer resistance.",
    url: "/assets/applications/bedroom/brochure-bedroom-headboard-panel.webp",
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "Commercial Office Workstation Pods",
    desc: "Flame-retardant structural composite partitions for contemporary workspaces.",
    url: "/assets/applications/commercial/brochure-commercial-office.webp",
    span: "md:row-span-1",
  },
  {
    id: 7,
    title: "Modular Island Cabinetry & Countertops",
    desc: "High screw-holding composite core engineered for heavy stone countertops.",
    url: "/assets/applications/kitchen/brochure-modular-kitchen-cabinets.webp",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 8,
    title: "Walk-In Dressing Organizer System",
    desc: "Customizable modular compartments built with calibrated composite boards.",
    url: "/assets/applications/wardrobe/brochure-wardrobe-organizer.webp",
    span: "md:row-span-1",
  },
  {
    id: 9,
    title: "Solid Architectural Composite Doors",
    desc: "Non-warping composite core with woodgrain embossing for lasting durability.",
    url: "/assets/products/wpc-designer-doors-collection.webp",
    span: "md:row-span-1",
  },
  {
    id: 10,
    title: "Living Room Privacy Screen Lattice",
    desc: "Parametric screening tailored for open-concept residential interiors.",
    url: "/assets/applications/creative/cnc-screens.webp",
    span: "md:row-span-2",
  },
];

export function InspirationGallery() {
  return (
    <section id="gallery" data-section="gallery" className="relative w-full mb-20 max-phone:mb-12 max-md:mb-12" aria-label="Inspiration Galleries">
      <InteractiveImageBentoGallery
        imageItems={bentoGalleryItems}
        title="INSPIRATION GALLERIES"
        description={
          <>
            <span className="md:block">
              A curated showcase of waterproof cabinetry, precision architectural joinery,
            </span>
            <span className="md:block">
              and contemporary interior environments engineered with DefensePly composite boards.
            </span>
          </>
        }
      />
    </section>
  );
}

export default InspirationGallery;
