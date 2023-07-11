/** @format */

import React from "react";
import Assigntasks from "./assigntasks";
import Timelinegraph from "./Timelinegraph/timelinegraph";
import Homeheader from "../Header/Homeheader";
import Timer from "./Timebar/time";

const Task = () => {
  return (
    <div className="">
      <Homeheader />
      <Assigntasks />
      <Timelinegraph />
      <Timer />
    </div>
  );
};

export default Task;
