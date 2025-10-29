"use client";

import Image from "next/image";

type Member = {
  name: string;
  role: string;
  src: string;
};

const members: Member[] = [
  {
    name: "Ashim Gautam",
    role: "Full Stack Developer",
    src: "/team/ashim.png",
  },
  { name: "Bimal Gurung", role: "Founder & CEO", src: "/team/bimal.png" },
  {
    name: "Nitan Gurung",
    role: "Associate Frontend Developer",
    src: "/team/nitan.JPG",
  },
  { name: "Sawan Gurung", role: "DevOps Engineer", src: "/team/sawan.JPG" },
  {
    name: "Utsab Gharti",
    role: "Associate Frontend Developer",
    src: "/team/utsab.JPG",
  },
];

const MembersSection = () => {
  return (
    <section id="members" className="py-12 sm:py-16">
      <div className="">
        <div className="mb-4 sm:mb-10 text-center">
          <p className="mt-2 text-3xl text-pink-500 font-bold font-[family-name:var(--font-pacifico)]">
            Meet Our Amazing Community
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-12 sm:gap-20 mt-14">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center transition-transform duration-200 will-change-transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div
                className={
                  idx % 2 === 0
                    ? "rotate-[2deg] mt-1"
                    : "-rotate-[2deg] mt-[-2px]"
                }
              >
                <div
                  className={
                    "relative h-52 w-52 overflow-hidden border border-pink-500"
                  }
                >
                  <Image
                    src={m.src}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                    priority={false}
                  />
                </div>
                <div className="mt-4">
                  <div className="leading-none text-xl font-[family-name:var(--font-pacifico)] text-pink-500 tracking-wide">
                    {m.name}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {m.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
