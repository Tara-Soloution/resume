"use client";

import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";

export default function Resume() {
  const handlePDFDownload = async () => {
    try {
      const response = await fetch("/api/generate-pdf");

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Lebenslauf.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error: any) {
      console.error("Error downloading PDF:", error);
      alert(`Failed to download PDF: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0 print:aspect-[1/1.4142] print:w-[210mm] print:h-[297mm]">
        {/* Header Section with decorative elements */}
        <div className="relative mb-5 pb-5 border-b border-gray-100">
          {/* Dekorative Elemente – entfernt oder angepasst */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-0">
            <div className="absolute top-0 right-0 w-32 h-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32"></div>
          </div>

          <div className="flex items-start justify-between relative z-10">
            <div className="flex-1 space-y-2 pt-2">
              <div className="relative">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Ghulam Abbas Ataie | Softwareentwickler
                </h1>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600"></div>
              </div>
              <h2 className="text-lg font-medium text-gray-700 pl-1">
                Senior Softwareentwickler | Full Stack Engineer |
                Cloud-Architekt
              </h2>
              <div className="space-y-1.5 text-gray-600 text-xs pl-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span>Telefon: +49 1578 4246219</span>
                  <span>E-Mail: abbas.ataie.montazer@gmail.com</span>
                  <a
                    href="https://www.ataie.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Portfolio: www.ataie.me
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/abbasatayee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    GitHub: github.com/abbasatayee
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abbas-ataie-72a4431b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    LinkedIn: linkedin.com/in/abbas-ataie-72a4431b9/
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-24 h-24 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                    "https://www.ataie.me"
                  )}`}
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src="/profile/abbas.jpg"
                    alt="Profilbild"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zusammenfassung – für ATS optimiert */}
        <div className="mt-2 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
            ZUSAMMENFASSUNG
          </h2>
          <p className="text-xs text-gray-600">
            Senior Softwareentwickler und Technischer Leiter mit über fünf
            Jahren Erfahrung in der Entwicklung und Skalierung von
            Unternehmensanwendungen. Derzeit im Masterstudium Data Science an
            der University of Europe for Applied Sciences. Nachgewiesene
            Expertise in Full-Stack-Entwicklung, Cloud-Architektur und
            technischer Führung. Spezialisierung auf Node.js, React.js,
            TypeScript, Microservices und Cloud-Technologien. Erfolgreiche
            Leitung von Teams und Umsetzung technischer Strategien zur
            Entwicklung skalierbarer und wartbarer Softwarelösungen. Aktuell
            Senior Software Engineer bei CloudStation.io mit Fokus auf
            innovative Cloud-Lösungen und Enterprise-Architektur.
          </p>

          <div className="mt-3">
            <h3 className="text-xs font-bold text-gray-800 mb-1">
              Kernkompetenzen:
            </h3>
            <p className="text-xs text-gray-700">
              Full-Stack-Webentwicklung, Microservices, TypeScript, React.js,
              Node.js, CI/CD, Cloud-Lösungen, Agile/Scrum, Technische Leitung
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* Left Column (Experience) */}
          <div className="col-span-2">
            <section>
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                BERUFLICHE ERFAHRUNG
              </h2>

              {/* Senior Software Engineer Position */}
              <div className="mb-2 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-800 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    Senior Software Entwickler
                  </h3>
                  <div className="text-gray-700 font-medium text-xs mb-0.5">
                    Cloud Station LLC FZ (Dubai) – CloudStation.io
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Okt. 2022 – heute | Remote
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Architektur von Microservices und Entwicklung von Web-
                          & Mobile-Anwendungen
                        </span>{" "}
                        mit{" "}
                        <span className="font-semibold">
                          Node.js, React.js, Next.js, TypeScript, React Native,
                          Nats, Docker, Hashicorp Nomad, Kafka, PostgreSQL
                        </span>{" "}
                        und weiteren Technologien.
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Entwicklung von Enterprise-Lösungen
                        </span>{" "}
                        bei Cloud Station LLC FZ (Dubai), einschließlich{" "}
                        <span className="font-semibold">
                          Zahlungs- und Abonnement-Systemen
                        </span>
                        . Außerdem Entwicklung eines automatisierten Dienstes
                        für{" "}
                        <span className="font-semibold">
                          One-Click-Deployment
                        </span>
                        .
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Technische Teamleitung
                        </span>
                        , Implementierung von{" "}
                        <span className="font-semibold">
                          Code-Qualitätsstandards
                        </span>{" "}
                        und Best Practices
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Architektur und strategische Planung
                        </span>{" "}
                        von <span className="font-semibold">Microservices</span>{" "}
                        und{" "}
                        <span className="font-semibold">
                          Cloud-Infrastrukturen
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">Führung und Mentoring</span>{" "}
                        eines internationalen Entwicklungsteams mit Fokus auf{" "}
                        <span className="font-semibold">Agile Methoden</span>{" "}
                        und{" "}
                        <span className="font-semibold">
                          Continuous Integration/Deployment
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Senior Fullstack Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Senior Full Stack Entwickler
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    Listoli LLC, USA
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Okt. 2022 – Dez. 2023 | Remote
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Design und Optimierung
                        </span>{" "}
                        von{" "}
                        <span className="font-semibold">
                          PostgreSQL-Datenbanken
                        </span>{" "}
                        für E-Commerce-Systeme
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Entwicklung von RESTful APIs
                        </span>{" "}
                        und <span className="font-semibold">Microservices</span>{" "}
                        mit <span className="font-semibold">NestJS</span> und{" "}
                        <span className="font-semibold">Next.js</span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">CI/CD Automatisierung</span>{" "}
                        mit{" "}
                        <span className="font-semibold">GitHub Actions</span>{" "}
                        und{" "}
                        <span className="font-semibold">
                          Google Cloud Platform
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Click.af Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Full Stack Entwickler
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    Click.af, Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Juni 2021 – Sep. 2022 | Vor Ort
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Entwicklung von Web- und Mobile-Anwendungen
                        </span>{" "}
                        mit React.js, Node.js, Next.js, React Native
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Integration von Vendor-APIs
                        </span>{" "}
                        für effizientes Bestell- und Zahlungsmanagement
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Implementierung von E-Commerce-Funktionen
                        </span>{" "}
                        und Benutzeroberflächen
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BlueBit Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Full Stack Entwickler
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    BlueBit Networking Services, Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Feb. 2021 – Juli 2021 | Vor Ort
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Entwicklung und Verwaltung
                        </span>{" "}
                        von hochfrequentierten Webanwendungen mit Python,
                        Django, React Native, MySQL und React.js
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Entwicklung eines Petition-Management-Systems
                        </span>{" "}
                        für das Verteidigungsministerium mit Fokus auf
                        Prozessoptimierung und Workflow-Verbesserung
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Workflow-Optimierung
                        </span>{" "}
                        und Usability-Verbesserung der entwickelten Systeme
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IAP Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300 break-before-page">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Junior Webentwickler
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    IAP, Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Feb. 2020 – Apr. 2020 | Vor Ort
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Entwicklung eines Digitalisierungssystems für
                          sozio-ökonomische Provinzprofile des MOEC
                        </span>{" "}
                        in Zusammenarbeit mit Tetra Tech
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">Webentwicklung</span> mit
                        PHP Laravel, MySQL, HTML, CSS, Vue.js und JavaScript
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">Support und Wartung</span>{" "}
                        bestehender Websites, Fehlerbehebung und Optimierung
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Praktische Erfahrung
                        </span>{" "}
                        in Softwareentwicklung, Debugging und
                        Performance-Optimierung
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Education Section - Adjusted position */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                AUSBILDUNG
              </h2>
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Master in Data Science
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    University of Europe for Applied Sciences
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    März 2025 – heute
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Hochwertiges Masterprogramm
                        </span>{" "}
                        mit Fokus auf modernste Technologien und Methoden
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">Kernfächer:</span>{" "}
                        <span className="font-semibold">
                          Data Science, Data Engineering, Data Analytics,
                          Machine Learning
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">Spezialisierung:</span>{" "}
                        <span className="font-semibold">
                          Cloud Computing, Entscheidungsunterstützungssysteme
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Zusätzliche Qualifikationen:
                        </span>{" "}
                        <span className="font-semibold">
                          Unternehmerisches Denken & Digitale Geschäftsmodelle
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Bachelor in Informatik
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    Polytechnische Universität Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    März 2016 – Aug. 2019
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Abschluss als Zweitbester des Jahrgangs
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Mentoring und Unterstützung
                      </span>{" "}
                      von Kommilitonen in Programmierung und Algorithmen
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">Schwerpunkte:</span>{" "}
                      Software Engineering, Datenbanken, Netzwerke und KI
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Abdul Rahim Shahid High School
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Abschluss: 2015
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Abschlussnote:{" "}
                        <span className="font-semibold">93,44 %</span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Unter den Besten des Jahrgangs
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Hervorragende Leistungen in Naturwissenschaften,
                        Mathematik und Sprachen
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projekte Abschnitt - Angepasste Position */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                WICHTIGE PROJEKTE
              </h2>
              <div className="space-y-2">
                <div className="group">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">•</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Cloud Station Plattform
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        <span className="font-bold">
                          Enterprise-fähige Cloud-Bereitstellungsplattform
                        </span>{" "}
                        für schnelle Applikationsbereitstellung und
                        Multi-Cloud-Management.{" "}
                        <span className="font-semibold">
                          Implementierung einer zentralen Schnittstelle und
                          Automatisierung
                        </span>{" "}
                        mit Fokus auf Sicherheit und Skalierbarkeit.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Multi-Cloud
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          CI/CD
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Infrastructure as Code
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Sicherheit
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
                    <span className="text-blue-500 mr-1.5 font-bold">•</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        5th Wave
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        <span className="font-bold">
                          KI-basierte Sprachtransformationsplattform
                        </span>{" "}
                        für mehrsprachiges Voice-Cloning unter Beibehaltung
                        individueller Stimmmerkmale.{" "}
                        <span className="font-semibold">
                          Implementierung von Echtzeit-Sprachverarbeitung
                        </span>{" "}
                        mit fortschrittlichen KI-Algorithmen für perfekte
                        Stimmreplikation.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          KI/ML
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Python
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Node.js
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Echtzeitverarbeitung
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          API-Entwicklung
                        </span>
                      </div>
                      <a
                        href="https://wave.cloud-station.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"
                      >
                        <span>🔗</span>
                        <span className="hover:underline">
                          wave.cloud-station.io
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">•</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Tara Solutions Cloud
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        <span className="font-bold">
                          Anbieter für digitale Transformationslösungen
                        </span>{" "}
                        mit umfassenden Cloud-, Web- und Mobile-Lösungen.{" "}
                        <span className="font-semibold">
                          Implementierung von Enterprise-fähiger Infrastruktur
                        </span>{" "}
                        mit Fokus auf Skalierbarkeit und Sicherheit.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Cloud-Lösungen
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Webentwicklung
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Mobile Apps
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          DevOps
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          KI-Integration
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
                    <span className="text-blue-500 mr-1.5 font-bold">•</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Pflanzenerkennungssystem
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        KI-basiertes Deep-Learning-System zur Erkennung von
                        Pflanzenkrankheiten unter Verwendung von Raspberry Pi
                        und Kamera für Echtzeitdiagnose.
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
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            {/* Skills Section - Reorganized for ATS */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                TECHNISCHE FÄHIGKEITEN
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Programmiersprachen:
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Node.js
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      JavaScript
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      TypeScript
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Python
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      PHP
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Golang
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Frameworks & Bibliotheken:
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      React.js
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Next.js
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Node.js
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      NestJS
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Express.js
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      React Native
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Django
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      FastAPI
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Flask
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded">
                      Laravel
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Datenbanken & Speicher:
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      PostgreSQL
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      MongoDB
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      MariaDB
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      MySQL
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Redis
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Cloud & DevOps:
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      AWS
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      GCP
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Docker
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      CI/CD
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Git
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      GitHub Actions
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded">
                      Nomad
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Architektur & Methoden:
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Microservices
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      RESTful APIs
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Event-Driven Architecture
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Agile/Scrum
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      TDD
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Clean Architecture
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Objektorientierte Programmierung
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded">
                      Funktionale Programmierung
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Sprachen Abschnitt */}
            <section className="mt-6 print:break-inside-avoid">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                SPRACHEN
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Dari</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-700">
                    Muttersprache
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Englisch</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-700">
                    Fließend (C1)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Deutsch</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-700">
                    Grundkenntnisse (A2)
                  </span>
                </div>
              </div>
            </section>

            {/* Auszeichnungen Abschnitt */}
            <section className="mt-8 break-before-page">
              <h2 className="text-base font-bold border-b pb-1 mb-3 text-gray-800">
                AUSZEICHNUNGEN
              </h2>
              <div className="space-y-3">
                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🏆</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Zertifizierter Micro1.ai Developer
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        Zertifiziert durch micro1.ai - Weltbester KI-Recruiter
                        für technische Exzellenz und
                        Softwareentwicklungskompetenz
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🏆</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Asia Kabul Regional ACM/ICPC Wettbewerb 2018
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        3. Platz unter 40 Teams
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🎯</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Duolingo Englisch Test
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        Punktzahl: 120 von 160
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Soft Skills Abschnitt */}
            <section className="mt-8">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                SOZIALKOMPETENZEN
              </h2>
              <div className="space-y-2">
                <div className="text-xs text-gray-600 leading-relaxed">
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Führungskompetenz
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Teamführung
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Problemlösung
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Kommunikation
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Zeitmanagement
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Anpassungsfähigkeit
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Kritisches Denken
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Projektmanagement
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Mentoring
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Strategische Planung
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Funktionsübergreifende Teamarbeit
                  </span>
                </div>
              </div>
            </section>

            {/* Community Contributions Section */}
            <section className="mt-8">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                GEMEINSCHAFTSBEITRÄGE
              </h2>
              <div className="space-y-3">
                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🎓</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Roshanayee.com
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        Gründer und Hauptdozent einer Bildungsplattform für
                        Programmierung und technisches Wissen. Entwicklung und
                        Durchführung von Kursen für die breite Öffentlichkeit.
                      </p>
                      <a
                        href="https://roshanayee.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"
                      >
                        <span>🔗</span>
                        <span className="hover:underline">roshanayee.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">📺</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        YouTube Channel
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        Aktiver Content-Creator mit Fokus auf Technologie,
                        Programmierung und Softwareentwicklung. Regelmäßige
                        Veröffentlichung von Tutorials und technischen
                        Erklärungen.
                      </p>
                      <a
                        href="https://www.youtube.com/@abbas-ataie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"
                      >
                        <span>🔗</span>
                        <span className="hover:underline">
                          youtube.com/@abbas-ataie
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 mb-6 flex justify-center gap-4 print:hidden">
          <Button
            onClick={handlePDFDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center"
          >
            <Download className="w-4 h-4 mr-1.5" />
            Download PDF
          </Button>
          <Button
            onClick={() => window.print()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center"
          >
            <Printer className="w-4 h-4 mr-1.5" />
            Print
          </Button>
        </div>
      </div>
    </main>
  );
}
