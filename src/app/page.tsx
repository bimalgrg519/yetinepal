import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import SocialIcon from "@/components/social-icons";
import Link from "next/link";

const socials = [
  {
    icon: <SocialIcon size={24} kind="instagram" />,
    href: "https://www.instagram.com/yetinepal_/",
  },
  {
    icon: <SocialIcon size={24} kind="facebook" />,
    href: "https://www.facebook.com/theyetinepal",
  },
  {
    icon: <SocialIcon size={24} kind="tiktok" />,
    href: "https://www.tiktok.com/@yeti.nepal",
  },
];

const Index = () => {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <div className="flex space-x-3 justify-center">
        {socials.map((s) => (
          <Link
            key={s.href}
            className="border w-9 h-9 flex items-center justify-center border-gray-600 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            href={s.href}
          >
            <span>{s.icon}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Index;
