/** @format */

import React from "react";
import timecircle from "../../../assets/icons/circle.svg";
import "./time.css";
const Timertwo = () => {
  return (
    <div className="time_calculation">
      <img src={timecircle} alt="circle" />
      <div className="hours_att">
        <h5>1928/1992</h5>
        <p>hours attended</p>
      </div>
      <div className="timer_verticalline"></div>
      <div className="hours_ded">
        <h5>64</h5>
        <p> hours deduction</p>
      </div>
    </div>
  );
};
export default Timertwo;
