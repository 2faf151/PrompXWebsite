"use client";

import Head from "next/head";
import { useState } from "react";
import CalendlyBadgeWidget from '@/components/CalendlyBadgeWidget';
export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const category = form.category.value;
    const message = form.message.value;
    const mailto = `mailto:argon@prompx.com?subject=${encodeURIComponent(
      category
    )}&body=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsLoading(false);
      window.location.href = mailto;
    }, 5000); // 5 seconds delay
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
        <meta
          name="keywords"
          content="PrompX, AI solutions, local LLMs, data analytics, RAG technology, contact"
        />
      </Head>
      <div className="mb-10">

        <CalendlyBadgeWidget
          url="https://calendly.com/withprompx/30min"
          text=""
          color="000000"  // Changed to match dark theme
          textColor="000000"
          hideOnMobile={true}
        />
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <h2 className="text-xl text-gray-700">
          Reach out for secure, efficient AI data insights
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSendEmail}>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="form-select w-full py-2"
              required
            >
              <option value="Sales">Sales</option>
              <option value="Partnership">Partnership</option>
              <option value="Careers">Careers</option>
            </select>
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea w-full py-2"
              placeholder="Write your message here..."
              rows={5}
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <button
            type="submit"
            className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>

          {/* Calendly Button */}
          <a
            href="https://calendly.com/withprompx/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full py-4 px-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:from-slate-900 hover:to-slate-800 hover:shadow-2xl hover:shadow-slate-500/25 flex items-center justify-center gap-3"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Schedule with Calendly</span>
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-pulse group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </a>
        </div>
      </form>
    </>
  );
}
