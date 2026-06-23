import Link from 'next/link'
import { Team } from '@/types'

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link
      href={`/teams/${team.id}`}
      className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-emerald-600 hover:bg-slate-750 transition-all group"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{team.flag}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate group-hover:text-emerald-400 transition-colors">
            {team.name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <span>Group {team.group}</span>
            <span>·</span>
            <span>{team.continent}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-slate-700 flex justify-between text-xs text-slate-400">
        <span>{team.worldCupAppearances} appearances</span>
        {team.fifaRank && <span>FIFA #{team.fifaRank}</span>}
      </div>
    </Link>
  )
}