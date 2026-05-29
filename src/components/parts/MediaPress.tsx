import { ExternalLink } from "lucide-react";
import { Section } from "./Section";
import Link from "next/link";

export const MediaPress = () => {
  const articles = [
    {
      href: "https://www.wearetech.africa/en/fils-uk/tech-stars/rwanda-cishahayo-songa-achille-democrtizes-digital-skills-through-techinika",
      publication: "We Are Tech Africa",
      title: "Democratizing Digital Skills Through Techinika",
      description:
        "Feature on how Techinika is making digital skills accessible across Rwanda and beyond.",
    },
    {
      href: "https://www.wearetech.africa/fr/fils/tech-stars/le-rwandais-cishahayo-songa-achille-fournit-aux-particuliers-et-aux-entreprises-des-competences-numeriques-modernes",
      publication: "We Are Tech Africa (FR)",
      title: "Des compétences numériques modernes pour tous",
      description:
        "Article en français sur la mission de Techinika et l'impact de l'éducation numérique au Rwanda.",
    },
    {
      href: "https://www.ktpress.rw/2023/06/edtech-partners-show-need-for-accelerated-blended-learning-models/",
      publication: "KT Press",
      title: "EdTech Partners Show Need for Accelerated Blended Learning Models",
      description:
        "Coverage of the EdTech partners event highlighting the growing demand for blended learning solutions.",
    },
    {
      href: "https://www.linkedin.com/pulse/hanga-weekly-roundup-ep-25-hanga-pitchfest-3jxke/",
      publication: "Hanga Weekly Roundup",
      title: "Hanga Pitchfest Ep. 25",
      description:
        "Weekly roundup featuring the Hanga Pitchfest and key startup ecosystem updates.",
    },
  ];

  return (
    <Section
      id="media"
      backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168d6c?q=80&w=2670&auto=format&fit=crop"
      subtitle="Media & Press"
      title="As Seen In"
      alignment="center"
      wide
    >
      <div className="max-w-5xl mx-auto">
        <p className="mb-10 text-center max-w-3xl mx-auto">
          Articles and features covering my work in technology, education, and
          entrepreneurship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              target="_blank"
              className="border-l-4 border-[#3b82f6] bg-[#1f1f1f]/50 pl-6 py-4 pr-4 hover:bg-[#1f1f1f] transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold text-[#fafafa]">
                  {article.publication}
                </h4>
                <ExternalLink className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#fafafa] shrink-0 mt-1" />
              </div>
              <p className="text-sm text-[#a1a1aa] font-medium mb-1">
                {article.title}
              </p>
              <p className="text-sm text-[#a1a1aa]/70">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
