/** @format */

import React from "react";
import Assigntasks from "./assigntasks";
import Timelinegraph from "./Timelinegraph/timelinegraph";
import Homeheader from "../Header/Homeheader";
import Timer from "./Timebar/time";
import WorkingHours from "./WorkingHours";

const Task = () => {
  return (
    <>
      <Homeheader />

      <div className="">
        <Assigntasks />
        <Timelinegraph />
        <Timer />
        <WorkingHours />
      </div>
    </>
  );
};

export default Task;
