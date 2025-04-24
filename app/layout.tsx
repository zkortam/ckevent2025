import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charlie Kirk at UCSD - The American Comeback Tour',
  description: 'Join Charlie Kirk at UC San Diego for The American Comeback Tour. Engage in meaningful dialogue about current issues affecting our nation and campus community.',
  keywords: ['Charlie Kirk', 'TPUSA', 'UC San Diego', 'UCSD', 'American Comeback Tour', 'Conservative', 'Campus Event'],
  metadataBase: new URL('https://zkortam.github.io/ckevent2025/'),
  openGraph: {
    title: 'Charlie Kirk at UCSD - The American Comeback Tour',
    description: 'Join Charlie Kirk at UC San Diego for The American Comeback Tour. Engage in meaningful dialogue about current issues affecting our nation and campus community.',
    url: 'https://zkortam.github.io/ckevent2025/',
    siteName: 'TPUSA at UCSD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlie Kirk at UCSD - The American Comeback Tour',
    description: 'Join Charlie Kirk at UC San Diego for The American Comeback Tour. Engage in meaningful dialogue about current issues affecting our nation and campus community.',
  },
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