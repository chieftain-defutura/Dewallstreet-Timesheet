import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const='top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };
import "./timelinegraph.css";
const Timelinegraph = () => {
  return (
    <div>
      <div className="timeline_header">
        <form>
          <select>
            <option value="Grace Time">Grace Time</option>
            <option value="Week">Week</option>
            <option value="Months">Months</option>
            <option value="Year">Year</option>
          </select>
        </form>
        <div className="time_period">
          <div className="week">
            <a href="#">Week</a>
            <div className="horizontal_line_week"></div>
          </div>
          <div className="month">
            <a href="#">Months</a>
            <div className="horizontal_line"></div>
          </div>
          <div className="year">
            <a href="#">Year</a>
            <div className="horizontal_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timelinegraph;
