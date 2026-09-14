"use client";

import { useState } from "react";

const footerGroups = [
  {
    title: "Company",
    links: [
      ["About", "/#about"],
      ["Products", "/#product"],
      ["Projects", "/#gallery"],
      ["Contact us", "/contact-us"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Customer support", "/contact-us"],
      ["Delivery details", "/contact-us"],
      ["Terms & conditions", "/contact-us"],
      ["Privacy policy", "/contact-us"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Material guide", "/#product"],
      ["Project inspiration", "/#gallery"],
      ["Design journal", "/#gallery"],
      ["Visit our showroom", "/contact-us"],
    ],
  },
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <section className="footer-newsletter" aria-labelledby="footer-newsletter-title">
          <span className="footer-ring footer-ring--top" aria-hidden="true" />
          <span className="footer-ring footer-ring--bottom" aria-hidden="true" />
          <h2 id="footer-newsletter-title">Subscribe to our newsletter</h2>
          <form
            className="footer-newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
            }}
          >
            <label className="sr-only" htmlFor="footer-first-name">First name</label>
            <input id="footer-first-name" name="firstName" placeholder="First name" required />
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" name="email" type="email" placeholder="Email address" required />
            <button type="submit">{subscribed ? "You’re subscribed" : "Subscribe now"}</button>
          </form>
        </section>

        <div className="footer-content">
          <div className="footer-brand">
            <a href="/" aria-label="Defenseply home">
              <img src="/assets/defenseply-logo-dark.png" alt="Defenseply" />
            </a>
            <p>Reliable plywood solutions for spaces built with purpose.</p>
            <div className="footer-socials" aria-label="Social media">
              <a href="#contact" aria-label="Facebook"><img src="/assets/facebook-icon.svg" alt="" /></a>
              <a href="#contact" aria-label="Instagram"><img src="/assets/instagram-icon.svg" alt="" /></a>
              <a href="#contact" aria-label="LinkedIn"><img src="/assets/linkedin-icon.svg" alt="" /></a>
              <a href="#contact" aria-label="Twitter"><img src="/assets/twitter-icon.svg" alt="" /></a>
              <a href="#contact" aria-label="YouTube"><img src="/assets/youtube-icon.svg" alt="" /></a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav className="footer-links" aria-label={group.title} key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => (
                <a href={href} key={label}>{label}</a>
              ))}
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Defenseply. All rights reserved.</p>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
