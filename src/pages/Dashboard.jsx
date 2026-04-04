import React from "react";
import TotalBal from "../cards/TotalBal";
import TotalIncome from "../cards/TotalIncome";
import TotalExpense from "../cards/TotalExpense";
import LineCharts from "../charts/Linechart";
import PieChart from "../charts/Piechart";

const Dashboard = () => {
  return (
    <>
      <div className="m-4 md:m-10 rounded-lg h-fit flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <TotalBal />
        <TotalIncome />
        <TotalExpense />
      </div>
      <div className="p-4 md:p-10 m-4 md:m-10 rounded-lg h-fit flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-15">
        <LineCharts />
        <PieChart />
      </div>
    </>
  );
};

export default Dashboard;
