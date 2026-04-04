import React from "react";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";
const Role = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <>
      <div className="mt-10 md:mt-20 rounded-2xl text-lg md:text-xl transition-all duration-300 hover:bg-blue-50 hover:text-blue-500 ">
        <div className="relative w-full">
          <select
            className={
              darkMode
                ? "bg-[#191c24] mx-auto w-full appearance-none shadow-2xl  text-gray-700 py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-transparent transition"
                : "mx-auto w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent transition"
            }
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 ">
            ▼
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
