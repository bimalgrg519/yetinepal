"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* <img
                src="/lovable-uploads/022d8c0e-c6f3-455b-aff2-41442512a71f.png"
                alt="Bimal Gurung - Full-stack Developer"
                className="w-80 h-80 object-cover rounded-lg shadow-2xl"
              /> */}
        <Image
          src="/profile-pic.jpg"
          alt="Profile Pic"
          width={240}
          height={240}
          className="rounded-md shadow-2xl h-auto w-auto"
          priority={true}
        />

        <div className="">
          {/* <div className="lg:w-2/3 space-y-6"> */}
          <div className="space-y-4">
            <p className="text-base text-gray-300 leading-relaxed font-[var(--font-geist-mono)]">
              Hi, I'm <span className="font-semibold">Bimal Gurung</span> - a
              full-stack developer and tech educator with{" "}
              <span className="text-[#d2691e] font-semibold">
                10+ years of experience
              </span>{" "}
              in web and mobile app development. Over the past decade, I've
              built high-quality applications for clients and startups using{" "}
              <code className="bg-black/[.05] dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold">
                React, Next.js, Node.js, and React Native.
              </code>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {`I enjoy teaching what I've learned and am passionate about
                helping new developers kickstart their careers in tech.`}
            </p>
          </div>

          <div className="pt-4">
            {/* <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2"> */}
            <Button
              className="text-white px-4 py-3 rounded-md transition-colors flex items-center gap-3 border-[1px] border-gray-700 hover:border-gray-600"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/@theyetinepal/playlists",
                  "_blank"
                );
              }}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "22px",
                  height: "22px",
                }}
              >
                <title>YouTube</title>
                <path
                  fill="#dc2626"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              <span className="text-base">Watch My Free Tutorials</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
