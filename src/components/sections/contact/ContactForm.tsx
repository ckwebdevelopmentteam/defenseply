"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { contactSubmit } from "./ContactUI";
const fieldClass =
  "block mt-[7px] w-full rounded-none border border-contact-line bg-transparent px-[11px] py-2.5 text-xs text-contact-ink focus:border-contact-ink max-[520px]:px-[9px] max-[520px]:py-2 max-[520px]:text-[11px]";
const labelClass =
  "mb-[15px] block text-[11px] text-contact-ink max-[520px]:mb-[11px] max-[520px]:text-[10px]";
export function ContactForm({ context }: { context?: string } = {}) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="bg-[#f8f7f4] px-[clamp(24px,6vw,92px)] py-[clamp(48px,6vw,86px)] max-[520px]:px-[22px] max-[520px]:py-[34px]"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      {context && <input type="hidden" name="application" value={context} />}
      <div className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
        <label className={labelClass}>
          Your name <span className="text-[#9a6d00]">*</span>
          <input
            className={fieldClass}
            name="name"
            required
            placeholder="Enter your name"
          />
        </label>
        <label className={labelClass}>
          Email address <span className="text-[#9a6d00]">*</span>
          <input
            className={fieldClass}
            name="email"
            required
            type="email"
            placeholder="Enter your email"
          />
        </label>
      </div>
      <label className={labelClass}>
        Phone number <span className="text-[#9a6d00]">*</span>
        <input
          className={fieldClass}
          name="phone"
          required
          type="tel"
          placeholder="Enter your phone number"
        />
      </label>
      <fieldset className="mt-0.5 mb-[19px]">
        <legend className={labelClass}>I am a</legend>
        <div className="flex flex-wrap gap-[18px] max-[520px]:gap-[11px]">
          {["Homeowner", "Architect / Designer", "Contractor", "Dealer"].map(
            (role) => (
              <label
                key={role}
                className="flex items-center gap-[7px] whitespace-nowrap text-[11px] max-[520px]:text-[10px]"
              >
                <input
                  className="accent-contact-ink"
                  name="role"
                  required
                  type="radio"
                  value={role}
                />
                {role}
              </label>
            ),
          )}
        </div>
      </fieldset>
      <label className={labelClass}>
        Project type
        <select className={fieldClass} name="project-type" defaultValue="">
          <option value="" disabled>
            Select project type
          </option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Furniture &amp; fit-outs</option>
          <option>Other</option>
        </select>
      </label>
      <label className={labelClass}>
        Tell us about your requirement
        <textarea
          className={cn(fieldClass, "resize-y")}
          name="message"
          placeholder="Write your message here..."
          rows={4}
        />
      </label>
      <button className={cn(contactSubmit, "mt-0.5! w-full")} type="submit">
        {submitted ? "Thank you" : "Send enquiry"}
        <ArrowRight size={17} />
      </button>
      {submitted && (
        <p className="mt-[15px] text-xs text-[#4c6b42]" role="status">
          This preview is not connected to an enquiry service. Your details have
          not been sent.
        </p>
      )}
    </form>
  );
}
