import HeroSection from "./components/HeroSection";
import RenownedSection from "./components/Renownedsection";
import ProgramsSection from "./components/ProgramsSection";
import AchievementsSection from "./components/AchievementsSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import LocationSection from "./components/location";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#f8fafc]">
      <HeroSection />
      <RenownedSection />
      <ProgramsSection />
      {/* <AchievementsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection /> */}
      <LocationSection />
      
    </main>
  );
}
