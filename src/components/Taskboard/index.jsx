/** @format */

import React, { useState } from "react";
import "./taskboard.css";

import Logboard from "./Log";
import Designpage from "./Log/Logs";

const Taskboard = () => {
  return (
    <div>
      <div className="design_questionnaire">
        <Logboard />
        <Designpage />
      </div>
    </div>
  );
};
export default Taskboard;
