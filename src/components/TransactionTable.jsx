export default function TransactionTable({ transactions, role, onDelete, onAdd }) {
  // Show empty state if no transactions
  if (transactions.length === 0) {
    return (
      <div className="card mt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Transactions</h2>
          {role === 'admin' && (
            <button onClick={onAdd} className="btn-primary text-sm">
              + Add
            </button>
          )}
        </div>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No transactions found</p>
          <p className="text-gray-400 text-sm mt-1">
            {role === 'admin' ? 'Add one to get started' : 'Check back soon'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="card mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Transactions</h2>
        {role === 'admin' && (
          <button onClick={onAdd} className="btn-primary text-sm">
            + Add
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700 text-sm">Date</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-sm">Category</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-sm">Amount</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-sm">Type</th>
              {role === 'admin' && <th className="px-4 py-3 font-semibold text-gray-700 text-sm">Action</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-700">{transaction.date}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{transaction.category}</td>
                <td className={`px-4 py-3 text-sm font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${transaction.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </span>
                </td>
                {role === 'admin' && (
                  <td className="px-4 py-3 text-sm">
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
