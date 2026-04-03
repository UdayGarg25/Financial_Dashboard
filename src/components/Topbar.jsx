import { useLocation } from 'react-router-dom'

export default function Topbar({ role, setRole, darkMode, setDarkMode, onMenuClick, onIntelligenceClick }) {
  const location = useLocation()

  let title = 'Dashboard'
  if (location.pathname === '/transactions') {
    title = 'Transactions'
  } else if (location.pathname === '/insights') {
    title = 'Insights'
  }

  return (
    <div className={`bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center sticky top-0 z-20 shadow-sm transition-colors`}>
      <div className="flex items-center gap-4">
        {/* Hamburger Menu - visible only on mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg className={`w-6 h-6 text-gray-900 dark:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Page Title */}
        <h1 className={`text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white`}>{title}</h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Intelligence Mode Button */}
        <button
          onClick={onIntelligenceClick}
          className="px-2 sm:px-3 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-lg"
        >
          🔮 <span className="hidden sm:inline ml-1">Intelligence</span>
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-2 sm:px-3 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600`}
        >
          {darkMode ? '☀️' : '🌙'}
          <span className="hidden sm:inline ml-1">{darkMode ? 'Light' : 'Dark'}</span>
        </button>
        <div className="flex items-center gap-1 sm:gap-2">
          <label htmlFor="role" className={`text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300`}>
            <span className="hidden sm:inline">Role:</span>
            <span className="inline sm:hidden">👤</span>
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={`px-2 sm:px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-colors`}
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
    </div>
  )
}