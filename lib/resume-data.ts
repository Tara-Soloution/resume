export const resumeData = {
  personal: {
    name: "Ghulam Abbas Ataie",
    fullName: "Ghulam Abbas Ataie",
    title: "Full-Stack Software Engineer",
    // UPDATED: make Python/FastAPI + React/Next.js + AI obvious at a glance
    subtitle: "Python (FastAPI) · React/Next.js · TypeScript | LLM/RAG · CI/CD · Docker",
    location: "Berlin, Germany",
    workAuthorization: "Valid German Work Authorization",
    phone: "+49 1578 4246219",
    email: "abbas.ataie.montazer@gmail.com",
    portfolio: "https://www.ataie.me",
    github: "https://github.com/abbasatayee",
    linkedin: "https://www.linkedin.com/in/abbas-ataie/",
    profileImage: "/profile/abbas.jpg",
  },

  summary: {
    title: "Full-Stack Software Engineer",
    // UPDATED: reflect Python/FastAPI + AI/LLM work while keeping it concise
    description:
      "Full-stack engineer with 5+ years of experience shipping production applications with React/Next.js and TypeScript, and building backend APIs with Node.js and Python (FastAPI). Strong focus on clean architecture, automated testing, CI/CD, and DevOps. Experienced delivering AI-powered features including RAG pipelines and customer-support automation.",
    coreCompetencies: [
      // UPDATED: include FastAPI + AI
      "React & Next.js (TypeScript)",
      "Python (FastAPI) · REST APIs",
      "LLMs · RAG · Vector Search",
      "Jest · Cypress · E2E Testing",
      "CI/CD (GitHub Actions)",
      "Docker · AWS & GCP",
      "Clean Code & SOLID",
      "Cross-functional Collaboration",
    ],
  },

  experience: [
    {
      title: "Full-Stack Software Engineer",
      company: "Cloud Station LLC FZ (Dubai)",
      companyUrl: "www.cloud-station.io",
      location: "Remote",
      period: "Oct 2022 – Aug 2025",
      highlights: [
        {
          bold: "Full-stack feature development",
          text: "using",
          semibold: "React, Next.js, Node.js, and TypeScript",
          text2: "— built document management and user-facing dashboards.",
        },
        {
          bold: "Subscription and billing service",
          text: "— implemented enabling customers to pay for services used;",
          semibold: "pay-as-you-go",
          text2: "model.",
        },
        {
          bold: "SAML authentication",
          text: "— implemented for a client enabling",
          semibold: "Azure SSO login",
          text2: "without separate accounts or per-service user management.",
        },
        {
          bold: "Core API performance",
          text: "— reduced response time from",
          semibold: "10s to 200ms",
          text2: "via database restructuring, indexing, and caching.",
        },
        {
          bold: "Automated testing",
          text: "with",
          semibold: "Jest (unit/integration)",
          text2: "and",
          semibold2: "Cypress (E2E)",
          text3: "to ensure reliable deployments.",
        },
        {
          bold: "CI/CD pipelines",
          text: "with",
          semibold: "GitHub Actions",
          text2: "and one-click deployment automation.",
        },
        {
          bold: "DevOps practices",
          text: "— Docker, monitoring, observability, and security hardening for production services.",
        },
        {
          bold: "Clean architecture",
          text: "— applied SOLID principles, refactoring, and code quality standards in cross-functional team.",
        },

        // UPDATED: split and make Python/FastAPI explicit + AI details concrete
        {
          bold: "AI customer support automation",
          text: "— built",
          semibold: "Python/FastAPI",
          text2:
            "services to automate customer support workflows; integrated LLM-powered classification and response assistance into product tooling.",
        },
        {
          bold: "RAG services and APIs",
          text: "— implemented",
          semibold: "FastAPI",
          text2:
            "endpoints for ingestion and retrieval with embeddings + vector search; integrated with frontend UX for AI-assisted knowledge querying.",
        },
        {
          bold: "Customer reviews segmentation",
          text: "— delivered AI workflow for categorizing and analyzing reviews to reduce manual ops effort.",
        },
      ],
      isPrimary: true,
    },

    {
      title: "Full-Stack Developer",
      company: "Listoli LLC, USA",
      location: "Remote",
      period: "Oct 2022 – Dec 2023",
      highlights: [
        {
          bold: "Secure Authentication service",
          text: "— built and implemented authentication mechanisms; solution",
          semibold: "sold to enterprise companies",
          text2: ".",
        },
        {
          bold: "RESTful APIs and microservices",
          text: "with",
          semibold: "NestJS (Node.js/TypeScript)",
          text2: "and",
          semibold2: "Next.js",
          text3: "for e-commerce and content management.",
        },
        {
          bold: "CI/CD automation",
          text: "with",
          semibold: "GitHub Actions",
          text2: "and",
          semibold2: "GCP",
          text3: "— removed manual deployment work, increased developer productivity by 50%.",
        },
      ],
    },

    {
      title: "Full Stack Developer",
      company: "Click.af, Kabul",
      location: "On-site",
      period: "Jun 2021 – Sep 2022",
      highlights: [
        {
          bold: "Vendor application",
          text: "— simplified vendor accounting and workflows; vendors could view",
          semibold: "orders per day and analytics",
          text2: "without manual requests or late responses.",
        },
        {
          bold: "Mobile app performance optimization",
          text: "— increased customer base from",
          semibold: "1,000 to 50,000 users",
          text2: "in one year.",
        },
        {
          bold: "React and Node.js",
          text: "— developed web and mobile features for the e-commerce platform.",
        },
      ],
    },

    {
      title: "Full Stack Developer",
      company: "BlueBit Networking Services, Kabul",
      location: "On-site",
      period: "Feb 2021 – Jul 2021",
      highlights: [
        {
          text: "Built web applications with",
          semibold: "React.js, Node.js, and Python",
          text2: "— petition management system with workflow optimization.",
        },
      ],
    },
  ],

  education: [
    {
      degree: "Master in Data Science",
      institution: "University of Europe for Applied Sciences",
      period: "March 2025 – February 2026",
      highlights: [
        {
          bold: "Core:",
          semibold: "Data Science, Machine Learning, Cloud Computing",
        },
      ],
    },
    {
      degree: "Bachelor in Computer Science",
      institution: "Kabul Polytechnic University",
      period: "March 2016 – August 2019",
      highlights: [{ text: "Graduated with second place in class" }],
    },
  ],

  projects: [
    {
      name: "Cloud Station Platform",
      description:
        "TypeScript-based deployment platform with React frontend and Node.js backend. CI/CD with GitHub Actions, Docker, and automated testing.",
      tags: ["React", "Node.js", "TypeScript", "CI/CD", "Docker"],
      url: "https://www.cloud-station.io",
    },

    // UPDATED: include FastAPI + Next.js UI + evaluation/serving
    {
      name: "Movie Recommendation Engine",
      description:
        "Recommendation system using collaborative filtering and content-based approaches. Built with Python and exposed via FastAPI for serving and evaluation; Next.js UI for exploration and metrics.",
      tags: ["Python", "FastAPI", "Next.js", "Machine Learning", "Recommendation Systems", "Evaluation"],
    },

    // UPDATED: include FastAPI explicitly + production-style wording
    {
      name: "RAG Pipeline for Historical Data",
      description:
        "Retrieval-Augmented Generation system for querying historical documents. Built with Python and FastAPI APIs for ingestion and query; embeddings + vector search with LLM integration for grounded answers.",
      tags: ["Python", "FastAPI", "RAG", "LLMs", "Vector Search", "NLP"],
    },

    {
      name: "Highly Available Website on AWS",
      description:
        "Designed and structured a highly available website on AWS. Terraform as IaC for provisioning; Ansible for server configuration. Load Balancer, VPC networking, Auto Scaling, EC2 — built for resilience and scalability.",
      tags: ["AWS", "Terraform", "Ansible", "IaC", "Load Balancer", "Auto Scaling", "EC2"],
    },
  ],

  technicalSkills: {
    languages: ["TypeScript", "JavaScript", "Node.js", "Python"],

    // UPDATED: add FastAPI (and Django optional only if you truly used it)
    frameworks: [
      "React",
      "Next.js",
      "FastAPI",
      "Node.js",
      "NestJS",
      "Express.js",
      "React Native",
    ],

    databases: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"],

    cloudDevOps: [
      "AWS",
      "GCP",
      "Docker",
      "Nomad",
      "Ansible",
      "CI/CD",
      "GitHub Actions",
      "Monitoring & Observability",
    ],

    architecture: [
      "Jest",
      "Cypress",
      "Unit / Integration / E2E Testing",
      "Clean Architecture",
      "SOLID Principles",
      "RESTful APIs",
      "Microservices",
      "Agile/Scrum",
    ],
  },

  languages: [
    { name: "English", level: "Fluent (C1)" },
    { name: "German", level: "Basic (A2)" },
    { name: "Dari", level: "Native" },
  ],

  awards: [
    {
      title: "Certified Micro Developer",
      description: "micro1.ai — technical excellence in software engineering",
      icon: "🏆",
    },
    {
      title: "Asia Kabul Regional ACM/ICPC 2018",
      description: "3rd place among 40 teams",
      icon: "🏆",
    },
  ],

  softSkills: [
    "Cross-functional Teamwork",
    "Problem Solving",
    "Communication",
    "Adaptability",
    "Clean Code Mindset",
    "Continuous Learning",
  ],

  communityContributions: [
    {
      title: "Roshanayee.com",
      description: "Educational platform for programming — course development and delivery.",
      url: "https://roshanayee.com",
      icon: "🎓",
    },
  ],
};
