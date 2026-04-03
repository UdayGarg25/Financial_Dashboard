export default function Card({ title, amount, icon, change, isPositive }) {
  return (
    <div className="card hover:shadow-lg hover:scale-105 transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">${amount.toLocaleString()}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
        <span className={`text-sm font-semibold ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {isPositive ? '+' : '-'}{Math.abs(change)}%
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">This month</span>
      </div>
    </div>
  )
}
