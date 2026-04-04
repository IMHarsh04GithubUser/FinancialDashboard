import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { TbTransactionRupee } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";

const SideBarContent = () => {
  const { toggleSidebar } = useContext(AppContext);
  return (
    <>
    <div className="flex flex-col my-20 gap-10">
      <NavLink to="/" onClick={toggleSidebar}>
        <div className="dashboard flex items-center gap-3 p-3 px-4 md:px-10 rounded-r-xl text-lg md:text-xl cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
          <MdDashboard className="h-6 md:h-8 w-6 md:w-8 text-blue-400 hover:text-blue-500" />
          <span className="text-gray-400 hover:text-blue-500">Dashboard</span>
        </div>
      </NavLink>
      <NavLink to="/transactions" onClick={toggleSidebar}>
        <div className="transaction flex items-center gap-2 p-2 px-4 md:px-10 rounded-r-xl text-lg md:text-xl cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
          <AiOutlineTransaction className="h-6 md:h-8 w-6 md:w-8 text-blue-400 hover:text-blue-500" />
          <span className="text-gray-400 hover:text-blue-500">
            Transactions
          </span>
        </div>
      </NavLink>
      <NavLink to="/insights" onClick={toggleSidebar}>
        <div className="insights flex items-center gap-2 p-2 px-4 md:px-10 rounded-r-xl cursor-pointer text-lg md:text-xl transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
          <TbTransactionRupee className="h-6 md:h-8 w-6 md:w-8 text-blue-400 hover:text-blue-500" />
          <span className="text-gray-400 hover:text-blue-500">Insights</span>
        </div>
      </NavLink>
      </div>
    </>
  );
};

export default SideBarContent;
