import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Abbas Ataie - Senior Software Engineer | Full Stack Developer | Cloud Architect",
  description:
    "Senior Software Engineer and Technical Lead with 5+ years of experience in Full-Stack Development, Cloud Architecture, and Microservices. Expertise in Node.js, React.js, TypeScript, and Cloud Technologies. Currently pursuing Master's in Data Science at University of Europe for Applied Sciences.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Architect",
    "Node.js",
    "React.js",
    "TypeScript",
    "Microservices",
    "Cloud Computing",
    "DevOps",
    "Senior Developer",
    "Technical Lead",
    "Data Science",
    "Germany",
    "Remote Developer",
    "Enterprise Software",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "PostgreSQL",
    "MongoDB",
    "Next.js",
    "NestJS",
    "React Native",
  ],
  authors: [{ name: "Abbas Ataie", url: "https://www.ataie.me" }],
  creator: "Abbas Ataie",
  publisher: "Abbas Ataie",
  metadataBase: new URL("https://www.ataie.me"),
  alternates: {
    canonical: "/",
    languages: {
      de: "/de",
      en: "/en",
    },
  },
  openGraph: {
    type: "profile",
    locale: "de_DE",
    url: "https://www.ataie.me",
    siteName: "Abbas Ataie - Resume",
    title: "Abbas Ataie - Senior Software Engineer | Full Stack Developer",
    description:
      "Senior Software Engineer and Technical Lead with 5+ years of experience in Full-Stack Development, Cloud Architecture, and Microservices. Expertise in Node.js, React.js, TypeScript, and Cloud Technologies.",
    images: [
      {
        url: "/profile/abbas.jpg",
        width: 1200,
        height: 630,
        alt: "Abbas Ataie - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abbas Ataie - Senior Software Engineer | Full Stack Developer",
    description:
      "Senior Software Engineer and Technical Lead with 5+ years of experience in Full-Stack Development, Cloud Architecture, and Microservices.",
    images: ["/profile/abbas.jpg"],
    creator: "@abbasatayee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://www.ataie.me" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
