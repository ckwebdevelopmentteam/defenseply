import type { Metadata } from "next";
import { GalleryPageContent } from "@/components/sections/gallery/GalleryPageContent";
import { FloatingActions } from "@/components/ui/FloatingActions";

export const metadata: Metadata = {
  title: "Inspiration Gallery | DEFENSEPLY INTERNATIONAL LLP",
  description:
    "Explore residential, commercial, and facade applications engineered with DefensePly WPC boards, PVC foam boards, and calibrated architectural composite solutions.",
};

export default function GalleryPage() {
  return (
    <>
      <main
        id="main-content"
        className="overflow-x-clip bg-white pt-[112px] max-desktop:pt-[90px] max-phone:pt-[68px]"
      >
        <GalleryPageContent />
      </main>
      <FloatingActions />
    </>
  );
}
