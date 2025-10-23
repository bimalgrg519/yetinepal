"use client";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  id: string;
  title: string;
  description: string;
  type: "web" | "mobile";
  tags: string[];
  href?: string;
  img?: string; // path under /public
};

const works: WorkItem[] = [
  {
    id: "storyworld-web",
    title: "Interactive Reading Platform",
    description: "Stories and games to boost early literacy.",
    type: "web",
    tags: ["React.js", "Tailwind", "WordPress"],
    href: "https://storyworld.us/",
    img: "/our-works/sw-logo.png",
  },
  {
    id: "bighound-web",
    title: "Real Estate Marketing Platform",
    description: "Digital tools to grow visibility and leads.",
    type: "web",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "https://bighound.com/",
    img: "/our-works/bighound.png",
  },
  {
    id: "zaklada-web",
    title: "Civil Society Foundation",
    description: "Supports and funds civil society organizations.",
    type: "web",
    tags: ["React", "MODX"],
    href: "https://zaklada.civilnodrustvo.hr/en/",
    img: "/our-works/zaklada.png",
  },
  {
    id: "awr-mobile",
    title: "Vehicle Ownership App",
    description: "Helps users manage vehicle ownership and related tasks.",
    type: "mobile",
    tags: ["React Native"],
    href: "https://play.google.com/store/apps/details?id=com.awrostamani.awrconnect&hl=en",
    img: "/our-works/awr-connect.png",
  },
  {
    id: "fightback-mobile",
    title: "Fightback Risk-Reduction Program",
    description:
      "Empowering people with mental, vocal & physical safety skills to prevent sexual violence.",
    type: "mobile",
    tags: ["React Native"],
    href: "https://play.google.com/store/apps/details?id=com.fightback&hl=en",
    img: "/our-works/fightback.png",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
] as const;

const TypeBadge = ({ type }: { type: WorkItem["type"] }) => {
  const isWeb = type === "web";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs tracking-wide ${
        isWeb
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
          : "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
      }`}
    >
      {isWeb ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <rect
            x="6"
            y="2"
            width="12"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      )}
      {isWeb ? "Web" : "Mobile"}
    </span>
  );
};

const OurWorkSection = () => {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");

  const filtered = useMemo(() => {
    if (active === "all") return works;
    return works.filter((w) => w.type === active);
  }, [active]);

  return (
    <section id="work" className="py-12">
      <h2 className="text-4xl font-bold text-center">Our Work</h2>
      <p className="text-center text-white/70 mt-2">
        Websites and mobile apps we design and build.
      </p>

      <div className="mt-6 flex justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              active === f.id
                ? "border-white/30 bg-white/10 text-white"
                : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-0">
              <div className="h-36 relative overflow-hidden">
                {item.img ? (
                  <>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover bg-gray-900"
                      priority={false}
                    />
                  </>
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                      <TypeBadge type={item.type} />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <TypeBadge type={item.type} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {item.href && (
                  <div className="mt-4">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline text-muted-foreground hover:text-gray-300"
                    >
                      View project
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.1] transition-colors"
        >
          Let’s build yours
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default OurWorkSection;
