interface ProjectItemProps {
  name: string;
  description: string;
  tags: string[];
  url?: string;
}

export function ProjectItem({ name, description, tags, url }: ProjectItemProps) {
  return (
    <div className="group">
      <div className="text-xs text-gray-700 flex items-start">
        <span className="text-blue-500 mr-1.5 font-bold">•</span>
        <div className="flex-1">
          <span className="font-bold group-hover:text-blue-600 transition-colors">
            {name}
          </span>
          <p className="text-xs text-gray-600 leading-tight mt-0.5">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 mt-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"
            >
              <span>🔗</span>
              <span className="hover:underline">
                {url.replace(/^https?:\/\//, "")}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
