import React from "react";
import TotalBal from "../cards/TotalBal";
import TotalIncome from "../cards/TotalIncome";
import TotalExpense from "../cards/TotalExpense";
import LineCharts from "../charts/Linechart";
import PieChart from "../charts/Piechart";
const Dashboard = () => {
  return (
    <>
      <div className=" m-10 rounded-lg h-fit flex items-center justify-between  ">
        <TotalBal />
        <TotalIncome />
        <TotalExpense />
      </div>
      <div className=" p-10 m-10 rounded-lg h-fit flex items-center justify-between gap-15  ">
        <LineCharts />
        <PieChart />
      </div>
    </>
  );
};

export default Dashboard;
