import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import mockdata from "../mockdata/mockdata";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const rawData = mockdata();

  // 🧠 Calculate total income & expense
  const totals = React.useMemo(() => {
    let income = 0;
    let expense = 0;

    rawData.forEach((item) => {
      if (item.type === "income") {
        income += item.amount;
      } else {
        expense += item.amount;
      }
    });

    return { income, expense };
  }, [rawData]);

  // 📊 Chart Data
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Finance Overview",
        data: [totals.income, totals.expense],
        backgroundColor: ["#4CAF50", "#F44336"],
        borderWidth: 1,
      },
    ],
  };

  // ⚙️ Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div style={{ width: "50%", height: "500px" }} className="hover:scale-105 transition-all duration-300">
      <Pie data={data} options={options} />
    </div>
  );
}
