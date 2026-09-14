"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main className="contact-page" id="main-content">
        <section className="contact-intro">
          <div className="contact-copy contact-copy--intro">
            <p className="contact-eyebrow">Contact us</p>
            <h1>Let&apos;s build something strong.</h1>
            <p className="contact-lede">
              Whether you&apos;re planning a residential project, commercial space,
              or looking for reliable plywood solutions, our team is ready to
              help.
            </p>
            <a className="contact-outline-link" href="#project-form">
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>
          <div
            className="contact-image contact-image--hero"
            role="img"
            aria-label="Warm timber interior with architectural surfaces"
          />
        </section>

        <section className="contact-form-section" id="project-form">
          <div className="contact-copy contact-copy--project">
            <p className="contact-eyebrow">Get in touch</p>
            <h2>Tell us about your project.</h2>
            <p className="contact-lede">
              Share your requirements with us and our team will get back to you
              with the right solution.
            </p>
            <ul className="contact-project-types">
              <li>Homes</li>
              <li>Commercial spaces</li>
              <li>Interiors</li>
              <li>Furniture &amp; fit-outs</li>
            </ul>
          </div>
          <form
            className="project-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="form-grid form-grid--two">
              <label>
                Your name <span>*</span>
                <input name="name" required placeholder="Enter your name" />
              </label>
              <label>
                Email address <span>*</span>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <label>
              Phone number <span>*</span>
              <input name="phone" required type="tel" placeholder="Enter your phone number" />
            </label>
            <fieldset>
              <legend>I am a</legend>
              <div className="radio-row">
                {[
                  "Homeowner",
                  "Architect / Designer",
                  "Contractor",
                  "Dealer",
                ].map((role) => (
                  <label key={role}>
                    <input name="role" required type="radio" value={role} />
                    {role}
                  </label>
                ))}
              </div>
            </fieldset>
            <label>
              Project type
              <select name="project-type" defaultValue="">
                <option value="" disabled>
                  Select project type
                </option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Furniture &amp; fit-outs</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Tell us about your requirement
              <textarea name="message" placeholder="Write your message here..." rows={4} />
            </label>
            <button className="contact-submit" type="submit">
              {submitted ? "Enquiry received" : "Send enquiry"}
              <ArrowRight size={17} />
            </button>
            {submitted && (
              <p className="form-success" role="status">
                Thanks. Our team will be in touch shortly.
              </p>
            )}
          </form>
        </section>

        <section className="direct-contact" aria-label="Direct contact details">
          <div className="contact-copy contact-copy--direct">
            <p className="contact-eyebrow">Direct contact</p>
            <h2>Have a project in mind?</h2>
            <p>Let&apos;s talk about the right plywood for your space.</p>
          </div>
          <div className="contact-details">
            <a href="tel:+919876543210">
              <Phone size={25} />
              <span><small>Call us</small>+91 98765 43210</span>
            </a>
            <a href="mailto:info@defenseply.com">
              <Mail size={25} />
              <span><small>Email</small>info@defenseply.com</span>
            </a>
            <a href="https://wa.me/919876543210">
              <MessageCircle size={25} />
              <span><small>WhatsApp</small>Chat with us</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section className="visit-section">
          <div className="contact-image contact-image--showroom" role="img" aria-label="Defenseply manufacturing facility" />
          <div className="contact-copy contact-copy--visit">
            <p className="contact-eyebrow">Visit us</p>
            <h2>Come visit us</h2>
            <p>Our team and manufacturing facility are ready to welcome you.</p>
            <address>
              <MapPin size={20} />
              Defenseply Plywood<br />
              Industrial Area, Kerala, India
            </address>
            <a className="contact-outline-link" href="https://maps.google.com/?q=Kerala,India">
              Get directions <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="contact-final-cta">
          <div>
            <p className="contact-eyebrow">The next step</p>
            <h2>Build with confidence.</h2>
            <p>Choose plywood engineered for strength, durability and lasting performance.</p>
          </div>
          <a className="contact-submit" href="#project-form">
            Request a quote <ArrowRight size={17} />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}