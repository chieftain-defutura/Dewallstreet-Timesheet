/** @format */

import React from "react";
import Homeheader from "../Header/Homeheader";

import Assigntasks from "../Assigntasks/assigntasks";
// import Designpage from "./Logs/Logs";

const Taskboard = () => {
  return (
    <div>
      <Homeheader />
      <Assigntasks />
      {/* <Designpage /> */}
    </div>
  );
};
export default Taskboard;
