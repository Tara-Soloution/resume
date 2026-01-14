interface Highlight {
  bold?: string;
  text?: string;
  semibold?: string;
  text2?: string;
  semibold2?: string;
  text3?: string;
  semibold3?: string;
  text4?: string;
}

interface ExperienceItemProps {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  highlights: Highlight[];
  isPrimary?: boolean;
}

export function ExperienceItem({
  title,
  company,
  companyUrl,
  location,
  period,
  highlights,
  isPrimary = false,
}: ExperienceItemProps) {
  const baseClasses = isPrimary
    ? "mb-2 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300"
    : "mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300";

  const accentColor = isPrimary
    ? "text-gray-800"
    : "text-blue-500 group-hover/item:text-blue-600";

  const borderColor = isPrimary
    ? "bg-gray-800"
    : "bg-gradient-to-b from-blue-500 to-cyan-500";

  const titleHoverColor = isPrimary
    ? "group-hover:text-gray-900"
    : "group-hover:text-blue-600";

  const companyColor = isPrimary ? "text-gray-700" : "text-blue-600";

  return (
    <div className={baseClasses}>
      <div
        className={`absolute left-0 top-0 w-0.5 h-full ${borderColor} rounded-full opacity-75 group-hover:opacity-100 transition-opacity`}
      ></div>
      <div className="pl-3 py-1.5">
        <h3
          className={`text-sm font-bold ${isPrimary ? "text-gray-800" : "text-gray-800"} ${titleHoverColor} transition-colors`}
        >
          {title}
        </h3>
        <div className={`${companyColor} font-medium text-xs mb-0.5`}>
          {company}
          {companyUrl && ` - ${companyUrl}`}
        </div>
        <div className="text-xs text-gray-600 font-medium mb-1">
          {period} | {location}
        </div>
        <ul className="space-y-0.5 text-gray-700 text-xs">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200"
            >
              <span
                className={`${isPrimary ? "text-gray-800" : accentColor} mr-1.5 font-bold`}
              >
                •
              </span>
              <span className="leading-tight">
                {highlight.bold && (
                  <span className="font-bold">{highlight.bold} </span>
                )}
                {highlight.text && <span>{highlight.text} </span>}
                {highlight.semibold && (
                  <span className="font-semibold">{highlight.semibold} </span>
                )}
                {highlight.text2 && <span>{highlight.text2} </span>}
                {highlight.semibold2 && (
                  <span className="font-semibold">{highlight.semibold2} </span>
                )}
                {highlight.text3 && <span>{highlight.text3} </span>}
                {highlight.semibold3 && (
                  <span className="font-semibold">{highlight.semibold3} </span>
                )}
                {highlight.text4 && <span>{highlight.text4}</span>}
                {!highlight.bold && highlight.text && !highlight.semibold && (
                  <span className="font-medium">{highlight.text}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
