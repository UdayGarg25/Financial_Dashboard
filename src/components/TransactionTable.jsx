export default function TransactionTable({ transactions, role, onDelete, onAdd }) {
  // Show empty state if no transactions
  if (transactions.length === 0) {
    return (
      <div className="card mt-4 sm:mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Transactions</h2>
          {role === 'admin' && (
            <button onClick={onAdd} className="btn-primary text-sm w-full sm:w-auto">
              + Add
            </button>
          )}
        </div>
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">No transactions found</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
            {role === 'admin' ? 'Add one to get started' : 'Check back soon'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="card mt-4 sm:mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Transactions</h2>
        {role === 'admin' && (
          <button onClick={onAdd} className="btn-primary text-sm w-full sm:w-auto">
            + Add
          </button>
        )}
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Date</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Category</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Amount</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Type</th>
              {role === 'admin' && <th className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Action</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-sm transition-all duration-200 cursor-pointer">
                <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">{transaction.date}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">{transaction.category}</td>
                <td className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold ${transaction.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                </td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'}`}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </span>
                </td>
                {role === 'admin' && (
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                    <button
                      onClick={() => onDelete(transaction.id)}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
