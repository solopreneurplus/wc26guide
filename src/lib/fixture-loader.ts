// Fixture loader — fetches World Cup data from API-Football and maps to our Match type
// Replaces the hardcoded matches.ts for group-stage data, falls back for knockout

import { Match } from '@/types'
import { teamNameToId, mapApiStatus } from './utils'

const BASE_URL = 'https://v3.football.api-sports.io'
const API_KEY = process.env.NEXT_PUBLIC_API_FOOTBALL_KEY || ''

// --- API-Football venue name → our venue ID mapping ---
const venueNameToId: Record<string, string> = {
  'Estadio Azteca': 'mexico-city',
  'Estadio BBVA': 'monterrey',
  'Estadio Akron': 'guadalajara',
  'BMO Field': 'toronto',
  'BC Place': 'vancouver',
  'BC Place Stadium': 'vancouver',
  'Mercedes-Benz Stadium': 'atlanta',
  'Hard Rock Stadium': 'miami-gardens',
  'Gillette Stadium': 'foxborough',
  'Lincoln Financial Field': 'philadelphia',
  'Lumen Field': 'seattle',
  'GEHA Field at Arrowhead Stadium': 'kansas-city',
  'Arrowhead Stadium': 'kansas-city',
  'NRG Stadium': 'houston',
  'AT&T Stadium': 'arlington',
  "Levi's Stadium": 'santa-clara',
  'Levi Stadium': 'santa-clara',
  'SoFi Stadium': 'inglewood',
  'MetLife Stadium': 'east-rutherford',
}

// --- Group letter mapping from round name ---
// API returns "Group Stage - 1" through "Group Stage - 3"
// We need to know which group letter each fixture belongs to
// API-Football doesn't provide the group letter directly, so we
// match by the numeric group index from the teams' group assignments
// For now, we use a hardcoded lookup by fixture fixture ID range
const groupByFixtureId: Record<number, string> = {
  // Group A (Mexico, South Africa, Korea, Czechia)
  1300001: 'A', 1300002: 'A', 1300003: 'A', 1300004: 'A', 1300005: 'A', 1300006: 'A',
}

// Fallback: derive group from team IDs
// Returns the most likely group letter based on which teams are playing
function inferGroup(homeId: string, awayId: string): string | undefined {
  // Group A
  const groupA = ['mex', 'rsa', 'kor', 'cze']
  const groupB = ['can', 'bih', 'qat', 'sui']
  const groupC = ['bra', 'mar', 'hai', 'sco']
  const groupD = ['usa', 'aus', 'par', 'tur']
  const groupE = ['ger', 'cuw', 'civ', 'ecu']
  const groupF = ['ned', 'jpn', 'swe', 'tun']
  const groupG = ['bel', 'egy', 'irn', 'nzl']
  const groupH = ['esp', 'cpv', 'ksa', 'uru']
  const groupI = ['fra', 'sen', 'irq', 'nor']
  const groupJ = ['arg', 'alg', 'aut', 'jor']
  const groupK = ['por', 'col', 'cod', 'uzb']
  const groupL = ['eng', 'hrv', 'gha', 'pan']

  if (homeId && awayId) {
    for (const [group, teams] of Object.entries({
      A: groupA, B: groupB, C: groupC, D: groupD,
      E: groupE, F: groupF, G: groupG, H: groupH,
      I: groupI, J: groupJ, K: groupK, L: groupL,
    })) {
      if (teams.includes(homeId) && teams.includes(awayId)) return group
    }
  }
  return undefined
}

