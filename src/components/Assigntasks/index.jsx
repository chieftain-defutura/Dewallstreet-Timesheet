/** @format */

import React from "react";
import "./homepage.css";
import Assigntasks from "./assigntasks";
import Timelinegraph from "./Timelinegraph/timelinegraph";
import Homeheader from "../Header/Homeheader";
import Timer from "./Timebar/time";
import WorkingHours from "./WorkingHours";

const Task = () => {
  return (
    <>
      <Homeheader />
      <div className="homepage_main">
        <Assigntasks />
        <div className="hours_deduction">
          <Timelinegraph />
          <Timer />
        </div>
        <WorkingHours />
      </div>
    </>
  );
};

export default Task;
