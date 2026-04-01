import { useState } from 'react'
import TransactionTable from '../components/TransactionTable'
import { transactionsData } from '../data/transactions'

export default function Transactions({ role }) {
  const [transactions, setTransactions] = useState(transactionsData)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [showAdd, setShowAdd] = useState(false)
  const [formData, setFormData] = useState({ date: '', category: '', amount: '', type: 'expense' })

  // Filter transactions
  let filtered = transactions
  if (filter !== 'all') {
    filtered = filtered.filter(t => t.type === filter)
  }
  if (search) {
    filtered = filtered.filter(t => t.category.toLowerCase().includes(search.toLowerCase()))
  }

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const handleAddTransaction = () => {
    if (formData.date && formData.category && formData.amount) {
      const newTransaction = {
        id: Math.max(...transactions.map(t => t.id), 0) + 1,
        date: formData.date,
        category: formData.category,
        amount: parseInt(formData.amount),
        type: formData.type
      }
      setTransactions([newTransaction, ...transactions])
      setFormData({ date: '', category: '', amount: '', type: 'expense' })
      setShowAdd(false)
    }
  }

  return (
    <div>
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="all">All Types</option>
            <option value="income">Income Only</option>
            <option value="expense">Expense Only</option>
          </select>
          {role === 'admin' && (
            <button 
              onClick={() => setShowAdd(!showAdd)} 
              className="btn-primary px-4 py-2 text-sm"
            >
              + Add Transaction
            </button>
          )}
        </div>
      </div>

      {/* Add Form (Admin Only) */}
      {showAdd && role === 'admin' && (
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Add New Transaction</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                placeholder="e.g., Food"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Amount</label>
              <input
                type="number"
                placeholder="e.g., 50"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div className="flex gap-2 items-end">
              <button 
                onClick={handleAddTransaction} 
                className="btn-primary flex-1 px-3 py-2 text-sm"
              >
                Add
              </button>
              <button 
                onClick={() => setShowAdd(false)} 
                className="btn-secondary flex-1 px-3 py-2 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show message if no transactions found */}
      {filtered.length === 0 && (search || filter !== 'all') && (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
          <p className="text-gray-900 font-medium">No transactions found</p>
          <p className="text-gray-600 text-sm">Try adjusting your search or filter</p>
        </div>
      )}

      {/* Transactions Table */}
      <TransactionTable 
        transactions={filtered} 
        role={role} 
        onDelete={handleDelete} 
        onAdd={() => setShowAdd(true)} 
      />
    </div>
  )
}
