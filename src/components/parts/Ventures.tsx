import { Section } from "./Section";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Techinika Ecosystem */}
        <div className="border-l-4 border-blue-600 bg-white/5 pl-6 py-4 pr-4">
          <h4 className="text-xl font-bold text-white">Techinika</h4>
          <p className="text-sm text-gray-400 mt-1 mb-3">
            Founder & Managing Director
          </p>
          <p className="text-sm text-gray-300">
            Democratizing digital skills through Ubunifu Labs, Rwanda Technology
            Community, The Tech Masterclass, and Techinika News.
          </p>
        </div>

        {/* Ijwi */}
        <div className="border-l-4 border-yellow-500 bg-white/5 pl-6 py-4 pr-4">
          <h4 className="text-xl font-bold text-white">
            Ijwi Language Collective
          </h4>
          <p className="text-sm text-gray-400 mt-1 mb-3">Co-Founder</p>
          <p className="text-sm text-gray-300">
            Providing local support and language integration for foreigners
            living in Rwanda.
          </p>
        </div>
      </div>
    </Section>
  );
};
