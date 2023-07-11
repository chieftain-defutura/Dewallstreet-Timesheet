import React from "react";
import Assigntasks from "./assigntasks";
import Timelinegraph from "../Timelinegraph/timelinegraph";
import WorkingHours from "./WorkingHours";

const Task = () => {
  return (
    <div className="">
      <Assigntasks />
      <Timelinegraph />
      <WorkingHours />
    </div>
  );
};

export default Task;
