/** @format */

import React from "react";
import Homeheader from "../Header/Homeheader";
import Assigntasks from "../Assigntasks/assigntasks";
import Designpage from "./Log/Logs";
import Seeless from "../see more/seemore";
import CommitPopup from "../commit/commit";

const Taskboard = () => {
  return (
    <div>
      <Designpage />
      <CommitPopup />
    </div>
  );
};
export default Taskboard;
