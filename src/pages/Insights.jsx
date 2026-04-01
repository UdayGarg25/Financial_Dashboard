import { transactionsData } from '../data/transactions'

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

export default function Insights() {
  // Calculate basic metrics
  const expenses = transactionsData.filter(t => t.type === 'expense')
  const income = transactionsData.filter(t => t.type === 'income')

  // Calculate totals
  const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0)
  const totalIncome = income.reduce((sum, t) => sum + t.amount, 0)
  const balance = totalIncome - totalExpenses

  // Find highest spending category
  const categorySpending = {}
  expenses.forEach(t => {
    categorySpending[t.category] = (categorySpending[t.category] || 0) + t.amount
  })
  const highestCategory = Object.entries(categorySpending).sort((a, b) => b[1] - a[1])[0]

  // Calculate average
  const avgTransaction = expenses.length > 0 ? (totalExpenses / expenses.length).toFixed(2) : 0

  // Calculate expense ratio
  const expenseRatio = totalIncome > 0 ? ((totalExpenses / totalIncome) * 100).toFixed(1) : 0

  // Thoughtful message based on spending
  const getMessage = () => {
    if (expenseRatio < 30) {
      return '✨ Great job! You are spending less than 30% of income'
    } else if (expenseRatio < 50) {
      return '👍 Good control over your spending'
    } else {
      return '⚠️ Consider reducing expenses'
    }
  }

  return (
    <div>
      {/* Main Insight Message */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
        <p className="text-gray-900 font-medium">{getMessage()}</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Highest Spending Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <p className="text-gray-600 text-sm font-medium uppercase">Top Category</p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-4xl">{getCategoryEmoji(highestCategory?.[0])}</span>
            <div>
              <p className="text-2xl font-bold text-gray-900">{highestCategory?.[0] || 'N/A'}</p>
              <p className="text-sm text-red-600 font-semibold">${highestCategory?.[1] || 0}</p>
            </div>
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <p className="text-gray-600 text-sm font-medium uppercase">Total Spent</p>
          <p className="text-3xl font-bold text-gray-900 mt-3">${totalExpenses}</p>
          <p className="text-xs text-gray-500 mt-2">Across {expenses.length} expenses</p>
        </div>

        {/* Total Income Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <p className="text-gray-600 text-sm font-medium uppercase">Total Income</p>
          <p className="text-3xl font-bold text-green-600 mt-3">${totalIncome}</p>
          <p className="text-xs text-gray-500 mt-2">From {income.length} sources</p>
        </div>

        {/* Average Transaction */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <p className="text-gray-600 text-sm font-medium uppercase">Average Spend</p>
          <p className="text-3xl font-bold text-gray-900 mt-3">${avgTransaction}</p>
          <p className="text-xs text-gray-500 mt-2">Per transaction</p>
        </div>

        {/* Net Balance */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <p className="text-gray-600 text-sm font-medium uppercase">Net Saved</p>
          <p className={`text-3xl font-bold mt-3 ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${balance}
          </p>
          <p className="text-xs text-gray-500 mt-2">{balance >= 0 ? 'Surplus' : 'Deficit'}</p>
        </div>

        {/* Expense Ratio */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <p className="text-gray-600 text-sm font-medium uppercase">Expense Ratio</p>
          <p className="text-3xl font-bold text-gray-900 mt-3">{expenseRatio}%</p>
          <p className="text-xs text-gray-500 mt-2">Of total income</p>
        </div>
      </div>

      {/* Category Breakdown Table */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Spending by Category</h3>
        
        {Object.keys(categorySpending).length === 0 ? (
          <p className="text-gray-500">No expenses recorded yet</p>
        ) : (
          <div className="space-y-2">
            {Object.entries(categorySpending)
              .sort((a, b) => b[1] - a[1])
              .map(([category, amount]) => (
                <div key={category} className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 px-2 rounded">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getCategoryEmoji(category)}</span>
                    <span className="font-medium text-gray-700">{category}</span>
                  </div>
                  <span className="font-semibold text-gray-900">${amount}</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
