import { Venue } from '@/types'

export const venues: Venue[] = [
  // UNITED STATES
  {
    id: 'arlington', name: 'AT&T Stadium', city: 'Arlington, TX', country: 'USA',
    capacity: 94000, matches: [], image: '/images/venues/arlington.jpg',
    description: 'Home of the Dallas Cowboys, this massive domed stadium features one of the largest HD video boards in the world and will host the most matches of any venue in the tournament.'
  },
  {
    id: 'east-rutherford', name: 'MetLife Stadium', city: 'East Rutherford, NJ', country: 'USA',
    capacity: 82500, matches: [], image: '/images/venues/metlife.jpg',
    description: 'The largest stadium in the NFL will host the 2026 World Cup Final. Located just outside New York City, it offers easy access for international visitors and a world-class experience.'
  },
  {
    id: 'atlanta', name: 'Mercedes-Benz Stadium', city: 'Atlanta, GA', country: 'USA',
    capacity: 75000, matches: [], image: '/images/venues/atlanta.jpg',
    description: 'One of the most technologically advanced stadiums in the world, featuring a retractable roof and the iconic 360-degree halo board.'
  },
  {
    id: 'kansas-city', name: 'GEHA Field at Arrowhead Stadium', city: 'Kansas City, MO', country: 'USA',
    capacity: 73000, matches: [], image: '/images/venues/kansascity.jpg',
    description: 'Known for having one of the loudest crowds in sports, Arrowhead Stadium will bring its legendary atmosphere to the World Cup.'
  },
  {
    id: 'houston', name: 'NRG Stadium', city: 'Houston, TX', country: 'USA',
    capacity: 72000, matches: [], image: '/images/venues/houston.jpg',
    description: 'A versatile domed stadium with a retractable roof, NRG has hosted Super Bowls, Final Fours, and will now welcome the world\'s biggest football tournament.'
  },
  {
    id: 'santa-clara', name: 'Levi\'s Stadium', city: 'Santa Clara, CA', country: 'USA',
    capacity: 71000, matches: [], image: '/images/venues/santaclara.jpg',
    description: 'Located in the heart of Silicon Valley, this modern stadium hosted matches during the 2026 World Cup qualifying cycle and several international tournaments.'
  },
  {
    id: 'inglewood', name: 'SoFi Stadium', city: 'Inglewood, CA', country: 'USA',
    capacity: 70000, matches: [], image: '/images/venues/sofi.jpg',
    description: 'One of the newest and most expensive stadiums ever built, SoFi features a translucent roof, a massive double-sided video board, and a design that defines modern luxury.'
  },
  {
    id: 'philadelphia', name: 'Lincoln Financial Field', city: 'Philadelphia, PA', country: 'USA',
    capacity: 69000, matches: [], image: '/images/venues/philly.jpg',
    description: 'Home of the Philadelphia Eagles, this passionate sports city will bring its famously devoted fan base to the World Cup stage.'
  },
  {
    id: 'seattle', name: 'Lumen Field', city: 'Seattle, WA', country: 'USA',
    capacity: 69000, matches: [], image: '/images/venues/seattle.jpg',
    description: 'Famous for its raucous atmosphere and the "12th Man" crowd noise, Lumen Field also holds the record for the loudest outdoor stadium.'
  },
  {
    id: 'foxborough', name: 'Gillette Stadium', city: 'Foxborough, MA', country: 'USA',
    capacity: 65000, matches: [], image: '/images/venues/gillette.jpg',
    description: 'The home of the New England Patriots, located about 30 minutes from Boston. A proven venue for major international soccer events.'
  },
  {
    id: 'miami-gardens', name: 'Hard Rock Stadium', city: 'Miami Gardens, FL', country: 'USA',
    capacity: 65300, matches: [], image: '/images/venues/hardrock.jpg',
    description: 'A recently renovated stadium with a stunning open-air design, Miami will bring its vibrant Latin culture and soccer passion to the tournament.'
  },

  // MEXICO
  {
    id: 'mexico-city', name: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico',
    capacity: 83000, matches: [], image: '/images/venues/azteca.jpg',
    description: 'A legendary cathedral of football. Estadio Azteca has hosted two World Cup Finals (1970, 1986) and will make history as the first stadium to host three World Cups. It also hosts the Opening Match of 2026.'
  },
  {
    id: 'monterrey', name: 'Estadio BBVA', city: 'Guadalupe, NL', country: 'Mexico',
    capacity: 53500, matches: [], image: '/images/venues/bbva.jpg',
    description: 'One of Mexico\'s most modern stadiums, home to CF Monterrey. Its striking architecture and passionate northern Mexican fanbase make it a memorable venue.'
  },
  {
    id: 'guadalajara', name: 'Estadio Akron', city: 'Zapopan, Jalisco', country: 'Mexico',
    capacity: 48000, matches: [], image: '/images/venues/akron.jpg',
    description: 'Home to Club Deportivo Guadalajara (Chivas), this stadium sits in Mexico\'s second-largest city and will bring the legendary passion of Mexican football.'
  },

  // CANADA
  {
    id: 'vancouver', name: 'BC Place', city: 'Vancouver, BC', country: 'Canada',
    capacity: 54000, matches: [], image: '/images/venues/bcplace.jpg',
    description: 'An iconic domed stadium with the largest retractable roof in the world. BC Place hosted the 2015 Women\'s World Cup Final and has a strong soccer tradition.'
  },
  {
    id: 'toronto', name: 'BMO Field', city: 'Toronto, ON', country: 'Canada',
    capacity: 45000, matches: [], image: '/images/venues/bmofield.jpg',
    description: 'Canada\'s largest soccer-specific stadium, expanded for the tournament. Located on the shores of Lake Ontario in one of the world\'s most multicultural cities.'
  },
]

export const getVenueById = (id: string): Venue | undefined =>
  venues.find(v => v.id === id)

export const getVenuesByCountry = (country: 'USA' | 'Canada' | 'Mexico'): Venue[] =>
  venues.filter(v => v.country === country)