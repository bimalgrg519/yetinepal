import Image from "next/image";
import { WatchTutorialButton } from "./WatchTutorialButton";

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
              Hi, I&apos;m <span className="font-semibold">Bimal Gurung</span> - a
              full-stack developer and tech educator with{" "}
              <span className="text-[#d2691e] font-semibold">
                10+ years of experience
              </span>{" "}
              in web and mobile app development. Over the past decade, I&apos;ve
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
            <WatchTutorialButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
