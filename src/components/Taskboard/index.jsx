/** @format */

import React from "react";
import "./taskboard.css";
import Homeheader from "../Header/Homeheader";
import Assigntasks from "../Assigntasks/assigntasks";
import Designpage from "./Log/Logs";
import Seeless from "../see more/seemore";
import CommitPopup from "../commit/commit";
import Questionnaire from "../Assigntasks/Negotiate/questionnaire";

const Taskboard = () => {
  return (
    <div>
      <div className="design_questionnaire">
        <Designpage />
        <Questionnaire />
      </div>
      <>
        <CommitPopup />
      </>
    </div>
  );
};
export default Taskboard;
