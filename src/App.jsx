import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import IntelligenceMode from './components/IntelligenceMode'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Insights from './pages/Insights'
import { transactionsData } from './data/transactions'

// Function to load transactions from localStorage or use default
const getStoredTransactions = () => {
  try {
    const stored = localStorage.getItem('transactions')
    return stored ? JSON.parse(stored) : transactionsData
  } catch (error) {
    return transactionsData
  }
}

export default function App() {
  const [role, setRole] = useState('viewer')
  const [darkMode, setDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [transactions, setTransactions] = useState(getStoredTransactions)
  const [intelligenceMode, setIntelligenceMode] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const handleIntelligenceClick = () => {
    if (clickCount === 0) {
      setClickCount(1)
      alert('🎯 Explore your dashboard first. Then unlock intelligence.')
    } else if (clickCount === 1) {
      setIntelligenceMode(true)
      setClickCount(0)
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <div className={`flex h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:bg-gray-900`}>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar 
            role={role} 
            setRole={setRole} 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
            onIntelligenceClick={handleIntelligenceClick}
            transactions={transactions}
          />

          <main className={`flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 dark:bg-gray-900`}>
            <Routes>
              <Route path="/" element={<Dashboard transactions={transactions} setTransactions={setTransactions} />} />
              <Route path="/transactions" element={<Transactions role={role} transactions={transactions} setTransactions={setTransactions} />} />
              <Route path="/insights" element={<Insights transactions={transactions} />} />
            </Routes>
          </main>
        </div>
      </div>

      <IntelligenceMode 
        isOpen={intelligenceMode} 
        onClose={() => setIntelligenceMode(false)} 
        transactions={transactions}
      />
      </Router>
    </div>
  )
}
