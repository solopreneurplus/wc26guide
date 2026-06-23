// Utility functions for WC26GUIDE

/**
 * Convert a kickoff time from venue local time to user's timezone
 */
export function convertToTimezone(
  venueTime: string,
  venueTz: string,
  userTz: string = Intl.DateTimeFormat().resolvedOptions().timeZone
): string {
  try {
    const [hours, minutes] = venueTime.split(':').map(Number)
    const now = new Date()
    const venueDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours - now.getTimezoneOffset() / 60, minutes))
    // Simple offset-based conversion for MVP
    const venueOffset = getTimezoneOffset(venueTz)
    const userOffset = getTimezoneOffset(userTz)
    const diffHours = (userOffset - venueOffset) / 60
    let resultHours = hours + diffHours
    const period = resultHours >= 12 ? 'PM' : 'AM'
    if (resultHours > 12) resultHours -= 12
    if (resultHours <= 0) resultHours += 12
    return `${Math.floor(resultHours)}:${minutes.toString().padStart(2, '0')} ${period}`
  } catch {
    return venueTime
  }
}

// UTC offsets for the 2026 World Cup period (June–July, DST in effect)
// EDT (US Eastern) = UTC-4; also used as our canonical display timezone
const tzOffsets: Record<string, number> = {
  'America/New_York': -240,
  'America/Chicago': -300,
  'America/Denver': -360,
  'America/Los_Angeles': -420,
  'America/Mexico_City': -360,
  'America/Toronto': -240,
  'America/Vancouver': -420,
  'America/Anchorage': -480,
  'Pacific/Honolulu': -600,
  'Europe/London': 60,
  'Europe/Paris': 120,
  'Europe/Berlin': 120,
  'Europe/Madrid': 120,
  'Europe/Rome': 120,
  'Europe/Zurich': 120,
  'Europe/Amsterdam': 120,
  'Europe/Stockholm': 120,
  'Europe/Oslo': 120,
  'Europe/Lisbon': 60,
  'Asia/Tokyo': 540,
  'Asia/Seoul': 540,
  'Asia/Shanghai': 480,
  'Asia/Dubai': 240,
  'Asia/Qatar': 180,
  'Asia/Riyadh': 180,
  'Asia/Kolkata': 330,
  'Australia/Sydney': 600,
  'Pacific/Auckland': 720,
}

export function getTimezoneOffset(tz: string): number {
  return tzOffsets[tz] ?? -240
}

/**
 * Format a date string to a human-readable format
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

/**
 * Get match status display text
 */
export function matchStatusText(status: string): string {
  switch (status) {
    case 'scheduled': return 'Upcoming'
    case 'live': return 'LIVE'
    case 'finished': return 'Final'
    default: return status
  }
}

/**
 * Group matches into sections by date
 */
export function groupByDate<T extends { date: string }>(items: T[]): Record<string, T[]> {
  const grouped: Record<string, T[]> = {}
  for (const item of items) {
    if (!grouped[item.date]) grouped[item.date] = []
    grouped[item.date].push(item)
  }
  return grouped
}

/**
 * Format stadium capacity with commas
 */
export function formatCapacity(cap: number): string {
  return cap.toLocaleString('en-US')
}

/**
 * Pluralize helper
 */
