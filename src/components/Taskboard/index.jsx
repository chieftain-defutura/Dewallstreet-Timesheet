/** @format */

import React, { useState } from "react";
import "./taskboard.css";

import Logboard from "./Log";

const Taskboard = () => {
  return (
    <div>
      <div className="design_questionnaire">
        <Logboard />
      </div>
    </div>
  );
};
export default Taskboard;
