import React from "react";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { FooterSection } from "@/components/FooterSection/FooterSection";
import { HeaderSection } from "@/components/HeaderSection/HeaderSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ProgressTrackingSection } from "@/components/ProgressTrackingSection/ProgressTrackingSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return (
      <div className="bg-[#f7f7f7] flex flex-col items-center w-full">
        <div className="bg-[#f7f7f7] w-full max-w-[1440px] container">
          <HeaderSection />
          <HeroSection />
          <FeaturesSection />
          <ServicesSection />
          <TestimonialsSection />
          <ProgressTrackingSection />
        </div>
        <FooterSection />
      </div>
  );
}