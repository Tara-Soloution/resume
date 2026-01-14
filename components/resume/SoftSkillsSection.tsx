interface SoftSkillsSectionProps {
  skills: typeof import("@/lib/resume-data").resumeData.softSkills;
}

export function SoftSkillsSection({ skills }: SoftSkillsSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        SOFT SKILLS
      </h2>
      <div className="space-y-2">
        <div className="text-xs text-gray-600 leading-relaxed">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
