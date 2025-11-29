import { SectionProps } from "@/types/main";

export const Section = ({
  id,
  backgroundImage,
  title,
  subtitle,
  children,
  alignment = "left",
}: SectionProps) => {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-scroll md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="absolute inset-0 z-10 bg-black/80" />

      <div
        className={`relative z-20 container mx-auto px-6 py-24 ${
          alignment === "center"
            ? "text-center"
            : alignment === "right"
            ? "text-right"
            : "text-left"
        }`}
      >
        <div
          className={`max-w-4xl ${
            alignment === "center"
              ? "mx-auto"
              : alignment === "right"
              ? "ml-auto"
              : "mr-auto"
          }`}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            {subtitle}
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            {title}
          </h3>
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
