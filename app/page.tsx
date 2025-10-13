import Image from "next/image";
import HeroSection from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PremiumQualitySection from "@/components/PremiumQualitySection";
import CollectionSection from "@/components/Collection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <HeroSection />
      <FeaturesSection />
      <PremiumQualitySection />
      <CollectionSection />
      <Footer />
    </main>
  );
}
