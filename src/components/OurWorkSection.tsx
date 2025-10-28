"use client";
import Image from "next/image";

type WorkItem = {
  id: string;
  title: string;
  href?: string;
  img?: string; // path under /public
};

const works: WorkItem[] = [
  {
    id: "storyworld-web",
    title: "Interactive Reading Platform",
    href: "https://storyworld.us/",
    img: "/our-works/sw-logo.png",
  },
  {
    id: "bighound-web",
    title: "Real Estate Marketing Platform",
    href: "https://bighound.com/",
    img: "/our-works/bighound.png",
  },
  {
    id: "zaklada-web",
    title: "Civil Society Foundation",
    href: "https://zaklada.civilnodrustvo.hr/en/",
    img: "/our-works/zaklada.png",
  },
  {
    id: "awr-mobile",
    title: "Vehicle Ownership App",
    href: "https://play.google.com/store/apps/details?id=com.awrostamani.awrconnect&hl=en",
    img: "/our-works/awr-connect.png",
  },
  {
    id: "fightback-mobile",
    title: "Fightback Risk-Reduction Program",
    href: "https://play.google.com/store/apps/details?id=com.fightback&hl=en",
    img: "/our-works/fightback.png",
  },
];

const OurWorkSection = () => {
  return (
    <section id="work" className="py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center">Our Awesome Clients</h2>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {works.map((item) => (
            <div key={item.id} className="group">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
                className="block"
              >
                <div className="relative h-24 sm:h-28 md:h-32 w-40 sm:w-48 md:w-56 flex items-center justify-center overflow-hidden">
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={`${item.title} logo`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                      className="object-contain grayscale transition-all duration-200 group-hover:grayscale-0"
                      priority={false}
                    />
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
