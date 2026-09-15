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
    <form
      className="bg-[#fbfbf9] border border-[#ebe8e2] p-[34px] rounded flex flex-col gap-[18px] max-[860px]:p-6 max-[860px]:px-5 max-sm:py-4 max-sm:px-3.5 max-sm:gap-3.5"
      onSubmit={handleSubmit}
    >
      {submitted ? (
        <div className="p-4 bg-[#e8f5ed] border border-[#c2e2cc] rounded-[3px] text-[#125432] text-sm text-center" role="status">
          <CheckCircle2 size={24} className="mx-auto mb-2 block" />
          <strong>Thank you for your interest!</strong>
          <p className="mt-1.5 text-[13px]">
            Our technical specification team will contact you shortly regarding{" "}
            <strong>{productTitle}</strong>.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1 max-sm:gap-3.5">
            <label className="flex flex-col gap-1.5 text-[11px] font-medium text-[#3b3937] uppercase tracking-[0.8px] font-sans">
              Full Name *
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. John Doe"
                className="w-full py-3 px-3.5 bg-white border border-[#dcd7ce] rounded-[3px] text-sm text-[#1a1a1a] outline-none transition-colors duration-200 focus:border-[#1a1a1a] box-border"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[11px] font-medium text-[#3b3937] uppercase tracking-[0.8px] font-sans">
              Phone Number *
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 98765 43210"
                className="w-full py-3 px-3.5 bg-white border border-[#dcd7ce] rounded-[3px] text-sm text-[#1a1a1a] outline-none transition-colors duration-200 focus:border-[#1a1a1a] box-border"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1 max-sm:gap-3.5">
            <label className="flex flex-col gap-1.5 text-[11px] font-medium text-[#3b3937] uppercase tracking-[0.8px] font-sans">
              Email Address *
              <input
                type="email"
                name="email"
                required
                placeholder="name@company.com"
                className="w-full py-3 px-3.5 bg-white border border-[#dcd7ce] rounded-[3px] text-sm text-[#1a1a1a] outline-none transition-colors duration-200 focus:border-[#1a1a1a] box-border"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[11px] font-medium text-[#3b3937] uppercase tracking-[0.8px] font-sans">
              Your Profession / Role
              <select
                name="role"
                defaultValue="Architect / Interior Designer"
                className="w-full py-3 px-3.5 bg-white border border-[#dcd7ce] rounded-[3px] text-sm text-[#1a1a1a] outline-none transition-colors duration-200 focus:border-[#1a1a1a] box-border cursor-pointer"
              >
                <option>Architect / Interior Designer</option>
                <option>Builder / Developer</option>
                <option>Contractor / Carpenter</option>
                <option>Dealer / Distributor</option>
                <option>Homeowner</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1 max-sm:gap-3.5">
            <label className="flex flex-col gap-1.5 text-[11px] font-medium text-[#3b3937] uppercase tracking-[0.8px] font-sans">
              Product Selected
              <input
                type="text"
                name="product"
                value={productTitle}
                readOnly
                className="w-full py-3 px-3.5 bg-[#f0ede8] text-[#555] border border-[#dcd7ce] rounded-[3px] text-sm outline-none box-border cursor-not-allowed"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[11px] font-medium text-[#3b3937] uppercase tracking-[0.8px] font-sans">
              Estimated Quantity / Thickness
              <input
                type="text"
                name="quantity"
                placeholder="e.g. 100 boards, 18mm"
                className="w-full py-3 px-3.5 bg-white border border-[#dcd7ce] rounded-[3px] text-sm text-[#1a1a1a] outline-none transition-colors duration-200 focus:border-[#1a1a1a] box-border"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-[11px] font-medium text-[#3b3937] uppercase tracking-[0.8px] font-sans">
            Project Location & Requirements
            <textarea
              name="message"
              rows={3}
              placeholder={`Tell us about your project or specific dimensions needed for ${productTitle}...`}
              className="w-full py-3 px-3.5 bg-white border border-[#dcd7ce] rounded-[3px] text-sm text-[#1a1a1a] outline-none transition-colors duration-200 focus:border-[#1a1a1a] box-border resize-y"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#1a1a1a] text-white text-xs tracking-[1.2px] uppercase font-medium font-sans py-[15px] px-7 rounded-[2px] transition-all duration-200 border border-[#1a1a1a] hover:bg-[#333333] hover:-translate-y-0.5 max-sm:py-[13px] max-sm:px-[18px] max-sm:text-[11px] disabled:opacity-50 disabled:cursor-wait cursor-pointer"
          >
            {loading ? "Submitting Inquiry..." : "Submit Technical Inquiry"}
            <ArrowRight size={16} />
          </button>
        </>
      )}
    </form>
  );
}
