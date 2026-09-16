import { cn } from "@/lib/cn";
import { ArrowRight, MapPin } from "lucide-react";
import {
  ContactEyebrow,
  contactCopy,
  contactGrid,
  contactHeading,
  contactLede,
  contactOutline,
} from "./ContactUI";
export function ContactVisit() {
  return (
    <section className={cn(contactGrid, "bg-[#f8f7f4]")}>
      <div
        className="min-h-[490px] bg-[url('/assets/facade-nsw.avif')] bg-cover bg-center max-[800px]:min-h-[250px]"
        role="img"
        aria-label="DefensePly manufacturing facility"
      />
      <div className={cn(contactCopy, "py-[clamp(48px,7vw,96px)]")}>
        <ContactEyebrow>Visit us</ContactEyebrow>
        <h2 className={contactHeading}>Come visit us</h2>
        <p className={contactLede}>
          Our team and manufacturing facility are ready to welcome you.
        </p>
        <address className="relative mt-[26px] flex max-w-[290px] pl-[30px] text-xs leading-[1.5] not-italic text-contact-muted">
          <MapPin
            className="absolute top-0 left-0 text-contact-ink"
            size={20}
          />
          DefensePly International LLP
          <br />
          Industrial Area, Kerala, India
        </address>
        <a
          className={contactOutline}
          href="https://maps.google.com/?q=Kerala,India"
        >
          Get directions <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
