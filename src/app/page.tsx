import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] p-2 sm:p-20 font-[family-name:var(--font-geist-sans)] items-start sm:items-center">
      <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center sm:items-start px-4">
        <Image
          // className="dark:invert"
          src="/logo.png"
          alt="Yeti logo"
          width={80}
          height={80}
          priority
        />
        <div>
          <h1 className="font-[family-name:var(--font-geist-mono)] font-semibold text-center sm:text-left">
            What We Offer:
          </h1>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-1 sm:space-y-2 mt-1">
            <li>
              Web Development{" "}
              <code className="bg-black/[.05] dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold">
                React | Next.js | Node.js | Express
              </code>
              .
            </li>
            <li>
              Mobile App Development{" "}
              <code className="bg-black/[.05] dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold">
                Flutter | React Native
              </code>
              .
            </li>
            <li>
              UI/UX Design{" "}
              <code className="bg-black/[.05] dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold">
                Figma | Adobe XD
              </code>
              .
            </li>
            <li>
              DevOps Training{" "}
              <code className="bg-black/[.05] dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold">
                Docker | Kubernetes | Jenkins
              </code>
              .
            </li>
          </ol>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="font-[family-name:var(--font-geist-mono)] font-semibold">
            We’re Hiring! 🚀
          </h2>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm mt-1">
            We are looking for{" "}
            <code className="bg-black/[.05] dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold text-[#d2691e]">
              React, Node.js and React Native
            </code>{" "}
            developers to join our team!
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm mt-2">
            Whether you’re experienced or just starting out, if you love
            building websites, apps, or backends, we’d love to have you on our
            team.
          </p>
        </div>

        <div className="flex space-x-2 sm:space-x-4 items-center flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.instagram.com/yetinepal_?igsh=MW9uMzAwOGg1Z3VubA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              // className="dark:invert"
              src="/instagram.svg"
              alt="instagram logomark"
              width={24}
              height={24}
            />
            Send a Message
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.youtube.com/@theyetinepal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              // className="dark:invert"
              src="/youtube.svg"
              alt="youtube logomark"
              width={24}
              height={24}
            />
            Watch Now
          </a>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer> */}
    </div>
  );
}
