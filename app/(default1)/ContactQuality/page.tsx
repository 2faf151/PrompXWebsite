"use client";

import Head from "next/head";
import { useState } from "react";

export default function ContactQuality() {
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
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <Head>
        <title>Contact Us - PrompX</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      {/* Header Section */}
      <header className="container mx-auto px-6 py-24 text-center animate-fade-in">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Get In Touch
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-400">
          Ready to transform your quality inspection process? Let's discuss how we can help.
        </p>
      </header>

      {/* Form Section */}
      <main className="container mx-auto px-6 py-16 bg-white/10 backdrop-blur-lg rounded-3xl -mt-12 text-white max-w-3xl border border-white/20">
        <form onSubmit={handleSendEmail} className="space-y-8">
          <div>
            <label className="mb-2 block text-lg font-semibold" htmlFor="category">
              How can we help?
            </label>
            <select
              id="category"
              name="category"
              className="w-full py-3 px-4 rounded-lg bg-black/50 border border-white/20 focus:border-white focus:ring-1 focus:ring-white transition-colors text-white"
              required
            >
              <option value="Sales">Sales Inquiry</option>
              <option value="Partnership">Partnership Opportunity</option>
              <option value="Careers">Join Our Team</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-lg font-semibold" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full py-3 px-4 rounded-lg bg-black/50 border border-white/20 focus:border-white focus:ring-1 focus:ring-white transition-colors text-white"
              placeholder="Tell us about your requirements..."
              rows={6}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Schedule Demo"
            )}
          </button>
        </form>
      </main>
    </div>
  );
}
