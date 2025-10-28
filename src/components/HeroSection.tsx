import LetsTalkButton from "./LetsTalkButton";

const HeroSection = () => {
  return (
    <section className="relative py-16 flex flex-col items-center overflow-hidden">
      {/* Content container */}
      <div className="space-y-6 sm:space-y-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Based in Nepal • Remote-friendly
        </span>

        <h1 className="font-black tracking-tight text-5xl sm:text-6xl md:text-8xl">
          <span className="block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent uppercase">
            Your Idea,
          </span>
          <span className="block">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent uppercase">
              Our Expertise
            </span>
            <span className="ml-4">🌻</span>
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/80">
          We’re the tech team behind your next big idea — crafting smart,
          scalable solutions.
        </p>

        <div className="pt-2 flex justify-center">
          <LetsTalkButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
