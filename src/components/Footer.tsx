import Link from "next/link";
import SocialIcon from "@/components/social-icons";

const socials = [
  {
    icon: <SocialIcon size={20} kind="instagram" />,
    href: "https://www.instagram.com/bimalgrg519/",
    label: "Instagram",
  },
  {
    icon: <SocialIcon size={20} kind="facebook" />,
    href: "https://www.facebook.com/theyetinepal",
    label: "Facebook",
  },
  {
    icon: <SocialIcon size={20} kind="tiktok" />,
    href: "https://www.tiktok.com/@bimalgrg519",
    label: "TikTok",
  },
  {
    icon: <SocialIcon size={20} kind="youtube" />,
    href: "https://www.youtube.com/@theyetinepal",
    label: "YouTube",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#161618] border-t border-gray-800 px-6 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-400">
          © {year} Yeti Nepal. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="border w-8 h-8 flex items-center justify-center border-gray-600 rounded-full hover:border-gray-400 transition-colors"
            >
              <span>{s.icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
