import React from "react";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import mockdata from "../mockdata/mockdata";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

export default function LineChart() {
  const rawData = React.useMemo(() => mockdata(), []);
  const { darkMode } = useContext(AppContext);
  // 🧠 Group data
  const groupedData = React.useMemo(() => {
    const result = {};

    rawData.forEach((item) => {
      const month = item.month;

      if (!result[month]) {
        result[month] = { income: 0, expense: 0 };
      }

      if (item.type === "income") {
        result[month].income += item.amount;
      } else {
        result[month].expense += item.amount;
      }
    });

    return result;
  }, [rawData]);

  // ✅ Proper month order
  const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const labels = monthOrder.filter((m) => groupedData[m]);

  // 📊 Chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: labels.map((m) => groupedData[m].income),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
      {
        label: "Expense",
        data: labels.map((m) => groupedData[m].expense),
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // important
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div
      style={{ width: "50%", height: "500px" }}
      className={
        darkMode
          ? "bg-[#232836] hover:scale-105 transition-all duration-300"
          : "hover:scale-105 transition-all duration-300"
      }
    >
      <Line data={data} options={options} />
    </div>
  );
}
