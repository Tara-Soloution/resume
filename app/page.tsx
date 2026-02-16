import Script from "next/script";
import { resumeData } from "@/lib/resume-data";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeSummary } from "@/components/resume/ResumeSummary";
import { ExperienceSection } from "@/components/resume/ExperienceSection";
import { EducationSection } from "@/components/resume/EducationSection";
import { ProjectsSection } from "@/components/resume/ProjectsSection";
import { SkillsSection } from "@/components/resume/SkillsSection";
import { LanguagesSection } from "@/components/resume/LanguagesSection";
import { AwardsSection } from "@/components/resume/AwardsSection";
import { SoftSkillsSection } from "@/components/resume/SoftSkillsSection";
import { CommunityContributionsSection } from "@/components/resume/CommunityContributionsSection";
import { ActionButtons } from "@/components/resume/ActionButtons";

export default function Resume() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.personal.name,
    alternateName: resumeData.personal.fullName,
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 4+ years building production applications in TypeScript. Strong React and Node.js experience. Berlin, Germany.",
    url: resumeData.personal.portfolio,
    image: `https://www.ataie.me${resumeData.personal.profileImage}`,
    email: resumeData.personal.email,
    telephone: resumeData.personal.phone,
    sameAs: [
      resumeData.personal.github,
      resumeData.personal.linkedin,
      "https://www.youtube.com/@abbas-ataie",
      "https://roshanayee.com",
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-white font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0 print:aspect-[1/1.4142] print:w-[210mm] print:h-[297mm]">
          <ResumeHeader personal={resumeData.personal} />
          <ResumeSummary summary={resumeData.summary} />

          <div className="mt-6 grid grid-cols-3 gap-4">
            {/* Left Column (Experience) */}
            <div className="col-span-2">
              <ExperienceSection experiences={resumeData.experience} />
              <EducationSection education={resumeData.education} />
              <ProjectsSection projects={resumeData.projects} />
            </div>

            {/* Right Column */}
            <div className="col-span-1">
              <SkillsSection skills={resumeData.technicalSkills} />
              <LanguagesSection languages={resumeData.languages} />
              <AwardsSection awards={resumeData.awards} />
              <SoftSkillsSection skills={resumeData.softSkills} />
              <CommunityContributionsSection
                contributions={resumeData.communityContributions}
              />
            </div>
          </div>

          <ActionButtons />
        </div>
      </main>
    </>
  );
}
