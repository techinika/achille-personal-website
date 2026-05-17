import { ExternalLink } from "lucide-react";
import { Section } from "./Section";
import Link from "next/link";

export const Ventures = () => {
  return (
    <Section
      id="ventures"
      backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
      subtitle="Entrepreneurship"
      title="Building The Ecosystem"
      alignment="left"
    >
      <p className="mb-8">
        My journey is defined by building platforms that solve real problems.
        Here are the organizations I lead and support:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="https://techinika.co.rw"
          target="_blank"
          className="border-l-4 border-[#3b82f6] bg-[#1f1f1f]/50 pl-6 py-4 pr-4 hover:bg-[#1f1f1f] transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-semibold text-[#fafafa]">Techinika</h4>
            <ExternalLink className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#fafafa]" />
          </div>
          <p className="text-sm text-[#a1a1aa] mt-1 mb-3">
            Founder & Managing Director
          </p>
          <p className="text-sm text-[#a1a1aa]">
            Democratizing digital skills through Ubunifu Labs, Rwanda Technology
            Community, The Tech Masterclass, and Techinika News.
          </p>
        </Link>

        <Link
          href="https://ijwi.netlify.app"
          target="_blank"
          className="border-l-4 border-yellow-500 bg-[#1f1f1f]/50 pl-6 py-4 pr-4 hover:bg-[#1f1f1f] transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-semibold text-[#fafafa]">
              Ijwi Language Collective
            </h4>
            <ExternalLink className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#fafafa]" />
          </div>
          <p className="text-sm text-[#a1a1aa] mt-1 mb-3">Co-Founder</p>
          <p className="text-sm text-[#a1a1aa]">
            Providing local support and language integration for foreigners
            living in Rwanda.
          </p>
        </Link>

        <Link
          href="https://www.linkedin.com/company/asoftskillsorg/"
          target="_blank"
          className="border-l-4 border-green-500 bg-[#1f1f1f]/50 pl-6 py-4 pr-4 hover:bg-[#1f1f1f] transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-semibold text-[#fafafa]">
              African Soft Skills Organization
            </h4>
            <ExternalLink className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#fafafa]" />
          </div>
          <p className="text-sm text-[#a1a1aa] mt-1 mb-3">
            Ex Co-Founder & Trainer
          </p>
          <p className="text-sm text-[#a1a1aa]">
            Leading initiatives to equip TVET students with soft skills they
            need to be outstanding on the job market.
          </p>
        </Link>
      </div>
    </Section>
  );
};
