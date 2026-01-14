interface SkillsSectionProps {
  skills: typeof import("@/lib/resume-data").resumeData.technicalSkills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const skillCategories = [
    { title: "Programming Languages:", items: skills.languages },
    { title: "Frameworks & Libraries:", items: skills.frameworks },
    { title: "Databases & Storage:", items: skills.databases },
    { title: "Cloud & DevOps:", items: skills.cloudDevOps },
    { title: "Architecture & Methods:", items: skills.architecture },
  ];

  return (
    <section className="mt-4">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        TECHNICAL SKILLS
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <h3 className="text-xs font-bold text-gray-700 mb-1">
              {category.title}
            </h3>
            <div className="text-xs text-gray-600 leading-relaxed">
              {category.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded ${
                    skillIndex < category.items.length - 1 ? "mr-1.5" : ""
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
