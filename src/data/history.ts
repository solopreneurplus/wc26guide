import { WorldCupEdition } from '@/types'

export const worldCupHistory: WorldCupEdition[] = [
  { year: 1930, host: 'Uruguay', winner: 'Uruguay', runnerUp: 'Argentina', thirdPlace: 'United States', fourthPlace: 'Yugoslavia', topScorer: 'Guillermo Stábile (8)', notable: 'The inaugural tournament, held in Montevideo. Only 13 teams participated.' },
  { year: 1934, host: 'Italy', winner: 'Italy', runnerUp: 'Czechoslovakia', thirdPlace: 'Germany', fourthPlace: 'Austria', topScorer: 'Oldřich Nejedlý (5)', notable: 'First World Cup with a qualification stage. Italy\'s first title under fascist rule.' },
  { year: 1938, host: 'France', winner: 'Italy', runnerUp: 'Hungary', thirdPlace: 'Brazil', fourthPlace: 'Sweden', topScorer: 'Leônidas (7)', notable: 'Italy retained the trophy. Austria withdrew after annexation by Germany.' },
  { year: 1950, host: 'Brazil', winner: 'Uruguay', runnerUp: 'Brazil', thirdPlace: 'Sweden', fourthPlace: 'Spain', topScorer: 'Ademir (9)', notable: 'The Maracanazo — Uruguay stunned Brazil 2-1 in the final match at the Maracanã.' },
  { year: 1954, host: 'Switzerland', winner: 'West Germany', runnerUp: 'Hungary', thirdPlace: 'Austria', fourthPlace: 'Uruguay', topScorer: 'Sándor Kocsis (11)', notable: 'The Miracle of Bern — underdog West Germany beat Hungary\'s Golden Team 3-2.' },
  { year: 1958, host: 'Sweden', winner: 'Brazil', runnerUp: 'Sweden', thirdPlace: 'France', fourthPlace: 'West Germany', topScorer: 'Just Fontaine (13)', notable: 'A 17-year-old Pelé announced himself, scoring a hat-trick in the semi and two in the final.' },
  { year: 1962, host: 'Chile', winner: 'Brazil', runnerUp: 'Czechoslovakia', thirdPlace: 'Chile', fourthPlace: 'Yugoslavia', topScorer: 'Garrincha, Vavá, L. Sánchez, Albert (4)', notable: 'Pelé got injured early; Garrincha carried Brazil to a second consecutive title.' },
  { year: 1966, host: 'England', winner: 'England', runnerUp: 'West Germany', thirdPlace: 'Portugal', fourthPlace: 'Soviet Union', topScorer: 'Eusébio (9)', notable: 'England\'s only title, secured with Geoff Hurst\'s hat-trick and the controversial "goal that never was."' },
  { year: 1970, host: 'Mexico', winner: 'Brazil', runnerUp: 'Italy', thirdPlace: 'West Germany', fourthPlace: 'Uruguay', topScorer: 'Gerd Müller (10)', notable: 'Widely considered the greatest World Cup — Brazil\'s 4-1 final win included arguably the best team goal ever.' },
  { year: 1974, host: 'West Germany', winner: 'West Germany', runnerUp: 'Netherlands', thirdPlace: 'Poland', fourthPlace: 'Brazil', topScorer: 'Grzegorz Lato (7)', notable: 'Total Football\'s Netherlands captivated the world but lost the final to the host nation.' },
  { year: 1978, host: 'Argentina', winner: 'Argentina', runnerUp: 'Netherlands', thirdPlace: 'Brazil', fourthPlace: 'Italy', topScorer: 'Mario Kempes (6)', notable: 'Argentina won its first title at home with Kempes scoring two in the final.' },
  { year: 1982, host: 'Spain', winner: 'Italy', runnerUp: 'West Germany', thirdPlace: 'Poland', fourthPlace: 'France', topScorer: 'Paolo Rossi (6)', notable: 'First 24-team tournament. Paolo Rossi came back from match-fixing ban to lead Italy.' },
  { year: 1986, host: 'Mexico', winner: 'Argentina', runnerUp: 'West Germany', thirdPlace: 'France', fourthPlace: 'Belgium', topScorer: 'Gary Lineker (6)', notable: 'Maradona\'s tournament — the "Hand of God" goal and the "Goal of the Century" in the same match.' },
  { year: 1990, host: 'Italy', winner: 'West Germany', runnerUp: 'Argentina', thirdPlace: 'Italy', fourthPlace: 'England', topScorer: 'Salvatore Schillaci (6)', notable: 'West Germany\'s third and final title before reunification. A defensive, low-scoring tournament.' },
  { year: 1994, host: 'United States', winner: 'Brazil', runnerUp: 'Italy', thirdPlace: 'Sweden', fourthPlace: 'Bulgaria', topScorer: 'Oleg Salenko, Hristo Stoichkov (6)', notable: 'First World Cup in the US. Brazil won on penalties after a 0-0 draw — the first goalless final.' },
  { year: 1998, host: 'France', winner: 'France', runnerUp: 'Brazil', thirdPlace: 'Croatia', fourthPlace: 'Netherlands', topScorer: 'Davor Šuker (6)', notable: 'France won its first title on home soil. Ronaldo suffered a pre-match seizure but played.' },
  { year: 2002, host: 'South Korea & Japan', winner: 'Brazil', runnerUp: 'Germany', thirdPlace: 'Turkey', fourthPlace: 'South Korea', topScorer: 'Ronaldo (8)', notable: 'First World Cup in Asia. Brazil\'s fifth title. Ronaldo redeemed 1998 with two goals in the final.' },
  { year: 2006, host: 'Germany', winner: 'Italy', runnerUp: 'France', thirdPlace: 'Germany', fourthPlace: 'Portugal', topScorer: 'Miroslav Klose (5)', notable: 'Zidane\'s headbutt on Materazzi in the final. Italy\'s fourth title, won on penalties.' },
  { year: 2010, host: 'South Africa', winner: 'Spain', runnerUp: 'Netherlands', thirdPlace: 'Germany', fourthPlace: 'Uruguay', topScorer: 'Thomas Müller, Villa, Sneijder, Forlán (5)', notable: 'First World Cup in Africa. Spain\'s tiki-taka brilliance, Iniesta scoring the winner in extra time.' },
  { year: 2014, host: 'Brazil', winner: 'Germany', runnerUp: 'Argentina', thirdPlace: 'Netherlands', fourthPlace: 'Brazil', topScorer: 'James Rodríguez (6)', notable: 'Germany humiliated Brazil 7-1 in the semi-final. Mario Götze\'s extra-time winner in the final.' },
  { year: 2018, host: 'Russia', winner: 'France', runnerUp: 'Croatia', thirdPlace: 'Belgium', fourthPlace: 'England', topScorer: 'Harry Kane (6)', notable: 'France\'s second title in 20 years. Croatia\'s incredible run as the smallest nation to reach the final since 1950.' },
  { year: 2022, host: 'Qatar', winner: 'Argentina', runnerUp: 'France', thirdPlace: 'Croatia', fourthPlace: 'Morocco', topScorer: 'Kylian Mbappé (8)', notable: 'Messi finally won the World Cup. One of the greatest finals ever — 3-3 after extra time, Argentina on penalties.' },
]

export const getEditionByYear = (year: number) =>
  worldCupHistory.find(e => e.year === year)

export const winnersList = [...new Set(worldCupHistory.map(e => e.winner))].sort()

export const notable2026 = [
  'First 48-team World Cup — expanded from 32 nations',
  'First World Cup hosted by three nations (USA, Canada, Mexico)',
  'First World Cup matches in Canada',
  'Estadio Azteca becomes the first stadium to host matches in three World Cups',
  'New knockout format: Round of 32 featuring top 2 from each group + 8 best third-place teams',
  '104 matches total — the longest tournament in history at 39 days',
  'Opening match: June 11 at Estadio Azteca, Mexico City',
  'Final: July 19 at MetLife Stadium, East Rutherford, New Jersey',
]