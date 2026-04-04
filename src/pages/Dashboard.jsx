import Card from '../components/Card'
import ChartSection from '../components/ChartSection'
import TransactionTable from '../components/TransactionTable'
import { balanceChartData, categoryData, COLORS } from '../data/transactions'
import { FaWallet, FaChartLine, FaArrowDown } from 'react-icons/fa'

export default function Dashboard({ transactions, setTransactions }) {

  // Calculate totals 
  const totalBalance = 15400
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const recentTransactions = transactions.slice(0, 5)

  return (
    <div className="animate-fadeIn space-y-8">
      {/* Summary Cards */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card title="Total Balance" amount={totalBalance} icon={FaWallet} change={12.5} isPositive={true} />
          <Card title="Total Income" amount={totalIncome} icon={FaChartLine} change={8.2} isPositive={true} />
          <Card title="Total Expenses" amount={totalExpense} icon={FaArrowDown} change={5.1} isPositive={false} />
        </div>
      </div>

      {/* Charts Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Trends & Analysis</h2>
        <ChartSection balanceData={balanceChartData} categoryData={categoryData} colors={COLORS} />
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <TransactionTable transactions={recentTransactions} role="viewer" onDelete={handleDelete} />
      </div>
    </div>
  )
}

