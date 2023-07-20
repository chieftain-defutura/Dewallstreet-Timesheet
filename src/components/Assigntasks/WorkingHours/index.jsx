import React, { useState } from "react";
import "./WorkingHours.css";
import hoursprograss from "../../../assets/icons/hoursprograss.svg";
import minutesprograss from "../../../assets/icons/minutesprograss.svg";
import secondsprograss from "../../../assets/icons/secondsprograss.svg";
import suitcase from "../../../assets/icons/suitcase.svg";
import firstlevel from "../../../assets/icons/firstlevel.svg";
import secondlevel from "../../../assets/icons/secondlevel.svg";
import thirdlevel from "../../../assets/icons/thirdlevel.svg";
import fourthlevel from "../../../assets/icons/fourthlevel.svg";
import checkin from "../../../assets/icons/checkin.svg";
import toastcancel from "../../../assets/icons/toastcancel.svg";
import warning from "../../../assets/icons/warning.svg";
import Button from "../../Button";
import Toasts from "../../Toasts";

const WorkingHours = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="workingcheckin_page">
        <div className="workinghours_main">
          <div className="time_checkinhours">
            <div className="check_workinghours">
              <h4>Working hours.</h4>
              <div className="clock_timing">
                <div className="hours_prograssbar">
                  <img src={hoursprograss} alt="hours" />
                  <h5>Hours</h5>
                </div>
                <div className="minutes_prograssbar">
                  <img src={minutesprograss} alt="minutes" />
                  <h5>Minutes</h5>
                </div>
                <div className="seconds_prograssbar">
                  <img src={secondsprograss} alt="seconds" />
                  <h5>Seconds</h5>
                </div>
              </div>
            </div>
            <div className="checkin">
              <div className="checkin_seconds">
                <img src={suitcase} alt="suitcase" />
                <div className="check">
                  <h5>Morning check in starts in</h5>
                  <h4>05m 00s</h4>
                </div>
              </div>
              <Button variant="primary" size="regular" image={checkin}>
                Check in
              </Button>
            </div>
          </div>
          <div className="centeremptyline"></div>
          <div className="level_progress">
            <div className="checkin_levels">
              <div className="firstlevel_timing">
                <div className="first_level">
                  <img src={firstlevel} alt="first" />
                </div>
                <p>10:00AM</p>
              </div>
              <div className="secondlevel_timing">
                <div className="second_level">
                  <img src={secondlevel} alt="second" />
                </div>
                <p>01:00PM-02:00PM</p>
              </div>
              <div className="thirdlevel_timing">
                <div className="third_level">
                  <img src={thirdlevel} alt="third" />
                </div>
                <p>05:00PM-05:30PM</p>
              </div>
              <div className="fourthlevel_timing">
                <div className="fourth_level">
                  <img src={fourthlevel} alt="fourth" />
                </div>
                <p>06:30PM</p>
              </div>
            </div>
            <div className="level_crossing"></div>
          </div>
        </div>

        {open ? (
          <div onClick={() => setOpen(false)} style={{ margin: "auto" }}>
            <Toasts
              image={warning}
              props="Grace time used.Dead line extended to 6 hours."
              variant="warning"
              icons={toastcancel}
            />
            <div className="toast_warning"></div>
          </div>
        ) : (
          <div onClick={() => setOpen(true)} className="toast_button">
            <Button variant="secondary" size="small">
              Toast
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
export default WorkingHours;
