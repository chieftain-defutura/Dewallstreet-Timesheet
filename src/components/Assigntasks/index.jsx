/** @format */

import React from "react";
import Assigntasks from "./assigntasks";
import Timelinegraph from "./Timelinegraph/timelinegraph";
import Homeheader from "../Header/Homeheader";
import Timer from "./Timebar/time";
import WorkingHours from "./WorkingHours";

const Task = () => {
  return (
    <div className="">
      <Homeheader />
      {/* <div className="home_main"> */}
      <Assigntasks />
      <Timelinegraph />
      <Timer />
      {/* </div> */}
      <WorkingHours />
    </div>
  );
};

export default Task;
