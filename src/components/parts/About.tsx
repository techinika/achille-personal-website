import { ArrowRight, Gift, Lock } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url("/moderating tito.jpg")`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/50" />

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <Reveal delay={0}>
          <div className="mb-8 p-1 border border-white/10 rounded-full backdrop-blur-sm">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#1f1f1f] overflow-hidden relative ring-1 ring-white/20">
              <img
                src="/achillesonga.png"
                alt="Cishahayo Songa Achille"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-[#fafafa]">
            Cishahayo <br className="md:hidden" /> Songa Achille
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-[#3b82f6] font-medium mb-8 text-sm md:text-base tracking-wide">
            Software Engineer &mdash; Entrepreneur &mdash; Educator &mdash; Speaker
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="max-w-2xl mx-auto border-l border-[#3b82f6]/40 pl-6 text-left">
            <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed">
              {`"Empowering individuals and teams to grow through storytelling, strategy, and skills for the digital age."`}
            </p>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-10 max-w-lg mx-auto bg-[#1f1f1f]/60 border border-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#3b82f6] uppercase">
                Private Community
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[#fafafa] mb-2">
              Join My Inner Circle
            </h3>
            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
              Send a gift (any amount) to access exclusive content, participate in
              my giveaways, and get discounts on every product I sell.
            </p>
            <Link
              href="https://agaseke.me/achille_songa"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#3b82f6] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#2563eb] transition-colors rounded-md"
            >
              <Gift className="w-4 h-4" />
              Join Now
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ArrowRight className="rotate-90 w-5 h-5" />
      </div>
    </section>
  );
};
