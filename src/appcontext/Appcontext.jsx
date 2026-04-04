import { createContext, useState, useEffect } from "react";
import mockdata from "../mockdata/mockdata1";

const AppContext = createContext();

const data = mockdata();

const AppProvider = ({ children }) => {
  {/*THEME */}
  const [darkMode, setDarkMode] = useState(false);
  const [bal, setbal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
    const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

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

  const filteredData = mockdata()
    .filter(t =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter(t =>
      filterType === "all" ? true : t.type === filterType
    );


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
        filteredData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
