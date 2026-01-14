interface ResumeHeaderProps {
  personal: typeof import("@/lib/resume-data").resumeData.personal;
}

export function ResumeHeader({ personal }: ResumeHeaderProps) {
  return (
    <div className="relative mb-5 pb-5 border-b border-gray-100">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-0">
        <div className="absolute top-0 right-0 w-32 h-32"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32"></div>
      </div>

      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1 space-y-2 pt-2">
          <div className="relative">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              {personal.name} | {personal.title}
            </h1>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600"></div>
          </div>
          <h2 className="text-lg font-medium text-gray-700 pl-1">
            {personal.subtitle}
          </h2>
          <div className="space-y-1.5 text-gray-600 text-xs pl-1">
            <div className="flex flex-wrap items-center gap-3">
              <span>Phone: {personal.phone}</span>
              <span>Email: {personal.email}</span>
              <a
                href={personal.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Portfolio: {personal.portfolio.replace(/^https?:\/\//, "")}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                GitHub: {personal.github.replace(/^https?:\/\//, "")}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                LinkedIn: {personal.linkedin.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="w-24 h-24 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                personal.portfolio
              )}`}
              alt="QR Code linking to portfolio website"
              className="w-full h-full object-contain"
              loading="lazy"
              width={96}
              height={96}
            />
          </div>
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src={personal.profileImage}
                alt={`${personal.name} - Senior Software Engineer and Technical Lead`}
                className="h-full w-full object-cover object-center"
                loading="eager"
                width={112}
                height={112}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
