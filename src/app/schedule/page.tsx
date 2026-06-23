import type { Metadata } from 'next'
import ScheduleFilters from '@/components/ScheduleFilters'
import { getAllFixtures, getMatchDates } from '@/lib/fixture-loader'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Match Schedule — WC26 Guide',
}

export default async function SchedulePage() {
  const fixtures = await getAllFixtures()
  const allDates = await getMatchDates()

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/images/jannik-unsplash-3000.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Match Schedule</h1>
          <p className="text-slate-400">
            All 104 matches of the 2026 FIFA World Cup. Filter by group, stage, or date.
            Group stage dates via API-Football.
          </p>
        </div>

        <ScheduleFilters allDates={allDates} initialMatches={fixtures} />
      </div>
    </div>
  )
}