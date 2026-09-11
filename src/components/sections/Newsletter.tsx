"use client";
import { useState } from "react";
export function Newsletter() {
  const [profile, setProfile] = useState(""),
    [message, setMessage] = useState("");
  return (
    <div className="p-60">
      <section
        className="core-cta-reducido core-cta-reducido__form"
        aria-labelledby="newsletter-title"
      >
        <div className="core-cta-reducido__text-col cta-text bg-gris-claro">
          <div className="core-cta-reducido__text-col__top">
            <h2 className="font-light" id="newsletter-title">
              Get inspired with our newsletter
            </h2>
            <p className="core-cta-reducido__text-col__bottom__text font-16">
              Discover innovative projects, unique colors and the latest news
              and trends
            </p>
          </div>
        </div>
        <div className="core-cta-reducido__form-col cta-text bg-gris-claro">
          <form
            className="replica-newsletter"
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
              required
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
            />
            <fieldset>
              <legend className="sr-only">Profile</legend>
              {["homeowner", "professional"].map((p) => (
                <label key={p}>
                  <input
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
                <select id="profession" required defaultValue="">
                  <option value="" disabled>
                    Select your profile
                  </option>
                  {[
                    "Architect",
                    "Builder",
                    "Designer",
                    "Fabricator",
                    "Kitchen & bath studio",
                    "Installer",
                    "Other",
                  ].map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </>
            )}
            <label className="consent">
              <input type="checkbox" required />
              <span>
                I agree to receive valuable content from Cosentino in the form
                of commercial emails. Cosentino Global is the owner of this
                data. Your data will be processed to keep you informed of our
                products and services. The legal basis for the processing is
                your consent.
              </span>
            </label>
            <button type="submit" className="btn btn-negro-azul">
              I want to subscribe <span className="arrow-link" />
            </button>
            {message && (
              <p role="status" className="form-status">
                {message}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
