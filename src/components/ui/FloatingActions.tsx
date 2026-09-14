"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useNavigationState } from "@/components/layout/NavigationState";
import { cn } from "@/lib/cn";
export function FloatingActions() {
  const { scrolled, mobileOpen } = useNavigationState();
  const [chat, setChat] = useState(false);
  const [promptDismissed, setPromptDismissed] = useState(false);
  return (
    <>
      <a
        data-testid="quote-banner"
        className={cn(
          "fixed top-[40%] right-0 z-[900] flex h-16 w-[289px] items-center justify-center gap-2.5 rounded-l bg-quote px-[30px] py-[19px] text-base leading-[22px] font-medium text-[#131313] shadow-[0_1px_5px_#0003] max-desktop:left-0 max-desktop:h-[41px] max-desktop:w-full max-desktop:rounded-none max-desktop:px-4 max-desktop:py-2 max-desktop:leading-6",
          scrolled ? "max-desktop:top-12" : "max-desktop:top-[72px]",
          mobileOpen && "max-desktop:hidden",
        )}
        href="#"
      >
        Request a quote{" "}
        <img
          src="/assets/Arrow_circle-Copy.avif"
          alt=""
          width="24"
          height="24"
        />
      </a>
      <div className="fixed right-5 bottom-5 z-[950] flex flex-col items-end gap-5 max-phone:gap-3">
        {chat ? (
          <section
            className="w-[340px] overflow-hidden rounded-lg bg-white text-[#333] shadow-[0_10px_45px_#0003] max-phone:w-[min(340px,calc(100vw-32px))]"
            aria-label="Cosentino help"
          >
            <header className="flex justify-between bg-black p-5 text-white">
              Cosentino{" "}
              <button aria-label="Close help" onClick={() => setChat(false)}>
                <X size={19} />
              </button>
            </header>
            <p className="px-5 pt-5">How can we help you?</p>
            <a className="mx-5 my-3 block border border-[#ddd] p-3" href="#">
              Contact us
            </a>
            <a className="mx-5 my-3 block border border-[#ddd] p-3" href="#">
              Find a showroom
            </a>
            <a className="mx-5 my-3 block border border-[#ddd] p-3" href="#">
              Request a quote
            </a>
          </section>
        ) : !promptDismissed ? (
          <div className="relative">
            <button
              className="rounded-md bg-white px-5 py-[18px] font-[Arial,sans-serif] text-sm leading-4 text-[#111] shadow-[0_4px_24px_#0001] max-phone:text-xs"
              onClick={() => setChat(true)}
            >
              Can we help you?
            </button>
            <button
              type="button"
              className="absolute -top-2.5 -right-2.5 flex size-6 items-center justify-center rounded-full border-2 border-white bg-ink text-white"
              aria-label="Dismiss help prompt"
              onClick={() => setPromptDismissed(true)}
            >
              <X size={12} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        ) : null}
        <button
          className="flex size-15 items-center justify-center rounded-full bg-black text-white max-phone:size-[50px]"
          aria-label={chat ? "Close chat" : "Open chat"}
          aria-expanded={chat}
          onClick={() => setChat(!chat)}
        >
          {chat ? (
            <X />
          ) : (
            <span
              aria-hidden="true"
              className="size-7 bg-white [clip-path:polygon(5%_0,91%_0,84%_30%,39%_30%,39%_68%,91%_68%,85%_100%,5%_100%)]"
            />
          )}
        </button>
      </div>
    </>
  );
}
