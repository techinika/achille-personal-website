import { ExternalLink, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const ContentCreator = () => {
  return (
    <Section
      id="content"
      backgroundImage="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2670&auto=format&fit=crop"
      subtitle="Content Creator"
      title="Creating a Digital Legacy"
      alignment="center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <p>
          From my background as a TV presenter to my current work on YouTube,
          LinkedIn, and TikTok, I create content that I wish my children could
          see someday. I write and speak to pass on wisdom and inspire the next
          generation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
          <Link
            href="https://youtube.com/@achillesonga"
            target="_blank"
            className="group bg-white/5 p-6 border border-white/10 hover:border-blue-500 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <MonitorPlay className="w-6 h-6 text-blue-500" />
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
            </div>
            <h4 className="text-lg font-bold text-white">Video Content</h4>
            <p className="text-sm text-gray-400 mt-2">
              YouTube, TikTok & LinkedIn insights on growth, discipline and
              personal stories.
            </p>
          </Link>
          <Link
            href="https://techinika.com/author/achillesonga"
            target="_blank"
            className="group bg-white/5 p-6 border border-white/10 hover:border-blue-500 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-6 h-6 bg-blue-500 flex items-center justify-center font-bold text-xs text-black">
                T
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
            </div>
            <h4 className="text-lg font-bold text-white">Techinika News</h4>
            <p className="text-sm text-gray-400 mt-2">
              Writing tech news and analysis for the platform I founded.
            </p>
          </Link>
        </div>
      </div>
    </Section>
  );
};
