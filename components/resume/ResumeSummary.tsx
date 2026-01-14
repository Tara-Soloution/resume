interface ResumeSummaryProps {
  summary: typeof import("@/lib/resume-data").resumeData.summary;
}

export function ResumeSummary({ summary }: ResumeSummaryProps) {
  return (
    <div className="mt-2 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        SUMMARY
      </h2>
      <p className="text-xs text-gray-600">
        <span className="font-medium">{summary.title}</span>{" "}
        {summary.description}
      </p>
      <div className="mt-3">
        <h3 className="text-xs font-bold text-gray-800 mb-1">
          Core Competencies:
        </h3>
        <p className="text-xs text-gray-700">
          {summary.coreCompetencies.join(", ")}
        </p>
      </div>
    </div>
  );
}
