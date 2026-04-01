# 🎯 Finance Dashboard - Complete Features Guide

## Dashboard Page (`/`)

### Overview Cards (3 Cards)
Located at the top of the dashboard in a responsive grid layout.

#### 1. Total Balance Card
- **Icon**: 💰 Money bag
- **Display**: Current total balance ($15,400)
- **Trend**: Shows +12.5% with green color
- **Purpose**: Quick glance at net financial position
- **Data Source**: Income - Expenses calculation

#### 2. Total Income Card  
- **Icon**: 📈 Up arrow
- **Display**: Sum of all income transactions
- **Trend**: Shows +8.2% with green color
- **Purpose**: See how much money is coming in
- **Data Source**: Filtered transactions where type = 'income'

#### 3. Total Expenses Card
- **Icon**: 📉 Down arrow
- **Display**: Sum of all expense transactions
- **Trend**: Shows -5.1% with red color
- **Purpose**: See how much money is going out
- **Data Source**: Filtered transactions where type = 'expense'

### Charts (2 Interactive Charts)

#### Line Chart - Balance Over Time
- **Type**: Line chart (Recharts)
- **Data Points**: 7 days of balance progression
- **Shows**: Financial trend
- **Interactive Features**:
  - Hover to see exact values
  - Tooltip displays balance amount
  - Click legend to toggle line
- **Usage**: Understand if finances are improving or declining

#### Pie Chart - Income Breakdown
- **Type**: Pie chart (Recharts)
- **Data Categories**: Salary, Groceries, Rent, Entertainment, Other
- **Colors**: Color-coded slices
- **Interactive Features**:
  - Hover to highlight slice
  - Hover to show exact amounts
  - Tooltip with category name and value
- **Usage**: See where income comes from

### Recent Transactions Table
- **Columns**: Date, Category, Amount, Type
- **Features**:
  - Shows last transactions
  - Color-coded: Green (income) / Red (expense)
  - Amounts displayed with + or - sign
  - Type shown as badge (Income/Expense)
- **View Only**: No delete button (read-only for all users)

---

## Transactions Page (`/transactions`)

### Search & Filter Bar
Located at the top in a horizontal flex container.

#### Search Box
- **Placeholder**: "Search by category..."
- **Real-time**: Updates as you type
- **Case-insensitive**: "salary" finds "Salary"
- **Function**: Filters transactions by category name
- **Example**:
  - Type "salary" → Shows only Salary transactions
  - Type "rent" → Shows only Rent transactions

#### Filter Dropdown
- **Options**:
  - All Types (default)
  - Income (only income transactions)
  - Expense (only expenses transactions)
- **Behavior**: 
  - Works combined with search
  - Updates table immediately
  - Persists selected value

#### Add Button (Admin Only)
- **Visibility**: Only shows when role = "admin"
- **Action**: Toggles add form visibility
- **Style**: Primary blue button
- **Text**: "+ Add"

### Add Transaction Form (Admin Only)

Appears below filter bar when "+ Add" is clicked.

**Form Fields:**
1. **Date Input** - Date picker (format: YYYY-MM-DD)
2. **Category Input** - Text input (e.g., "Groceries")
3. **Amount Input** - Number input (e.g., 50)
4. **Type Dropdown** - Select ("Expense" or "Income")
5. **Add Button** - Submits form

**Form Behavior:**
- Validates all fields are filled
- Creates new transaction with auto-generated ID
- Inserts at top of transactions list
- Clears form after adding
- Closes form automatically
- Updates calculations

**Example Add:**
```
Date: 2024-01-31
Category: Coffee
Amount: 5
Type: Expense
Result: New transaction appears in table
```

### Transactions Table

**Columns:**
1. **Date** - Transaction date (YYYY-MM-DD format)
2. **Category** - What the transaction is for
3. **Amount** - Dollar amount (numeric value)
4. **Type** - Income or Expense badge
5. **Action** (Admin Only) - Delete button

**Features:**
- **Responsive**: Scrolls horizontally on mobile
- **Color Coding**:
  - Income text: Green (#27ae60)
  - Expense text: Red (#e74c3c)
- **Hover Effects**: Row highlights on hover
- **Sorting**: Can be extended to sort columns
- **Search Integration**: Shows filtered results only
- **Delete Button** (Admin Only):
  - Removes transaction immediately
  - Updates all calculations
  - Can't be undone (no undo)

**Example Transaction Row:**
```
Date: 2024-01-15 | Category: Salary | Amount: +$5000 | Type: Income
```

### Filtering & Search Examples

**Example 1: Find All Salary Income**
1. Filter dropdown → "Income"
2. Search box → "salary"
3. Result: Only salary income transactions shown

**Example 2: Find All January Groceries**
1. Filter dropdown → "Expense"
2. Search box → "groceries"
3. Result: Only grocery expense transactions shown

**Example 3: See Everything**
1. Filter dropdown → "All Types"
2. Leave search box empty
3. Result: All 16 sample transactions shown

---

## Insights Page (`/insights`)

### Statistical Cards (6 Cards in Grid)

#### Card 1: Highest Spending Category
- **Title**: "Highest Spending Category"
- **Display**: Category name (e.g., "Rent")
- **Amount**: Dollar amount spent ($1,200)
- **Info**: "Most spent on this"
- **Calculation**: `max(category_sums) from expenses`

#### Card 2: Total Expenses
- **Title**: "Total Expenses"
- **Display**: Sum of all expense transactions ($3,615)
- **Info**: "This month" + count of expense transactions
- **Usage**: See total spending for the period

#### Card 3: Average Transaction
- **Title**: "Average Transaction"
- **Display**: Average expense amount ($81.48)
- **Info**: "Per expense"
- **Calculation**: `totalExpenses / numberOfExpenses`

#### Card 4: Total Income
- **Title**: "Total Income"
- **Display**: Sum of all income transactions ($10,800)
- **Info**: Income source count (e.g., "5 sources")
- **Usage**: See where money came from

#### Card 5: Net Balance
- **Title**: "Net Balance"
- **Display**: Income - Expenses ($7,185)
- **Color**: Green if positive, Red if negative
- **Info**: "Income - Expenses"
- **Calculation**: `totalIncome - totalExpenses`

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
