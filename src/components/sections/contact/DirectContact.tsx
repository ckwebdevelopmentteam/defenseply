import { cn } from "@/lib/cn";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import {
  ContactEyebrow,
  contactCopy,
  contactGrid,
  contactHeading,
} from "./ContactUI";
export function DirectContact() {
  return (
    <section
      className={cn(contactGrid, "items-center bg-[#f8f7f4] max-[800px]:block")}
      aria-label="Direct contact details"
    >
      <div className={cn(contactCopy, "py-[54px] max-[800px]:hidden")}>
        <ContactEyebrow>Direct contact</ContactEyebrow>
        <h2 className={contactHeading}>Have a project in mind?</h2>
        <p className="mt-3 text-[13px] text-contact-muted">
          Let&apos;s talk about the right plywood for your space.
        </p>
      </div>
      <div className="mr-[clamp(24px,6vw,92px)] grid grid-cols-3 max-[800px]:mr-0 max-[520px]:grid-cols-1">
        <a
          className="flex min-h-[70px] items-center gap-3 border-l border-contact-line px-5 text-[11px] text-contact-ink max-[520px]:min-h-16 max-[520px]:border-t max-[520px]:border-l-0 max-[520px]:px-3 max-[520px]:py-2.5 max-[520px]:text-sm max-[520px]:first:border-t-0"
          href="tel:+919876543210"
        >
          <Phone size={25} />
          <span className="grid gap-1.5 max-[520px]:gap-1">
            <small className="text-[9px] uppercase text-contact-muted max-[520px]:text-[10px]">
              Call us
            </small>
            +91 98765 43210
          </span>
        </a>
        <a
          className="flex min-h-[70px] items-center gap-3 border-l border-contact-line px-5 text-[11px] text-contact-ink max-[520px]:min-h-16 max-[520px]:border-t max-[520px]:border-l-0 max-[520px]:px-3 max-[520px]:py-2.5 max-[520px]:text-sm max-[520px]:first:border-t-0"
          href="mailto:info@defenseply.com"
        >
          <Mail size={25} />
          <span className="grid gap-1.5 max-[520px]:gap-1">
            <small className="text-[9px] uppercase text-contact-muted max-[520px]:text-[10px]">
              Email
            </small>
            info@defenseply.com
          </span>
        </a>
        <a
          className="flex min-h-[70px] items-center gap-3 border-l border-contact-line px-5 text-[11px] text-contact-ink max-[520px]:min-h-16 max-[520px]:border-t max-[520px]:border-l-0 max-[520px]:px-3 max-[520px]:py-2.5 max-[520px]:text-sm max-[520px]:first:border-t-0"
          href="https://wa.me/919876543210"
        >
          <MessageCircle size={25} />
          <span className="grid gap-1.5 max-[520px]:gap-1">
            <small className="text-[9px] uppercase text-contact-muted max-[520px]:text-[10px]">
              WhatsApp
            </small>
            Chat with us
          </span>
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
