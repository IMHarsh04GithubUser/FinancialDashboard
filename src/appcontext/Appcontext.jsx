import { createContext, useState, useEffect,useMemo } from "react";
import mockdata from "../mockdata/mockdata1";

const AppContext = createContext();
const data = mockdata();


const AppProvider = ({ children }) => {
 
  const [darkMode, setDarkMode] = useState(false);
  const [bal, setbal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [transactions, setTransactions] = useState(data);

   {/*THEME */}
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  {/*TOTAL BALANCE FOR DASHBOARD TOTALBALANCE CARD */}
  const calculateTotalBalance = () => {
    const total = data.reduce((acc, item) => {
      return item.type === "income" ? acc + item.amount : acc - item.amount;
    }, 0);

    setbal(total);
  };
  {/*TOTAL INCOME FOR DASHBOARD TOTALINCOME CARD */}
  const calculateTotalIncome = () => {
    const total = data.reduce((acc, item) => {
      return item.type === "income" ? acc + item.amount : acc;
    }, 0);

    setIncome(total);
  };
  {/*TOTAL EXPENSE FOR DASHBOARD TOTALEXPENSE CARD */}
  const calculateTotalExpense = () => {
    const total = data.reduce((acc, item) => {
      return item.type === "expense" ? acc + item.amount : acc;
    }, 0);

    setExpense(total);
  };
  {/*FILTERED DATA FOR INSIGHTS PAGE */}
  const filteredData = mockdata()
    .filter(t =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter(t =>
      filterType === "all" ? true : t.type === filterType
    );




  //INSIGHTS CALCULATIONS
  {/*1. Highest Spending Category */}
  const highestSpending = useMemo(() => {
    const categoryMap = {};

    transactions.forEach((t) => {
      if (t.type === "expense") {
        categoryMap[t.category] =
          (categoryMap[t.category] || 0) + t.amount;
      }
    });

    let maxCategory = "";
    let maxAmount = 0;

    for (let key in categoryMap) {
      if (categoryMap[key] > maxAmount) {
        maxAmount = categoryMap[key];
        maxCategory = key;
      }
    }

    return { category: maxCategory, amount: maxAmount };
  }, [transactions]);

  {/*2. Monthly Expense Comparison */}
  const monthlyComparison = useMemo(() => {
    const getMonthlyExpense = (month) => {
      return transactions
        .filter(t => t.type === "expense" && new Date(t.date).toLocaleString('default', { month: 'short' }) === month)
        .reduce((acc, t) => acc + t.amount, 0);
    };

    const currentMonth = "Mar";
    const previousMonth = "Feb";

    const current = getMonthlyExpense(currentMonth);
    const previous = getMonthlyExpense(previousMonth);

    const difference = current - previous;

    return {
      current,
      previous,
      difference,
      message:
        difference > 0
          ? `Spent ₹${difference} more this month`
          : `Saved ₹${Math.abs(difference)} this month`
    };
  }, [transactions]);

  {/*3. Totals for Dashboard Cards */}
  const totals = useMemo(() => {
    let income = 0;
    let expense = 0;

    transactions.forEach((t) => {
      if (t.type === "income") income += t.amount;
      else expense += t.amount;
    });

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions]);


    {/*USE EFFECT TO CALCULATE BALANCE, INCOME, AND EXPENSE ON COMPONENT MOUNT */}
    useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculateTotalBalance();
    calculateTotalIncome();
    calculateTotalExpense();
    
  }, []);



  return (
    <AppContext.Provider
      value={{
        toggleDarkMode,
        darkMode,
        bal,
        data,
        income,
        expense,
        search,
        filterType,
        setSearch,
        setFilterType,
        filteredData,
        transactions,
        setTransactions,
        highestSpending,
        monthlyComparison,
        totals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

