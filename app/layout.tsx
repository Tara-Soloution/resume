import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Abbas Ataie - Full-Stack Software Engineer | React · Node.js · TypeScript | Berlin",
  description:
    "Full-Stack Software Engineer with 4+ years building production applications in TypeScript. Strong React and Node.js experience. CI/CD, Jest, Cypress, clean architecture. Berlin, Germany. Valid German work authorization.",
  keywords: [
    "Full-Stack Software Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Berlin",
    "Germany",
    "Jest",
    "Cypress",
    "CI/CD",
    "GitHub Actions",
    "AWS",
    "GCP",
    "DevOps",
    "Clean Architecture",
    "Next.js",
    "NestJS",
  ],
  authors: [{ name: "Abbas Ataie", url: "https://resume.ataie.me" }],
  creator: "Abbas Ataie",
  publisher: "Abbas Ataie",
  metadataBase: new URL("https://resume.ataie.me"),
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
    url: "https://resume.ataie.me",
    siteName: "Abbas Ataie - Resume",
    title: "Abbas Ataie - Full-Stack Software Engineer | Berlin",
    description:
      "Full-Stack Software Engineer with 4+ years in React, Node.js, TypeScript. CI/CD, Jest, Cypress, clean architecture. Berlin, Germany.",
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
    title: "Abbas Ataie - Full-Stack Software Engineer | Berlin",
    description:
      "Full-Stack Software Engineer with 4+ years in React, Node.js, TypeScript. Berlin, Germany.",
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
