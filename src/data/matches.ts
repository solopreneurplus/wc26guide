import { Match } from '@/types'

// Complete 2026 World Cup match schedule
// 72 group stage matches + 32 knockout matches = 104 total

export const matches: Match[] = [
  // ============================================================
  // GROUP A (Mexico-hosted)
  // Venues: Mexico City (Azteca), Guadalajara (Akron), Monterrey (BBVA)
  // ============================================================
  { id: 'A1', stage: 'group', group: 'A', homeTeamId: 'mex', awayTeamId: 'rsa', venueId: 'mexico-city', date: '2026-06-11', kickoff: '16:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'A2', stage: 'group', group: 'A', homeTeamId: 'kor', awayTeamId: 'cze', venueId: 'guadalajara', date: '2026-06-12', kickoff: '15:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'A3', stage: 'group', group: 'A', homeTeamId: 'cze', awayTeamId: 'rsa', venueId: 'monterrey', date: '2026-06-16', kickoff: '18:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'A4', stage: 'group', group: 'A', homeTeamId: 'mex', awayTeamId: 'kor', venueId: 'mexico-city', date: '2026-06-18', kickoff: '20:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'A5', stage: 'group', group: 'A', homeTeamId: 'mex', awayTeamId: 'cze', venueId: 'mexico-city', date: '2026-06-23', kickoff: '17:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'A6', stage: 'group', group: 'A', homeTeamId: 'rsa', awayTeamId: 'kor', venueId: 'guadalajara', date: '2026-06-23', kickoff: '17:00', timezone: 'America/Mexico_City', status: 'scheduled' },

  // ============================================================
  // GROUP B (Canada-hosted)
  // Venues: Toronto (BMO Field), Vancouver (BC Place)
  // ============================================================
  { id: 'B1', stage: 'group', group: 'B', homeTeamId: 'can', awayTeamId: 'bih', venueId: 'toronto', date: '2026-06-13', kickoff: '20:00', timezone: 'America/Toronto', status: 'scheduled' },
  { id: 'B2', stage: 'group', group: 'B', homeTeamId: 'qat', awayTeamId: 'sui', venueId: 'vancouver', date: '2026-06-14', kickoff: '15:00', timezone: 'America/Vancouver', status: 'scheduled' },
  { id: 'B3', stage: 'group', group: 'B', homeTeamId: 'sui', awayTeamId: 'bih', venueId: 'toronto', date: '2026-06-18', kickoff: '17:00', timezone: 'America/Toronto', status: 'scheduled' },
  { id: 'B4', stage: 'group', group: 'B', homeTeamId: 'can', awayTeamId: 'qat', venueId: 'vancouver', date: '2026-06-21', kickoff: '16:00', timezone: 'America/Vancouver', status: 'scheduled' },
  { id: 'B5', stage: 'group', group: 'B', homeTeamId: 'can', awayTeamId: 'sui', venueId: 'vancouver', date: '2026-06-25', kickoff: '20:00', timezone: 'America/Vancouver', status: 'scheduled' },
  { id: 'B6', stage: 'group', group: 'B', homeTeamId: 'bih', awayTeamId: 'qat', venueId: 'toronto', date: '2026-06-25', kickoff: '16:00', timezone: 'America/Toronto', status: 'scheduled' },

  // ============================================================
  // GROUP C (USA-hosted)
  // ============================================================
  { id: 'C1', stage: 'group', group: 'C', homeTeamId: 'bra', awayTeamId: 'mar', venueId: 'atlanta', date: '2026-06-12', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'C2', stage: 'group', group: 'C', homeTeamId: 'hai', awayTeamId: 'sco', venueId: 'miami-gardens', date: '2026-06-14', kickoff: '17:30', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'C3', stage: 'group', group: 'C', homeTeamId: 'sco', awayTeamId: 'mar', venueId: 'foxborough', date: '2026-06-18', kickoff: '14:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'C4', stage: 'group', group: 'C', homeTeamId: 'mar', awayTeamId: 'hai', venueId: 'philadelphia', date: '2026-06-22', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'C5', stage: 'group', group: 'C', homeTeamId: 'bra', awayTeamId: 'hai', venueId: 'miami-gardens', date: '2026-06-24', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'C6', stage: 'group', group: 'C', homeTeamId: 'sco', awayTeamId: 'bra', venueId: 'miami-gardens', date: '2026-06-25', kickoff: '21:00', timezone: 'America/New_York', status: 'scheduled' },

  // ============================================================
  // GROUP D (USA-hosted)
  // ============================================================
  { id: 'D1', stage: 'group', group: 'D', homeTeamId: 'usa', awayTeamId: 'aus', venueId: 'seattle', date: '2026-06-15', kickoff: '19:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'D2', stage: 'group', group: 'D', homeTeamId: 'par', awayTeamId: 'tur', venueId: 'kansas-city', date: '2026-06-16', kickoff: '18:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'D3', stage: 'group', group: 'D', homeTeamId: 'tur', awayTeamId: 'aus', venueId: 'houston', date: '2026-06-20', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'D4', stage: 'group', group: 'D', homeTeamId: 'usa', awayTeamId: 'tur', venueId: 'houston', date: '2026-06-22', kickoff: '20:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'D5', stage: 'group', group: 'D', homeTeamId: 'usa', awayTeamId: 'par', venueId: 'kansas-city', date: '2026-06-26', kickoff: '17:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'D6', stage: 'group', group: 'D', homeTeamId: 'aus', awayTeamId: 'tur', venueId: 'seattle', date: '2026-06-27', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },

  // ============================================================
  // GROUP E (USA-hosted)
  // ============================================================
  { id: 'E1', stage: 'group', group: 'E', homeTeamId: 'ger', awayTeamId: 'cuw', venueId: 'philadelphia', date: '2026-06-13', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'E2', stage: 'group', group: 'E', homeTeamId: 'civ', awayTeamId: 'ecu', venueId: 'arlington', date: '2026-06-15', kickoff: '17:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'E3', stage: 'group', group: 'E', homeTeamId: 'ecu', awayTeamId: 'ger', venueId: 'houston', date: '2026-06-19', kickoff: '20:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'E4', stage: 'group', group: 'E', homeTeamId: 'cuw', awayTeamId: 'civ', venueId: 'arlington', date: '2026-06-22', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'E5', stage: 'group', group: 'E', homeTeamId: 'ger', awayTeamId: 'civ', venueId: 'houston', date: '2026-06-26', kickoff: '20:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'E6', stage: 'group', group: 'E', homeTeamId: 'ecu', awayTeamId: 'cuw', venueId: 'philadelphia', date: '2026-06-27', kickoff: '17:00', timezone: 'America/New_York', status: 'scheduled' },

  // ============================================================
  // GROUP F (USA-hosted)
  // ============================================================
  { id: 'F1', stage: 'group', group: 'F', homeTeamId: 'ned', awayTeamId: 'jpn', venueId: 'arlington', date: '2026-06-13', kickoff: '21:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'F2', stage: 'group', group: 'F', homeTeamId: 'swe', awayTeamId: 'tun', venueId: 'santa-clara', date: '2026-06-14', kickoff: '14:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'F3', stage: 'group', group: 'F', homeTeamId: 'tun', awayTeamId: 'jpn', venueId: 'inglewood', date: '2026-06-19', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'F4', stage: 'group', group: 'F', homeTeamId: 'ned', awayTeamId: 'swe', venueId: 'santa-clara', date: '2026-06-21', kickoff: '20:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'F5', stage: 'group', group: 'F', homeTeamId: 'ned', awayTeamId: 'tun', venueId: 'inglewood', date: '2026-06-24', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'F6', stage: 'group', group: 'F', homeTeamId: 'jpn', awayTeamId: 'swe', venueId: 'santa-clara', date: '2026-06-26', kickoff: '14:00', timezone: 'America/Los_Angeles', status: 'scheduled' },

  // ============================================================
  // GROUP G (USA-hosted)
  // ============================================================
  { id: 'G1', stage: 'group', group: 'G', homeTeamId: 'bel', awayTeamId: 'egy', venueId: 'kansas-city', date: '2026-06-14', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'G2', stage: 'group', group: 'G', homeTeamId: 'irn', awayTeamId: 'nzl', venueId: 'philadelphia', date: '2026-06-16', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'G3', stage: 'group', group: 'G', homeTeamId: 'nzl', awayTeamId: 'egy', venueId: 'seattle', date: '2026-06-20', kickoff: '18:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'G4', stage: 'group', group: 'G', homeTeamId: 'bel', awayTeamId: 'irn', venueId: 'kansas-city', date: '2026-06-22', kickoff: '20:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'G5', stage: 'group', group: 'G', homeTeamId: 'bel', awayTeamId: 'nzl', venueId: 'seattle', date: '2026-06-26', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'G6', stage: 'group', group: 'G', homeTeamId: 'egy', awayTeamId: 'irn', venueId: 'philadelphia', date: '2026-06-27', kickoff: '17:00', timezone: 'America/New_York', status: 'scheduled' },

  // ============================================================
  // GROUP H (USA-hosted)
  // ============================================================
  { id: 'H1', stage: 'group', group: 'H', homeTeamId: 'esp', awayTeamId: 'cpv', venueId: 'arlington', date: '2026-06-14', kickoff: '20:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'H2', stage: 'group', group: 'H', homeTeamId: 'ksa', awayTeamId: 'uru', venueId: 'houston', date: '2026-06-16', kickoff: '18:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'H3', stage: 'group', group: 'H', homeTeamId: 'uru', awayTeamId: 'cpv', venueId: 'santa-clara', date: '2026-06-20', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'H4', stage: 'group', group: 'H', homeTeamId: 'esp', awayTeamId: 'ksa', venueId: 'inglewood', date: '2026-06-22', kickoff: '20:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'H5', stage: 'group', group: 'H', homeTeamId: 'esp', awayTeamId: 'uru', venueId: 'inglewood', date: '2026-06-26', kickoff: '18:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'H6', stage: 'group', group: 'H', homeTeamId: 'cpv', awayTeamId: 'ksa', venueId: 'houston', date: '2026-06-27', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },

  // ============================================================
  // GROUP I (USA-hosted)
  // ============================================================
  { id: 'I1', stage: 'group', group: 'I', homeTeamId: 'fra', awayTeamId: 'sen', venueId: 'foxborough', date: '2026-06-14', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'I2', stage: 'group', group: 'I', homeTeamId: 'irq', awayTeamId: 'nor', venueId: 'miami-gardens', date: '2026-06-15', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'I3', stage: 'group', group: 'I', homeTeamId: 'sen', awayTeamId: 'nor', venueId: 'philadelphia', date: '2026-06-19', kickoff: '17:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'I4', stage: 'group', group: 'I', homeTeamId: 'fra', awayTeamId: 'irq', venueId: 'foxborough', date: '2026-06-21', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'I5', stage: 'group', group: 'I', homeTeamId: 'fra', awayTeamId: 'nor', venueId: 'miami-gardens', date: '2026-06-25', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'I6', stage: 'group', group: 'I', homeTeamId: 'sen', awayTeamId: 'irq', venueId: 'philadelphia', date: '2026-06-26', kickoff: '21:00', timezone: 'America/New_York', status: 'scheduled' },

  // ============================================================
  // GROUP J (USA-hosted)
  // ============================================================
  { id: 'J1', stage: 'group', group: 'J', homeTeamId: 'arg', awayTeamId: 'alg', venueId: 'miami-gardens', date: '2026-06-12', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'J2', stage: 'group', group: 'J', homeTeamId: 'aut', awayTeamId: 'jor', venueId: 'arlington', date: '2026-06-17', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'J3', stage: 'group', group: 'J', homeTeamId: 'jor', awayTeamId: 'alg', venueId: 'atlanta', date: '2026-06-21', kickoff: '14:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'J4', stage: 'group', group: 'J', homeTeamId: 'arg', awayTeamId: 'aut', venueId: 'atlanta', date: '2026-06-23', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'J5', stage: 'group', group: 'J', homeTeamId: 'arg', awayTeamId: 'jor', venueId: 'miami-gardens', date: '2026-06-26', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'J6', stage: 'group', group: 'J', homeTeamId: 'alg', awayTeamId: 'aut', venueId: 'atlanta', date: '2026-06-27', kickoff: '21:00', timezone: 'America/New_York', status: 'scheduled' },

  // ============================================================
  // GROUP K (USA-hosted)
  // ============================================================
  { id: 'K1', stage: 'group', group: 'K', homeTeamId: 'por', awayTeamId: 'col', venueId: 'atlanta', date: '2026-06-13', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'K2', stage: 'group', group: 'K', homeTeamId: 'cod', awayTeamId: 'uzb', venueId: 'east-rutherford', date: '2026-06-17', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'K3', stage: 'group', group: 'K', homeTeamId: 'uzb', awayTeamId: 'col', venueId: 'east-rutherford', date: '2026-06-21', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'K4', stage: 'group', group: 'K', homeTeamId: 'por', awayTeamId: 'cod', venueId: 'philadelphia', date: '2026-06-23', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'K5', stage: 'group', group: 'K', homeTeamId: 'por', awayTeamId: 'uzb', venueId: 'east-rutherford', date: '2026-06-27', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'K6', stage: 'group', group: 'K', homeTeamId: 'col', awayTeamId: 'cod', venueId: 'miami-gardens', date: '2026-06-28', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },

  // ============================================================
  // GROUP L (USA-hosted)
  // ============================================================
  { id: 'L1', stage: 'group', group: 'L', homeTeamId: 'eng', awayTeamId: 'hrv', venueId: 'arlington', date: '2026-06-14', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'L2', stage: 'group', group: 'L', homeTeamId: 'gha', awayTeamId: 'pan', venueId: 'east-rutherford', date: '2026-06-15', kickoff: '17:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'L3', stage: 'group', group: 'L', homeTeamId: 'pan', awayTeamId: 'hrv', venueId: 'east-rutherford', date: '2026-06-19', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'L4', stage: 'group', group: 'L', homeTeamId: 'eng', awayTeamId: 'gha', venueId: 'foxborough', date: '2026-06-23', kickoff: '20:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'L5', stage: 'group', group: 'L', homeTeamId: 'eng', awayTeamId: 'pan', venueId: 'east-rutherford', date: '2026-06-25', kickoff: '17:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'L6', stage: 'group', group: 'L', homeTeamId: 'hrv', awayTeamId: 'gha', venueId: 'foxborough', date: '2026-06-26', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },

  // ============================================================
  // KNOCKOUT STAGE
  // ============================================================

  // Round of 32
  { id: 'R32-1', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'atlanta', date: '2026-06-28', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'R32-2', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'east-rutherford', date: '2026-06-28', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'R32-3', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'houston', date: '2026-06-29', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'R32-4', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'arlington', date: '2026-06-29', kickoff: '18:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'R32-5', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'inglewood', date: '2026-06-30', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'R32-6', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'seattle', date: '2026-06-30', kickoff: '18:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'R32-7', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'kansas-city', date: '2026-07-01', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'R32-8', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'miami-gardens', date: '2026-07-01', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'R32-9', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'philadelphia', date: '2026-07-02', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'R32-10', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'foxborough', date: '2026-07-02', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'R32-11', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'santa-clara', date: '2026-07-03', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'R32-12', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'inglewood', date: '2026-07-03', kickoff: '18:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'R32-13', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'mexico-city', date: '2026-06-29', kickoff: '16:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'R32-14', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'guadalajara', date: '2026-07-01', kickoff: '16:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'R32-15', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'vancouver', date: '2026-06-30', kickoff: '16:00', timezone: 'America/Vancouver', status: 'scheduled' },
  { id: 'R32-16', stage: 'round_of_32', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'toronto', date: '2026-07-02', kickoff: '20:00', timezone: 'America/Toronto', status: 'scheduled' },

  // Round of 16
  { id: 'R16-1', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'east-rutherford', date: '2026-07-04', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'R16-2', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'atlanta', date: '2026-07-04', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'R16-3', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'arlington', date: '2026-07-05', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'R16-4', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'houston', date: '2026-07-05', kickoff: '18:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'R16-5', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'inglewood', date: '2026-07-06', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'R16-6', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'seattle', date: '2026-07-06', kickoff: '18:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'R16-7', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'mexico-city', date: '2026-07-07', kickoff: '16:00', timezone: 'America/Mexico_City', status: 'scheduled' },
  { id: 'R16-8', stage: 'round_of_16', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'vancouver', date: '2026-07-07', kickoff: '16:00', timezone: 'America/Vancouver', status: 'scheduled' },

  // Quarter-finals
  { id: 'QF-1', stage: 'quarter_final', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'arlington', date: '2026-07-09', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'QF-2', stage: 'quarter_final', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'east-rutherford', date: '2026-07-09', kickoff: '19:00', timezone: 'America/New_York', status: 'scheduled' },
  { id: 'QF-3', stage: 'quarter_final', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'inglewood', date: '2026-07-10', kickoff: '15:00', timezone: 'America/Los_Angeles', status: 'scheduled' },
  { id: 'QF-4', stage: 'quarter_final', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'mexico-city', date: '2026-07-10', kickoff: '19:00', timezone: 'America/Mexico_City', status: 'scheduled' },

  // Semi-finals
  { id: 'SF-1', stage: 'semi_final', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'arlington', date: '2026-07-14', kickoff: '15:00', timezone: 'America/Chicago', status: 'scheduled' },
  { id: 'SF-2', stage: 'semi_final', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'atlanta', date: '2026-07-15', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },

  // Third place match
  { id: '3P', stage: 'third_place', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'miami-gardens', date: '2026-07-18', kickoff: '15:00', timezone: 'America/New_York', status: 'scheduled' },

  // Final
  { id: 'FINAL', stage: 'final', homeTeamId: 'tbd', awayTeamId: 'tbd', venueId: 'east-rutherford', date: '2026-07-19', kickoff: '18:00', timezone: 'America/New_York', status: 'scheduled' },
]

// Helper functions

export const getMatchById = (id: string): Match | undefined =>
  matches.find((m) => m.id === id)

export const getMatchesByGroup = (group: string): Match[] =>
  matches.filter((m) => m.group === group && m.stage === 'group')

export const getMatchesByDate = (date: string): Match[] =>
  matches.filter((m) => m.date === date)

export const getMatchesByTeam = (teamId: string): Match[] =>
  matches.filter(
    (m) => m.homeTeamId === teamId || m.awayTeamId === teamId
  )

export const getMatchesByVenue = (venueId: string): Match[] =>
  matches.filter((m) => m.venueId === venueId)

// All unique dates with matches, sorted
export const matchDates = [...new Set(matches.map((m) => m.date))].sort()