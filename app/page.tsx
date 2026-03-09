import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import AboutSection from "@/components/sections/AboutSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <FeaturedCollections />
      <AboutSection />
      <CtaSection />
    </>
  );
}
