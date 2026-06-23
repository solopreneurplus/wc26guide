// Server-side proxy for API-Football live scores
// Uses api-football.com direct subscription

const BASE_URL = 'https://v3.football.api-sports.io'
const API_KEY = process.env.NEXT_PUBLIC_API_FOOTBALL_KEY || ''

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')
  const live = searchParams.get('live')
  const team = searchParams.get('team')

  if (!API_KEY) {
    return Response.json({ error: 'API key not configured' }, { status: 503 })
  }

  const params = new URLSearchParams({ season: '2026' })
  if (live === 'all') params.set('live', 'all')
  if (date) params.set('date', date)
  if (team) params.set('team', team)

  try {
    const res = await fetch(`${BASE_URL}/fixtures?${params}`, {
      headers: { 'x-apisports-key': API_KEY },
      next: { revalidate: 30 },
    })

    if (!res.ok) {
      return Response.json({ error: 'API error', status: res.status }, { status: res.status })
    }

    const data = await res.json()
    return Response.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
      },
    })
  } catch (err) {
    console.error('Live scores fetch error:', err)
    return Response.json({ error: 'Failed to fetch scores' }, { status: 500 })
  }
}