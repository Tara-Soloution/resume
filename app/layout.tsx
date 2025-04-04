import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hakima Merzayee - Senior Frontend & Full Stack Entwicklerin',
  description: 'Erfahrene Full-Stack-Entwicklerin spezialisiert auf React.js, Next.js, PHP/Laravel und Node.js. Portfolio und Lebenslauf von Hakima Merzayee.',
  keywords: ['Hakima Merzayee', 'Frontend Entwicklung', 'Full Stack', 'React.js', 'Next.js', 'Software Engineering', 'Web Development'],
  openGraph: {
    title: 'Hakima Merzayee - Senior Frontend & Full Stack Entwicklerin',
    description: 'Erfahrene Full-Stack-Entwicklerin mit Expertise in modernen Webtechnologien',
    type: 'profile',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'