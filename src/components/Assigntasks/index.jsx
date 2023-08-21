/** @format */

import React from "react";
import "./homepage.css";
import WorkingHours from "./WorkingHours";
import Linechart from "./LineChart";

const Task = () => {
  return (
    <>
      <div className="homepage_main">
        <div className="hours_deduction">
          <Linechart />
        </div>
        <div className="working_grid">
          <WorkingHours />
        </div>
      </div>
    </>
  );
};

export default Task;
