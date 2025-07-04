import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TPUSA at UCSD - Turning Point USA at UC San Diego',
  description: 'Official website of Turning Point USA at UC San Diego. Promoting free markets, limited government, and individual liberty on campus. Join our community of student activists.',
  keywords: ['TPUSA', 'Turning Point USA', 'UC San Diego', 'UCSD', 'Conservative', 'Campus', 'Student Organization', 'Free Markets', 'Limited Government', 'Individual Liberty'],
  metadataBase: new URL('https://zkortam.github.io/ckevent2025/'),
  openGraph: {
    title: 'TPUSA at UCSD - Turning Point USA at UC San Diego',
    description: 'Official website of Turning Point USA at UC San Diego. Promoting free markets, limited government, and individual liberty on campus. Join our community of student activists.',
    url: 'https://zkortam.github.io/ckevent2025/',
    siteName: 'TPUSA at UCSD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TPUSA at UCSD - Turning Point USA at UC San Diego',
    description: 'Official website of Turning Point USA at UC San Diego. Promoting free markets, limited government, and individual liberty on campus. Join our community of student activists.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/ckevent2025/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
} 