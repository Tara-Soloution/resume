import { ExperienceItem } from "./ExperienceItem";

interface ExperienceSectionProps {
  experiences: typeof import("@/lib/resume-data").resumeData.experience;
}

export function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="mt-4">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        PROFESSIONAL EXPERIENCE
      </h2>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          company={experience.company}
          companyUrl={experience.companyUrl}
          location={experience.location}
          period={experience.period}
          highlights={experience.highlights}
          isPrimary={experience.isPrimary}
        />
      ))}
    </section>
  );
}
