interface LanguagesSectionProps {
  languages: typeof import("@/lib/resume-data").resumeData.languages;
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <section className="mt-6 print:break-inside-avoid">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        LANGUAGES
      </h2>
      <div className="space-y-2">
        {languages.map((lang, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <span className="font-medium text-xs">{lang.name}</span>
            </div>
            <span className="text-xs font-semibold text-blue-700">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
