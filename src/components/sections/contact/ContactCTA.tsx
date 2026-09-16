import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import {
  ContactEyebrow,
  contactHeading,
  contactLede,
  contactSubmit,
} from "./ContactUI";
export function ContactCTA() {
  return (
    <section className="flex min-h-[260px] items-center justify-between bg-[#27231f] bg-[url('/assets/00-Furniture-Hero.avif')] bg-cover bg-center bg-blend-multiply px-[clamp(24px,6.8vw,104px)] py-[52px] text-white max-[800px]:min-h-[210px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-[18px] max-[800px]:px-[22px] max-[800px]:py-[38px]">
      <div>
        <ContactEyebrow>The next step</ContactEyebrow>
        <h2
          className={cn(
            contactHeading,
            "text-[clamp(36px,4vw,60px)] max-[520px]:text-[36px]",
          )}
        >
          Build with confidence.
        </h2>
        <p className={cn(contactLede, "text-white/80")}>
          Choose WPC and PVC solutions engineered for strength, durability and lasting
          performance.
        </p>
      </div>
      <a className={cn(contactSubmit, "mt-0! shrink-0")} href="#project-form">
        Request a quote <ArrowRight size={17} />
      </a>
    </section>
  );
}
