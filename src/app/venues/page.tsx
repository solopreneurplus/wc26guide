import type { Metadata } from 'next'
import { venues } from '@/data/venues'
import VenueCard from '@/components/VenueCard'
import { matches, getMatchesByVenue } from '@/data/matches'
import { teams } from '@/data/teams'
import MatchCard from '@/components/MatchCard'
import { formatCapacity } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Venues & Cities — WC26 Guide',
}

export default function VenuesPage() {
  const countries = ['USA', 'Canada', 'Mexico'] as const

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/images/MetLife_Stadium-US-Wikimedia-3000.jpg)'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Venues & Host Cities</h1>
        <p className="text-slate-400">
          16 stadiums across three nations hosting the first 48-team World Cup.
        </p>
      </div>

      <div className="mb-8 bg-slate-800 rounded-xl p-5 border border-slate-700">
        <h2 className="font-semibold text-white mb-3">At a Glance</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">{venues.length}</div>
            <div className="text-sm text-slate-400">Venues</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">{countries.length}</div>
            <div className="text-sm text-slate-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">
              {formatCapacity(venues.reduce((sum, v) => sum + v.capacity, 0))}
            </div>
            <div className="text-sm text-slate-400">Total Capacity</div>
          </div>
        </div>
      </div>

      {countries.map(country => (
        <section key={country} className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            {country === 'USA' ? '🇺🇸' : country === 'Canada' ? '🇨🇦' : '🇲🇽'} {country}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {venues.filter(v => v.country === country).map(venue => {
              const venueMatches = getMatchesByVenue(venue.id)
              return (
                <div key={venue.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all">
                  <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <span className="text-5xl opacity-30">🏟️</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{venue.name}</h3>
                    <p className="text-sm text-slate-400">{venue.city}</p>
                    <div className="text-xs text-slate-500 mt-1">{formatCapacity(venue.capacity)} seats</div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{venue.description}</p>
                    {venueMatches.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-700">
                        <p className="text-xs text-slate-500 mb-2">{venueMatches.length} matches</p>
                        <div className="space-y-1">
                          {venueMatches.slice(0, 3).map(m => {
                            const t1 = teams.find(t => t.id === m.homeTeamId)
                            const t2 = teams.find(t => t.id === m.awayTeamId)
                            return (
                              <div key={m.id} className="text-xs text-slate-400 flex items-center gap-1">
                                <span>{t1?.flag}</span>
                                <span>vs</span>
                                <span>{t2?.flag}</span>
                                <span className="text-slate-600">·</span>
                                <span>{new Date(m.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              </div>
                            )
                          })}
                          {venueMatches.length > 3 && (
                            <p className="text-xs text-slate-600">+{venueMatches.length - 3} more</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}
      </div>
    </div>
  )
}