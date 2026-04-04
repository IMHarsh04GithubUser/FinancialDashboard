import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";
import "../index.css";

const Transaction = () => {
  const { setFilterType, filteredData, darkMode } = useContext(AppContext);

  return (
    <div
      className={
        darkMode ? "bg-[#191c24] min-h-screen" : "p-6 bg-gray-100 min-h-screen"
      }
    >
      <h2
        className={
          darkMode
            ? "bg-[#191c24] text-2xl font-bold mb-4 text-cyan-50 px-5"
            : "text-2xl font-bold mb-4 text-gray-800 "
        }
      >
        Transactions
      </h2>

      <div
        className={
          darkMode
            ? "bg-[#191c24] flex flex-col md:flex-row gap-4 mb-6 text-cyan-50"
            : "flex flex-col md:flex-row gap-4 mb-6"
        }
      >
        <select
          onChange={(e) => setFilterType(e.target.value)}
          className={
            darkMode
              ? "bg-[#191c24] px-4 py-2 rounded-lg focus:outline-none w-full md:w-1/4"
              : "px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/4"
          }
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div
        className={
          darkMode
            ? "rounded-2xl shadow-lg overflow-x-auto bg-[#191c24]"
            : "bg-white rounded-2xl shadow-lg overflow-x-auto"
        }
      >
        <table className=" text-left border-collapse w-fit md:w-full">
          <thead
            className={
              darkMode
                ? " text-cyan-500 uppercase text-sm bg-[#191c24] "
                : "bg-gray-200 text-gray-700 uppercase text-sm "
            }
          >
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3 hidden md:table-cell">Category</th>
              <th className="px-6 py-3">Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((t) => (
              <tr
                key={t.id}
                className={
                  darkMode
                    ? "border-b border-cyan-800 hover:bg-[#2d3748] transition duration-200"
                    : "border-b border-gray-100 hover:bg-gray-50 transition duration-200"
                }
              >
                <td
                  className={darkMode ? "px-6 py-4 text-cyan-50" : "px-6 py-4"}
                >
                  {t.date}
                </td>

                <td
                  className={`px-6 py-4 font-semibold ${
                    t.type === "income" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  ₹{t.amount}
                </td>

                <td
                  className={darkMode ? "px-6 py-4 text-cyan-50 hidden md:table-cell" : "px-6 py-4 hidden md:table-cell"}
                >
                  {t.category}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      t.type === "income"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
