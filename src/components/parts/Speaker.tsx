import { Briefcase, Mic, Users } from "lucide-react";
import { Section } from "./Section";
import { GiDiscussion } from "react-icons/gi";

export const Speaker = () => {
  return (
    <Section
      id="speaking"
      backgroundImage="/speaking.jpg"
      subtitle="Public Speaker"
      title="Voice for the Digital Age"
      alignment="left"
    >
      <div className="space-y-6">
        <p>
          I deliver lectures and speeches on technology, business/startups, and
          personal motivation. While addressing students, startup founders, or
          corporate teams, my goal is to simplify complex concepts. I speak to
          pass on and inspire.
        </p>
        <ul className="grid gap-4 mt-6">
          <li className="flex items-center gap-3 text-[#a1a1aa]">
            <Mic className="w-5 h-5 text-[#3b82f6]" /> Technology & Future Trends
          </li>
          <li className="flex items-center gap-3 text-[#a1a1aa]">
            <Users className="w-5 h-5 text-[#3b82f6]" /> Motivation for Founders
            & Students
          </li>
          <li className="flex items-center gap-3 text-[#a1a1aa]">
            <Briefcase className="w-5 h-5 text-[#3b82f6]" /> Business Strategy
          </li>
          <li className="flex items-center gap-3 text-[#a1a1aa]">
            <GiDiscussion className="w-5 h-5 text-[#3b82f6]" /> Technology &
            Business Panel Discussions
          </li>
        </ul>
      </div>
    </Section>
  );
};
