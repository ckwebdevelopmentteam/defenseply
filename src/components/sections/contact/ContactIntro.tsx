import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import {
  ContactEyebrow,
  contactCopy,
  contactGrid,
  contactLede,
  contactOutline,
} from "./ContactUI";
export function ContactIntro() {
  return (
    <section className={contactGrid}>
      <div
        className={cn(
          contactCopy,
          "flex min-h-[490px] flex-col justify-center max-[800px]:min-h-0",
        )}
      >
        <ContactEyebrow>Contact us</ContactEyebrow>
        <h1 className="max-w-[580px] text-[clamp(42px,5vw,76px)] leading-[.98] font-light uppercase max-[520px]:text-[38px]">
          Let&apos;s build something strong.
        </h1>
        <p className={contactLede}>
          Whether you&apos;re planning a residential project, commercial space,
          or looking for reliable WPC and PVC solutions, our team is ready to help.
        </p>
        <a className={contactOutline} href="#project-form">
          Start a conversation <ArrowRight size={16} />
        </a>
      </div>
      <div
        className="min-h-[490px] bg-[url('/assets/00-Furniture-Hero.avif')] bg-cover bg-center max-[800px]:min-h-[250px]"
        role="img"
        aria-label="Warm timber interior with architectural surfaces"
      />
    </section>
  );
}
