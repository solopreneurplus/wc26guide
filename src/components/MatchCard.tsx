'use client'

import { Match } from '@/types'
import { getTeamById } from '@/data/teams'
import { getVenueById } from '@/data/venues'
import {
  formatDateShort,
  matchStatusText,
  formatEdtKickoff,
} from '@/lib/utils'

interface MatchCardProps {
  match: Match
  showDate?: boolean
  compact?: boolean
}

export default function MatchCard({
  match,
  showDate = true,
  compact = false,
}: MatchCardProps) {
  const home = getTeamById(match.homeTeamId)
  const away = getTeamById(match.awayTeamId)
  const venue = getVenueById(match.venueId)
  const isTbd = match.homeTeamId === 'tbd' && match.awayTeamId === 'tbd'

  const statusBadge = () => {
    switch (match.status) {
      case 'live':
        return (
          <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
            LIVE
          </span>
        )
      case 'finished':
        return (
          <span className="bg-slate-600 text-white text-xs px-2 py-0.5 rounded-full">
            Final
          </span>
        )
      default:
        return (
          <span className="bg-emerald-600/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full capitalize">
            {isTbd
              ? match.stage.replace(/_/g, ' ')
              : match.stage === 'group'
                ? `Group ${match.group}`
                : match.stage.replace(/_/g, ' ')}
          </span>
        )
    }
  }

  const scoreDisplay = () => {
    if (isTbd) return <span className="text-lg font-bold text-slate-500">TBD</span>
    if (match.status === 'scheduled')
      return <span className="text-lg font-bold text-slate-400">vs</span>
    return (
      <span className="text-xl font-bold">
        {match.homeScore} – {match.awayScore}
      </span>
    )
  }

  if (compact) {
    if (isTbd) {
      return (
        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
          <div className="flex-1 text-center text-sm text-slate-500">
            {match.stage.replace(/_/g, ' ')} · TBD
          </div>
          <div className="text-xs text-slate-500">
            {formatDateShort(match.date)}
          </div>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
        <div className="flex-1 flex items-center gap-2">
          <span className="text-lg">{home?.flag}</span>
          <span className="text-sm font-medium truncate">
            {home?.shortName || 'TBD'}
          </span>
        </div>
        {scoreDisplay()}
        <div className="flex-1 flex items-center gap-2 justify-end">
          <span className="text-sm font-medium truncate">
            {away?.shortName || 'TBD'}
          </span>
          <span className="text-lg">{away?.flag}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-800 rounded-xl p-4 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all">
      {showDate && match.date && (
        <div className="text-xs text-slate-500 mb-2">
          {formatDateShort(match.date)} · {formatEdtKickoff(match.kickoff)}
        </div>
      )}

      <div className="flex items-center justify-between mb-3">
        {statusBadge()}
        {!isTbd && match.stage !== 'group' && (
          <span className="text-xs text-slate-500 capitalize">
            {match.stage.replace(/_/g, ' ')}
          </span>
        )}
      </div>

      {isTbd ? (
        <div className="text-center py-4">
          <span className="text-lg text-slate-500">Matchups TBD</span>
          <div className="text-xs text-slate-600 mt-2">
            Teams will be determined after group stage
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex-1 text-right">
            <div className="text-2xl mb-1">{home?.flag || '❓'}</div>
            <div className="font-semibold">{home?.shortName || 'TBD'}</div>
          </div>

          <div className="text-center min-w-[80px]">
            {scoreDisplay()}
            {match.status === 'scheduled' && !isTbd && (
              <div className="text-xs text-slate-500 mt-1">
                {formatEdtKickoff(match.kickoff)}
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="text-2xl mb-1">{away?.flag || '❓'}</div>
            <div className="font-semibold">{away?.shortName || 'TBD'}</div>
          </div>
        </div>
      )}

      {venue && (
        <div className="mt-3 text-xs text-slate-500 text-center">
          {venue.name}, {venue.city}
        </div>
      )}
    </div>
  )
}