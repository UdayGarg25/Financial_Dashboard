# Features

## Dashboard

- Three cards showing your balance, income, and expenses at the top
- A line chart showing how your balance changes over 7 days
- A pie chart showing where your income comes from
- Recent transactions table at the bottom

## Transactions Page

- Search box to find transactions by category name
- Filter dropdown (All / Income Only / Expense Only)
- Add transaction button (only shows if you're admin)
- Table showing all transactions with date, category, amount, and type
- Delete button on each row (admin only)

When you add a transaction, you enter the date, category, amount, and whether it's income or expense. It gets added to the top of the list right away.

## Insights Page

Shows 6 cards with calculations:
- Top category you spent on
- Total expenses
- Total income
- Average per transaction
- Net balance (income - expenses)
- Your expense ratio (expenses as % of income)

Below that is a breakdown table showing how much you spent in each category.

There's also a small message at the top that changes based on your spending:
- "Great job! Spending less than 30%" if you're doing well
- "Good control" if you're around 50%
- "Consider reducing expenses" if you're spending too much

## Role System

**Viewer**: Can see everything but can't add or delete transactions.

**Admin**: Can add and delete transactions. The toggle is in the top right.

## Dark Mode

Click the moon/sun button in the top right to switch between light and dark mode. It's saved locally so it remembers your choice.

## Intelligence Mode

Click the magic wand (🔮) button in the top right twice to unlock a special insights modal. It shows some financial analysis based on your transactions.

#### Card 6: Expense Ratio
- **Title**: "Expense Ratio"
- **Display**: Percentage (33.4%)
- **Calculation**: `(totalExpenses / totalIncome) * 100`
- **Info**: "Spending percentage"
- **Usage**: See what % of income is spent

### Category Breakdown Table

Located below the stat cards.

**Purpose**: Detailed breakdown of spending by category

**Columns:**
- Category Name (left)
- Amount Spent (right, bold)

**Features:**
- **Sorted by Amount**: Highest spending first
- **All Expense Categories**: Shows every category
- **Divider Lines**: Between each row for clarity
- **Example**:
  ```
  Rent        $1,200
  Salary      $10,800
  Utilities   $150
  Food        $220
  Entertainment $90
  ```

### Sample Calculations

**Example with 16 Transactions:**

Income:
- Salary: $5,000 × 2 = $10,000
- Freelance: $800 + $1,200 = $2,000
- Bonus: $2,000
- Dividend: $300
- **Total Income**: $14,300

Expenses:
- Groceries: $220 + $220 = $440
- Utilities: $150
- Entertainment: $90
- Rent: $1,200
- Restaurant: $85
- Shopping: $320
- Gym: $50
- Gas: $70
- Insurance: $200
- **Total Expense**: $2,805

Results:
- Net Balance: $14,300 - $2,805 = $11,495
- Expense Ratio: (2,805 / 14,300) × 100 = 19.6%
- Average: $2,805 / 10 = $280.50

---

## Role-Based Features

### Viewer Role (Default)
- **Access**: Read-only
- **Can See**:
  - Dashboard with all stats and charts
  - All transactions in table
  - Insights and analytics
  - Can search and filter
- **Cannot Do**:
  - Add new transactions
  - Delete transactions
  - Edit existing data
- **Use Case**: Viewing financial reports

### Admin Role
- **Access**: Full read/write
- **Can Do**:
  - Everything Viewer can do
  - Add new transactions
  - Delete transactions
  - See "+ Add" button
  - See "Delete" buttons
- **Use Case**: Managing finances

### Switching Roles
1. Go to **Topbar** (top right)
2. Find **Role dropdown** (currently shows "Viewer" or "Admin")
3. **Click dropdown** and select new role
4. **Features update** immediately
5. On Transactions page:
   - Admin: See "+ Add" and "Delete"
   - Viewer: No add/delete buttons

---

## Data Sources

### Sample Transactions (16 Total)

**Income Transactions (6):**
1. 2024-01-15: Salary - $5,000
2. 2024-01-17: Freelance - $800
3. 2024-01-20: Bonus - $2,000
4. 2024-01-23: Side Project - $600
5. 2024-01-25: Salary - $5,000
6. 2024-01-27: Freelance - $1,200
7. 2024-01-30: Investment Dividend - $300

**Expense Transactions (10):**
1. 2024-01-16: Groceries - $220
2. 2024-01-18: Utilities - $150
3. 2024-01-19: Entertainment - $90
4. 2024-01-21: Restaurant - $85
5. 2024-01-22: Rent - $1,200
6. 2024-01-24: Shopping - $320
7. 2024-01-26: Gym - $50
8. 2024-01-28: Gas - $70
9. 2024-01-29: Insurance - $200
10. 2024-02-16: Groceries - $220

### Chart Data
- **Balance Chart**: 7 days of progression from $8,000 to $15,400
- **Category Chart**: Income sources pie chart

---

## Interactive Elements

### Hover Effects
- **Cards**: Slight lift animation on hover
- **Buttons**: Color change on hover
- **Table Rows**: Background color change on hover
- **Chart**: Tooltip on hover showing values

### Click Actions
- **Sidebar Links**: Navigate to page
- **Buttons**: Execute action (Add, Delete, Toggle)
- **Dropdowns**: Change value (Role, Filter, Type)
- **Form Inputs**: Select/Enter data

### Form Interactions
- **Date Input**: Popup calendar picker
- **Text Inputs**: Keyboard typing
- **Number Input**: Number keyboard (mobile)
- **Dropdowns**: Click to expand options
- **Add Button**: Submit and validate form

---

## Responsive Behavior

### Mobile (< 640px)
- **Layout**: Single column
- **Cards**: Full width, stacked
- **Table**: Horizontal scroll
- **Charts**: Adapted size
- **Form**: Inputs stack vertically

### Tablet (640px - 1024px)
- **Layout**: 2 column grid
- **Cards**: 2 per row
- **Sidebar**: May collapse (optional)
- **Charts**: Side by side or stacked

### Desktop (> 1024px)
- **Layout**: 3 column grid
- **Cards**: 3 per row
- **Sidebar**: Always visible
- **Charts**: Full width
- **Optimal spacing**: Maximum readability

---

## Calculations & Logic

### Auto-Calculated Fields

**Dashboard:**
- Total Balance = Income - Expenses
- Income Sum = All income transactions
- Expense Sum = All expense transactions

**Transactions:**
- Filtered List = Applied search + filter
- Type Badge = Determined by transaction type

**Insights:**
- Highest Category = Max expense category
- Average = Total / Count
- Net Balance = Income - Expenses  
- Ratio = (Expense / Income) × 100
- Category Total = Sum per category

---

## Sample Interactions

### Interaction 1: Switch to Admin and Add Transaction
1. Go to Transactions page
2. Role dropdown → Select "Admin"
3. "+ Add" button appears
4. Click "+ Add"
5. Fill form: Date (2024-02-01), Category (Coffee), Amount (5), Type (Expense)
6. Click "Add"
7. New transaction appears at top
8. Calculations update

### Interaction 2: Search for Salary Income
1. Go to Transactions page
2. Search box → Type "salary"
3. Filter dropdown → Select "Income"
4. Table shows only salary income transactions
5. Clear search → All income shows again

### Interaction 3: View Spending Insights
1. Go to Insights page
2. See "Highest Spending Category" = Rent ($1,200)
3. See "Average Transaction" = $280.50
4. See "Expense Ratio" = 19.6%
5. See category breakdown showing all expenses

---

## Performance Notes

- **Fast Loading**: Vite takes 326ms to start
- **Instant Updates**: Hot reload on save
- **Lightweight**: No external APIs
- **Responsive Charts**: Recharts optimized
- **Smooth Animations**: CSS transitions
- **No Lag**: All 16 transactions load instantly

---

## What's NOT Included (By Design)

❌ Persistence (LocalStorage)  
❌ API Backend  
❌ User Authentication  
❌ Multiple Users  
❌ Export/Import  
❌ Recurring Transactions  
❌ Budget Alerts  
❌ Dark Mode  

These can be added later if needed!

---

## Quick Reference

| Feature | Page | Role | Status |
|---------|------|------|--------|
| View Dashboard | / | All | ✅ Works |
| View Charts | / | All | ✅ Works |
| View Transactions | /transactions | All | ✅ Works |
| Search Transactions | /transactions | All | ✅ Works |
| Filter Transactions | /transactions | All | ✅ Works |
| Add Transaction | /transactions | Admin | ✅ Works |
| Delete Transaction | /transactions | Admin | ✅ Works |
| View Insights | /insights | All | ✅ Works |
| Switch Role | Topbar | All | ✅ Works |

---

**Everything is fully functional! 🚀**