export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`)
}

// Map API-Football team names to our team IDs
export const teamNameToId: Record<string, string> = {
  'Mexico': 'mex',
  'South Africa': 'rsa',
  'Korea Republic': 'kor',
  'South Korea': 'kor',
  'Czech Republic': 'cze',
  'Czechia': 'cze',
  'Canada': 'can',
  'Bosnia and Herzegovina': 'bih',
  'Bosnia Herzegovina': 'bih',
  'Bosnia & Herzegovina': 'bih',
  'Qatar': 'qat',
  'Switzerland': 'sui',
  'Brazil': 'bra',
  'Morocco': 'mar',
  'Haiti': 'hai',
  'Scotland': 'sco',
  'USA': 'usa',
  'United States': 'usa',
  'Australia': 'aus',
  'Paraguay': 'par',
  'Turkey': 'tur',
  'Türkiye': 'tur',
  'Germany': 'ger',
  'Curacao': 'cuw',
  'Curaçao': 'cuw',
  "Côte d'Ivoire": 'civ',
  'Ivory Coast': 'civ',
  'Ecuador': 'ecu',
  'Netherlands': 'ned',
  'Japan': 'jpn',
  'Sweden': 'swe',
  'Tunisia': 'tun',
  'Belgium': 'bel',
  'Egypt': 'egy',
  'Iran': 'irn',
  'New Zealand': 'nzl',
  'Spain': 'esp',
  'Cape Verde': 'cpv',
  'Cape Verde Islands': 'cpv',
  'Saudi Arabia': 'ksa',
  'Uruguay': 'uru',
  'France': 'fra',
  'Senegal': 'sen',
  'Iraq': 'irq',
  'Norway': 'nor',
  'Argentina': 'arg',
  'Algeria': 'alg',
  'Austria': 'aut',
  'Jordan': 'jor',
  'Portugal': 'por',
  'Colombia': 'col',
  'DR Congo': 'cod',
  'Congo DR': 'cod',
  'Congo': 'cod',
  'Uzbekistan': 'uzb',
  'England': 'eng',
  'Ghana': 'gha',
  'Croatia': 'hrv',
  'Panama': 'pan',
}

// Get our team ID from API-Football team name
export function getTeamIdFromName(name: string): string | undefined {
  return teamNameToId[name] || teamNameToId[name.replace(' FC', '').trim()]
}

// Map API-Football status to our Match status
export function mapApiStatus(apiStatus: string): 'scheduled' | 'live' | 'finished' {
  const status = apiStatus?.toUpperCase() || ''
  if (status === 'LIVE' || status === '1H' || status === '2H' || status === 'HT' || status === 'ET') {
    return 'live'
  }
  if (status === 'FT' || status === 'PEN' || status === 'AET' || status === 'FINISHED') {
    return 'finished'
  }
  return 'scheduled'
}

/**
 * Convert a match's date+kickoff+timezone to Eastern US (EDT) date and time.
 * Used to display all match times in a single canonical timezone.
 */
export function toEdt(match: { date: string; kickoff: string; timezone: string }): {
  date: string
  kickoff: string
} {
  const [hours, minutes] = match.kickoff.split(':').map(Number)
  const [year, month, day] = match.date.split('-').map(Number)

  // Construct as venue-local time via Date.UTC, then shift to actual UTC
  const venueUtc = Date.UTC(year, month - 1, day, hours, minutes)
  const venueOffset = getTimezoneOffset(match.timezone) // minutes from UTC
  const actualUtc = venueUtc - venueOffset * 60000

  // EDT offset is -240 minutes (UTC-4)
  const EDT_OFFSET = -240
  const edt = new Date(actualUtc + EDT_OFFSET * 60000)

  const edtDateStr = edt.toISOString().split('T')[0]
  const edtH = edt.getUTCHours()
  const edtM = edt.getUTCMinutes()

  return {
    date: edtDateStr,
    kickoff: `${edtH.toString().padStart(2, '0')}:${edtM.toString().padStart(2, '0')}`,
  }
}

/**
 * Format an EDT kickoff time for display: "4 p.m. EDT(US)/UTC -4"
 */
export function formatEdtKickoff(kickoff: string): string {
  const [hours, minutes] = kickoff.split(':').map(Number)
  const period = hours >= 12 ? 'p.m.' : 'a.m.'
  const displayHour = hours % 12 || 12
  const minStr = minutes.toString().padStart(2, '0')
  return `${displayHour}:${minStr} ${period} EDT(US)/UTC -4`
}