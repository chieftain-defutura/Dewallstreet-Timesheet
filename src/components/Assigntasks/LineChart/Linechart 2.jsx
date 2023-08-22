import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Timertwo from "../Timer/time2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const Linechart2 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: true,
    },
    title: {
      display: true,
      text: "Linechart",
    },
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Working Hours",
        data: [144, 176, 176, 152, 160, 176, 168, 168, 176, 160, 168, 168],
        backgroundColor: "#FF5F49",
        borderColor: "#FF5F49",
        pointBorderColor: "black",
      },
      {
        label: "Worked hours",
        data: [134, 176, 176, 146, 158, 176, 148, 159, 171, 158, 163, 163],
        backgroundColor: "#00ce53",
        borderColor: "#00ce53",
        pointBorderColor: "black",
      },
    ],
  };
  return (
    <div className="line_graph" style={{ padding: "20px", width: "100%" }}>
      <Line options={options} data={data} />
      <Timertwo />
    </div>
  );
};
export default Linechart2;
