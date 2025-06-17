"use client";

import { useState, useEffect } from "react";
import { Mail, Users, Briefcase, Star, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function ContactQuality() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "Sales",
    message: ""
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendEmail = () => {
    setIsLoading(true);

    const mailto = `mailto:argon@prompx.com?subject=${encodeURIComponent(
      formData.category
    )}&body=${encodeURIComponent(formData.message)}`;

    setTimeout(() => {
      setIsLoading(false);
      window.location.href = mailto;
    }, 3000);
  };

  const categoryIcons = {
    Sales: Mail,
    Partnership: Users,
    Careers: Briefcase
  };

  const features = [
    "24/7 Expert Support",
    "Custom Solutions",
    "Rapid Implementation",
    "Enterprise Security"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-500 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <header className={`container mx-auto px-6 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>


          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-black to-blue-900 text-transparent bg-clip-text leading-tight">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-transparent bg-clip-text">
              Extraordinary
            </span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto mb-12 text-gray-700 leading-relaxed">
            Transform your vision into reality with our cutting-edge quality inspection solutions.
            Let's discuss how we can elevate your business.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature}
                className={`px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm text-gray-700 transition-all duration-500 hover:bg-blue-50 hover:border-blue-200 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 inline mr-2 text-blue-600" />
                {feature}
              </div>
            ))}
          </div>
        </header>

        {/* Form Section */}
        <main className={`container mx-auto px-6 pb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Ready to Get Started?</h2>
                <p className="text-blue-100">Choose your path and let's begin the conversation.</p>
              </div>

              <div className="p-8 space-y-8">
                {/* Category Selection */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    How can we help you today?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(categoryIcons).map(([category, Icon]) => (
                      <label
                        key={category}
                        className={`relative cursor-pointer group transition-all duration-300 ${formData.category === category
                          ? 'scale-105'
                          : 'hover:scale-102'
                          }`}
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={formData.category === category}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${formData.category === category
                          ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                          }`}>
                          <Icon className={`w-8 h-8 mb-3 transition-colors duration-300 ${formData.category === category ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'
                            }`} />
                          <h3 className={`font-semibold text-lg transition-colors duration-300 ${formData.category === category ? 'text-blue-700' : 'text-gray-900'
                            }`}>
                            {category}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {category === 'Sales' && 'Explore our solutions'}
                            {category === 'Partnership' && 'Collaborate with us'}
                            {category === 'Careers' && 'Join our team'}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-900" htmlFor="message">
                    Tell us about your project
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full py-4 px-6 rounded-2xl bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Describe your requirements, timeline, and any specific challenges you're facing..."
                      rows={6}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 space-y-4">
                  <button
                    onClick={handleSendEmail}
                    className="group relative w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none overflow-hidden"
                    disabled={isLoading}
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button content */}
                    <div className="relative flex items-center justify-center gap-3">
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Preparing Your Demo...</span>
                        </>
                      ) : (
                        <>

                          <span>Schedule Your Demo</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-pulse group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </button>

                  {/* Calendly Button */}
                  <a
                    href="https://calendly.com/withprompx/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full py-4 px-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-slate-900 hover:to-slate-800 hover:shadow-2xl hover:shadow-slate-500/25 flex items-center justify-center gap-3"
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

                {/* Trust indicators */}
                <div className="pt-6 text-center">
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}