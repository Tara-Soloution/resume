"use client"

import { Button } from "@/components/ui/button"
import { Printer, Download } from "lucide-react"

export default function Resume() {
  const handlePDFDownload = async () => {
    try {
      const response = await fetch('/api/generate-pdf');

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'lebenslauf.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error: any) {
      console.error('Error downloading PDF:', error);
      alert(`Failed to download PDF: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0 print:aspect-[1/1.4142] print:w-[210mm] print:h-[297mm]">
        {/* Header Section with decorative elements */}
        <div className="relative mb-5 pb-5 border-b border-gray-100">
          {/* Decorative elements - removing or adjusting */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-0">
            <div className="absolute top-0 right-0 w-32 h-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32"></div>
          </div>

          <div className="flex items-start justify-between relative z-10">
            <div className="flex-1 space-y-2 pt-2">
              <div className="relative">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">HAKIMA MERZAYEE</h1>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600"></div>
              </div>

              <h2 className="text-lg font-medium text-gray-700 pl-1">Senior Frontend-Entwicklerin | Full Stack Engineer</h2>

              <div className="space-y-1.5 text-gray-600 text-xs pl-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📞</span>
                    <span>+989932818276</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📧</span>
                    <span>hakima.merzayee3@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📍</span>
                    <span>Tehran, Qarchak, Iran</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a href="https://github.com/hakimamerzayee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <span className="text-blue-600">🔗</span>
                    <span>github.com/hakimamerzayee</span>
                  </a>
                  <a href="https://linkedin.com/in/hakima-merzayee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <span className="text-blue-600">💼</span>
                    <span>linkedin.com/in/hakima-merzayee</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-16 h-16 bg-white p-1.5 rounded-lg">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=${encodeURIComponent('https://www.tarasolutions.cloud/de/about/team/hakima')}`}
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src="/profile/hakima.jpg"
                    alt="Profilbild"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section - Enhanced for ATS */}
        <div className="mt-2 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">ZUSAMMENFASSUNG</h2>
          <p className="text-xs text-gray-600">
            <span className="font-medium">Erfahrene Full-Stack-Entwicklerin</span> mit fundierter Expertise in <span className="font-semibold">Frontend- und Backend-Entwicklung</span>. Spezialisiert auf <span className="font-semibold">React.js</span>, <span className="font-semibold">Next.js</span>, <span className="font-semibold">PHP/Laravel</span> und <span className="font-semibold">Node.js</span>. Nachgewiesene Erfolge in der Entwicklung skalierbarer Webanwendungen und der Implementierung von benutzerfreundlichen Schnittstellen. Erfahrung in der technischen Leitung und Projektkoordination mit Fokus auf Clean Code und Best Practices.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* Left Column (Experience) */}
          <div className="col-span-2">
            <section>
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">BERUFSERFAHRUNG</h2>

              {/* Tara Solutions Position */}
              <div className="mb-2 relative group hover:bg-gray-50/80 rounded-md transition-colors duration-300 border border-gray-100">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-800 to-gray-600 rounded-l-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-2">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">Frontend Web-Entwicklerin</h3>
                  <div className="text-gray-700 font-medium text-xs mb-1">Tara Solutions Inc., Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span className="flex items-center bg-gray-100/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📅</span>
                      <span className="font-medium">05/2024 - Heute</span>
                    </span>
                    <span className="flex items-center bg-gray-100/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Fernarbeit</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs pl-0.5">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-gray-400 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Entwicklung und Wartung</span> von <span className="font-semibold">responsiven Webanwendungen</span> mit React.js und Next.js</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-gray-400 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Zusammenarbeit</span> mit <span className="font-semibold">UI/UX-Designern & Backend-Teams</span> zur Optimierung der Benutzererfahrung</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-gray-400 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Implementierung</span> von <span className="font-semibold">State Management & Performance-Optimierung</span> mit Redux und Context API</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-gray-400 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Entwicklung</span> von <span className="font-semibold">wiederverwendbaren UI-Komponenten</span> und Custom Hooks für verbesserte Code-Wiederverwendbarkeit</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Listoli Position */}
              <div className="mb-2 relative group hover:bg-blue-50/50 rounded-md transition-colors duration-300 border border-blue-50">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-l-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-2">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Full-Stack Entwicklerin</h3>
                  <div className="text-blue-600 font-medium text-xs mb-1">Listoli LLC, USA</div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📅</span>
                      <span className="font-medium">02/2023 - 04/2024</span>
                    </span>
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Fernarbeit</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs pl-0.5">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Entwicklung</span> von <span className="font-semibold">responsiven Benutzeroberflächen</span> mit modernen React-Patterns</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Implementierung</span> von <span className="font-semibold">OAuth2 und JWT-basierter Authentifizierung</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Durchführung</span> von <span className="font-semibold">Unit- und Integration-Tests</span> mit Jest und React Testing Library</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Optimierung</span> der <span className="font-semibold">Anwendungsleistung</span> durch Code-Splitting und Lazy Loading</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Smart Fariqi Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-md transition-colors duration-300 border border-blue-50/50">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-2">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Full-Stack Entwicklerin</h3>
                  <div className="text-blue-600 font-medium text-xs mb-1">Smart Fariqi (Teebalhoor), Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📅</span>
                      <span className="font-medium">04/2022 - 04/2023</span>
                    </span>
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs pl-0.5">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Entwicklung</span> von <span className="font-semibold">wiederverwendbaren Frontend-Komponenten</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Implementierung</span> von <span className="font-semibold">RESTful APIs und Echtzeit-Funktionalität</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Durchführung</span> von <span className="font-semibold">Tests und Qualitätskontrolle</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Integration</span> von <span className="font-semibold">Datenbank-Systemen und Optimierung</span> der <span className="font-semibold">Datenbankabfragen</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Entwicklung</span> und <span className="font-bold">Wartung</span> von <span className="font-semibold">Microservices-Architekturen</span> mit <span className="font-semibold">Docker und Kubernetes</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bytekent Position */}
              <div className="print:break-before-page mb-2 relative group hover:bg-blue-50/30 rounded-md transition-colors duration-300 border border-blue-50/50">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-2">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Technische Managerin</h3>
                  <div className="text-blue-600 font-medium text-xs mb-1">Bytekent Technology Company, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📅</span>
                      <span className="font-medium">01/2020 - 01/2021</span>
                    </span>
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <div className="bg-blue-50/30 p-2 rounded-md mb-2">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Als Technische Managerin war ich verantwortlich für die strategische Planung und Leitung von Entwicklungsprojekten,
                      mit Fokus auf agile Methoden und effiziente Teamkoordination.
                    </p>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs pl-0.5">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal">
                        <span className="font-bold">Leitung</span> von <span className="font-semibold">Projektplanungssitzungen</span> und
                        <span className="font-semibold"> Implementierung agiler Entwicklungsmethoden</span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal">
                        <span className="font-bold">Optimierung</span> von <span className="font-semibold">Entwicklungsprozessen</span> durch
                        <span className="font-semibold"> effiziente Arbeitsabläufe</span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal">
                        <span className="font-bold">Erfolgreiche Lieferung</span> von <span className="font-semibold">5+ Großprojekten</span> durch
                        <span className="font-semibold"> effektives Risikomanagement</span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal">
                        <span className="font-bold">Verbesserung</span> der <span className="font-semibold">Team-Produktivität um 30%</span> durch
                        <span className="font-semibold"> automatisierte Workflows</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bassoft Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-md transition-colors duration-300 border border-blue-50/50">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-2">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Web-Entwicklerin</h3>
                  <div className="text-blue-600 font-medium text-xs mb-1">Bassoft IT Services Company, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📅</span>
                      <span className="font-medium">04/2018 - 12/2019</span>
                    </span>
                    <span className="flex items-center bg-blue-50/80 px-2 py-0.5 rounded text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs pl-0.5">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Entwicklung</span> von <span className="font-semibold">Desktop-Anwendungen und Websites</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Analyse und Design</span> von <span className="font-semibold">Datenbanken</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded transition-all duration-200">
                      <span className="text-blue-300 mr-1.5 mt-0.5 text-[10px]">●</span>
                      <span className="leading-normal"><span className="font-bold">Durchführung</span> von <span className="font-semibold">Softwareprüfungen und -kontrollen</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">AUSBILDUNG</h2>
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Master in Datenwissenschaft</h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">University of Europe for Applied Sciences</div>
                  <div className="flex text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">03/2025 - Heute</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-bold">Hochqualifiziertes Masterprogramm</span> mit Fokus auf modernste Technologien und Methoden</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-bold">Kernfächer:</span> <span className="font-semibold">Data Science, Data Engineering, Data Analytics, Machine Learning</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-bold">Spezialisierung:</span> <span className="font-semibold">Cloud Computing, Decision Support Systems</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-bold">Zusätzliche Qualifikationen:</span> <span className="font-semibold">Unternehmerisches Denken & Digitale Geschäftsmodelle</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Bachelor in Informatik</h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">Kabul Polytechnic University</div>
                  <div className="flex text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">03/2016 - 08/2019</span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mt-3">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">PROJEKTE</h2>
              <div className="space-y-2">
                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-100">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🔬</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Hautkrankheiten-Erkennungssystem</span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        Ein <span className="font-bold">KI-gestütztes Deep Learning-System</span> zur präzisen Erkennung von 5 spezifischen Hautkrankheiten. Das System verwendet <span className="font-semibold">CNN</span> für die Bildanalyse.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Deep Learning</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Python</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">TensorFlow</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-100">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🏢</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Enterprise Management Suite</span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        Eine umfassende <span className="font-bold">Enterprise-Management-Plattform</span> mit integrierten Modulen für <span className="font-semibold">Benutzer-, Datei-, Produkt-, und Aufgabenverwaltung</span>.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">React.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Node.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Laravel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* References Section */}
            <section className="mt-3 mb-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">REFERENZEN</h2>
              <p className="text-xs text-gray-600">
                Referenzen sind auf Anfrage verfügbar.
              </p>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            {/* Skills Section */}
            <section>
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">TECHNISCHE FÄHIGKEITEN</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Frontend-Entwicklung:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['React.js', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Backend-Entwicklung:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['PHP', 'Laravel', 'Node.js', 'Express.js', 'RESTful APIs'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Datenbanken:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['MySQL', 'PostgreSQL', 'MongoDB'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Tools & Methoden:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['Git', 'Docker', 'Testing', 'CI/CD', 'Agile'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">SPRACHEN</h2>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Dari</span>
                    <span className="text-xs text-gray-600 ml-2">(Muttersprache)</span>
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
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Deutsch</span>
                    <span className="text-xs text-gray-600 ml-2">(A1)</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Awards Section */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">AUSZEICHNUNGEN</h2>
              <div>
                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">🏆</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Duolingo English Test
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        Punktzahl: 105/120
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Action Buttons - Moved to bottom and made cozy */}
        <div className="mt-8 mb-6 flex justify-center gap-4 print:hidden">
          <Button
            onClick={handlePDFDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center"
          >
            <Download className="w-4 h-4 mr-1.5" />
            PDF herunterladen
          </Button>
          <Button
            onClick={() => window.print()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center"
          >
            <Printer className="w-4 h-4 mr-1.5" />
            Drucken
          </Button>
        </div>
      </div>
    </main>
  )
}

