/** @format */

import React, { useState } from "react";
import "./taskboard.css";
import Layout from "../../components/Layout";
import Logboard from "./Log";
import Homepage from "../../pages/Home";

const Taskboard = () => {
  return (
    <div className="design_questionnaire">
      <Logboard />
    </div>
  );
};
export default Taskboard;
