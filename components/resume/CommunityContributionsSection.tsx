interface CommunityContributionsSectionProps {
  contributions: typeof import("@/lib/resume-data").resumeData.communityContributions;
}

export function CommunityContributionsSection({
  contributions,
}: CommunityContributionsSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        COMMUNITY CONTRIBUTIONS
      </h2>
      <div className="space-y-3">
        {contributions.map((contribution, index) => (
          <div
            key={index}
            className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="text-xs text-gray-700 flex items-start">
              <span className="text-blue-500 mr-2 text-base">
                {contribution.icon}
              </span>
              <div className="flex-1">
                <span className="font-bold group-hover:text-blue-600 transition-colors">
                  {contribution.title}
                </span>
                <p className="text-xs text-gray-600 leading-tight mt-1">
                  {contribution.description}
                </p>
                {contribution.url && (
                  <a
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"
                  >
                    <span>🔗</span>
                    <span className="hover:underline">
                      {contribution.url.replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
