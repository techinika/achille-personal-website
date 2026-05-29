import { Award, Code, GraduationCap, Monitor, Users, Trophy, Lightbulb, PenTool } from "lucide-react";
import { Section } from "./Section";

const certifications = [
  {
    title: "Digital Marketing",
    issuer: "Google",
    icon: Award,
  },
  {
    title: "Software Development",
    issuer: "Andela",
    icon: Code,
  },
  {
    title: "Information Technology Diploma",
    issuer: "Rwanda Polytechnic",
    icon: GraduationCap,
  },
  {
    title: "Microsoft D365 Business Central",
    issuer: "TeKnowledge",
    icon: Monitor,
  },
  {
    title: "Startup Mentor",
    issuer: "Techstars Startup Weekend Kigali",
    icon: Users,
  },
  {
    title: "Debate Winner",
    issuer: "Rise & Talk Gavel Club, RP Kigali",
    icon: Trophy,
  },
  {
    title: "Ideation Process Expert",
    issuer: "UNLEASH",
    icon: Lightbulb,
  },
  {
    title: "Code+Design Camp",
    issuer: "Tech in Ruanda eV & The Gym Rwanda",
    icon: PenTool,
  },
];

export const Certifications = () => {
  return (
    <Section
      id="certifications"
      backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=2670&auto=format&fit=crop"
      subtitle="Credentials"
      title="Certifications & Awards"
      alignment="center"
      wide
    >
      <div className="max-w-5xl mx-auto">
        <p className="mb-10 text-center max-w-3xl mx-auto">
          Recognized by leading organizations for expertise in technology,
          education, and entrepreneurship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="group bg-[#1f1f1f]/50 px-5 py-6 border border-white/5 hover:border-[#3b82f6]/40 transition-all rounded-lg text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3b82f6]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <h4 className="text-sm font-semibold text-[#fafafa] leading-snug mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-[#a1a1aa]">{cert.issuer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
