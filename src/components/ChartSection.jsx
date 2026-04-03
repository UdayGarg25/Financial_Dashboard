import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ChartSection({ balanceData, categoryData, colors }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
      {/* Line Chart */}
      <div className="card">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">Balance Over Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={balanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
            <XAxis dataKey="date" stroke="#6b7280" className="dark:stroke-gray-400" />
            <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
            <Tooltip contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db' }} className="dark:bg-gray-700" />
            <Legend />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="card">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">Income Breakdown</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={categoryData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} $${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
