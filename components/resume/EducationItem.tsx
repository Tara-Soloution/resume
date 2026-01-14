interface Highlight {
  bold?: string;
  text?: string;
  semibold?: string;
}

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  highlights: Highlight[];
}

export function EducationItem({
  degree,
  institution,
  period,
  highlights,
}: EducationItemProps) {
  return (
    <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
      <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
      <div className="pl-3 py-1.5">
        <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {degree}
        </h3>
        <div className="text-blue-600 font-medium text-xs mb-0.5">
          {institution}
        </div>
        <div className="text-xs text-gray-600 font-medium mb-1">{period}</div>
        <ul className="space-y-0.5 text-gray-700 text-xs">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200"
            >
              <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                •
              </span>
              <span className="leading-tight">
                {highlight.bold && (
                  <span className="font-bold">{highlight.bold} </span>
                )}
                {highlight.semibold && (
                  <span className="font-semibold">{highlight.semibold}</span>
                )}
                {highlight.text && <span>{highlight.text}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
