import type { Metadata } from 'next'
import { teams, groupLabels } from '@/data/teams'
import TeamCard from '@/components/TeamCard'
import GroupTable from '@/components/GroupTable'

export const metadata: Metadata = {
  title: 'Teams — WC26 Guide',
}

export default function TeamsPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/images/FC_Barcelona_2011-Wikimedia-3000.jpg)'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Teams</h1>
        <p className="text-slate-400">
          All 48 qualified nations competing in the 2026 FIFA World Cup.
        </p>
      </div>

      {/* Group tables */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Group Standings</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groupLabels.map(g => (
            <GroupTable key={g} group={g} />
          ))}
        </div>
      </section>

      {/* All teams grid */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">All Teams</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}