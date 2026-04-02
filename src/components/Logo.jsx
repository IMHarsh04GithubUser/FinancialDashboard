import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Logo = () => {
  return (
    <div className="company_logo flex items-center gap-2 p-2 px-10">
      <h1 className="text-3xl font-bold">FinDash</h1>
      <FaMoneyBillTrendUp className="h-5 w-5" />
    </div>
  );
};

export default Logo;
