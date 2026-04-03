import jsPDF from 'jspdf'

export const generateFinanceReport = (transactions) => {
  let totalIncome = 0
  let totalExpenses = 0
  const categorySpending = {}

  transactions.forEach((tx) => {
    if (tx.type === 'income') {
      totalIncome += tx.amount
    } else {
      totalExpenses += tx.amount
      categorySpending[tx.category] =
        (categorySpending[tx.category] || 0) + tx.amount
    }
  })

  const totalBalance = totalIncome - totalExpenses

  // Top category
  let topCategory = 'N/A'
  let maxSpending = 0

  for (const [category, amount] of Object.entries(categorySpending)) {
    if (amount > maxSpending) {
      maxSpending = amount
      topCategory = category
    }
  }

  const pdf = new jsPDF()
  const pageWidth = pdf.internal.pageSize.getWidth()
  let y = 20

  // Title
  pdf.setFontSize(20)
  pdf.text('Finance Report', pageWidth / 2, y, { align: 'center' })

  y += 8

  // Divider
  pdf.setLineWidth(0.5)
  pdf.line(20, y, pageWidth - 20, y)

  y += 10

  // Date
  pdf.setFontSize(10)
  pdf.setTextColor(100)

  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  pdf.text(`Generated on: ${today}`, pageWidth / 2, y, { align: 'center' })

  y += 15

  // Reset color
  pdf.setTextColor(0)
  pdf.setFontSize(12)

  // Data
  const reportData = [
    ['Total Balance', `Rs. ${totalBalance.toFixed(2)}`],
    ['Total Income', `Rs. ${totalIncome.toFixed(2)}`],
    ['Total Expenses', `Rs. ${totalExpenses.toFixed(2)}`],
    ['Top Spending Category', topCategory],
    ['Number of Transactions', transactions.length]
  ]

  reportData.forEach(([label, value]) => {
    pdf.text(label, 20, y)
    pdf.text(value.toString(), pageWidth - 20, y, { align: 'right' })
    y += 10
  })

  y += 10

  // Footer
  pdf.setFontSize(10)
  pdf.setTextColor(120)
  pdf.text(
    'This report is generated from your financial dashboard.',
    pageWidth / 2,
    y,
    { align: 'center' }
  )

  pdf.save('finance-report.pdf')
}