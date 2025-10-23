"use client";

import React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & { label?: string };

const WordPress = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={props.label}
    {...props}
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm9.2 12c0 3.4-1.9 6.4-4.7 8l2.9-8c.6-1.6.8-2.8.8-3.9 0-1.2-.2-2.2-.8-3.6 1.1 1.7 1.8 3.8 1.8 6.5zM12 21.2c-1.1 0-2.1-.2-3-.6l3.2-9 .9 2.7 1.9 5.6c-1 .8-2 .9-3 .9zm-1.1-13.2c.6 0 .9.1.9.1.2 0 .2-.3.2-.5 0-.5-.5-1.4-1.7-1.4-1 0-2 .7-2.8 1.5-.9.9-1.4 2.1-1.4 3.3 0 1.5.6 2.6 1.4 4.3l1.9 4.4-3.2-9c-.6-1.6-.8-2.7-.8-3.8 0-.3 0-.6.1-.9C6.9 3.3 9.3 2 12 2c2.3 0 4.4.9 6 2.3-.4-.1-.9-.2-1.2-.2-1 0-1.8.9-1.8 1.9 0 .9.5 1.7.9 2.6.3.6.6 1.2.6 1.8 0 .7-.3 1.5-.7 2.6l-1 3.2-2-5.9c.3-1 .4-1.7.4-2.2 0-.2 0-.3-.1-.4-.2-.2-.6-.4-1.2-.4-1 0-1.8.2-2.6.6.5-1.4 1.8-2.1 3.6-2.1z" />
  </svg>
);

const NodeJS = (props: LogoProps) => (
  <svg
    fill="#fff"
    width="24px"
    height="24px"
    viewBox="0 0 32 32"
    aria-label={props.label}
    {...props}
  >
    <path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z" />
  </svg>
);

const ReactLogo = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label={props.label}
    {...props}
  >
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" />
    <ellipse transform="rotate(60 12 12)" cx="12" cy="12" rx="9" ry="3.5" />
    <ellipse transform="rotate(120 12 12)" cx="12" cy="12" rx="9" ry="3.5" />
  </svg>
);

const Shopify = (props: LogoProps) => (
  <svg viewBox="0 0 24 24" aria-label={props.label} {...props}>
    {/* Handles (draw first so they appear behind the bag) */}
    <path
      d="M9 7c.3-1.9 1.8-3.5 3.1-3.5 1.2 0 2.1.7 2.6 2.1M10.8 6.6c.2-1 .9-1.6 1.6-1.6.8 0 1.4.5 1.6 1.4"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Left face of the bag */}
    <path d="M5 7 L14 5 L14 21 L5 19 Z" fill="#ffffff" />
    {/* Right face of the bag */}
    <path d="M14 5 L20 6 L19 20 L14 21 Z" fill="#ffff" />
    {/* White S (stroked for clarity at small sizes) */}
    <path
      d="M15.2 9c0-1.4-1.3-2.5-3-2.5S9.2 7.8 9.2 9c0 1 .8 1.6 2.2 2l1.2.3c1.6.4 2.6 1.1 2.6 2.3 0 1.6-1.5 2.7-3.4 2.7-1.3 0-2.6-.5-3.2-1.4"
      fill="none"
      stroke="#000000"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextJS = (props: LogoProps) => (
  <svg viewBox="0 0 24 24" aria-label={props.label} {...props}>
    {/* Circular background using currentColor */}
    <circle cx="12" cy="12" r="11" fill="#666" />
    {/* Left vertical of N */}
    <rect x="7" y="6" width="2" height="12" fill="#fff" />
    {/* Diagonal stroke */}
    <path d="M9 6 L17 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    {/* Short right vertical */}
    <rect x="17" y="6" width="2" height="5" fill="#fff" />
  </svg>
);

const Tailwind = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={props.label}
    {...props}
  >
    <path d="M12 4c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6C13.4 9.4 14.6 10.6 17 10.6c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6C15.6 5.2 14.4 4 12 4zM6 13.4c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6.9.8 2.1 2 4.5 2 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6-.9-.8-2.1-2-4.5-2z" />
  </svg>
);

