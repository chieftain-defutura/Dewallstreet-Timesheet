/** @format */

import React from "react";
import timecircle from "../../../assets/icons/circle.svg";
import "./time.css";
const Timer = () => {
  return (
    <div className="time_calculation">
      <img src={timecircle} alt="circle" />
      <div className="hours_att">
        <h5>32/40</h5>
        <p>hours attended</p>
      </div>
      <div className="hours_ded">
        <h5>8</h5>
        <p> hours deduction</p>
      </div>
    </div>
  );
};
export default Timer;
