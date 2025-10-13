import Image from "next/image";
import HeroSection from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PremiumQualitySection from "@/components/PremiumQualitySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <HeroSection />
      <FeaturesSection />
      <PremiumQualitySection />
    </main>
  );
}
