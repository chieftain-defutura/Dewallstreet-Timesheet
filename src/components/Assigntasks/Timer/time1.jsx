/** @format */

import React from "react";
import timecircle from "../../../assets/icons/circle.svg";
import "./time.css";
const Timerone = () => {
  return (
    <div className="time_calculation">
      <img src={timecircle} alt="circle" />
      <div className="hours_att">
        <h5>1969/1992</h5>
        <p>hours attended</p>
      </div>
      <div className="timer_line"></div>
      <div className="hours_ded">
        <h5>23</h5>
        <p> hours deduction</p>
      </div>
    </div>
  );
};
export default Timerone;
