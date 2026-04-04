import React from 'react'
import { FaChartLine, FaBriefcase, FaLaptop, FaGift, FaShoppingCart, FaHome, FaLightbulb, FaFilm, FaUtensils, FaShoppingBag, FaDumbbell, FaCar, FaLock, FaWallet } from 'react-icons/fa'

// Helper function to get icon for category
function getCategoryIcon(category) {
  const iconMap = {
    'Salary': FaBriefcase,
    'Freelance': FaLaptop,
    'Bonus': FaGift,
    'Dividend': FaChartLine,
    'Groceries': FaShoppingCart,
    'Rent': FaHome,
    'Utilities': FaLightbulb,
    'Entertainment': FaFilm,
    'Restaurant': FaUtensils,
    'Shopping': FaShoppingBag,
    'Gym': FaDumbbell,
    'Gas': FaCar,
    'Insurance': FaLock,
  }
  return iconMap[category] || FaWallet
}

export default function Insights({ transactions }) {
  // Calculate basic metrics
  const expenses = transactions.filter(t => t.type === 'expense')
  const income = transactions.filter(t => t.type === 'income')

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
      return 'Great job! You are spending less than 30% of income'
    } else if (expenseRatio < 50) {
      return 'Good control over your spending'
    } else {
      return 'Consider reducing expenses'
    }
  }

  return (
    <div className="animate-fadeIn space-y-8">
      <div className="bg-white dark:bg-gray-800 border-l-4 border-indigo-500 dark:border-indigo-400 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition">
  <p className="text-gray-900 dark:text-white text-sm sm:text-base font-medium">
    {getMessage()}
  </p>
</div>

      {/* Key Metrics Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
          {/* Highest Spending Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Top Category</p>
            <div className="flex items-center gap-3 sm:gap-4 mt-4">
              {React.createElement(getCategoryIcon(highestCategory?.[0]), { className: 'text-3xl sm:text-4xl text-indigo-600 dark:text-indigo-400 flex-shrink-0' })}
              <div>
                <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{highestCategory?.[0] || 'N/A'}</p>
                <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-semibold">${highestCategory?.[1] || 0}</p>
              </div>
            </div>
          </div>

          {/* Total Expenses Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Total Spent</p>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4">${totalExpenses}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Across {expenses.length} expenses</p>
          </div>

          {/* Total Income Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Total Income</p>
            <p className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mt-4">${totalIncome}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">From {income.length} sources</p>
          </div>

          {/* Average Transaction */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Average Spend</p>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4">${avgTransaction}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Per transaction</p>
          </div>

          {/* Net Balance */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Net Saved</p>
            <p className={`text-3xl sm:text-4xl font-bold mt-4 ${balance >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
              ${balance}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{balance >= 0 ? 'Surplus' : 'Deficit'}</p>
          </div>

          {/* Expense Ratio */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Expense Ratio</p>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4">{expenseRatio}%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Of total income</p>
          </div>
        </div>
      </div>

      {/* Category Breakdown Table */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Spending by Category</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        
        {Object.keys(categorySpending).length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center py-8">No expenses recorded yet</p>
        ) : (
          <div className="space-y-2 sm:space-y-3">
            {Object.entries(categorySpending)
              .sort((a, b) => b[1] - a[1])
              .map(([category, amount]) => (
                <div key={category} className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded transition-all duration-200">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {React.createElement(getCategoryIcon(category), { className: 'text-lg sm:text-2xl text-indigo-600 dark:text-indigo-400 flex-shrink-0' })}
                    <span className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">{category}</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">${amount}</span>
                </div>
              ))}
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
