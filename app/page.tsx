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
    jobTitle: "Senior Software Engineer",
    description:
      "Senior Software Developer and Technical Lead with over 5 years of experience in developing and scaling enterprise applications.",
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

          {/* German Projects Section - keeping for now */}
          <section className="mt-4">
            <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
              PROJEKTE
            </h2>
            <div className="space-y-2">
              <div className="group">
                <div className="text-xs text-gray-700 flex items-start">
                  <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                  <div className="flex-1">
                    <span className="font-bold group-hover:text-blue-600 transition-colors">
                      Cloud Station Plattform
                    </span>
                    <p className="text-xs text-gray-600 leading-tight mt-0.5">
                      <span className="font-bold">
                        Skalierbare Enterprise-Cloud-Services-Plattform
                      </span>{" "}
                      mit globaler Nutzerbasis.{" "}
                      <span className="font-semibold">
                        Implementierung von Frontend und Backend
                      </span>{" "}
                      mit Fokus auf Leistung.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        React.js
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        Next.js
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        Node.js
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        Kafka
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        Nats
                      </span>
                    </div>
                    <a
                      href="https://www.cloud-station.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"
                    >
                      <span>🔗</span>
                      <span className="hover:underline">
                        www.cloud-station.io
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="text-xs text-gray-700 flex items-start">
                  <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                  <div className="flex-1">
                    <span className="font-bold group-hover:text-blue-600 transition-colors">
                      Tara Solutions Cloud
                    </span>
                    <p className="text-xs text-gray-600 leading-tight mt-0.5">
                      <span className="font-bold">
                        Entwicklung der offiziellen Website
                      </span>{" "}
                      von Tara Solutions Inc. mit Fokus auf{" "}
                      <span className="font-semibold">
                        Leistungsoptimierung
                      </span>{" "}
                      und <span className="font-semibold">Sicherheit</span>
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        Next.js
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        React.js
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                        Node.js
                      </span>
                    </div>
                    <a
                      href="https://www.tarasolutions.cloud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"
                    >
                      <span>🔗</span>
                      <span className="hover:underline">
                        www.tarasolutions.cloud
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="text-xs text-gray-700 flex items-start">
                  <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                  <div className="flex-1">
                    <span className="font-bold">
                      Plant Disease Detection System
                    </span>
                    <p className="text-xs text-gray-600 leading-tight mt-0.5">
                      AI-powered deep learning system for detecting plant
                      diseases using Raspberry Pi and camera for real-time
                      diagnosis.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
                        Deep Learning
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
                        Raspberry Pi
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
                        Python
                      </span>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
                        Computer Vision
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ActionButtons />
        </div>
      </main>
    </>
  );
}
