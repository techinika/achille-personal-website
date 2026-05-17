import { Section } from "./Section";

export const Educator = () => {
  return (
    <Section
      id="teaching"
      backgroundImage="/educator.jpg"
      subtitle="Educator"
      title="Sharing Knowledge, Building Futures"
      alignment="right"
    >
      <div className="space-y-6">
        <p>
          I am driven by a mission to democratize digital skills. I lead
          initiatives to help others share their knowledge and master
          technology.
        </p>
        <p>
          You can invite me to teach for a single day session or intensive
          workshops.
        </p>
        <div className="p-6 bg-[#1f1f1f]/50 border border-white/10 backdrop-blur-sm rounded-lg mt-6">
          <h4 className="font-semibold text-[#fafafa] mb-2">My Pledge</h4>
          <p className="text-sm text-[#a1a1aa]">
            If the cause creates significant impact for an underserved audience,
            I am open to delivering sessions pro-bono. Education should be
            accessible to all.
          </p>
        </div>
      </div>
    </Section>
  );
};
