"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Printer, Download } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function LebenslaufPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-6 max-w-4xl">
        {/* Print Controls - hidden when printing */}
        <div className="print:hidden mb-6 flex justify-end gap-2">
          <Button variant="outline" onClick={() => window.print()} className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Drucken
          </Button>
          <Button onClick={() => window.print()} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Als PDF speichern
          </Button>
        </div>

        {/* Resume Content */}
        <div className="bg-white shadow-sm border rounded-lg p-8 print:shadow-none print:border-0 print:p-0">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Photo */}
            <div className="md:order-2 flex justify-center md:justify-end">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profilbild"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name and Contact */}
            <div className="md:order-1 flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Max Mustermann</h1>
              <p className="text-xl text-gray-600 mt-1 mb-4">Frontend-Entwickler</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Telefon:</span>
                  <span>+49 123 456789</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">E-Mail:</span>
                  <span>max.mustermann@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Adresse:</span>
                  <span>Musterstraße 123, 10115 Berlin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">LinkedIn:</span>
                  <span>linkedin.com/in/maxmustermann</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">GitHub:</span>
                  <span>github.com/maxmustermann</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Geburtsdatum:</span>
                  <span>01.01.1990</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Berufserfahrung */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Berufserfahrung
              {/* // t('experience') */}
            </h2>

            {[
              {
                title: "Senior Frontend-Entwickler",
                company: "Muster GmbH",
                period: "01/2021 - Heute",
                location: "Berlin, Deutschland",
                description: [
                  "Entwicklung und Wartung von React-basierten Webanwendungen",
                  "Implementierung von responsiven Designs mit Tailwind CSS",
                  "Zusammenarbeit mit Backend-Entwicklern zur Integration von RESTful APIs",
                  "Code-Reviews und Mentoring von Junior-Entwicklern",
                ],
              },
              {
                title: "Frontend-Entwickler",
                company: "Tech Solutions AG",
                period: "03/2018 - 12/2020",
                location: "München, Deutschland",
                description: [
                  "Entwicklung von Single-Page-Applications mit Vue.js",
                  "Implementierung von UI-Komponenten nach Designvorgaben",
                  "Optimierung der Anwendungsleistung und Benutzererfahrung",
                  "Teilnahme an agilen Entwicklungsprozessen (Scrum)",
                ],
              },
            ].map((job, index) => (
              <Card key={index} className="mb-4 p-4 border-l-4 border-l-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{job.title}</h3>
                    <p className="text-gray-700">
                      {job.company} | {job.location}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 md:mt-0">{job.period}</p>
                </div>
                <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </section>

          {/* Ausbildung */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ausbildung
              {/* // t('education') */}
            </h2>

            {[
              {
                degree: "Master of Science in Informatik",
                institution: "Technische Universität Berlin",
                period: "10/2015 - 09/2017",
                description: "Schwerpunkt: Webentwicklung und Künstliche Intelligenz",
              },
              {
                degree: "Bachelor of Science in Informatik",
                institution: "Universität Hamburg",
                period: "10/2012 - 09/2015",
                description: "Grundlagen der Informatik und Softwareentwicklung",
              },
            ].map((edu, index) => (
              <Card key={index} className="mb-4 p-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 md:mt-0">{edu.period}</p>
                </div>
                <p className="text-gray-700 text-sm mt-1">{edu.description}</p>
              </Card>
            ))}
          </section>

          {/* Fähigkeiten */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Fähigkeiten
              {/* // t('skills') */}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Technische Fähigkeiten</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Vue.js",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Git",
                    "REST API",
                    "Node.js",
                    "GraphQL",
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Teamarbeit",
                    "Kommunikation",
                    "Problemlösung",
                    "Zeitmanagement",
                    "Agile Methoden",
                    "Präsentationsfähigkeiten",
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sprachen */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Sprachen
              {/* // t('languages') */}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { language: "Deutsch", level: "Muttersprache", percentage: 100 },
                { language: "Englisch", level: "Fließend (C1)", percentage: 90 },
                { language: "Französisch", level: "Grundkenntnisse (A2)", percentage: 40 },
                { language: "Spanisch", level: "Grundkenntnisse (A1)", percentage: 20 },
              ].map((lang, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-900">{lang.language}</span>
                    <span className="text-gray-600 text-sm">{lang.level}</span>
                  </div>
                  <Progress value={lang.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </section>

          {/* Projekte */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Projekte
              {/* // t('projects') */}
            </h2>

            {[
              {
                title: "E-Commerce-Plattform",
                period: "2022",
                description:
                  "Entwicklung einer E-Commerce-Plattform mit Next.js, Tailwind CSS und Stripe-Integration für Zahlungen.",
                technologies: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
              },
              {
                title: "Dashboard-Anwendung",
                period: "2021",
                description:
                  "Erstellung eines interaktiven Dashboards zur Visualisierung von Unternehmensdaten mit React und D3.js.",
                technologies: ["React", "D3.js", "Material UI", "Firebase"],
              },
            ].map((project, index) => (
              <Card key={index} className="mb-4 p-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 md:mt-0">{project.period}</p>
                </div>
                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </section>

          {/* Referenzen */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Referenzen
              {/* // t('references') */}
            </h2>
            <p className="text-gray-700">Referenzen sind auf Anfrage erhältlich.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

