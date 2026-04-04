import React from "react";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Logo = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div className="company_logo flex items-center gap-2 p-2 px-4 md:px-10">
      <h1
        className={
          darkMode ? "text-white text-2xl md:text-3xl font-bold" : "text-2xl md:text-3xl font-bold"
        }
      >
        FinDash
      </h1>
      <FaMoneyBillTrendUp className={darkMode ? "text-white h-4 md:h-5 w-4 md:w-5" : "text-gray-500 h-4 md:h-5 w-4 md:w-5"} />
    </div>
  );
};

export default Logo;
