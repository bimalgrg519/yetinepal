"use client";
import Image from "next/image";
import Link from "next/link";
import { WatchTutorialButton } from "./WatchTutorialButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";

const menus = [
  {
    title: "Courses",
    href: "/#courses",
  },
  {
    title: "Our Work",
    href: "/#work",
  },
  {
    title: "Careers",
    href: "/#careers",
  },
  {
    title: "Members",
    href: "/#members",
  },
  // {
  //   title: "1-on-1 Mentorship",
  //   href: "/1-on-1-mentorship",
  // },
  // {
  //   title: "Our Students",
  //   href: "/our-students",
  // },
  // {
  //   title: "Hiring",
  //   href: "/hiring",
  // },
  // {
  //   title: "Internships",
  //   href: "/internships",
  // },
  // {
  //   title: "Contact",
  //   href: "/contact",
  // },
];

const MenuItem = ({ onClick }: { onClick?: () => void }) => {
  return menus.map((m) => (
    <Link
      key={m.href}
      href={m.href}
      className="text-gray-300 leading-6 text-xs font-medium hover:text-primary transition-colors"
      onClick={onClick}
    >
      {m.title}
    </Link>
  ));
};

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-6" id="navigation">
      <div className="grid h-32 items-center grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:flex flex-col md:col-start-1 md:justify-self-start">
          <MenuItem />
        </div>
        <Link
          href="/"
          className="col-start-1 justify-self-start md:col-start-2 md:justify-self-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-[60px] md:h-[60px]"
          />
        </Link>
        <div className="hidden md:block justify-self-end md:col-start-3">
          <WatchTutorialButton />
        </div>
        <div className="md:hidden justify-self-end col-start-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M3 7H21"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M3 17H21"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center pt-12 space-y-4">
              <VisuallyHidden>
                <SheetTitle>Menu items</SheetTitle>
              </VisuallyHidden>
              <MenuItem onClick={() => setOpen(false)} />
              <WatchTutorialButton />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
