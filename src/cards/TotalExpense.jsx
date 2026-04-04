import React from "react";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";

const TotalExpense = () => {
  const { expense, darkMode } = useContext(AppContext);
  return (
    <div
      className={
        darkMode
          ? "bg-[#232836] text-gray-500 shadow-2xl m-2 md:m-10 rounded-lg h-fit p-4 md:p-15 w-full md:w-fit flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
          : "bg-orange-100 text-orange-500 shadow-2xl m-2 md:m-10 rounded-lg h-fit p-4 md:p-15 w-full md:w-fit flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
      }
    >
      <h1 className="text-xl md:text-2xl font-bold">Total Expense: </h1>
      <p className="text-xl md:text-2xl">₹ {expense}</p>
    </div>
  );
};

export default TotalExpense;
