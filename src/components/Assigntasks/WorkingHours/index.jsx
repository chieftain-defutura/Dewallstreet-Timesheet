import React from "react";
import "./WorkingHours.css";
import suitcase from "../../../assets/icons/suitcase.svg";
const WorkingHours = () => {
  return (
    <div className="workinghours_main">
      <div className="check_workinghours">
        <h4>Working hours.</h4>
        <div className="clock_timimg">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle">08</div>
            </div>
          </div>
          <h5>Hours</h5>
        </div>
        <div className="checkin">
          <img src={suitcase} alt="suitcase" />
          <div className="checkin_seconds">
            <h5>Morning check in starts in</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkingHours;
