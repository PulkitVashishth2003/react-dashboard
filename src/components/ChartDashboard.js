import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const ChartDashboard = () => {

  const lineData = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120,190,300,250,220,310],
        borderColor: "blue",
        backgroundColor: "lightblue"
      }
    ]
  };

  const barData = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [500,700,800,600,900,1000],
        backgroundColor: "orange"
      }
    ]
  };

  const pieData = {
    labels: ["Mobile","Desktop","Tablet"],
    datasets: [
      {
        data: [55,35,10],
        backgroundColor: ["blue","green","red"]
      }
    ]
  };

  return (
    <div className="charts">

      <div className="chart-box">
        <h3>Sales Trend</h3>
        <Line data={lineData} />
      </div>

      <div className="chart-box">
        <h3>Revenue</h3>
        <Bar data={barData} />
      </div>

      <div className="chart-box">
        <h3>User Devices</h3>
        <Pie data={pieData} />
      </div>

    </div>
  );
};

export default ChartDashboard;