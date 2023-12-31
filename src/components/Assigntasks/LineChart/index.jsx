import React, { useState } from "react";
import "./Linechart.css";
import Linechart1 from "./Linechart 1";
import Linechart2 from "./Linechart 2";
import Linechart3 from "./Linechart 3";
const Linechart = () => {
  const [linecharts, setLineCharts] = useState(0);

  return (
    <div className="charts_main">
      <div className="charts">
        <div className="years_grace">
          <h4>Grace Time</h4>
          {linecharts === 0 ? (
            <button onClick={() => setLineCharts(0)} style={{ color: "white" }}>
              2020
            </button>
          ) : (
            <button onClick={() => setLineCharts(0)} style={{ color: "grey" }}>
              2020
            </button>
          )}

          {linecharts === 1 ? (
            <button onClick={() => setLineCharts(1)} style={{ color: "white" }}>
              2021
            </button>
          ) : (
            <button onClick={() => setLineCharts(1)} style={{ color: "grey" }}>
              2021
            </button>
          )}

          {linecharts === 2 ? (
            <button onClick={() => setLineCharts(2)} style={{ color: "white" }}>
              2022
            </button>
          ) : (
            <button onClick={() => setLineCharts(2)} style={{ color: "grey" }}>
              2022
            </button>
          )}
        </div>
        {linecharts === 0 && <Linechart1 />}
        {linecharts === 1 && <Linechart2 />}
        {linecharts === 2 && <Linechart3 />}
      </div>
    </div>
  );
};
export default Linechart;
