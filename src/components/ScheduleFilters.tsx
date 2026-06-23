'use client'

import { useState, useEffect, useCallback } from 'react'
import { groupLabels } from '@/data/teams'
import MatchCard from './MatchCard'
import { matches as staticMatches } from '@/data/matches'
import { Match } from '@/types'
import { getTeamIdFromName, mapApiStatus } from '@/lib/utils'

interface ScheduleFiltersProps {
  allDates: string[]
  initialMatches?: Match[]
}

// API-Football fixture response type
interface ApiFixture {
  fixture: {
    id: number
    date: string
    status: {
      short: string
      long: string
    }
  }
  teams: {
    home: { name: string }
    away: { name: string }
  }
  goals: {
    home: number | null
    away: number | null
  }
}

// Fetch live scores from our API proxy
async function fetchLiveScores(date?: string): Promise<ApiFixture[]> {
  try {
    const params = new URLSearchParams()
    if (date) {
      params.set('date', date)
    } else {
      // Fetch live matches and today's matches
      params.set('live', 'all')
    }
    
    const res = await fetch(`/api/live-scores?${params}`, {
      cache: 'no-store'
    })
    
    if (!res.ok) {
      console.error('Live scores fetch failed:', res.status)
      return []
    }
    
    const data = await res.json()
    return data.response || []
  } catch (err) {
    console.error('Live scores error:', err)
    return []
  }
}

// Merge live scores/status into a match list (server-provided base)
function mergeLiveData(baseMatches: Match[], apiFixtures: ApiFixture[]): Match[] {
  if (!apiFixtures.length) return baseMatches
  
  return baseMatches.map(match => {
    // For API-sourced matches, match by the fixture ID baked into match.id
    if (match.id.startsWith('API-')) {
      const apiId = parseInt(match.id.replace('API-', ''), 10)
      const fixture = apiFixtures.find(f => f.fixture.id === apiId)
      if (fixture) {
        return {
          ...match,
          status: mapApiStatus(fixture.fixture.status.short),
          homeScore: fixture.goals.home ?? undefined,
          awayScore: fixture.goals.away ?? undefined,
        }
      }
      return match
    }

    // For hardcoded matches (knockouts, fallbacks), match by team names + date
    const fixture = apiFixtures.find(f => {
      const homeId = getTeamIdFromName(f.teams.home.name)
      const awayId = getTeamIdFromName(f.teams.away.name)
      const fixtureDate = f.fixture.date.split('T')[0]
      return homeId === match.homeTeamId &&
        awayId === match.awayTeamId &&
        fixtureDate === match.date
    })

    if (!fixture) return match

    return {
      ...match,
      status: mapApiStatus(fixture.fixture.status.short),
      homeScore: fixture.goals.home ?? undefined,
      awayScore: fixture.goals.away ?? undefined,
    }
  })
}

export default function ScheduleFilters({ allDates, initialMatches }: ScheduleFiltersProps) {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedStage, setSelectedStage] = useState<'group' | 'knockout' | null>(null)
  const [matches, setMatches] = useState<Match[]>(initialMatches || staticMatches)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Fetch live scores
  const fetchScores = useCallback(async () => {
    setIsLoading(true)
    const today = new Date().toISOString().split('T')[0]
    
    // Fetch live matches and today's matches
    const [liveFixtures, todayFixtures] = await Promise.all([
      fetchLiveScores(), // live=all
      fetchLiveScores(today)
    ])
    
    // Merge unique fixtures
    const allFixtures = [...liveFixtures]
    for (const f of todayFixtures) {
      if (!allFixtures.some(existing => existing.fixture.id === f.fixture.id)) {
        allFixtures.push(f)
      }
    }
    
    // Use functional updater — always merge against latest state
    setMatches(prev => mergeLiveData(prev, allFixtures))
    setLastUpdated(new Date())
    setIsLoading(false)
  }, [])

  // Initial fetch and polling
  useEffect(() => {
    // Fetch immediately on mount
    fetchScores()
    
    // Poll every 60 seconds for live updates
    const interval = setInterval(fetchScores, 60000)
    
    return () => clearInterval(interval)
  }, [fetchScores])

  let filtered = [...matches]

  if (selectedGroup) {
    filtered = filtered.filter(m => m.group === selectedGroup)
  }
  if (selectedDate) {
    filtered = filtered.filter(m => m.date === selectedDate)
  }
  if (selectedStage === 'group') {
    filtered = filtered.filter(m => m.stage === 'group')
  } else if (selectedStage === 'knockout') {
    filtered = filtered.filter(m => m.stage !== 'group')
  }

  // Sort by date, then time
  filtered.sort((a, b) => a.date.localeCompare(b.date) || a.kickoff.localeCompare(b.kickoff))

  // Check if any matches are live for the refresh indicator
  const hasLiveMatch = matches.some(m => m.status === 'live')

  return (
    <div>
      {/* Live indicator and refresh */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {hasLiveMatch && (
            <span className="flex items-center gap-2 text-red-400 text-sm font-medium">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Live Matches
            </span>
          )}
          {isLoading && (
            <span className="text-slate-400 text-sm">Updating...</span>
          )}
        </div>
        {lastUpdated && (
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>Updated {lastUpdated.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
            <button
              onClick={fetchScores}
              disabled={isLoading}
              className="text-emerald-400 hover:text-emerald-300 disabled:opacity-50"
              title="Refresh scores"
            >
              ↻
            </button>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => { setSelectedGroup(null); setSelectedDate(null); setSelectedStage(null) }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            !selectedGroup && !selectedDate && !selectedStage
              ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          All
        </button>

        <button
          onClick={() => { setSelectedGroup(null); setSelectedDate(null); setSelectedStage('group') }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            selectedStage === 'group' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Group Stage
        </button>

        <button
          onClick={() => { setSelectedGroup(null); setSelectedDate(null); setSelectedStage('knockout') }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            selectedStage === 'knockout' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Knockouts
        </button>

        <div className="w-px bg-slate-700 mx-1" />

        {groupLabels.map(g => (
          <button
            key={g}
            onClick={() => { setSelectedGroup(g); setSelectedDate(null); setSelectedStage(null) }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedGroup === g ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Group {g}
          </button>
        ))}
      </div>

      {/* Date quick-jump */}
      {!selectedGroup && !selectedStage && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {allDates.slice(0, 20).map(date => {
            // Highlight dates with live or finished matches
            const dayMatches = matches.filter(m => m.date === date)
            const hasLive = dayMatches.some(m => m.status === 'live')
            const hasFinished = dayMatches.some(m => m.status === 'finished')
            
            return (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedDate === date 
                    ? 'bg-emerald-600 text-white' 
                    : hasLive 
                      ? 'bg-red-600/20 text-red-400 border border-red-600/30'
                      : hasFinished
                        ? 'bg-slate-600 text-slate-300'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </button>
            )
          })}
        </div>
      )}

      {/* Match list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <span className="text-4xl block mb-3">⚽</span>
            <p>No matches match your filters.</p>
            <button onClick={() => { setSelectedGroup(null); setSelectedDate(null); setSelectedStage(null) }}
              className="text-emerald-400 hover:underline mt-2 text-sm">
              Clear filters
            </button>
          </div>
        ) : (
          filtered.map(match => (
            <MatchCard key={match.id} match={match} />
          ))
        )}
      </div>
    </div>
  )
}
