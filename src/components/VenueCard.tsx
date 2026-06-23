import { Venue } from '@/types'
import { formatCapacity } from '@/lib/utils'

interface VenueCardProps {
  venue: Venue
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all">
      <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <span className="text-5xl opacity-30">🏟️</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{venue.name}</h3>
        <p className="text-sm text-slate-400 mt-1">{venue.city}</p>
        <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
          <span>🇺🇸 {venue.country}</span>
          <span>·</span>
          <span>{formatCapacity(venue.capacity)} seats</span>
        </div>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
          {venue.description}
        </p>
      </div>
    </div>
  )
}