import Link from "next/link";
import type { ReactNode } from "react";
import { Server, Code2, Palette, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Accent = "indigo" | "emerald" | "rose" | "amber";

type Role = {
  title: string;
  description: string;
  tags?: string[];
  accent: Accent;
  icon: ReactNode;
};

const applyEmail = "hello@yetinepal.com";

const accentMap: Record<
  Accent,
  {
    ring: string;
    iconWrap: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  }
> = {
  indigo: {
    ring: "hover:ring-indigo-500/30",
    iconWrap: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    gradientFrom: "from-indigo-400/40",
    gradientVia: "via-indigo-500/30",
    gradientTo: "to-indigo-400/40",
  },
  emerald: {
    ring: "hover:ring-emerald-500/30",
    iconWrap: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    gradientFrom: "from-emerald-400/40",
    gradientVia: "via-emerald-500/30",
    gradientTo: "to-emerald-400/40",
  },
  rose: {
    ring: "hover:ring-rose-500/30",
    iconWrap: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    gradientFrom: "from-rose-400/40",
    gradientVia: "via-rose-500/30",
    gradientTo: "to-rose-400/40",
  },
  amber: {
    ring: "hover:ring-amber-500/30",
    iconWrap: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    gradientFrom: "from-amber-400/40",
    gradientVia: "via-amber-500/30",
    gradientTo: "to-amber-400/40",
  },
};

const roles: Role[] = [
  {
    title: "Node.js Developer",
    description:
      "Build robust backends and APIs using Node.js and modern frameworks.",
    tags: ["Node.js", "Express", "REST", "Prisma"],
    accent: "emerald",
    icon: <Server className="w-5 h-5" />,
  },
  {
    title: "React Developer",
    description:
      "Craft fast, accessible UIs with React and Next.js in a collaborative team.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    accent: "indigo",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive experiences, wireframes, and polished interfaces.",
    tags: ["Figma", "Wireframes", "Prototyping", "Design Systems"],
    accent: "rose",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Internships",
    description:
      "Kickstart your career with mentored internships in web development and more.",
    tags: ["Learning", "Mentorship", "Real Projects"],
    accent: "amber",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="relative py-16">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
      <div className="">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Careers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’re growing. If you’re passionate about building great products
            and learning fast, we’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {roles.map((role) => {
            const a = accentMap[role.accent];
            return (
              <Card key={role.title}>
                <CardHeader>
                  {/* accent pill */}
                  <div
                    className={`mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r ${a.gradientFrom} ${a.gradientVia} ${a.gradientTo}`}
                  />
                  <div className="flex items-center gap-4">
                    <div
                      className={`inline-flex items-center justify-center h-8 w-8 rounded-md border ${a.iconWrap}`}
                    >
                      {role.icon}
                    </div>
                    <CardTitle>{role.title}</CardTitle>
                  </div>
                  {role.description ? (
                    <CardDescription>{role.description}</CardDescription>
                  ) : null}
                </CardHeader>
                <CardContent>
                  {role.tags && role.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-2 py-1 text-gray-300 rounded-md border border-gray-800`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10">
          <Card className="border-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10">
            <div className="p-6 text-center">
              <p className="text-sm md:text-base">
                To Apply: Send your resume or portfolio to{" "}
                <Link className="underline" href={`mailto:${applyEmail}`}>
                  {applyEmail}
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
