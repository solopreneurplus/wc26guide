export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">WC26 Guide</h3>
            <p className="text-sm">Your complete companion to the 2026 FIFA World Cup.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>Live Scores</li>
              <li>Match Schedule</li>
              <li>Team Profiles</li>
              <li>Venue Guides</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Open Source</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/AeonOca/wc26-open-source" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>MIT License</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Data</h3>
            <ul className="space-y-2 text-sm">
              <li>API-Football</li>
              <li>SportsDB</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm">
          <p>© 2026. Not affiliated with FIFA. All tournament data for reference purposes.</p>
        </div>
      </div>
    </footer>
  )
}
