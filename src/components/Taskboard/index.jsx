/** @format */

import React from "react";
import Homeheader from "../Header/Homeheader";
import Designpage from "./Designsystem/designsystem";
import Assigntasks from "../Assigntasks/assigntasks";

const Taskboard = () => {
  return (
    <div>
      <Homeheader />
      <Assigntasks />
      <Designpage />
    </div>
  );
};
export default Taskboard;
