import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen pt-14 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          2026 FIFA World Cup Guide
        </h1>
        <p className="text-lg text-slate-400 mb-8">
          Live scores, match schedule, team profiles, and venue guides for all 104 matches
          across 16 host cities in the USA, Canada, and Mexico.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/schedule"
            className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
          >
            Full Schedule
          </Link>
          <Link
            href="/teams"
            className="px-6 py-3 bg-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 transition-colors"
          >
            Teams
          </Link>
          <Link
            href="/venues"
            className="px-6 py-3 bg-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 transition-colors"
          >
            Venues
          </Link>
        </div>
        <p className="mt-12 text-sm text-slate-500">
          Powered by API-Football. Data refreshes every 5 minutes.
        </p>
      </div>
    </div>
  )
}
