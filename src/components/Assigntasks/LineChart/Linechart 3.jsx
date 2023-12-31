import React from "react";
import "./Linechart.css";
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
import Timerthree from "../Timer/time3";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const Linechart3 = () => {
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
    color: ["white"],
    datasets: [
      {
        label: "Total Working Hours",
        data: [144, 176, 176, 168, 160, 176, 168, 168, 176, 152, 176, 168],
        backgroundColor: "#FF5F49",
        borderColor: "#FF5F49",
        pointBorderColor: "black",
      },
      {
        label: "Worked hours",
        data: [136, 173, 173, 168, 155, 176, 166, 159, 176, 152, 175, 158],
        backgroundColor: "#00ce53",
        borderColor: "#00ce53",
        pointBorderColor: "black",
      },
    ],
  };
  return (
    <div className="line_graph" style={{ padding: "20px", width: "100%" }}>
      <Line options={options} data={data} />
      <Timerthree />
    </div>
  );
};
export default Linechart3;
