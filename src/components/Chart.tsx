import React from "react";

type Props = {};

const Chart = (props: Props) => {
  return (
    <div className="chart-container">
      <h1 className="text-left font-bold">Spending - Last 7 days</h1>
      <div className="chart">some chart</div>
      <hr className="opacity-10" />

      <footer>
        <div className="text-left">
          <p id="total">Total this month</p>
          <span className="font-bold total">$478.33</span>
        </div>
        <div className="text-right ">
          <p className="font-bold mb-1">+2.4%</p>
          <span>from last month</span>
        </div>
      </footer>
    </div>
  );
};

export default Chart;
