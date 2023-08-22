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
import Timerone from "../Timer/time1";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const Linechart1 = () => {
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
        data: [152, 168, 176, 168, 160, 176, 168, 168, 176, 152, 160, 168],
        backgroundColor: "#FF5F49",
        borderColor: "#FF5F49",
        pointBorderColor: "black",
      },
      {
        label: "Worked hours",
        data: [152, 164, 174, 168, 160, 176, 163, 167, 176, 148, 154, 167],
        backgroundColor: "#00ce53",
        borderColor: "#00ce53",
        pointBorderColor: "black",
      },
    ],
  };
  return (
    <div className="line_graph" style={{ padding: "20px", width: "100%" }}>
      <Line options={options} data={data} />
      <Timerone />
    </div>
  );
};
export default Linechart1;
