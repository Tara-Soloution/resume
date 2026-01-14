interface AwardsSectionProps {
  awards: typeof import("@/lib/resume-data").resumeData.awards;
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <section className="mt-8 break-before-page">
      <h2 className="text-base font-bold border-b pb-1 mb-3 text-gray-800">
        AWARDS
      </h2>
      <div className="space-y-3">
        {awards.map((award, index) => (
          <div
            key={index}
            className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="text-xs text-gray-700 flex items-start">
              <span className="text-blue-500 mr-2 text-base">{award.icon}</span>
              <div className="flex-1">
                <span className="font-bold group-hover:text-blue-600 transition-colors">
                  {award.title}
                </span>
                <p className="text-xs text-gray-600 leading-tight mt-1">
                  {award.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
