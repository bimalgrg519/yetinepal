import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import TechStackMarquee from "@/components/TechStackMarquee";
import MembersSection from "@/components/MembersSection";
import CareersSection from "@/components/CareersSection";
import OurWorkSection from "@/components/OurWorkSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <TechStackMarquee />
      <MembersSection />
      <OurWorkSection />
      <CoursesSection />
      <CareersSection />
    </>
  );
};

export default Index;
