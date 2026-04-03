// Helper function to get emoji for category
function getCategoryEmoji(category) {
  const emojiMap = {
    'Salary': '💼',
    'Freelance': '💻',
    'Bonus': '🎁',
    'Dividend': '📈',
    'Groceries': '🛒',
    'Rent': '🏠',
    'Utilities': '💡',
    'Entertainment': '🎬',
    'Restaurant': '🍽️',
    'Shopping': '🛍️',
    'Gym': '💪',
    'Gas': '⛽',
    'Insurance': '🛡️',
  }
  return emojiMap[category] || '💰'
}

export default function IntelligenceMode({ isOpen, onClose, transactions }) {
  if (!isOpen) return null

  // Calculate current totals
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
  const currentBalance = totalIncome - totalExpense

  // Simulate future: +15% expenses
  const simulatedExpense = Math.round(totalExpense * 1.15)
  const simulatedBalance = totalIncome - simulatedExpense
  const balanceChange = simulatedBalance - currentBalance

  // Find highest spending category
  const expenses = transactions.filter(t => t.type === 'expense')
  const categorySpending = {}
  expenses.forEach(t => {
    categorySpending[t.category] = (categorySpending[t.category] || 0) + t.amount
  })
  const highestCategory = Object.entries(categorySpending).sort((a, b) => b[1] - a[1])[0]

  // Calculate expense ratio
  const expenseRatio = totalIncome > 0 ? ((totalExpense / totalIncome) * 100).toFixed(1) : 0

  // Generate suggestion based on analysis
  const getSuggestion = () => {
    if (expenseRatio > 70) {
      return '⚠️ Critical: Your expenses exceed 70% of income. Immediate action needed.'
    } else if (expenseRatio > 50) {
      return '📊 Consider reducing discretionary spending to increase savings rate.'
    } else if (highestCategory && categorySpending[highestCategory[0]] > 500) {
      return `💡 Your highest spending is on ${highestCategory[0]}. Look for ways to optimize.`
    } else {
      return '✨ Great financial discipline! Continue monitoring your spending.'
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 overflow-y-auto">
      {/* Gradient accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"></div>

      <div className="w-full max-w-6xl py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-2">
            🔮 Zorvyn Intelligence
          </h1>
          <p className="text-gray-400 text-lg">Financial Analysis & Simulation System</p>
        </div>

        {/* 3 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Future Simulation */}
          <div className="bg-gradient-to-br from-purple-900 to-purple-950 border border-purple-500 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">📈</span>
              <h2 className="text-xl font-bold text-purple-300">Future Simulation</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Current Balance</p>
                <p className="text-2xl font-bold text-green-400">${currentBalance}</p>
              </div>
              <div className="border-t border-purple-700 pt-3">
                <p className="text-gray-400">Simulated (+15% expenses)</p>
                <p className="text-2xl font-bold text-orange-400">${simulatedBalance}</p>
              </div>
              <div className="bg-purple-950 rounded p-3 mt-3">
                <p className={`text-sm font-semibold ${balanceChange < 0 ? 'text-red-400' : 'text-green-400'}`}>
                  {balanceChange < 0 ? '⚠️' : '✓'} {Math.abs(balanceChange)} change
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {balanceChange < 0 
                    ? 'At this rate, savings will decrease next month' 
                    : 'Savings rate remains stable'}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Smart Insights */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-500 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🧠</span>
              <h2 className="text-xl font-bold text-blue-300">Smart Insights</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Top Spending Category</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-3xl">{getCategoryEmoji(highestCategory?.[0])}</span>
                  <div>
                    <p className="text-lg font-bold text-orange-400">{highestCategory?.[0] || 'N/A'}</p>
                    <p className="text-xs text-gray-500">${highestCategory?.[1] || 0}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-blue-700 pt-3">
                <p className="text-gray-400">Income vs Expense Ratio</p>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-semibold text-green-400">Income: ${totalIncome}</span>
                    <span className="text-xs font-semibold text-red-400">Expense: ${totalExpense}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(expenseRatio, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    You're spending <span className="font-bold text-orange-400">{expenseRatio}%</span> of income
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Actionable Suggestions */}
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-950 border border-cyan-500 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">💡</span>
              <h2 className="text-xl font-bold text-cyan-300">Suggestions</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-cyan-950 border border-cyan-700 rounded p-3">
                <p className="text-sm text-cyan-200">{getSuggestion()}</p>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <p className="text-gray-300">Reduce spending in {highestCategory?.[0] || 'top categories'}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <p className="text-gray-300">Set a monthly budget limit of ${Math.round(totalIncome * 0.6)}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <p className="text-gray-300">Track recurring expenses to identify savings</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Exit Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
