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
      a.download = "resume.pdf";
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
          {/* Decorative elements - removing or adjusting */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-0">
            <div className="absolute top-0 right-0 w-32 h-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32"></div>
          </div>

          <div className="flex items-start justify-between relative z-10">
            <div className="flex-1 space-y-2 pt-2">
              <div className="relative">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Abbas Ataie | Software Engineer
                </h1>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600"></div>
              </div>
              <h2 className="text-lg font-medium text-gray-700 pl-1">
                Senior Software Developer | Full Stack Engineer | Cloud
                Architect
              </h2>
              <div className="space-y-1.5 text-gray-600 text-xs pl-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span>Phone: +49 1578 4246219</span>
                  <span>Email: abbas.ataie.montazer@gmail.com</span>

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
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src="/profile/abbas.jpg"
                    alt="Profile Picture"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section - Enhanced for ATS */}
        <div className="mt-2 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
            SUMMARY
          </h2>
          <p className="text-xs text-gray-600">
            <span className="font-medium">
              Senior Software Developer and Technical Lead
            </span>{" "}
            with over 5 years of experience in developing and scaling enterprise
            applications. Currently pursuing a Master's in Data Science at the
            University of Europe for Applied Sciences. Proven expertise in{" "}
            <span className="font-semibold">Full-Stack Development</span>,{" "}
            <span className="font-semibold">Cloud Architecture</span>, and{" "}
            <span className="font-semibold">Technical Leadership</span>.
            Specialized in <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">React.js</span>,{" "}
            <span className="font-semibold">TypeScript</span>,{" "}
            <span className="font-semibold">Microservices</span>, and{" "}
            <span className="font-semibold">Cloud Technologies</span>.
            Successful leadership of teams and implementation of technical
            strategies for developing scalable and maintainable software
            solutions.
          </p>
          {/* Core Competencies Section (now inside summary) */}
          <div className="mt-3">
            <h3 className="text-xs font-bold text-gray-800 mb-1">
              Core Competencies:
            </h3>
            <p className="text-xs text-gray-700">
              Full-Stack Web Development, Microservices, TypeScript, React.js,
              Node.js, CI/CD, Cloud Solutions, Agile/Scrum, Technical Leadership
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* Left Column (Experience) */}
          <div className="col-span-2">
            {/* Experience Section - Adjusted position */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                PROFESSIONAL EXPERIENCE
              </h2>

              {/* CTO Position */}
              <div className="mb-2 relative group hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-800 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    Senior Software Engineer
                  </h3>
                  <div className="text-gray-700 font-medium text-xs mb-0.5">
                    Cloud Station LLC FZ (Dubai) - www.cloud-station.io
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Oct 2022 – Aug 2025 | Remote
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Architecture of Microservices and Development of Web &
                          Mobile Applications
                        </span>{" "}
                        using{" "}
                        <span className="font-semibold">
                          Node.js, React.js, Next.js, TypeScript, React Native,
                          Nats, Docker, Hashicorp Nomad, Kafka, PostgreSQL and,
                          ...
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Building enterprise solutions
                        </span>{" "}
                        at{" "}
                        <span className="font-semibold">
                          Cloud Station LLC FZ (Dubai)
                        </span>
                        , including{" "}
                        <span className="font-semibold">
                          payment and subscription systems
                        </span>
                        . Also developing an{" "}
                        <span className="font-semibold">
                          automated service for one-click deployment
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
                          Technical Team Leadership
                        </span>
                        , Implementation of{" "}
                        <span className="font-semibold">
                          Code Quality Standards
                        </span>{" "}
                        and Best Practices
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Architecture and Strategic Planning
                        </span>{" "}
                        of <span className="font-semibold">Microservices</span>{" "}
                        and{" "}
                        <span className="font-semibold">
                          Cloud Infrastructures
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-gray-800 mr-1.5 font-bold group-hover/item:text-gray-900">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Leadership and Mentoring
                        </span>{" "}
                        of an international development team with focus on{" "}
                        <span className="font-semibold">Agile Methods</span> and{" "}
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
                    Senior Full Stack Developer
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    Listoli LLC, USA
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Oct 2022 – Dec 2023 | Remote
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Design and Optimization
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold">
                          PostgreSQL databases
                        </span>{" "}
                        for e-commerce systems
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Development of RESTful APIs
                        </span>{" "}
                        and <span className="font-semibold">microservices</span>{" "}
                        using <span className="font-semibold">NestJS</span> and{" "}
                        <span className="font-semibold">Next.js</span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">CI/CD Automation</span> with{" "}
                        <span className="font-semibold">GitHub Actions</span>{" "}
                        and{" "}
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
                    Full Stack Developer
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    Click.af, Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Jun 2021 – Sep 2022 | On-site
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Development of Web and Mobile Applications
                        </span>{" "}
                        using React.js, Node.js, Next.js, React Native
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Integration of Vendor API
                        </span>{" "}
                        for efficient order and payment management
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Implementation of E-commerce Features
                        </span>{" "}
                        and user interfaces
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
                    Full Stack Developer
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    BlueBit Networking Services, Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Feb 2021 – Jul 2021 | On-site
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Development and Management
                        </span>{" "}
                        of high-traffic web applications using Python, Django,
                        React Native, MySQL, and React.js
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Development of Petition Management System
                        </span>{" "}
                        for the Ministry of Defense focusing on process
                        optimization and workflow improvement
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Workflow Optimization
                        </span>{" "}
                        and usability enhancement of developed systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IAP Position - Moved to next page */}
              <div className="mb-2 relative group hover:bg-blue-50/30 rounded-lg transition-colors duration-300 break-before-page">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-3 py-1.5">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Junior Web Developer
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    IAP, Kabul
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    Feb 2020 – Apr 2020 | On-site
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Development of MOEC Socio-Economic Provincial Profiles
                          Digitization System
                        </span>{" "}
                        in collaboration with Tetra Tech
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">Web Development</span>{" "}
                        using PHP Laravel, MySQL, HTML, CSS, Vue.js, and
                        JavaScript
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">
                          Support and Maintenance
                        </span>{" "}
                        of existing websites, bug fixing, and optimization
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-medium">Hands-on Experience</span>{" "}
                        in software development, debugging, and performance
                        optimization
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section - Moved back to original position */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                EDUCATION
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
                    March 2025 – February 2026
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          High-Quality Master Program
                        </span>{" "}
                        focusing on cutting-edge technologies and methods
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">Core Subjects:</span>{" "}
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
                        <span className="font-bold">Specialization:</span>{" "}
                        <span className="font-semibold">
                          Cloud Computing, Decision Support Systems
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        <span className="font-bold">
                          Additional Qualifications:
                        </span>{" "}
                        <span className="font-semibold">
                          Entrepreneurial Thinking & Digital Business Models
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
                    Bachelor in Computer Science
                  </h3>
                  <div className="text-blue-600 font-medium text-xs mb-0.5">
                    Kabul Polytechnic University
                  </div>
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    March 2016 – August 2019
                  </div>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Graduated with second place in class
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Mentoring and support of fellow students in programming
                        and algorithms
                      </span>
                    </li>
                    <li className="flex items-start group/item hover:bg-white/80 p-0.5 rounded-lg transition-all duration-200">
                      <span className="text-blue-500 mr-1.5 font-bold group-hover/item:text-blue-600">
                        •
                      </span>
                      <span className="leading-tight">
                        Focus Areas: Software Engineering, Databases, Networks
                        and AI
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section - Adjusted position */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                KEY PROJECTS
              </h2>
              <div className="space-y-2">
                <div className="group">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-1.5 font-bold">•</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Cloud Station Platform
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        <span className="font-bold">
                          Enterprise-Grade Cloud Deployment Platform
                        </span>{" "}
                        enabling rapid application deployment and multi-cloud
                        management.{" "}
                        <span className="font-semibold">
                          Implementation of centralized interface and automation
                        </span>{" "}
                        with focus on security and scalability.
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
                          Security
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
                        Tara Solutions Cloud
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        <span className="font-bold">
                          Digital Transformation Solutions Provider
                        </span>{" "}
                        offering comprehensive cloud, web, and mobile solutions.{" "}
                        <span className="font-semibold">
                          Implementation of enterprise-grade infrastructure
                        </span>{" "}
                        with focus on scalability and security.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Cloud Solutions
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Web Development
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          Mobile Apps
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          DevOps
                        </span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                          AI Integration
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
                        Plant Disease Detection System
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">
                        AI-powered deep learning system for plant disease
                        detection using Raspberry Pi and camera for real-time
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
          </div>
          {/* Projects Section - Adjusted position */}

          {/* Right Column */}
          <div className="col-span-1">
            {/* Skills Section - Reorganized for ATS */}
            <section className="mt-4">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Programming Languages:
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
                      Go
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded">
                      Java
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">
                    Frameworks & Libraries:
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
                    Databases & Storage:
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
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded">
                      ElasticSearch
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
                      Kubernetes
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
                    Architecture & Methods:
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Microservices
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      RESTful APIs
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      GraphQL
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
                      DDD
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Clean Architecture
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      SOLID Principles
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Design Patterns
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5">
                      Object-Oriented Programming
                    </span>
                    <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded">
                      Functional Programming
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="mt-6 print:break-inside-avoid">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                LANGUAGES
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">Dari</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-700">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">English</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-700">
                    Fluent (C1)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-xs">German</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-700">
                    Basic (A2)
                  </span>
                </div>
              </div>
            </section>

            {/* Awards Section */}
            <section className="mt-8 break-before-page">
              <h2 className="text-base font-bold border-b pb-1 mb-3 text-gray-800">
                AWARDS
              </h2>
              <div className="space-y-3">
                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🏆</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Certified Micro Developer
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        Certified by micro1.ai - World's best AI Recruiter for
                        technical excellence and software engineering expertise
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🏆</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Asia Kabul Regional ACM/ICPC Competition 2018
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        3rd place among 40 teams
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-xs text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2 text-base">🎯</span>
                    <div className="flex-1">
                      <span className="font-bold group-hover:text-blue-600 transition-colors">
                        Duolingo English Test
                      </span>
                      <p className="text-xs text-gray-600 leading-tight mt-1">
                        Score: 120 out of 160
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Soft Skills Section */}
            <section className="mt-8">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                SOFT SKILLS
              </h2>
              <div className="space-y-2">
                <div className="text-xs text-gray-600 leading-relaxed">
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Leadership
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Team Management
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Problem Solving
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Communication
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Time Management
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Adaptability
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Critical Thinking
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Project Management
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Mentoring
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Strategic Planning
                  </span>
                  <span className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded mr-1.5 mb-1.5">
                    Cross-functional Teamwork
                  </span>
                </div>
              </div>
            </section>

            {/* Community Contributions Section */}
            <section className="mt-8">
              <h2 className="text-base font-bold border-b pb-1 mb-2 text-gray-800">
                COMMUNITY CONTRIBUTIONS
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
                        Founder and lead instructor of an educational platform
                        for programming and technical knowledge. Development and
                        delivery of courses for the general public.
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
                        Active content creator focusing on technology,
                        programming, and software development. Regular
                        publication of tutorials and technical explanations.
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
            \
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
                    <span className="font-semibold">Leistungsoptimierung</span>{" "}
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
            \
            <div className="group">
              <div className="text-xs text-gray-700 flex items-start">
                <span className="text-blue-500 mr-1.5 font-bold">▹</span>
                <div className="flex-1">
                  <span className="font-bold">
                    Plant Disease Detection System
                  </span>
                  <p className="text-xs text-gray-600 leading-tight mt-0.5">
                    AI-powered deep learning system for detecting plant diseases
                    using Raspberry Pi and camera for real-time diagnosis.
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
