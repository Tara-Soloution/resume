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
      a.download = "lebenslauf.pdf";
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:max-w-none print:px-0 print:py-0 print:aspect-[1/1.4142] print:w-[210mm] print:h-[297mm]">
        {/* Header Section with enhanced styling */}
        <div className="relative mb-6 pb-4 border-b border-gray-200 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-start justify-between relative z-10">
            <div className="flex-1 space-y-2 pt-1">
              <div className="relative">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  NAWEED BARKHORDAR
                </h1>
                <div className="absolute -bottom-1 left-0 w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              </div>

              <h2 className="text-lg font-medium text-gray-700 pl-1">
                Computer Science Student | IT Support Specialist | Programming
                Enthusiast
              </h2>

              <div className="space-y-1.5 text-gray-600 text-sm pl-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📞</span>
                    <span>+989377797854</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📧</span>
                    <span>naweedbar@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📍</span>
                    <span>Tehran, Iran</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">🎓</span>
                    <span>Bewerber für Bachelor in Informatik</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">🌐</span>
                    <span>Afghanische Staatsangehörigkeit</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-28 h-28">
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/profile/nawed-avatar.jpg"
                  alt="Profilbild"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section - Enhanced styling */}
        <div className="mt-4 mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800 flex items-center gap-2">
            <span className="text-blue-600">👋</span>
            ZUSAMMENFASSUNG
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-medium">
              Motivierter Student mit starkem Interesse an Informatik
            </span>{" "}
            und ausgezeichneten Englischkenntnissen (TOEFL: 103). Besitze
            fundierte Kenntnisse in{" "}
            <span className="font-semibold text-blue-600">Programmierung</span>,{" "}
            <span className="font-semibold text-blue-600">IT-Support</span> und{" "}
            <span className="font-semibold text-blue-600">
              technischer Problemlösung
            </span>
            . Aktuell vertiefe ich meine Fähigkeiten in C++ und Webentwicklung.
            Bestrebt, mein Studium der Informatik an der University of Europe
            for Applied Sciences zu beginnen, um meine technischen Fähigkeiten
            weiterzuentwickeln und mich auf eine Karriere in der
            Softwareentwicklung vorzubereiten.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {/* Left Column (Experience) */}
          <div className="col-span-2 space-y-4">
            <section className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800 flex items-center gap-2">
                <span className="text-blue-600">💼</span>
                BERUFSERFAHRUNG
              </h2>

              {/* Carton Machine Position */}
              <div className="mb-3 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300 p-3">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        Lagerleiter & IT-Support
                      </h3>
                      <div className="text-blue-600 font-medium text-xs">
                        Carton Machine, Tehran • Vor Ort
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">04/2023 - Heute</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Verantwortlich für die Implementierung und Wartung von
                    IT-Systemen in einer führenden Produktionsstätte für
                    Wellpappenmaschinen, mit Fokus auf die Optimierung der
                    Produktionsprozesse und digitalen Infrastruktur.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Implementierung und Verwaltung
                        </span>{" "}
                        von IT-Systemen für die Produktion von
                        Wellpappenmaschinen
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Technische Unterstützung
                        </span>{" "}
                        für die Produktion von 3-, 5- und 7-lagigen Wellpappen
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Optimierung der digitalen Infrastruktur
                        </span>{" "}
                        für die Produktionslinien und Lagerverwaltung
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Unterstützung bei der Implementierung
                        </span>{" "}
                        von elektronischen Steuerungssystemen für
                        Produktionsmaschinen
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <span className="font-medium">Referenz:</span> Carton
                    Machine
                    <br />
                    <span className="font-medium">Kontakt:</span>{" "}
                    cartonmachine@yahoo.com
                    <br />
                    <span className="font-medium">Website:</span>{" "}
                    https://www.cartonmachine.ir/
                  </div>
                </div>
              </div>

              {/* Narvan Training Center Position */}
              <div className="mb-3 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300 p-3">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        Computerausbilder
                      </h3>
                      <div className="text-blue-600 font-medium text-xs">
                        Narvan Training Center, Kabul • Vor Ort
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">11/2022 - 04/2023</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Leitung von Computerkursen für Anfänger und
                    Fortgeschrittene, mit Schwerpunkt auf praktischer Anwendung
                    und individueller Betreuung der Schüler.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Unterricht in Microsoft Office
                        </span>{" "}
                        und grundlegenden Computerkenntnissen
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Entwicklung praxisnaher Lerninhalte
                        </span>{" "}
                        mit Fokus auf praktische Anwendung
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Individuelle Betreuung
                        </span>{" "}
                        und Unterstützung der Schüler
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <span className="font-medium">Referenz:</span> Narvan
                    Training Center
                    <br />
                    <span className="font-medium">Kontakt:</span>{" "}
                    kaihan.paidar1400@gmail.com
                    <br />
                    <span className="font-medium">Website:</span>{" "}
                    https://www.facebook.com/share/1DgU2fwuTi/
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-1 space-y-4">
            {/* Skills Section */}
            <section className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800 flex items-center gap-2">
                <span className="text-blue-600">🛠️</span>
                TECHNISCHE FÄHIGKEITEN
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Programmierung:
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {["C++", "HTML", "CSS", "Microsoft Office Suite"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Software & Tools:
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Microsoft Office",
                      "Adobe Photoshop",
                      "Adobe InDesign",
                      "Adobe Dreamweaver",
                      "Zoom",
                      "Google Docs",
                      "Google Drive",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Soft Skills:
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Problemlösung",
                      "Teamarbeit",
                      "Kommunikation",
                      "Selbstständigkeit",
                      "Lernbereitschaft",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800 flex items-center gap-2">
                <span className="text-blue-600">🌍</span>
                SPRACHEN
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Dari</span>
                    <span className="text-xs text-gray-600 ml-2">
                      (Muttersprache)
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Englisch</span>
                    <span className="text-xs text-gray-600 ml-2">
                      (C1 - TOEFL 103)
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Pashto</span>
                    <span className="text-xs text-gray-600 ml-2">(C2)</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Uzbaki</span>
                    <span className="text-xs text-gray-600 ml-2">(B2)</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Education Section - Moved to second page */}
        <div className="mt-4 grid gap-4 print:break-before-page">
          <div className="col-span-2">
            <section className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800 flex items-center gap-2">
                <span className="text-blue-600">🎓</span>
                AUSBILDUNG
              </h2>

              {/* C++ Course */}
              <div className="mb-3 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300 p-3">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        C++ Programmierung
                      </h3>
                      <div className="text-blue-600 font-medium text-xs">
                        Roshanayee Educational Society, Online
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">02/2025 - Heute</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Vertiefung in moderner C++-Programmierung mit Fokus auf
                    objektorientierte Konzepte, Datenstrukturen und Algorithmen.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Vertiefung in objektorientierter Programmierung
                        </span>{" "}
                        und Datenstrukturen
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <span className="font-medium">Website:</span>{" "}
                    https://roshanayee.com/
                  </div>
                </div>
              </div>

              {/* HTML & CSS Course */}
              <div className="mb-3 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300 p-3">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        HTML & CSS
                      </h3>
                      <div className="text-blue-600 font-medium text-xs">
                        Roshanayee Educational Society, Online
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">10/2024 - 02/2025</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Kompletter Kurs in moderner Webentwicklung mit Schwerpunkt
                    auf responsive Design und Best Practices.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Moderne Webentwicklung
                        </span>{" "}
                        mit Fokus auf responsive Design
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <span className="font-medium">Website:</span>{" "}
                    https://roshanayee.com/
                  </div>
                </div>
              </div>

              {/* Advanced English */}
              <div className="mb-3 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300 p-3">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        Advanced English
                      </h3>
                      <div className="text-blue-600 font-medium text-xs">
                        Ilia Educational Association, Tehran
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">02/2024 - 09/2024</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Intensiver Sprachkurs mit Fokus auf akademisches Englisch
                    und TOEFL-Vorbereitung, abgeschlossen mit hervorragender
                    Note.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">TOEFL Vorbereitung</span>{" "}
                        mit Abschlussnote 103
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <span className="font-medium">Website:</span>{" "}
                    http://Portal.goilia.org
                  </div>
                </div>
              </div>

              {/* High School */}
              <div className="mb-3 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300 p-3">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        Abschlusszeugnis der Oberschule
                      </h3>
                      <div className="text-blue-600 font-medium text-xs">
                        Arqam Amiri Private High School, Kabul
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">03/2010 - 10/2022</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Vollständige Sekundarschulbildung mit Schwerpunkt auf
                    Mathematik und Naturwissenschaften, abgeschlossen mit
                    ausgezeichneten Leistungen.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        ▹
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Schwerpunkt auf Mathematik und Naturwissenschaften
                        </span>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <span className="font-medium">Website:</span>{" "}
                    https://www.facebook.com/share/1Gck1PFWjX/?mibextid=wwXIfr
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 mb-4 flex justify-center gap-4 print:hidden">
          <Button
            onClick={handlePDFDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            PDF herunterladen
          </Button>
          <Button
            onClick={() => window.print()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Drucken
          </Button>
        </div>
      </div>
    </main>
  );
}
