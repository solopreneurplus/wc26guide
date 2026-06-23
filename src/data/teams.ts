import { Team } from '@/types'

export const teams: Team[] = [
  // HOSTS
  { id: 'can', name: 'Canada', shortName: 'Canada', flag: '🇨🇦', group: 'B', continent: 'North America', worldCupAppearances: 3, bestFinish: 'Group Stage', fifaRank: 48, qualified: true },
  { id: 'mex', name: 'Mexico', shortName: 'Mexico', flag: '🇲🇽', group: 'A', continent: 'North America', worldCupAppearances: 18, bestFinish: 'Quarter-finals (1970, 1986)', fifaRank: 12, qualified: true },
  { id: 'usa', name: 'United States', shortName: 'USA', flag: '🇺🇸', group: 'D', continent: 'North America', worldCupAppearances: 12, bestFinish: 'Third place (1930)', fifaRank: 13, qualified: true },

  // AFC (Asia)
  { id: 'aus', name: 'Australia', shortName: 'Australia', flag: '🇦🇺', group: 'D', continent: 'Asia', worldCupAppearances: 7, bestFinish: 'Round of 16 (2006, 2022)', fifaRank: 39, qualified: true },
  { id: 'irq', name: 'Iraq', shortName: 'Iraq', flag: '🇮🇶', group: 'I', continent: 'Asia', worldCupAppearances: 2, bestFinish: 'Group Stage', fifaRank: 58, qualified: true },
  { id: 'irn', name: 'Iran', shortName: 'Iran', flag: '🇮🇷', group: 'G', continent: 'Asia', worldCupAppearances: 7, bestFinish: 'Group Stage', fifaRank: 22, qualified: true },
  { id: 'jpn', name: 'Japan', shortName: 'Japan', flag: '🇯🇵', group: 'F', continent: 'Asia', worldCupAppearances: 8, bestFinish: 'Round of 16 (2002, 2010, 2018, 2022)', fifaRank: 18, qualified: true },
  { id: 'jor', name: 'Jordan', shortName: 'Jordan', flag: '🇯🇴', group: 'J', continent: 'Asia', worldCupAppearances: 1, bestFinish: 'Debut', fifaRank: 70, qualified: true },
  { id: 'kor', name: 'South Korea', shortName: 'S. Korea', flag: '🇰🇷', group: 'A', continent: 'Asia', worldCupAppearances: 12, bestFinish: 'Fourth place (2002)', fifaRank: 23, qualified: true },
  { id: 'qat', name: 'Qatar', shortName: 'Qatar', flag: '🇶🇦', group: 'B', continent: 'Asia', worldCupAppearances: 2, bestFinish: 'Group Stage', fifaRank: 36, qualified: true },
  { id: 'ksa', name: 'Saudi Arabia', shortName: 'Saudi Arabia', flag: '🇸🇦', group: 'H', continent: 'Asia', worldCupAppearances: 7, bestFinish: 'Round of 16 (1994)', fifaRank: 53, qualified: true },
  { id: 'uzb', name: 'Uzbekistan', shortName: 'Uzbekistan', flag: '🇺🇿', group: 'K', continent: 'Asia', worldCupAppearances: 1, bestFinish: 'Debut', fifaRank: 64, qualified: true },

  // CAF (Africa)
  { id: 'alg', name: 'Algeria', shortName: 'Algeria', flag: '🇩🇿', group: 'J', continent: 'Africa', worldCupAppearances: 5, bestFinish: 'Round of 16 (2014)', fifaRank: 33, qualified: true },
  { id: 'cpv', name: 'Cape Verde', shortName: 'Cape Verde', flag: '🇨🇻', group: 'H', continent: 'Africa', worldCupAppearances: 1, bestFinish: 'Debut', fifaRank: 71, qualified: true },
  { id: 'cod', name: 'DR Congo', shortName: 'DR Congo', flag: '🇨🇩', group: 'K', continent: 'Africa', worldCupAppearances: 2, bestFinish: 'Group Stage', fifaRank: 61, qualified: true },
  { id: 'civ', name: "Côte d'Ivoire", shortName: 'Ivory Coast', flag: '🇨🇮', group: 'E', continent: 'Africa', worldCupAppearances: 4, bestFinish: 'Group Stage', fifaRank: 42, qualified: true },
  { id: 'egy', name: 'Egypt', shortName: 'Egypt', flag: '🇪🇬', group: 'G', continent: 'Africa', worldCupAppearances: 4, bestFinish: 'Round of 16 (1934)', fifaRank: 35, qualified: true },
  { id: 'gha', name: 'Ghana', shortName: 'Ghana', flag: '🇬🇭', group: 'L', continent: 'Africa', worldCupAppearances: 5, bestFinish: 'Quarter-finals (2010)', fifaRank: 60, qualified: true },
  { id: 'mar', name: 'Morocco', shortName: 'Morocco', flag: '🇲🇦', group: 'C', continent: 'Africa', worldCupAppearances: 7, bestFinish: 'Fourth place (2022)', fifaRank: 14, qualified: true },
  { id: 'sen', name: 'Senegal', shortName: 'Senegal', flag: '🇸🇳', group: 'I', continent: 'Africa', worldCupAppearances: 4, bestFinish: 'Quarter-finals (2002)', fifaRank: 20, qualified: true },
  { id: 'rsa', name: 'South Africa', shortName: 'S. Africa', flag: '🇿🇦', group: 'A', continent: 'Africa', worldCupAppearances: 4, bestFinish: 'Group Stage', fifaRank: 65, qualified: true },
  { id: 'tun', name: 'Tunisia', shortName: 'Tunisia', flag: '🇹🇳', group: 'F', continent: 'Africa', worldCupAppearances: 7, bestFinish: 'Group Stage', fifaRank: 32, qualified: true },

  // CONCACAF (additional)
  { id: 'cuw', name: 'Curaçao', shortName: 'Curaçao', flag: '🇨🇼', group: 'E', continent: 'North America', worldCupAppearances: 1, bestFinish: 'Debut', fifaRank: 86, qualified: true },
  { id: 'hai', name: 'Haiti', shortName: 'Haiti', flag: '🇭🇹', group: 'C', continent: 'North America', worldCupAppearances: 2, bestFinish: 'Group Stage', fifaRank: 89, qualified: true },
  { id: 'pan', name: 'Panama', shortName: 'Panama', flag: '🇵🇦', group: 'L', continent: 'North America', worldCupAppearances: 2, bestFinish: 'Group Stage', fifaRank: 45, qualified: true },

  // CONMEBOL (South America)
  { id: 'arg', name: 'Argentina', shortName: 'Argentina', flag: '🇦🇷', group: 'J', continent: 'South America', worldCupAppearances: 19, bestFinish: 'Champions (1978, 1986, 2022)', fifaRank: 1, qualified: true },
  { id: 'bra', name: 'Brazil', shortName: 'Brazil', flag: '🇧🇷', group: 'C', continent: 'South America', worldCupAppearances: 22, bestFinish: 'Champions (1958, 1962, 1970, 1994, 2002)', fifaRank: 3, qualified: true },
  { id: 'col', name: 'Colombia', shortName: 'Colombia', flag: '🇨🇴', group: 'K', continent: 'South America', worldCupAppearances: 7, bestFinish: 'Quarter-finals (2014)', fifaRank: 17, qualified: true },
  { id: 'ecu', name: 'Ecuador', shortName: 'Ecuador', flag: '🇪🇨', group: 'E', continent: 'South America', worldCupAppearances: 5, bestFinish: 'Round of 16 (2006, 2022)', fifaRank: 31, qualified: true },
  { id: 'par', name: 'Paraguay', shortName: 'Paraguay', flag: '🇵🇾', group: 'D', continent: 'South America', worldCupAppearances: 9, bestFinish: 'Quarter-finals (2010)', fifaRank: 54, qualified: true },
  { id: 'uru', name: 'Uruguay', shortName: 'Uruguay', flag: '🇺🇾', group: 'H', continent: 'South America', worldCupAppearances: 15, bestFinish: 'Champions (1930, 1950)', fifaRank: 11, qualified: true },

  // OFC (Oceania)
  { id: 'nzl', name: 'New Zealand', shortName: 'New Zealand', flag: '🇳🇿', group: 'G', continent: 'Oceania', worldCupAppearances: 3, bestFinish: 'Group Stage', fifaRank: 104, qualified: true },

  // UEFA (Europe)
  { id: 'aut', name: 'Austria', shortName: 'Austria', flag: '🇦🇹', group: 'J', continent: 'Europe', worldCupAppearances: 7, bestFinish: 'Third place (1954)', fifaRank: 25, qualified: true },
  { id: 'bel', name: 'Belgium', shortName: 'Belgium', flag: '🇧🇪', group: 'G', continent: 'Europe', worldCupAppearances: 15, bestFinish: 'Third place (2018)', fifaRank: 8, qualified: true },
  { id: 'bih', name: 'Bosnia and Herzegovina', shortName: 'Bosnia', flag: '🇧🇦', group: 'B', continent: 'Europe', worldCupAppearances: 2, bestFinish: 'Group Stage', fifaRank: 57, qualified: true },
  { id: 'hrv', name: 'Croatia', shortName: 'Croatia', flag: '🇭🇷', group: 'L', continent: 'Europe', worldCupAppearances: 7, bestFinish: 'Runners-up (2018)', fifaRank: 9, qualified: true },
  { id: 'cze', name: 'Czechia', shortName: 'Czechia', flag: '🇨🇿', group: 'A', continent: 'Europe', worldCupAppearances: 11, bestFinish: 'Runners-up (1934, 1962)', fifaRank: 37, qualified: true },
  { id: 'eng', name: 'England', shortName: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L', continent: 'Europe', worldCupAppearances: 17, bestFinish: 'Champions (1966)', fifaRank: 4, qualified: true },
  { id: 'fra', name: 'France', shortName: 'France', flag: '🇫🇷', group: 'I', continent: 'Europe', worldCupAppearances: 17, bestFinish: 'Champions (1998, 2018)', fifaRank: 2, qualified: true },
  { id: 'ger', name: 'Germany', shortName: 'Germany', flag: '🇩🇪', group: 'E', continent: 'Europe', worldCupAppearances: 20, bestFinish: 'Champions (1954, 1974, 1990, 2014)', fifaRank: 10, qualified: true },
  { id: 'ned', name: 'Netherlands', shortName: 'Netherlands', flag: '🇳🇱', group: 'F', continent: 'Europe', worldCupAppearances: 12, bestFinish: 'Runners-up (1974, 1978, 2010)', fifaRank: 6, qualified: true },
  { id: 'nor', name: 'Norway', shortName: 'Norway', flag: '🇳🇴', group: 'I', continent: 'Europe', worldCupAppearances: 4, bestFinish: 'Round of 16 (1938, 1998)', fifaRank: 46, qualified: true },
  { id: 'por', name: 'Portugal', shortName: 'Portugal', flag: '🇵🇹', group: 'K', continent: 'Europe', worldCupAppearances: 9, bestFinish: 'Third place (1966)', fifaRank: 5, qualified: true },
  { id: 'sco', name: 'Scotland', shortName: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', continent: 'Europe', worldCupAppearances: 9, bestFinish: 'Group Stage', fifaRank: 38, qualified: true },
  { id: 'esp', name: 'Spain', shortName: 'Spain', flag: '🇪🇸', group: 'H', continent: 'Europe', worldCupAppearances: 17, bestFinish: 'Champions (2010)', fifaRank: 7, qualified: true },
  { id: 'swe', name: 'Sweden', shortName: 'Sweden', flag: '🇸🇪', group: 'F', continent: 'Europe', worldCupAppearances: 13, bestFinish: 'Runners-up (1958)', fifaRank: 27, qualified: true },
  { id: 'sui', name: 'Switzerland', shortName: 'Switzerland', flag: '🇨🇭', group: 'B', continent: 'Europe', worldCupAppearances: 13, bestFinish: 'Quarter-finals (1934, 1938, 1954)', fifaRank: 15, qualified: true },
  { id: 'tur', name: 'Türkiye', shortName: 'Türkiye', flag: '🇹🇷', group: 'D', continent: 'Europe', worldCupAppearances: 3, bestFinish: 'Third place (2002)', fifaRank: 28, qualified: true },
]

export const getTeamById = (id: string): Team | undefined =>
  teams.find(t => t.id === id)

export const getTeamsByGroup = (group: string): Team[] =>
  teams.filter(t => t.group === group).sort((a, b) => a.fifaRank ?? 999 - (b.fifaRank ?? 999))

export const groupLabels = ['A','B','C','D','E','F','G','H','I','J','K','L']