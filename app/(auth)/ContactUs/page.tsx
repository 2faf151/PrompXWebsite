"use client";

import Head from "next/head";
import { useState } from "react";

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
      </Head>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
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
        <div className="mt-6">
          <button
            type="submit"
            className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
}
