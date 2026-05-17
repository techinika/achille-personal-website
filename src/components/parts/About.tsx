import { ArrowRight } from "lucide-react";

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
        <div className="mb-8 p-1 border border-white/10 rounded-full backdrop-blur-sm">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#1f1f1f] overflow-hidden relative ring-1 ring-white/20">
            <img
              src="/achillesonga.png"
              alt="Cishahayo Songa Achille"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-[#fafafa]">
          Cishahayo <br className="md:hidden" /> Songa Achille
        </h1>
        <p className="text-[#3b82f6] font-medium mb-8 text-sm md:text-base tracking-wide">
          Software Engineer &mdash; Entrepreneur &mdash; Educator &mdash; Speaker
        </p>

        <div className="max-w-xl mx-auto border-l border-[#3b82f6]/40 pl-6 text-left">
          <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed">
            {`"Empowering individuals and teams to grow through storytelling, strategy, and skills for the digital age."`}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ArrowRight className="rotate-90 w-5 h-5" />
      </div>
    </section>
  );
};
