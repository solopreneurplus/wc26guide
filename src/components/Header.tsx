'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 font-bold text-white">
            <span className="text-emerald-400">WC26</span>
            <span className="text-white/60 text-sm hidden sm:inline">Guide</span>
          </Link>
          <nav className="flex items-center gap-1">
            <Link
              href="/schedule"
              className="px-3 py-1.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
            >
              Schedule
            </Link>
            <Link
              href="/teams"
              className="px-3 py-1.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
            >
              Teams
            </Link>
            <Link
              href="/venues"
              className="px-3 py-1.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
            >
              Venues
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
