import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WC26 Guide — World Cup 2026 Fan Companion',
  description: 'Your complete guide to the 2026 FIFA World Cup. Live scores, match schedules, team profiles, venue guides, and tournament history.',
  openGraph: {
    title: 'WC26 Guide — World Cup 2026 Fan Companion',
    description: 'Your complete companion to the 2026 FIFA World Cup.',
    siteName: 'Solopreneur+',
    url: 'https://wc26guide.app',
  },
  metadataBase: new URL('https://wc26guide.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}