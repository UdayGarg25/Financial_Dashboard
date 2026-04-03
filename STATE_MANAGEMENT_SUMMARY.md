# How State Management Works

## The approach

All transactions state is managed in one place: App.jsx. All other components get the data as props. This way everything stays in sync.

## What happens

**App.jsx** holds the transactions list and the function to update it. When you add/delete a transaction through any page, it updates the list to changed in App.jsx. All other pages automatically see the change because they're reading from the same place.

## localStorage

When transactions change, they get saved to localStorage. So if you reload the page, your data is still there.

## The flow

```
App.jsx (main state)
  ├─ Dashboard (gets transactions to display)
  ├─ Transactions (gets transactions + setTransactions to add/delete)
  └─ Insights (gets transactions to calculate analytics)
```

When you add a transaction in Transactions page:
1. Form submits
2. setTransactions called with new transaction
3. App.jsx state updates
4. localStorage auto-saves
5. Dashboard sees new data
6. Insights sees new data
7. Charts update automatically

## Why this matters

If you had state in each page, they'd get out of sync:
- Add transaction in Transactions page
- Insights page still shows old numbers
- Bad!

Now it's all centralized so everything stays in sync.
┌─────────────────────────────────┐
│        App.jsx (Single Source)  │
│                                 │
│  • transactions state           │
│  • setTransactions function     │
│  • localStorage logic           │
└──────────────┬──────────────────┘
               │
     ┌─────────┼─────────┐
     │         │         │
     ▼         ▼         ▼
Dashboard  Transactions  Insights
   (props)    (props)     (props)
```

---

## Data Flow

### Add Transaction
1. User fills form in **Transactions** page
2. Calls `handleAddTransaction()`
3. Calls `setTransactions()` (from props)
4. Updates state in **App.jsx**
5. **App.jsx** saves to localStorage (useEffect)
6. **Dashboard** receives new data via props → re-renders
7. **Insights** receives new data via props → re-renders

### Delete Transaction
1. User clicks delete in **Dashboard** or **Transactions**
2. Calls `handleDelete(id)`
3. Calls `setTransactions()` (from props)
4. State updates in **App.jsx**
5. All pages re-render with updated data

### Page Refresh
1. App loads
2. `getStoredTransactions()` runs in App.jsx
3. Loads from localStorage
4. All pages get same data via props
5. ✅ Data persists

---

## Testing Checklist

- ✅ Add transaction on Transactions page → appears on Dashboard
- ✅ Add transaction on Transactions page → appears on Insights
- ✅ Delete transaction from Dashboard → removed from Transactions
- ✅ Delete transaction from Transactions → updated on Insights
- ✅ Refresh page → data persists from localStorage
- ✅ Dark mode still works
- ✅ Role-based UI still works
- ✅ Search/filter still work
- ✅ Charts update automatically

---

## Code Quality

✅ **KISS Principle** - No Redux, Context API, or external libraries
✅ **Single Source of Truth** - Only App.jsx manages transactions
✅ **Clean Props** - Minimal, clear data flow
✅ **Zero Breaking Changes** - All existing features work
✅ **localStorage Consolidated** - Single useEffect in App.jsx
✅ **Minimal Changes** - Only necessary modifications made

---

## Results

- **Before:** 3 separate state copies (data inconsistency)
- **After:** 1 shared state (data consistency)
- **Performance:** Same (no performance impact)
- **Code Maintainability:** Improved (less duplication)
- **Future Updates:** Easier (one place to modify)
