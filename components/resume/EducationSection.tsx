import { EducationItem } from "./EducationItem";

interface EducationSectionProps {
  education: typeof import("@/lib/resume-data").resumeData.education;
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mt-4">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        EDUCATION
      </h2>
      {education.map((edu, index) => (
        <EducationItem
          key={index}
          degree={edu.degree}
          institution={edu.institution}
          period={edu.period}
          highlights={edu.highlights}
        />
      ))}
    </section>
  );
}
