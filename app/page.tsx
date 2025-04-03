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
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download PDF. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-white p-8 max-w-5xl mx-auto">
      {/* Print and PDF Buttons */}
      <div className="print:hidden mb-4 flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          className="print:hidden"
          onClick={handlePDFDownload}
        >
          <Printer className="mr-2 h-4 w-4" />
          Als PDF speichern
        </Button>
      </div>

      {/* Main Resume Content */}
      <div className="space-y-8">
        {/* Header Section */}
        <header className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900">GHULAM ABBAS ATAIE</h1>
            <h2 className="text-2xl text-blue-500 mt-2">Senior Software-Entwickler</h2>
            <div className="mt-4 space-y-1 text-gray-600">
              <div className="flex items-center gap-2">
                <span>📞 +989912906146</span>
                <span>📧 abbas.ataie.montazer@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://github.com/abbasatayee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  🔗 github.com/abbasatayee
                </a>
                <a href="https://linkedin.com/in/abbas-ataie-72a4431b9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  💼 linkedin.com/in/abbas-ataie-72a4431b9
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
              <img
                src="/profile/abbas.jpg"
                alt="Profilbild"
                className="rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column (Experience) */}
          <div className="col-span-2">
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-6">BERUFSERFAHRUNG</h2>

              {/* CTO Position */}
              <div className="mb-6 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-6 py-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Technischer Geschäftsführer (CTO)</h3>
                  <div className="text-blue-500 font-medium mb-1">Tara Solutions Inc., Kabul</div>
                  <div className="flex justify-between text-gray-600 text-sm mb-2">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      01/2024 - Heute
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      Remote
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Entwicklung von Web- und Mobile-Anwendungen mit Node.js, React.js, Nomad, TypeScript, React Native</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Partnerschaft mit Cloud Station LLC FZ (Dubai) für Enterprise-Cloud-Lösungen</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Leitung des technischen Teams, Sicherstellung von Code-Qualität und Best Practices</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Architektur und strategische Planung von Microservices und Cloud-Infrastrukturen</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Senior Fullstack Position */}
              <div className="mb-6 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-6 py-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Senior Fullstack-Entwickler</h3>
                  <div className="text-blue-500 font-medium mb-1">Listoli LLC, USA</div>
                  <div className="flex justify-between text-gray-600 text-sm mb-2">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      10/2022 - 12/2023
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      Remote
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Design und Optimierung von PostgreSQL-Datenbanken für E-Commerce-Systeme</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Entwicklung von RESTful APIs und Microservices mit NestJS und Next.js</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">CI/CD-Automatisierung mit GitHub Actions und Google Cloud Platform</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Click.af Position */}
              <div className="mb-6 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-6 py-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Fullstack-Entwickler</h3>
                  <div className="text-blue-500 font-medium mb-1">Click.af, Kabul</div>
                  <div className="flex justify-between text-gray-600 text-sm mb-2">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      06/2021 - 09/2022
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      Vor Ort
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Entwicklung von Web- und Mobile-Anwendungen mit React.js, Node.js, Next.js, React Native</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Integration der Vendor-API für effizientes Auftrags- und Zahlungsmanagement</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Implementierung von E-Commerce-Funktionen und Benutzeroberflächen</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BlueBit Position */}
              <div className="mb-6 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-6 py-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Fullstack-Entwickler</h3>
                  <div className="text-blue-500 font-medium mb-1">BlueBit Networking Services, Kabul</div>
                  <div className="flex justify-between text-gray-600 text-sm mb-2">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      02/2021 - 07/2021
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      Vor Ort
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Entwicklung von Webanwendungen mit Python, Django, React Native und MySQL</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Implementierung eines Petitionsmanagement-Systems für das Verteidigungsministerium</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Optimierung der Arbeitsabläufe und Benutzerfreundlichkeit</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IAP Position */}
              <div className="mb-6 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-6 py-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Junior Web Developer</h3>
                  <div className="text-blue-500 font-medium mb-1">IAP, Kabul</div>
                  <div className="flex justify-between text-gray-600 text-sm mb-2">
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">🗓</span>
                      02/2020 - 04/2020
                    </span>
                    <span className="flex items-center bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                      <span className="mr-1">📍</span>
                      Vor Ort
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Entwicklung des MOEC Socio-Economic Provincial Profiles Digitalisierungssystems in Zusammenarbeit mit Tetra Tech</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Webentwicklung mit PHP Laravel, MySQL, HTML, CSS, Vue.js und JavaScript</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Support und Wartung von bestehenden Websites, Fehlerbehebung und Optimierung</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-1 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-2 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Praktische Erfahrung in Software-Entwicklung, Debugging und Performance-Optimierung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold border-b pb-2 mb-6">AUSBILDUNG</h2>
              <div className="mb-8 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-8 py-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Master in Data Science</h3>
                  <div className="text-blue-500 font-medium mb-1">University of Europe for Applied Sciences</div>
                  <div className="flex text-gray-600 text-sm mb-4">
                    <span className="flex items-center bg-blue-50 px-3 py-1 rounded-full shadow-sm">
                      <span className="mr-2">🗓</span>
                      03/2025 - Heute
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-8 py-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Bachelor in Informatik</h3>
                  <div className="text-blue-500 font-medium mb-1">Kabul Polytechnic University</div>
                  <div className="flex text-gray-600 text-sm mb-4">
                    <span className="flex items-center bg-blue-50 px-3 py-1 rounded-full shadow-sm">
                      <span className="mr-2">🗓</span>
                      03/2016 - 08/2019
                    </span>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start group/item hover:bg-white/80 p-2 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-3 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Abschluss mit zweitem Platz im Jahrgang</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-2 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-3 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Mentoring und Unterstützung von Kommilitonen in Programmierung und Algorithmen</span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-2 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-3 font-bold group-hover/item:text-blue-600">▹</span>
                      <span className="leading-relaxed">Schwerpunkte: Software Engineering, Datenbanken, Netzwerke und KI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold border-b pb-2 mb-4">PROFIL</h2>
              <p className="text-gray-700">
                Erfahrener Entwickler mit Fokus auf skalierbare Cloud-Lösungen und moderne Webtechnologien.
                5+ Jahre Expertise in der Entwicklung innovativer Softwarelösungen.
              </p>
            </section>

            {/* Languages */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold border-b pb-2 mb-4">SPRACHEN</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Dari</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Englisch</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Deutsch</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-4">FÄHIGKEITEN</h2>
              <div className="flex flex-wrap gap-2">
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
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
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

