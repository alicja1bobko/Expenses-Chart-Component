import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import Chart from "./components/Chart.jsx";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Balance />
        <Chart />
      </div>
    </div>
  );
}

export default App;
