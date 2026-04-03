# Finance Dashboard

A simple finance dashboard I built to learn React and understand how to visualize financial data.

## What it does

This app lets you track income and expenses. You can add/delete transactions, filter them, and see charts showing where your money goes. There's also a role system where an admin can edit data but a viewer can only see.

## Features

- View your balance, income, and expenses at a glance
- See charts showing trends over time
- Add and delete transactions (admin only)
- Search and filter transactions by category or type
- Dark mode
- Simple insights based on your spending
- Intelligence mode (click the magic wand button twice for fun financial insights)

## Tech I Used

- React
- Tailwind CSS
- React Router
- Recharts for charts
- Vite as the build tool

## How to run it

```bash
npm install
npm run dev
```

That's it. Opens at http://localhost:5173 or the next available port.

## My approach

I tried to keep this project simple and focused. Instead of using complicated state management like Redux, I just used React's `useState` since this is a small app. The code is organized into page components and smaller reusable components like cards and tables.

I named variables clearly so they make sense when you read the code. The whole thing is around 400 lines of code, not including sample data.

## Extra stuff

- Role toggle to switch between Viewer and Admin
- Dark mode that actually works
- Intelligence mode as a fun extra feature
- Sample transactions to get you started
```

## 💡 Key Design Decisions Explained

**Why Tailwind CSS?**
- Utility classes mean no separate CSS files for each component
- Responsive design built-in (sm:, lg: prefixes)
- Reduces file duplication

**Why no Context API?**
- Too simple: Just need `role` state in App, pass down as prop
- Context would add unnecessary complexity
- Props are clear and traceable

**Why Recharts?**
- Lightweight alternative to heavy charting libraries
- Renders cleanly with minimal configuration
- Responsive by default

**How Emojis Help?**
- Quick visual identification (💼 = Salary, 🛒 = Groceries)
- Feels human and friendly, not robotic
- Helps users scan faster

**Smart Messaging in Insights:**
- The `getMessage()` function checks expense ratio
- Returns personalized guidance: "Great job! Spending less than 30%" ✨
- Makes the app feel like it's talking to the user

## 📝 Example: Adding a New Feature

Want to add a "Search by Date" feature? Here's how simple it is:

1. Add state in `Transactions.jsx`:
```javascript
const [dateSearch, setDateSearch] = useState('')
```

2. Filter by date:
```javascript
filtered = filtered.filter(t => t.date.includes(dateSearch))
```

3. Add input:
```jsx
<input 
  type="text" 
  placeholder="Search by date..."
  value={dateSearch}
  onChange={(e) => setDateSearch(e.target.value)}
/>
```

That's it. No boilerplate, no middleware. Just add what you need.
```bash
npm run dev
```
The app opens at **http://localhost:3000** with hot module reloading.

### Build for Production
```bash
npm run build
```
Output in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 💡 Code Philosophy (KISS)

This project follows **KISS (Keep It Simple, Stupid)**:

✅ **What We Did**
- Simple React hooks (useState only)
- No complex state management (no Redux/Context)
- Clear component hierarchy
- Straightforward data flow (props)
- Minimal abstractions
- Single responsibility per component

❌ **What We Avoided**
- Redux, Context API, Zustand
- Complex patterns & over-engineering
- Unnecessary abstractions
- Heavy dependencies
- Confusing logic

## 🎨 Styling

Uses **Tailwind CSS** for clean, efficient styling:
- Responsive grid layouts
- Utility-first approach
- Custom components in `index.css`
- Minimal custom CSS

## 📊 Data Structure

Sample transactions with mock data:
```javascript
{
  id: 1,
  date: '2024-01-15',
  category: 'Salary',
  amount: 5000,
  type: 'income'
}
```

## 🔄 State Management

All state managed with `useState`:
- Role selection (Viewer/Admin)
- Transaction list (add/delete)
- Search & filter inputs
- Form data for adding transactions

## 🎯 Key Components

### Sidebar
- Navigation links (Dashboard, Transactions, Insights)
- Active link highlighting
- Logo & branding

### Topbar
- Page title display
- Role selector dropdown
- Sticky header

### Card
- Flexible stat card display
- Amount, title, icon, trend
- Color-coded positive/negative changes

### Charts
- **LineChart** - Balance progression
- **PieChart** - Income breakdown
- Recharts components

### TransactionTable
- Searchable & filterable
- Admin-only delete button
- Color-coded transaction types
- Responsive table design

## 🔐 Role-Based Features

### Viewer
- View all transactions
- See charts & insights
- View statistics

### Admin
- All viewer features +
- Add new transactions
- Delete transactions

## 📱 Responsive Design

Works on desktop, tablet, and mobile:
- Sidebar hides on small screens (can be enhanced)
- Grid layouts adapt
- Tables scroll horizontally on mobile
- Form stacks on small screens

## 🚀 Performance

- **Fast** - Vite provides instant HMR
- **Small** - Minimal dependencies
- **Optimized** - Tailwind CSS purges unused styles
- **Charts** - Recharts optimized rendering

## 🎨 Recent Enhancements

**Data Persistence** - All transactions now save to browser's `localStorage`. Data persists even after refreshing the page!

**Dark Mode Toggle** - Click the "🌙 Dark / ☀️ Light" button in the header to switch themes. Saves your preference seamlessly.

**Smooth Animations** - Cards scale on hover with smooth transitions. Table rows have enhanced hover effects and fade animations for better UX.

## 🔮 Future Enhancements

Optional features to add:
- Dark mode toggle
- LocalStorage persistence
- Modal for better UX
- Export to CSV
- Monthly budget tracking
- Recurring transactions
- Category custom colors
- Data import/export

## 📝 Sample Data

Includes 16 sample transactions with:
- Various income sources (Salary, Freelance, Bonus, etc.)
- Multiple expense categories (Groceries, Rent, Gas, etc.)
- Realistic dates and amounts
- Balance progression data

## 🎓 Learning Notes

Great for learning:
- React basics (hooks, routing)
- Tailwind CSS utility classes
- Component composition
- Props drilling
- Simple state management
- Chart integration
- Form handling

## ⚡ Quick Tips

1. **Add Transaction** - Switch to Admin role, go to Transactions, click "+ Add"
2. **Filter** - Use search or dropdown on Transactions page
3. **View Insights** - Check Insights page for detailed analytics
4. **Charts** - Interactive legends and tooltips on hover

## 📄 License

Open source - feel free to use and modify!

---

**Built with ❤️ following KISS principles - Keep It Simple, Stupid!**
