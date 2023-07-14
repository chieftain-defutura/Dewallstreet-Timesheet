/** @format */

import React from "react";
import Homeheader from "../Header/Homeheader";
import Assigntasks from "../Assigntasks/assigntasks";
import Designpage from "./Log/Logs";
import Seeless from "../see more/seemore";
import Questionnaire from "../Assigntasks/Negotiate/questionnaire";

const Taskboard = () => {
  return (
    <div className="design_questionnaire">
      <Designpage />
      {/* <Seeless /> */}
      <Questionnaire />
    </div>
  );
};
export default Taskboard;
