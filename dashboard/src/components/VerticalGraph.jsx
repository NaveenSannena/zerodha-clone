import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export function VerticalGraph({ data }) {
  // Fallback to prevent Chart.js runtime errors if data is missing or empty
  if (!data || !data.datasets) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Bar options={options} data={data} />
    </div>
  );
}