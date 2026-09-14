import { cn } from "@/lib/cn";
import {
  ContactEyebrow,
  contactCopy,
  contactGrid,
  contactHeading,
  contactLede,
} from "./ContactUI";
import { ContactForm } from "./ContactForm";
export function ContactProject() {
  return (
    <section className={cn(contactGrid, "bg-[#eae9e5]")} id="project-form">
      <div className={cn(contactCopy, "pt-[clamp(48px,7vw,94px)]")}>
        <ContactEyebrow>Get in touch</ContactEyebrow>
        <h2 className={contactHeading}>Tell us about your project.</h2>
        <p className={contactLede}>
          Share your requirements with us and our team will get back to you with
          the right solution.
        </p>
        <ul className="mt-[72px] border-t border-contact-line pt-[18px] text-[13px] leading-[1.8] max-[800px]:mt-[30px]">
          <li>Homes</li>
          <li>Commercial spaces</li>
          <li>Interiors</li>
          <li>Furniture &amp; fit-outs</li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
}
