// WC26GUIDE — Core Types

export interface Team {
  id: string
  name: string
  shortName: string
  flag: string          // emoji or flag CDN URL
  group: string         // A–H
  continent: string
  worldCupAppearances: number
  bestFinish: string
  fifaRank?: number
  qualified: boolean    // true if confirmed qualified
}

export interface Venue {
  id: string
  name: string
  city: string
  country: 'USA' | 'Canada' | 'Mexico'
  capacity: number
  image: string         // placeholder or CDN URL
  matches: string[]     // match IDs
  description: string
}

export interface Match {
  id: string
  stage: 'group' | 'round_of_32' | 'round_of_16' | 'quarter_final' | 'semi_final' | 'third_place' | 'final'
  group?: string
  homeTeamId: string
  awayTeamId: string
  venueId: string
  date: string          // ISO date
  kickoff: string       // "HH:MM" in local venue time
  timezone: string      // IANA tz
  homeScore?: number
  awayScore?: number
  status: 'scheduled' | 'live' | 'finished'
}

export interface WorldCupEdition {
  year: number
  host: string
  winner: string
  runnerUp: string
  thirdPlace?: string
  fourthPlace?: string
  topScorer?: string
  notable?: string
}

export interface UserProfile {
  id: string
  email: string
  name?: string
  isPaid: boolean
  timezone: string
  createdAt: string
  points: number
}

export interface Bookmark {
  id: string
  userId: string
  matchId: string
  createdAt: string
}

export interface PointsEvent {
  id: string
  userId: string
  action: 'signup' | 'login' | 'bookmark' | 'share' | 'daily_visit'
  points: number
  createdAt: string
}