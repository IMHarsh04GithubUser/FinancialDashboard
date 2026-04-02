import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { TbTransactionRupee } from "react-icons/tb";
const SideBarContent = () => {
  return (
    <>
      <div className="dashboard flex items-center gap-3 p-3 px-10 rounded-r-xl text-xl cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
        <MdDashboard className="h-8 w-8 text-blue-400 hover:text-blue-500" />
        <span className="text-gray-400 hover:text-blue-500">Dashboard</span>
      </div>
      <div className="transaction flex items-center gap-2 p-2 px-10 rounded-r-xl text-xl cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
        <AiOutlineTransaction className="h-8 w-8 text-blue-400 hover:text-blue-500" />
        <span className="text-gray-400 hover:text-blue-500">Transactions</span>
      </div>
      <div className="insights flex items-center gap-2 p-2 px-10 rounded-r-xl cursor-pointer text-xl transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
        <TbTransactionRupee className="h-8 w-8 text-blue-400 hover:text-blue-500" />
        <span className="text-gray-400 hover:text-blue-500">Insights</span>
      </div>
    </>
  );
};

export default SideBarContent;
