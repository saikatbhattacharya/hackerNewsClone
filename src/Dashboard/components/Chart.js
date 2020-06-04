import React from "react";
import { Line } from "react-chartjs-2";

const chartData = {
  datasets: [
    {
      label: "Hacker news",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ],
};

const Chart = ({ data }) => {
  chartData.labels = data.map((each) => each.objectID);
  chartData.datasets[0].data = data.map((each) => each.points);
  return (
    <div>
      <Line
        data={chartData}
        width={100}
        height={450}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Chart;
