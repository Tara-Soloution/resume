"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export default function Resume() {
  const handlePDFDownload = async () => {
    try {
      const response = await fetch('/api/generate-pdf');
      if (!response.ok) throw new Error('Failed to generate PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'lebenslauf.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Fehler beim Herunterladen der PDF. Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between relative z-10">
          <div className="flex-1 space-y-4 pt-2">
            <div className="relative">
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight">GHULAM ABBAS ATAIE</h1>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gray-800"></div>
            </div>

            <h2 className="text-2xl font-medium text-gray-700 pl-1">Senior Software-Entwickler</h2>

            <div className="space-y-3 text-gray-600 text-base pl-1">
              <div className="flex flex-wrap items-center gap-6">
                <span className="flex items-center gap-2">
                  <span className="text-gray-800">📞</span>
                  <span>+989912906146</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-gray-800">📧</span>
                  <span>abbas.ataie.montazer@gmail.com</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <a href="https://github.com/abbasatayee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <span className="text-gray-800">🔗</span>
                  <span>github.com/abbasatayee</span>
                </a>
                <a href="https://linkedin.com/in/abbas-ataie-72a4431b9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <span className="text-gray-800">💼</span>
                  <span>linkedin.com/in/abbas-ataie-72a4431b9</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-44 h-44 ml-8">
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/profile/abbas.jpg"
                alt="Profilbild"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column (Experience) */}
          <div className="col-span-2">
            <section>
              <h2 className="text-xl font-bold border-b pb-1 mb-4 text-gray-800">BERUFSERFAHRUNG</h2>

              {/* CTO Position */}
              <div className="mb-4 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-800 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4 py-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors">Technischer Geschäftsführer (CTO)</h3>
                  <div className="text-gray-700 font-medium text-base mb-0.5">Tara Solutions Inc., Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-gray-100 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">01/2024 - Heute</span>
                    </span>
                    <span className="flex items-center bg-gray-100 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Fernarbeit</span>
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-medium">Entwicklung von Web- und Mobile-Anwendungen</span> mit Node.js, React.js, Nomad, TypeScript, React Native</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-medium">Partnerschaft mit Cloud Station LLC FZ (Dubai)</span> für Enterprise-Cloud-Lösungen</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-medium">Leitung des technischen Teams</span>, Sicherstellung von Code-Qualität und Best Practices</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">▹</span>
                      <span className="leading-tight"><span className="font-medium">Architektur und strategische Planung</span> von Microservices und Cloud-Infrastrukturen</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Senior Fullstack Position */}
              <div className="mb-4 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4 py-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Senior Fullstack-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-base mb-0.5">Listoli LLC, USA</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">10/2022 - 12/2023</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Fernarbeit</span>
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Design und Optimierung von PostgreSQL-Datenbanken</span> für E-Commerce-Systeme</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Entwicklung von RESTful APIs und Microservices</span> mit NestJS und Next.js</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">CI/CD-Automatisierung</span> mit GitHub Actions und Google Cloud Platform</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Click.af Position */}
              <div className="mb-4 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4 py-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Fullstack-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-base mb-0.5">Click.af, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">06/2021 - 09/2022</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
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
              <div className="mb-4 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4 py-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Fullstack-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-base mb-0.5">BlueBit Networking Services, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">02/2021 - 07/2021</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Entwicklung von Webanwendungen</span> mit Python, Django, React Native und MySQL</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Implementierung eines Petitionsmanagement-Systems</span> für das Verteidigungsministerium</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-tight"><span className="font-medium">Optimierung der Arbeitsabläufe</span> und Benutzerfreundlichkeit</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IAP Position */}
              <div className="mb-4 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4 py-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Junior Web-Entwickler</h3>
                  <div className="text-blue-600 font-medium text-base mb-0.5">IAP, Kabul</div>
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">02/2020 - 04/2020</span>
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">📍</span>
                      <span className="font-medium">Vor Ort</span>
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
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

            {/* Education Section */}
            <section className="mt-8">
              <h2 className="text-xl font-bold border-b pb-1 mb-4 text-gray-800">AUSBILDUNG</h2>
              <div className="mb-4 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4 py-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Master in Datenwissenschaft</h3>
                  <div className="text-blue-600 font-medium text-base mb-0.5">University of Europe for Applied Sciences</div>
                  <div className="flex text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">03/2025 - Heute</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4 py-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Bachelor in Informatik</h3>
                  <div className="text-blue-600 font-medium text-base mb-0.5">Kabul Polytechnic University</div>
                  <div className="flex text-gray-600 mb-1">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-sm">
                      <span className="mr-1">🗓</span>
                      <span className="font-medium">03/2016 - 08/2019</span>
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
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
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            {/* Summary Section */}
            <section>
              <h2 className="text-xl font-bold border-b pb-1 mb-2 text-gray-800">ZUSAMMENFASSUNG</h2>
              <p className="text-base text-gray-600">
                <span className="font-medium">Ergebnisorientierter Software-Entwickler</span> mit 5+ Jahren Expertise in Next.JS, React.JS, Node.JS, Microservices, Node JS, Typescript. Bewährte Erfolgsbilanz in der Entwicklung skalierbarer und erweiterbarer Softwarelösungen. Eifrig darauf bedacht, neue Herausforderungen anzunehmen und zu innovativen Projekten beizutragen.
              </p>
            </section>

            {/* Languages Section */}
            <section className="mt-8">
              <h2 className="text-xl font-bold border-b pb-1 mb-2 text-gray-800">SPRACHEN</h2>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-base">Dari</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-base">Englisch</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-base">Deutsch</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mt-8">
              <h2 className="text-xl font-bold border-b pb-1 mb-2 text-gray-800">PROJEKTE</h2>
              <div className="space-y-3">
                <div className="group">
                  <div className="text-base text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Tara Solutions Cloud</span>
                      <p className="text-sm text-gray-600 leading-tight mt-0.5">Entwicklung der offiziellen Website von Tara Solutions Inc. mit Fokus auf Leistungsoptimierung und Sicherheit.</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Next.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">React.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Node.js</span>
                      </div>
                      <a href="https://www.tarasolutions.cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-2">
                        <span>🔗</span>
                        <span className="hover:underline">www.tarasolutions.cloud</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-base text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Cloud Station Plattform</span>
                      <p className="text-sm text-gray-600 leading-tight mt-0.5">Skalierbare Enterprise-Cloud-Services-Plattform mit globaler Nutzerbasis. Implementierung von Frontend und Backend mit Fokus auf Leistung.</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">React.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Next.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Node.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Kafka</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Nats</span>
                      </div>
                      <a href="https://www.cloud-station.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-2">
                        <span>🔗</span>
                        <span className="hover:underline">www.cloud-station.io</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-base text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">Ahsen Elite E-Commerce</span>
                      <p className="text-sm text-gray-600 leading-tight mt-0.5">Web- und Mobile-Anwendungen mit sicherer Zahlungsabwicklung und Bestellverwaltung für optimale Benutzererfahrung.</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">React.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">React Native</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Next.js</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Node.js</span>
                      </div>
                      <a href="https://ahsenelite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-2">
                        <span>🔗</span>
                        <span className="hover:underline">ahsenelite.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-base text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                    <div className="flex-1">
                      <span className="font-bold">Pflanzenerkrankungs-Erkennungssystem</span>
                      <p className="text-sm text-gray-600 leading-tight mt-0.5">KI-gestütztes Deep-Learning-System zur Erkennung von Pflanzenkrankheiten mit Raspberry Pi und Kamera für Echtzeitdiagnose.</p>
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

            {/* Skills Section */}
            <section className="mt-8">
              <h2 className="text-xl font-bold border-b pb-1 mb-2 text-gray-800">FÄHIGKEITEN</h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Next.js', 'React.js', 'Node.js',
                  'TypeScript', 'MongoDB', 'PostgreSQL',
                  'Docker', 'AWS', 'GCP', 'NestJS',
                  'React Native', 'Python', 'Django',
                  'MySQL', 'Git', 'CI/CD',
                  'Microservices', 'Cloud Computing',
                  'REST APIs', 'Kafka', 'RabbitMQ'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

