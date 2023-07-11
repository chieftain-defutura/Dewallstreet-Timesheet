import React from "react";
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
            <p>Week</p>
            <div className="horizontal_line_week"></div>
          </div>
          <div className="month">
            <p>Months</p>
            <div className="horizontal_line"></div>
          </div>
          <div className="year">
            <p>Year</p>
            <div className="horizontal_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timelinegraph;
