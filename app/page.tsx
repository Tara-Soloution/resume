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
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gray-800"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gray-800"></div>
          </div>

          <div className="flex items-start justify-between relative z-10">
            <div className="flex-1 space-y-2 pt-2">
              <div className="relative">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">GHULAM ABBAS ATAIE</h1>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600"></div>
              </div>

              <h2 className="text-lg font-medium text-gray-700 pl-1">Senior Software-Entwickler | Full Stack Engineer | Cloud Architect</h2>

              <div className="space-y-1.5 text-gray-600 text-xs pl-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📞</span>
                    <span>+989912906146</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📧</span>
                    <span>abbas.ataie.montazer@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-600">📍</span>
                    <span>Berlin, Deutschland</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a href="https://github.com/abbasatayee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <span className="text-blue-600">🔗</span>
                    <span>github.com/abbasatayee</span>
                  </a>
                  <a href="https://linkedin.com/in/abbas-ataie-72a4431b9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <span className="text-blue-600">💼</span>
                    <span>linkedin.com/in/abbas-ataie-72a4431b9</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-16 h-16 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=${encodeURIComponent('https://www.tarasolutions.cloud/de/about/team/abbas')}`}
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-lg overflow-hidden border border-gray-100">
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

        {/* Summary Section - Enhanced for ATS */}
        <div className="mt-2 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">ZUSAMMENFASSUNG</h2>
          <p className="text-xs text-gray-600">
            <span className="font-medium">Senior Software-Entwickler und technischer Leiter</span> mit über 5 Jahren Erfahrung in der Entwicklung und Skalierung von Enterprise-Anwendungen. Nachgewiesene Expertise in <span className="font-semibold">Full-Stack-Entwicklung</span>, <span className="font-semibold">Cloud-Architektur</span> und <span className="font-semibold">technischer Führung</span>. Spezialisiert auf <span className="font-semibold">Node.js</span>, <span className="font-semibold">React.js</span>, <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Microservices</span> und <span className="font-semibold">Cloud-Technologien</span>. Erfolgreiche Leitung von Teams und Umsetzung von technischen Strategien zur Entwicklung skalierbarer und wartbarer Softwarelösungen. Derzeit CTO bei Tara Solutions mit Fokus auf innovative Cloud-Lösungen und Unternehmensarchitektur.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* Left Column (Experience) */}
          <div className="col-span-2">
            <section>
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">BERUFSERFAHRUNG</h2>

              {/* CTO Position */}
              <div className="mb-2 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-800 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">Technischer Geschäftsführer (CTO)</h3>
                  <div className="text-gray-700 font-medium text-xs mb-0.5">Tara Solutions Inc., Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-gray-100 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">01/2024 - Heute</span>
                    </span>
                    <span className="flex items-center bg-gray-100 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Fernarbeit</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-bold">Entwicklung von Web- und Mobile-Anwendungen</span> mit <span className="font-semibold">Node.js, React.js, Nomad, TypeScript, React Native</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-bold">Strategische Partnerschaft</span> mit Cloud Station LLC FZ (Dubai) für <span className="font-semibold">Enterprise-Cloud-Lösungen</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-bold">Technische Teamleitung</span>, Implementierung von <span className="font-semibold">Code-Qualitätsstandards</span> und Best Practices</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-bold">Architektur und strategische Planung</span> von <span className="font-semibold">Microservices</span> und <span className="font-semibold">Cloud-Infrastrukturen</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Senior Fullstack Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Senior Fullstack-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">Listoli LLC, USA</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">10/2022 - 12/2023</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Fernarbeit</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-bold">Design und Optimierung</span> von <span className="font-semibold">PostgreSQL-Datenbanken</span> für E-Commerce-Systeme</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-bold">Entwicklung von RESTful APIs</span> und <span className="font-semibold">Microservices</span> mit <span className="font-semibold">NestJS</span> und <span className="font-semibold">Next.js</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-bold">CI/CD-Automatisierung</span> mit <span className="font-semibold">GitHub Actions</span> und <span className="font-semibold">Google Cloud Platform</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Click.af Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Fullstack-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">Click.af, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">06/2021 - 09/2022</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Entwicklung von Web- und Mobile-Anwendungen</span> mit React.js, Node.js, Next.js, React Native</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Integration der Vendor-API</span> für effizientes Auftrags- und Zahlungsmanagement</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Implementierung von E-Commerce-Funktionen</span> und Benutzeroberflächen</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BlueBit Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Fullstack-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">BlueBit Networking Services, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">02/2021 - 07/2021</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Entwicklung und Verwaltung</span> von hochfrequentierten Webanwendungen mit Python, Django, React Native, MySQL und React.js</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Entwicklung eines Petitionsmanagement-Systems</span> für das Verteidigungsministerium mit Fokus auf Prozessoptimierung und Workflow-Verbesserung</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Optimierung der Arbeitsabläufe</span> und Benutzerfreundlichkeit der entwickelten Systeme</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IAP Position */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Junior Web-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">IAP, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">02/2020 - 04/2020</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Entwicklung des MOEC Socio-Economic Provincial Profiles Digitalisierungssystems</span> in Zusammenarbeit mit Tetra Tech</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Webentwicklung</span> mit PHP Laravel, MySQL, HTML, CSS, Vue.js und JavaScript</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Support und Wartung</span> von bestehenden Websites, Fehlerbehebung und Optimierung</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Praktische Erfahrung</span> in Software-Entwicklung, Debugging und Performance-Optimierung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section - Adjusted position */}
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
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Abschluss mit zweitem Platz im Jahrgang</span></span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Mentoring und Unterstützung</span> von Kommilitonen in Programmierung und Algorithmen</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Schwerpunkte:</span> Software Engineering, Datenbanken, Netzwerke und KI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section - Adjusted position */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">PROJEKTE</h2>
              <div className="space-y-2">
                <div className="group">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Tara Solutions Cloud</span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        <span className="font-bold">Entwicklung der offiziellen Website</span> von Tara Solutions Inc. mit Fokus auf <span className="font-semibold">Leistungsoptimierung</span> und <span className="font-semibold">Sicherheit</span>
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">Next.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">React.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">Node.js</span>
                      </div>
                      <a href="https://www.tarasolutions.cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1">
                        <span>🔗</span>
                        <span className="hover:underline">www.tarasolutions.cloud</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Cloud Station Plattform</span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        <span className="font-bold">Skalierbare Enterprise-Cloud-Services-Plattform</span> mit globaler Nutzerbasis. <span className="font-semibold">Implementierung von Frontend und Backend</span> mit Fokus auf Leistung.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">React.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">Next.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">Node.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">Kafka</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">Nats</span>
                      </div>
                      <a href="https://www.cloud-station.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1">
                        <span>🔗</span>
                        <span className="hover:underline">www.cloud-station.io</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Ahsen Elite E-Commerce</span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">Web- und Mobile-Anwendungen mit sicherer Zahlungsabwicklung und Bestellverwaltung für optimale Benutzererfahrung.</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">React.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">React Native</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Next.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Node.js</span>
                      </div>
                      <a href="https://ahsenelite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1">
                        <span>🔗</span>
                        <span className="hover:underline">ahsenelite.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold">Pflanzenerkrankungs-Erkennungssystem</span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">KI-gestütztes Deep-Learning-System zur Erkennung von Pflanzenkrankheiten mit Raspberry Pi und Kamera für Echtzeitdiagnose.</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Deep Learning</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Raspberry Pi</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Python</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Computer Vision</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* References Section */}
            <section className="mt-4 mb-6">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">REFERENZEN</h2>
              <p className="text-xs text-gray-600">
                Referenzen sind auf Anfrage verfügbar. Bitte kontaktieren Sie mich gerne, wenn Sie weitere Details oder professionelle Empfehlungen von früheren Arbeitgebern, Kollegen oder akademischen Mentoren wünschen.
              </p>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            {/* Skills Section - Reorganized for ATS */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">TECHNISCHE FÄHIGKEITEN</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Programmiersprachen:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Frameworks & Bibliotheken:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['React.js', 'Next.js', 'Node.js', 'NestJS', 'Express.js', 'React Native', 'Django'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Datenbanken & Storage:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'ElasticSearch'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Cloud & DevOps:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Architektur & Methoden:</h3>
                  <div className="flex flex-wrap gap-1">
                    {['Microservices', 'RESTful APIs', 'GraphQL', 'Event-Driven Architecture', 'Agile/Scrum', 'TDD'].map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Section - Enhanced for ATS */}
            <section className="mt-6">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">SPRACHEN</h2>
              <div className="space-y-2">
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
                    <span className="text-xs text-gray-600 ml-2">(Fließend - C1)</span>
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
                    <span className="font-medium text-xs">Deutsch</span>
                    <span className="text-xs text-gray-600 ml-2">(Fortgeschritten - B2)</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Awards Section - Moved below Skills */}
            <section className="mt-8">
              <h2 className="text-base font-bold border-b pb-1 mb-3 text-gray-800">AUSZEICHNUNGEN</h2>
              <div className="space-y-3">
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

