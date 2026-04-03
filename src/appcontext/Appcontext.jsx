import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };



  return (
    <AppContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
