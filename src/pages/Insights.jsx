import React, { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";

const Insights = () => {
  const {
    highestSpending = {},
    monthlyComparison = {},
    totals = {},
    darkMode = false,
  } = useContext(AppContext) || {};

  return (
    <div
      className={`p-6 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">📊 Insights Dashboard</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Highest Spending */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">
            🔥 Highest Spending
          </h3>
          <p className="text-xl font-bold text-red-500">
            {highestSpending?.category}
          </p>
          <p className="text-gray-500 dark:text-gray-300">
            ₹{highestSpending?.amount}
          </p>
        </div>

        {/* Monthly Comparison */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">
            📅 Monthly Comparison
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Current: ₹{monthlyComparison?.current}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Previous: ₹{monthlyComparison?.previous}
          </p>

          <p
            className={`mt-2 font-semibold ${
              (monthlyComparison?.difference ?? 0) > 0
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {monthlyComparison?.message}
          </p>
        </div>

        {/* Totals Summary */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">
            💰 Summary
          </h3>

          <p className="text-green-500 font-medium">
            Income: ₹{totals?.income}
          </p>
          <p className="text-red-500 font-medium">
            Expense: ₹{totals?.expense}
          </p>
          <p className="text-blue-500 font-bold mt-2">
            Balance: ₹{totals?.balance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;