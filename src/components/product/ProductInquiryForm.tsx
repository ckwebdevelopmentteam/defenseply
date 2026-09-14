"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductInquiryFormProps {
  productTitle: string;
}

export function ProductInquiryForm({ productTitle }: ProductInquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <form className="product-inquiry__form" onSubmit={handleSubmit}>
      {submitted ? (
        <div className="inquiry-success-msg" role="status">
          <CheckCircle2 size={24} style={{ margin: "0 auto 8px auto", display: "block" }} />
          <strong>Thank you for your interest!</strong>
          <p style={{ margin: "6px 0 0 0", fontSize: "13px" }}>
            Our technical specification team will contact you shortly regarding{" "}
            <strong>{productTitle}</strong>.
          </p>
        </div>
      ) : (
        <>
          <div className="form-group-row">
            <label>
              Full Name *
              <input type="text" name="name" required placeholder="e.g. John Doe" />
            </label>
            <label>
              Phone Number *
              <input type="tel" name="phone" required placeholder="+91 98765 43210" />
            </label>
          </div>

          <div className="form-group-row">
            <label>
              Email Address *
              <input type="email" name="email" required placeholder="name@company.com" />
            </label>
            <label>
              Your Profession / Role
              <select name="role" defaultValue="Architect / Interior Designer">
                <option>Architect / Interior Designer</option>
                <option>Builder / Developer</option>
                <option>Contractor / Carpenter</option>
                <option>Dealer / Distributor</option>
                <option>Homeowner</option>
              </select>
            </label>
          </div>

          <div className="form-group-row">
            <label>
              Product Selected
              <input
                type="text"
                name="product"
                value={productTitle}
                readOnly
                style={{ backgroundColor: "#f0ede8", color: "#555" }}
              />
            </label>
            <label>
              Estimated Quantity / Thickness
              <input type="text" name="quantity" placeholder="e.g. 100 boards, 18mm" />
            </label>
          </div>

          <label>
            Project Location & Requirements
            <textarea
              name="message"
              rows={3}
              placeholder={`Tell us about your project or specific dimensions needed for ${productTitle}...`}
            />
          </label>

          <button
            type="submit"
            className="btn-primary-defense"
            disabled={loading}
            style={{ width: "100%", cursor: loading ? "wait" : "pointer" }}
          >
            {loading ? "Submitting Inquiry..." : "Submit Technical Inquiry"}
            <ArrowRight size={16} />
          </button>
        </>
      )}
    </form>
  );
}
