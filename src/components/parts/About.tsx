import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url("/moderating tito.jpg")`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-black/40" />

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <div className="mb-6 p-1 border border-white/20 rounded-full">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-800 overflow-hidden relative">
            <img
              src="/achillesonga.png"
              alt="Cishahayo Songa Achille"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tight">
          Cishahayo <br className="md:hidden" /> Songa Achille
        </h1>
        <p className="text-blue-400 font-mono mb-8">
          Software Engineer | Entrepreneur | Educator | Speaker
        </p>

        <div className="max-w-xl mx-auto border-l-2 border-blue-400 pl-6 text-left">
          <p className="text-gray-300 text-lg md:text-xl italic">
            {`"Empowering individuals and teams to grow through storytelling, strategy, and skills for the digital age."`}
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowRight className="rotate-90 w-6 h-6" />
      </div>
    </section>
  );
};
