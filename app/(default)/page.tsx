export const metadata = {
  title: "Home - PrompX",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <div className="mx-auto max-w-6xl"> {/* Added a container with max-width */}
        <GlowingEffectDemo />
      </div>
      <LargeTestimonial />
      <Cta />
    </>
  );
}
