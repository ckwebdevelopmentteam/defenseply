"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import faqData from "@/data/faq.json";

export function FAQ({ items = faqData }: { items?: typeof faqData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      data-section="faq"
      id="faq"
      className="mt-44 mb-20 max-phone:mt-0 max-phone:mb-8 max-md:mt-0 max-md:mb-8"
      aria-label="Frequently Asked Questions"
    >
      <div className="grid grid-cols-[1fr_1.4fr] items-start gap-14 max-desktop:grid-cols-1 max-desktop:gap-8 max-phone:gap-3">
        {/* Left Column: Heading & Support Callout */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col items-start max-phone:items-center max-phone:text-center">
            <h2 className="text-display font-semibold uppercase antialiased tracking-tight text-ink mb-3 max-phone:mb-2 text-left max-phone:text-center">
              FAQ&apos;s
            </h2>
            <p className="max-w-[460px] text-fluid font-light leading-[1.6] text-[#55534e] text-left max-phone:text-center mx-0 max-phone:mx-auto max-sm:text-[13.5px] max-sm:leading-[1.35] max-phone:text-[13px] max-phone:leading-[1.35] max-phone:max-w-[340px] mb-8 max-phone:mb-3">
              Everything you need to know about specifying, machining, and
              installing Defenseply cellular composite boards and profiles.
            </p>
          </div>

          {/* Quick Technical Help Box */}
          <div className="rounded-[2px] border border-black/8 bg-[#fafaf8] p-7 max-phone:hidden max-md:hidden">
            <h4 className="mb-2 text-[15px] font-medium uppercase tracking-[0.5px] text-[#1a1a1a]">
              Have a Custom Architectural Spec?
            </h4>
            <p className="mb-5 text-[13.5px] leading-[1.6] text-[#6d6b67]">
              Our engineering and specification team at the Kuttippuram
              manufacturing facility provides calibrated thickness samples and
              technical data sheets.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact-us#project-form"
                className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#1c3f21] px-5 py-3 text-[12px] font-medium tracking-[1px] uppercase text-white transition-colors hover:bg-[#15321a]"
              >
                Inquire Directly <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/919605170000?text=Hi%20Defenseply%20team,%20I%20have%20a%20technical%20question%20about%20your%20boards"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[#25d366] bg-transparent px-4 py-3 text-[12px] font-medium tracking-[0.8px] uppercase text-[#15803d] transition-colors hover:bg-[#25d366] hover:text-white"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="flex flex-col divide-y divide-black/10 border-t border-b border-black/10">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-opacity hover:opacity-85"
                >
                  <span className="text-[17px] font-normal leading-[1.35] tracking-[0.2px] text-[#1a1a1a] max-phone:text-[15px]">
                    {item.question}
                  </span>
                  <motion.span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? "bg-[#1c3f21] text-white border-[#1c3f21]" : "border-black/10 bg-white text-ink"}`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.35,
                            delay: 0.08,
                            ease: "easeOut",
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.2,
                            ease: "easeIn",
                          },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -6, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="pt-1 pb-6 text-[14.5px] leading-[1.75] text-[#555] max-phone:text-[13.5px]"
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
