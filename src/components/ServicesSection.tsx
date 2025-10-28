import React from "react";
// (cards no longer used for the table layout)

type Service = {
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    title: "Web & Mobile Apps",
    desc: "Next.js, React Native and crisp UX.",
  },
  {
    title: "E‑commerce & Integrations",
    desc: "Shopify & WordPress stores, payments, and custom flows that convert.",
  },
  {
    title: "Backend APIs",
    desc: "Node.js services, REST/GraphQL, and reliable data layers.",
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, CI/CD, monitoring, and pragmatic reliability.",
  },
  {
    title: "Training & Workshops",
    desc: "Upskilling teams with modern web best practices.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What We Do
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            We build simple, effective solutions for your platforms.
          </p>
        </div>

        <ul className="mt-10 overflow-hidden rounded-md border border-border divide-y divide-border">
          {/* Header row */}
          <li className="grid grid-cols-[200px,1fr] sm:grid-cols-[240px,1fr] md:grid-cols-[280px,1fr] lg:grid-cols-[320px,1fr] bg-muted/50 text-muted-foreground">
            <div className="p-3 sm:p-4 text-[11px] sm:text-xs font-medium uppercase tracking-wider">
              Service
            </div>
            <div className="p-3 sm:p-4 text-[11px] sm:text-xs font-medium uppercase tracking-wider">
              Description
            </div>
          </li>

          {/* Data rows */}
          {services.map((s) => (
            <li
              key={s.title}
              className="grid grid-cols-[220px,1fr] sm:grid-cols-[240px,1fr] md:grid-cols-[280px,1fr] lg:grid-cols-[320px,1fr] even:bg-card/40"
            >
              <div className="p-4 sm:p-5">
                <div className="text-sm md:text-base font-medium tracking-tight whitespace-nowrap">
                  {s.title}
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-sm text-muted-foreground">{s.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
