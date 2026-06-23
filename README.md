# WC26 Guide — Open Source

A live-updating schedule and guide for the 2026 FIFA World Cup. Shows all 104 matches
with real scores, live status, team profiles, and venue guides. Built with Next.js.

## Features

- **Live Scores** — Real-time match status and scores, polled every 60 seconds
- **Full Schedule** — All 72 group-stage and 32 knockout fixtures, filterable by group, date, or stage
- **Team Profiles** — 48 qualified teams with flags, FIFA rankings, and World Cup history
- **Venue Guides** — 16 stadiums across the USA, Canada, and Mexico
- **EDT (US Eastern) Times** — All match times displayed in Eastern Daylight Time with UTC offset notation
- **ISR** — Static page generation with 5-minute revalidation for fast load times

## Quick Start

```bash
git clone https://github.com/AeonOca/wc26-open-source
cd wc26-open-source
cp .env.local.example .env.local
```

1. Get a free API key from [API-Football](https://www.api-football.com/)
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_API_FOOTBALL_KEY=your_key_here
   ```
3. Install and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

```bash
npm run build
npm start
```

Or deploy to Vercel, Netlify, or any Node.js host. Set the environment variable
`NEXT_PUBLIC_API_FOOTBALL_KEY` in your hosting dashboard.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Data:** [API-Football](https://www.api-football.com/) (free tier)
- **Styling:** Tailwind CSS
- **Hosting:** Any Node.js platform

## License

MIT
