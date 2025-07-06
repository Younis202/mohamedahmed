import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSectio";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseMeSection from "@/components/sections/WhyChooseMeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <WhyChooseMeSection />
      <SkillsSection />
      <ProcessSection />
    </main>
  );
}