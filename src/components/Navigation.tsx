"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";

const menus = [
  {
    title: "1-on-1 Mentorship",
    href: "/1-on-1-mentorship",
  },
  {
    title: "Our Students",
    href: "/our-students",
  },
  {
    title: "Hiring",
    href: "/hiring",
  },
  {
    title: "Internships",
    href: "/internships",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const MenuItem = ({ onClick }: { onClick?: () => void }) => {
  return menus.map((m) => (
    <Link
      key={m.href}
      href={m.href}
      className="text-gray-300 font-semibold hover:text-white transition-colors"
      onClick={onClick}
    >
      {m.title}
    </Link>
  ));
};

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#161618] border-b border-gray-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <MenuItem />
          </div>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Menu className="text-white" size={40} strokeWidth={1} />
              </SheetTrigger>
              <SheetContent className="flex flex-col items-center pt-12 space-y-4">
                <VisuallyHidden>
                  <SheetTitle>Menu items</SheetTitle>
                </VisuallyHidden>
                <MenuItem onClick={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
