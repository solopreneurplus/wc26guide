import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { teams } from '@/data/teams'
import { matches, getMatchesByTeam } from '@/data/matches'
import MatchCard from '@/components/MatchCard'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return teams.map(team => ({ id: team.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const team = teams.find(t => t.id === id)
  if (!team) return { title: 'Team Not Found' }
  return { title: `${team.name} — WC26 Guide` }
}

export default async function TeamDetailPage({ params }: Props) {
  const { id } = await params
  const team = teams.find(t => t.id === id)
  if (!team) notFound()

  const teamMatches = getMatchesByTeam(team.id)
    .sort((a, b) => a.date.localeCompare(b.date) || a.kickoff.localeCompare(b.kickoff))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{team.flag}</span>
        <div>
          <h1 className="text-3xl font-bold text-white">{team.name}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400 mt-1">
            <span>Group {team.group}</span>
            <span>·</span>
            <span>{team.continent}</span>
            {team.fifaRank && <><span>·</span><span>FIFA Rank: #{team.fifaRank}</span></>}
            <span>·</span>
            <span>{team.worldCupAppearances} appearances</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">Best Finish</h3>
          <p className="text-white font-medium">{team.bestFinish}</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">Qualified</h3>
          <p className="text-white font-medium">{team.qualified ? '✅ Confirmed' : '⏳ TBD'}</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">Group Stage</h3>
          <p className="text-white font-medium">Group {team.group}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-white mb-4">Matches</h2>
      <div className="space-y-3">
        {teamMatches.length === 0 ? (
          <p className="text-slate-500">No matches scheduled yet.</p>
        ) : (
          teamMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))
        )}
      </div>
    </div>
  )
}