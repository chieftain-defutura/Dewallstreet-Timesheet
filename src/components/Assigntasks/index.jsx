import React from "react";
import Assigntasks from "./assigntasks";
import Timelinegraph from "./Timelinegraph/timelinegraph";
import Week from "./Timelinegraph/charts/week";

const Task = () => {
  return (
    <div className="">
      <Assigntasks />
      <Timelinegraph />
      {/* <Week /> */}
    </div>
  );
};

export default Task;
