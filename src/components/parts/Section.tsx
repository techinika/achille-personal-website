import { SectionProps } from "@/types/main";
import { Reveal } from "./Reveal";

export const Section = ({
  id,
  backgroundImage,
  title,
  subtitle,
  children,
  alignment = "left",
  wide = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20"
    >
      <div
        className="absolute inset-0 z-0 bg-scroll md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="absolute inset-0 z-10 bg-[#050505]/85" />

      <div
        className={`relative z-20 container mx-auto px-6 ${
          alignment === "center"
            ? "text-center"
            : alignment === "right"
            ? "text-right"
            : "text-left"
        }`}
      >
        {/* Title area — always constrained for readability */}
        <Reveal>
          <div
            className={`max-w-3xl ${
              alignment === "center"
                ? "mx-auto"
                : alignment === "right"
                ? "ml-auto"
                : "mr-auto"
            }`}
          >
            <h2 className="text-xs font-semibold tracking-[0.25em] text-[#3b82f6] uppercase mb-4">
              {subtitle}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#fafafa] mb-8 leading-tight">
              {title}
            </h3>
          </div>
        </Reveal>

        {/* Content — constrained in normal mode, full width in wide mode */}
        <Reveal delay={200}>
          <div
            className={`text-base md:text-lg text-[#a1a1aa] leading-relaxed ${
              wide
                ? ""
                : `max-w-3xl ${
                    alignment === "center"
                      ? "mx-auto"
                      : alignment === "right"
                      ? "ml-auto"
                      : "mr-auto"
                  }`
            }`}
          >
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
