"use client";
import { useState } from "react";
export function FooterNewsletter() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <section
      className="relative overflow-hidden rounded-sm bg-[#3c3b37] px-8 pt-[58px] pb-15 text-center text-white max-[760px]:px-4 max-[760px]:pt-[34px] max-[760px]:pb-9"
      aria-labelledby="footer-newsletter-title"
    >
      <span
        className="absolute -top-30 -left-[50px] size-[170px] rounded-full border-[3px] border-footer-accent/38"
        aria-hidden="true"
      />
      <span
        className="absolute -right-[54px] -bottom-30 size-[170px] rounded-full border-[3px] border-footer-accent/38"
        aria-hidden="true"
      />
      <h2
        className="relative z-10 text-[clamp(28px,4vw,42px)] leading-[1.1] font-light max-[760px]:text-[25px]"
        id="footer-newsletter-title"
      >
        Subscribe to our newsletter
      </h2>
      <form
        className="relative z-10 mx-auto mt-9 grid grid-cols-[minmax(120px,205px)_minmax(160px,205px)_195px] justify-center gap-2.5 max-[760px]:mt-6 max-[760px]:max-w-[310px] max-[760px]:grid-cols-1 max-[760px]:gap-[7px]"
        onSubmit={(event) => {
          event.preventDefault();
          setSubscribed(true);
        }}
      >
        <label className="sr-only" htmlFor="footer-first-name">
          First name
        </label>
        <input
          className="min-h-[46px] min-w-0 rounded-xs border border-white/65 bg-transparent px-3.5 text-xs text-white placeholder:text-white/80 focus:border-footer-accent max-[760px]:min-h-10 max-[760px]:text-[11px]"
          id="footer-first-name"
          name="firstName"
          placeholder="First name"
          required
        />
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <input
          className="min-h-[46px] min-w-0 rounded-xs border border-white/65 bg-transparent px-3.5 text-xs text-white placeholder:text-white/80 focus:border-footer-accent max-[760px]:min-h-10 max-[760px]:text-[11px]"
          id="footer-email"
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
        <button
          className="min-h-[46px] rounded-xs border border-footer-accent bg-footer-accent px-3.5 text-xs uppercase text-[#1b1b1b] hover:bg-[#e5d35f] max-[760px]:min-h-10 max-[760px]:text-[11px]"
          type="submit"
        >
          {subscribed ? "Thank you" : "Subscribe now"}
        </button>
      </form>
      {subscribed && (
        <p className="relative mt-3 text-xs" role="status">
          This preview is not connected to a mailing service. Your details have
          not been sent.
        </p>
      )}
    </section>
  );
}
