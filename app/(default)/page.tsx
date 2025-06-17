export const metadata = {
  title: "Home - PrompX",
  description: "PrompX offers local LLMs and RAG-driven AI solutions for data, audio, and image analysis.",
  keywords: "PrompX, AI, local LLMs, data analytics, RAG, manufacturing quality",
};



import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import CalendlyBadgeWidget from "@/components/CalendlyBadgeWidget";

export default function Home() {
  return (
    <>
      <CalendlyBadgeWidget
        url="https://calendly.com/withprompx/30min"
        text="Schedule Your Demo"
        color="#0f172a"
        textColor="#ffffff"
      />
      <Hero />
      <BusinessCategories />
      <div className="mx-auto max-w-6xl">
        <GlowingEffectDemo />
      </div>
      <LargeTestimonial />
      <Cta />
    </>
  );
}

