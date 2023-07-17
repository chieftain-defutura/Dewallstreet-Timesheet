/** @format */

import React from "react";
import "./taskboard.css";
import Designpage from "./Log/Logs";
import Questionnaire from "../Assigntasks/Negotiate/questionnaire";

const Taskboard = () => {
  return (
    <div>
      <div className="design_questionnaire">
        <Designpage />
        <Questionnaire />
      </div>
    </div>
  );
};
export default Taskboard;
