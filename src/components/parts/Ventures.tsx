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
          className="border-l-4 border-blue-600 bg-white/5 pl-6 py-4 pr-4"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-white">Techinika</h4>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
          </div>
          <p className="text-sm text-gray-400 mt-1 mb-3">
            Founder & Managing Director
          </p>
          <p className="text-sm text-gray-300">
            Democratizing digital skills through Ubunifu Labs, Rwanda Technology
            Community, The Tech Masterclass, and Techinika News.
          </p>
        </Link>

        <Link
          href="https://ijwi.netlify.app"
          target="_blank"
          className="border-l-4 border-yellow-500 bg-white/5 pl-6 py-4 pr-4"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-white">
              Ijwi Language Collective
            </h4>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
          </div>
          <p className="text-sm text-gray-400 mt-1 mb-3">Co-Founder</p>
          <p className="text-sm text-gray-300">
            Providing local support and language integration for foreigners
            living in Rwanda.
          </p>
        </Link>

        <Link
          href="https://www.linkedin.com/company/asoftskillsorg/"
          target="_blank"
          className="border-l-4 border-green-500 bg-white/5 pl-6 py-4 pr-4"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-white">
              African Soft Skills Organization
            </h4>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
          </div>
          <p className="text-sm text-gray-400 mt-1 mb-3">
            Ex Co-Founder & Trainer
          </p>
          <p className="text-sm text-gray-300">
            Leading initiatives to equip TVET students with soft skills they
            need to be outstanding on the job market.
          </p>
        </Link>
      </div>
    </Section>
  );
};
