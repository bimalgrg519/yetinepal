import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1b1b1f] text-white px-4">
      <Navigation />
      <main className="max-w-5xl mx-auto">
        <HeroSection />
        <CoursesSection />
      </main>
    </div>
  );
};

export default Index;
