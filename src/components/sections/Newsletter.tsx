"use client";
import { useState } from "react";
import { Heading } from "@/components/ui/Heading";
import { ArrowIcon } from "@/components/ui/ActionLink";
const fieldClass =
  "h-12 w-full border-0 bg-aqua px-[17.6px] py-[12.608px] text-base";
export function Newsletter() {
  const [profile, setProfile] = useState(""),
    [message, setMessage] = useState("");
  return (
    <div className="py-20 max-phone:py-12" id="contact" data-section="newsletter">
      <section
        className="flex min-h-[366px] bg-stone max-[1139px]:flex-col max-phone:page-bleed"
        aria-labelledby="newsletter-title"
      >
        <div className="flex-[1_1_22%] py-12 pl-[38px] max-[1499px]:basis-[30%] max-[1139px]:px-[38px] max-[1139px]:pb-0">
          <div className="flex flex-col gap-4">
            <Heading
              className="max-w-[80%] max-phone:max-w-full"
              id="newsletter-title"
            >
              Get inspired with our newsletter
            </Heading>
            <p className="text-fluid max-phone:hidden">
              Discover innovative projects, unique colors and the latest news
              and trends
            </p>
          </div>
        </div>
        <div className="flex-[1_1_45%] px-[38px] py-12 max-[1499px]:basis-[70%] max-[1139px]:pt-0 max-phone:px-6">
          <form
            className="flex flex-col gap-4 max-phone:pt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setMessage(
                "This preview is not connected to a mailing service. Your details have not been sent.",
              );
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              className={fieldClass}
              required
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
            />
            <fieldset className="flex gap-4 max-phone:gap-2">
              <legend className="sr-only">Profile</legend>
              {["homeowner", "professional"].map((p) => (
                <label
                  key={p}
                  className="flex min-h-14 flex-1 items-center gap-4 bg-aqua px-6 py-3.5 text-sm max-phone:gap-2 max-phone:px-2.5 max-phone:text-xs"
                >
                  <input
                    className="size-4 accent-ink"
                    name="profile"
                    type="radio"
                    required
                    value={p}
                    checked={profile === p}
                    onChange={() => setProfile(p)}
                  />{" "}
                  I am a {p}
                </label>
              ))}
            </fieldset>
            {profile === "professional" && (
              <>
                <label className="sr-only" htmlFor="profession">
                  Select your profile
                </label>
                <select
                  className={fieldClass}
                  id="profession"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your profile
                  </option>
                  {[
                    "Architect",
                    "Builder",
                    "Interior Designer",
                    "Fabricator",
                    "Kitchen and bathroom shops",
                    "Installer",
                    "Promoter",
                  ].map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </>
            )}
            <label className="flex items-start gap-2 text-[10px] leading-[16.4px]">
              <input
                className="size-4 shrink-0 accent-ink"
                type="checkbox"
                required
              />
              <span>
                I agree to receive product updates and project inspiration from
                DefensePly International LLP.
              </span>
            </label>
            <button
              type="submit"
              className="flex h-[45px] w-full items-center justify-between gap-2.5 border border-ink bg-ink px-[23px] py-[11px] text-sm text-white transition-colors hover:border-[#c3ffff] hover:bg-[#c3ffff] hover:text-ink"
            >
              I want to subscribe <ArrowIcon className="h-[17px] w-[18px]" />
            </button>
            {message && (
              <p role="status" className="text-sm">
                {message}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
