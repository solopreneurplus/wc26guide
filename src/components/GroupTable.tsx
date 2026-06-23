import { Team } from '@/types'
import Link from 'next/link'

interface GroupTableProps {
  group: string
}

// We compute standings within the component from team data
import { teams } from '@/data/teams'

export default function GroupTable({ group }: GroupTableProps) {
  const groupTeams = teams
    .filter(t => t.group === group)
    .sort((a, b) => (a.fifaRank ?? 999) - (b.fifaRank ?? 999))

  if (groupTeams.length === 0) return null

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <div className="px-4 py-3 bg-slate-750 border-b border-slate-700">
        <h3 className="font-semibold text-white">Group {group}</h3>
      </div>
      <div className="divide-y divide-slate-700/50">
        {groupTeams.map((team, idx) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700/50 transition-colors"
          >
            <span className="text-xs font-bold text-slate-500 w-5">{idx + 1}</span>
            <span className="text-lg">{team.flag}</span>
            <span className="flex-1 text-sm font-medium text-white">{team.name}</span>
            <span className="text-xs text-slate-500">{team.continent}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}