import Link from 'next/link'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
  ctaHref?: string
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  ctaText = 'Get Started',
  ctaHref = '/signup',
}: PricingCardProps) {
  return (
    <div className={`rounded-2xl p-6 border-2 flex flex-col ${
      highlighted
        ? 'bg-slate-800 border-emerald-500 shadow-lg shadow-emerald-500/10 relative'
        : 'bg-slate-800/50 border-slate-700'
    }`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full">
          RECOMMENDED
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-sm text-slate-400 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-slate-500 text-sm ml-1">one-time</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feat}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
          highlighted
            ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
            : 'bg-slate-700 hover:bg-slate-600 text-white'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  )
}