const TypeScriptLogo = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={props.label}
    {...props}
  >
    <path d="M1.125 0A1.125 1.125 0 0 0 0 1.125v21.75C0 23.55.45 24 .9 24h22.2c.45 0 .9-.45.9-.9V.9C24 .45 23.55 0 23.1 0zM13.5 10.5h-2.25v8.25H9V10.5H6.75V9H13.5zm5.55 8.25c-.6 0-1.2-.15-1.8-.45-.6-.3-1.05-.6-1.35-.9l.9-1.35c.24.24.57.48.99.72.42.24.84.36 1.26.36.42 0 .72-.09.9-.27.21-.18.315-.42.315-.72 0-.21-.06-.39-.18-.54a1.8 1.8 0 0 0-.48-.42c-.21-.12-.45-.24-.75-.36l-.54-.24c-.39-.18-.72-.39-.99-.63a2.37 2.37 0 0 1-.66-.9c-.18-.36-.27-.78-.27-1.26 0-.9.315-1.62.945-2.16.63-.54 1.47-.81 2.52-.81.54 0 1.05.09 1.53.27.48.18.9.42 1.26.72l-.81 1.35a3.45 3.45 0 0 0-1.8-.54c-.36 0-.66.09-.9.27-.21.18-.315.42-.315.72 0 .21.06.39.18.54.12.15.3.3.54.42s.51.27.81.39l.54.24c.39.18.72.39.99.63.27.24.48.54.63.9.15.33.225.72.225 1.17 0 .93-.315 1.68-.945 2.25-.63.54-1.5.81-2.61.81z" />
  </svg>
);

// React Native uses the React atom mark; reuse React logo shape
const ReactNative = (props: LogoProps) => <ReactLogo {...props} />;

// Simple generic cloud glyph for AWS to avoid trademark wordmark
const Aws = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={props.label}
    {...props}
  >
    <path d="M19 18H7a4 4 0 01-.4-7.98A5.5 5.5 0 0117.9 8a4.5 4.5 0 011.1 10z" />
  </svg>
);

// MongoDB leaf
const MongoDB = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={props.label}
    {...props}
  >
    <path d="M12 2c-2.6 3-4.1 6.3-4.1 9.7 0 3.4 1.4 6.7 3.9 10.4.2.3.6.3.8 0 2.5-3.7 3.9-7 3.9-10.4C16.5 8.3 14.9 5 12.3 2.1c-.2-.2-.4-.2-.3-.1z" />
  </svg>
);

// Generic database cylinder for PostgreSQL
const PostgreSQL = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={props.label}
    {...props}
  >
    <path d="M4 7c0-2.2 4-4 8-4s8 1.8 8 4-4 4-8 4-8-1.8-8-4zm0 3v7c0 2.2 4 4 8 4s8-1.8 8-4V10c-2 1.5-5 2.4-8 2.4S6 11.5 4 10z" />
  </svg>
);

// Figma dots layout (monochrome)
const FigmaLogo = (props: LogoProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={props.label}
    {...props}
  >
    <circle cx="9" cy="6" r="3" />
    <circle cx="15" cy="6" r="3" />
    <circle cx="9" cy="12" r="3" />
    <circle cx="15" cy="12" r="3" />
    <circle cx="9" cy="18" r="3" />
  </svg>
);

const logos = [
  { name: "WordPress", Icon: WordPress },
  { name: "Node.js", Icon: NodeJS },
  { name: "React", Icon: ReactLogo },
  { name: "Shopify", Icon: Shopify },
  { name: "React Native", Icon: ReactNative },
  { name: "Next.js", Icon: NextJS },
  { name: "Tailwind", Icon: Tailwind },
  { name: "TypeScript", Icon: TypeScriptLogo },
  { name: "AWS", Icon: Aws },
  { name: "MongoDB", Icon: MongoDB },
  { name: "PostgreSQL", Icon: PostgreSQL },
  { name: "Figma", Icon: FigmaLogo },
];

export default function TechStackMarquee() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-center text-sm font-medium text-muted-foreground tracking-widest">
          Tools and stacks we love
        </h2>
      </div>
      <div
        className="group relative mx-auto max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-label="Technology logos carousel"
      >
        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map(({ name, Icon }, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/30 px-4 py-2 shadow-sm transition-colors hover:bg-card/60"
              title={name}
            >
              <Icon
                className="h-6 w-6 text-foreground/80"
                aria-hidden
                label={name}
              />
              <span className="text-sm text-foreground/80">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