// --- Fetch all group-stage fixtures from API-Football ---
async function fetchApiFixtures(): Promise<Match[]> {
  if (!API_KEY) {
    console.warn('[fixtures] API-Football key not configured — using hardcoded data')
    return []
  }

  try {
    const url = new URL('/fixtures', BASE_URL)
    url.searchParams.set('league', '1')
    url.searchParams.set('season', '2026')

    const res = await fetch(url.toString(), {
      headers: { 'x-apisports-key': API_KEY },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!res.ok) {
      console.error('[fixtures] API error:', res.status)
      return []
    }

    const data = await res.json()
    if (!data?.response) return []

    const fixtures = data.response.map(mapApiFixture).filter((m: Match | null): m is Match => m !== null)
    console.log('[fixtures] Loaded', fixtures.length, 'group-stage fixtures from API-Football')
    return fixtures
  } catch (err) {
    console.error('[fixtures] Fetch failed:', err)
    return []
  }
}

// --- Map a single API-Football fixture to our Match type ---
function mapApiFixture(api: any): Match | null {
  try {
    const fixture = api.fixture
    const teams = api.teams
    const venue = api.venue
    const goals = api.goals
    const league = api.league

    const homeName = teams?.home?.name || ''
    const awayName = teams?.away?.name || ''

    const homeId = teamNameToId[homeName]
    const awayId = teamNameToId[awayName]

    if (!homeId || !awayId) {
      console.warn('[fixtures] Unknown team:', homeName, 'or', awayName)
      return null
    }

    // Parse ISO date and convert from UTC to EDT (US Eastern)
    const dateObj = new Date(fixture.date)
    const edtDate = new Date(dateObj.getTime() - 4 * 60 * 60 * 1000) // UTC → EDT = -4h
    const date = edtDate.toISOString().split('T')[0]
    const hours = edtDate.getUTCHours().toString().padStart(2, '0')
    const minutes = edtDate.getUTCMinutes().toString().padStart(2, '0')
    const kickoff = `${hours}:${minutes}`

    // Map status
    const status = mapApiStatus(fixture.status?.short)

    // Map venue
    const venueName = venue?.name || ''
    const venueId = venueNameToId[venueName] || 'arlington'

    // Determine group letter
    const round = league?.round || ''
    const group = inferGroup(homeId, awayId)

    return {
      id: `API-${fixture.id}`,
      stage: round.toLowerCase().includes('group') ? 'group' : 'round_of_32',
      group,
      homeTeamId: homeId,
      awayTeamId: awayId,
      venueId,
      date,
      kickoff,
      timezone: 'America/New_York', // All API times converted to EDT
      status,
      homeScore: goals?.home ?? undefined,
      awayScore: goals?.away ?? undefined,
    }
  } catch (err) {
    console.error('[fixtures] Map error:', err)
    return null
  }
}

// Keep hardcoded knockout-stage fixtures for tournament structure
import { matches as allMatches } from '@/data/matches'
import { toEdt } from './utils'

const knockoutFixtures: Match[] = allMatches.filter(
  (m) => m.stage !== 'group'
)

// Convert a set of matches to EDT date/time (canonical display tz)
function toEdtFixtures(fixtures: Match[]): Match[] {
  return fixtures.map(m => {
    const edt = toEdt(m)
    return { ...m, ...edt, timezone: 'America/New_York' as const }
  })
}

// --- Main export: get all fixtures (API group stage + hardcoded knockout) ---
export async function getAllFixtures(): Promise<Match[]> {
  const apiFixtures = await fetchApiFixtures()

  if (apiFixtures.length > 0) {
    return toEdtFixtures([...apiFixtures, ...knockoutFixtures])
  }

  // Fallback to all hardcoded data
  console.warn('[fixtures] Using hardcoded fallback data')
  return toEdtFixtures(allMatches)
}

// --- Helpers to filter/get matches ---
export async function getMatchesByDate(date: string): Promise<Match[]> {
  const fixtures = await getAllFixtures()
  return fixtures.filter((m) => m.date === date)
}

export async function getMatchesByTeam(teamId: string): Promise<Match[]> {
  const fixtures = await getAllFixtures()
  return fixtures.filter((m) => m.homeTeamId === teamId || m.awayTeamId === teamId)
}

export async function getMatchDates(): Promise<string[]> {
  const fixtures = await getAllFixtures()
  return [...new Set(fixtures.map((m) => m.date))].sort()
}

// Re-export for the schedule page
export type { Match }