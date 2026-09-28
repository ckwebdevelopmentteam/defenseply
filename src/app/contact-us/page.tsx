import type { Metadata } from "next";
import { ContactIntro } from "@/components/sections/contact/ContactIntro";
import { ContactProject } from "@/components/sections/contact/ContactProject";
import { DirectContact } from "@/components/sections/contact/DirectContact";
import { ContactVisit } from "@/components/sections/contact/ContactVisit";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";
export const metadata: Metadata = {
  title: "Contact Us | DefensePly",
  description:
    "Contact DefensePly about your WPC and PVC board, door and architectural surface solutions.",
};
export default function ContactUsPage() {
  return (
    <main
      id="main-content"
      className="bg-paper pt-[112px] text-contact-ink max-desktop:pt-[90px] max-phone:pt-[68px]"
    >
      <ContactIntro />
      <ContactProject />
      <DirectContact />
      <ContactVisit />
      <ContactCTA />
    </main>
  );
}
