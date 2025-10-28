import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import TechStackMarquee from "@/components/TechStackMarquee";
import ServicesSection from "@/components/ServicesSection";
import MembersSection from "@/components/MembersSection";
import CareersSection from "@/components/CareersSection";
import OurWorkSection from "@/components/OurWorkSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <TechStackMarquee />
      <ServicesSection />
      <OurWorkSection />
      <CoursesSection />
      <MembersSection />
      <CareersSection />
    </>
  );
};

export default Index;
