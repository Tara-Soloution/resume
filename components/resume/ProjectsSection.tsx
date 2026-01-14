import { ProjectItem } from "./ProjectItem";

interface ProjectsSectionProps {
  projects: typeof import("@/lib/resume-data").resumeData.projects;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="mt-4">
      <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
        KEY PROJECTS
      </h2>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}
