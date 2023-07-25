/** @format */

import React, { useState } from "react";
import "./WorkingHours.css";
import hoursprograss from "../../../assets/icons/hoursprograss.svg";
import minutesprograss from "../../../assets/icons/minutesprograss.svg";
import secondsprograss from "../../../assets/icons/secondsprograss.svg";
import suitcase from "../../../assets/icons/suitcase.svg";
import gracetime from "../../../assets/icons/gracetime.svg";
import firstlevel from "../../../assets/icons/firstlevel.svg";
import secondlevel from "../../../assets/icons/secondlevel.svg";
import thirdlevel from "../../../assets/icons/thirdlevel.svg";
import fourthlevel from "../../../assets/icons/fourthlevel.svg";
import secondleveldark from "../../../assets/icons/lunchimage.svg";
import cancel from "../../../assets/icons/cancel.svg";
import Checkin from "../../../assets/icons/checkin.svg";
import usezap from "../../../assets/icons/usezap.svg";
import usetimer from "../../../assets/icons/usetimer.svg";
import toastcancel from "../../../assets/icons/toastcancel.svg";
import warning from "../../../assets/icons/warning.svg";
import Button from "../../Button";
import Toasts from "../../Toasts";
import LayoutModal from "../../Modal/Modal";

const WorkingHours = () => {
  const [open, setOpen] = useState(false);
  const [checkin, setCheckIn] = useState(false);
  const [use, setUse] = useState(false);
  const [lunch, setLunch] = useState(false);
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

            {checkin ? (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={usetimer} alt="suitcase" />
                  <div className="check">
                    <h5>Use grace time that you have.</h5>
                    <h4>05/24</h4>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="regular"
                  image={usezap}
                  handleClick={() => setUse(true)}
                >
                  Use
                </Button>
              </div>
            ) : (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={suitcase} alt="suitcase" />
                  <div className="check">
                    <h5>Morning check in starts in</h5>
                    <h4>05m 00s</h4>
                  </div>
                </div>
                <Button variant="primary" size="regular" image={Checkin}>
                  Check in
                </Button>
              </div>
            )}
            {!checkin && lunch && (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={secondleveldark} alt="suitcase" />
                  <div className="check">
                    <h5>Lunch break starts in</h5>
                    <h4>05m 00s</h4>
                  </div>
                </div>
                <Button variant="checkout" size="regular" image={Checkin}>
                  Check out
                </Button>
              </div>
            )}
          </div>
          <div className="centeremptyline"></div>
          <div className="level_progress">
            <div className="checkin_levels">
              <div className="firstlevel_timing">
                <div
                  className="first_level"
                  onClick={() => setCheckIn((m) => !m)}
                >
                  <img src={firstlevel} alt="first" />
                </div>
                <p>10:00AM</p>
              </div>
              {lunch ? (
                <div className="secondlevel_timing">
                  <div
                    className="second_level"
                    onClick={() => setCheckIn(false)}
                  >
                    <img src={secondleveldark} alt="second" />
                  </div>
                  <p>01:00PM-02:00PM</p>
                </div>
              ) : (
                <div className="secondlevel_timing">
                  <div className="second_level" onClick={() => setLunch(true)}>
                    <img src={secondlevel} alt="second" />
                  </div>
                  <p>01:00PM-02:00PM</p>
                </div>
              )}

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
        {use && (
          <LayoutModal onClose={() => setUse(false)}>
            <div className="grace_time">
              <div className="gracetime_header">
                <h5>Grace time.</h5>
                <button onClick={() => setUse(false)}>
                  <img src={cancel} alt="cancel" />
                </button>{" "}
              </div>
              <div className="commit_emptyline"></div>
              <img src={gracetime} alt="gracetime" />
              <h4>
                Use your grace time that you have <b> 05</b>/<span>24</span>
              </h4>
              <div className="gracetime_para">
                <p>Your usual checkout time 6.30 will be autochecked </p>
                <p>out on confirming. No extra time is calculated as </p>
                <p>Over Time.</p>
              </div>
              <Button
                variant="primary"
                size="large"
                image={usezap}
                handleClick={() => setUse(false)}
              >
                Use grace time
              </Button>
            </div>
          </LayoutModal>
        )}
      </div>
    </>
  );
};
export default WorkingHours;
