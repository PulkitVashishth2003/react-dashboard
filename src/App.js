import React from "react";
import MetricCard from "./components/MetricCard";
import ChartDashboard from "./components/ChartDashboard";
import "./App.css";

function App() {
  return (
    <div className="container">

      <h1>Admin Dashboard</h1>

      <div className="metrics">
        <MetricCard title="Users" value="1,245"/>
        <MetricCard title="Revenue" value="$8,540"/>
        <MetricCard title="Orders" value="320"/>
      </div>

      <ChartDashboard />

    </div>
  );
}

export default App;