/** @format */

import React, { useReducer, useState } from "react";
import "./WorkingHours.css";
import hoursprograss from "../../../assets/icons/hoursprograss.svg";
import minutesprograss from "../../../assets/icons/minutesprograss.svg";
import usetimer from "../../../assets/icons/usetimer.svg";
import secondsprograss from "../../../assets/icons/secondsprograss.svg";
import errorwarning from "../../../assets/icons/errorwarning.svg";
import lunchstarts from "../../../assets/icons/lunchstarts.svg";
import lunchmiddle from "../../../assets/icons/lunchmiddle.svg";
import coffeestarts from "../../../assets/icons/coffeestarts.svg";
import add from "../../../assets/icons/plussymbol.svg";
import toastcancel from "../../../assets/icons/toastcancel.svg";
import successtick from "../../../assets/icons/successtick.svg";
import suitcase from "../../../assets/icons/suitcase.svg";
import lunchends from "../../../assets/icons/lunchends.svg";
import gracetime from "../../../assets/icons/gracetime.svg";
import gpslocation from "../../../assets/icons/gpslocation.svg";
import location from "../../../assets/icons/location.svg";
import turnon from "../../../assets/icons/turnonimage.svg";
import reportmiddle from "../../../assets/icons/reportmiddle.svg";
import firstleveldark from "../../../assets/icons/firstleveldark.svg";
import firstlevel from "../../../assets/icons/firstlevel.svg";
import secondlevel from "../../../assets/icons/secondlevel.svg";
import secondleveldark from "../../../assets/icons/lunchimage.svg";
import thirdlevel from "../../../assets/icons/thirdlevel.svg";
import thirdleveldark from "../../../assets/icons/thirdleveldark.svg";
import fourthlevel from "../../../assets/icons/fourthlevel.svg";
import fourthleveldark from "../../../assets/icons/fourthlevel.svg";
import breakimage from "../../../assets/icons/breakimage.svg";
import Checkout from "../../../assets/icons/checkout.svg";
import cancel from "../../../assets/icons/cancel.svg";
import Checkin from "../../../assets/icons/checkin.svg";
import usezap from "../../../assets/icons/usezap.svg";
import gracetimer from "../../../assets/icons/gractimer.svg";
import reportimage from "../../../assets/icons/reportimage.svg";
import turnongps from "../../../assets/icons/continuegps.svg";
import closelink from "../../../assets/icons/closelink.svg";
import Button from "../../Button";
import Toasts from "../../Toasts";
import LayoutModal from "../../Modal/Modal";
const WorkingHours = () => {
  const [usegracetime, setUseGraceTime] = useState(false);
  const [use, setUse] = useState(false);
  const [gps, setGps] = useState(false);
  const [turnOn, setTurnon] = useState(false);
  const [steps, setSteps] = useState(0);
  const [report, setReport] = useState(false);
  const [timer, setTimer] = useState(0);
  const [reportsubmit, setReportsubmit] = useState(false);
  const [gpscontinue, setGpscontinue] = useState(false);

  console.log(steps);

  return (
    <>
      <div className="workingcheckin_page">
        <div className="workinghours_main">
          <div className="time_checkinhours">
            <div className="check_workinghours">
              <h4>Working hours.</h4>
              {timer === 0 && (
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
              )}
              {timer === 1 && (
                <div className="clock_timing">
                  <div className="hours_prograssbar">
                    <img src={hoursprograss} alt="hours" />
                    <h5>Hours</h5>
                  </div>
                  <div className="minutes_prograssbar">
                    <img src={gracetimer} alt="minutes" />
                    <h5>Minutes</h5>
                  </div>
                  <div className="seconds_prograssbar">
                    <img src={secondsprograss} alt="seconds" />
                    <h5>Seconds</h5>
                  </div>
                </div>
              )}
              {timer === 2 && (
                <div className="clock_timing">
                  <div className="hours_prograssbar">
                    <img src={lunchstarts} alt="hours" />
                    <h5>Hours</h5>
                  </div>
                  <div className="minutes_prograssbar">
                    <img src={lunchmiddle} alt="minutes" />
                    <h5>Minutes</h5>
                  </div>
                  <div className="seconds_prograssbar">
                    <img src={secondsprograss} alt="seconds" />
                    <h5>Seconds</h5>
                  </div>
                </div>
              )}
              {timer === 3 && (
                <>
                  <div className="clock_timing">
                    <div className="hours_prograssbar">
                      <img src={lunchends} alt="hours" />
                      <h5>Hours</h5>
                    </div>
                    <div className="minutes_prograssbar">
                      <img src={lunchmiddle} alt="minutes" />
                      <h5>Minutes</h5>
                    </div>
                    <div className="seconds_prograssbar">
                      <img src={secondsprograss} alt="seconds" />
                      <h5>Seconds</h5>
                    </div>
                  </div>
                </>
              )}
              {timer === 4 && (
                <div className="clock_timing">
                  <div className="hours_prograssbar">
                    <img src={coffeestarts} alt="hours" />
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
              )}
              {timer === 5 && (
                <div className="clock_timing">
                  <div className="hours_prograssbar">
                    <img src={coffeestarts} alt="hours" />
                    <h5>Hours</h5>
                  </div>
                  <div className="minutes_prograssbar">
                    <img src={lunchmiddle} alt="minutes" />
                    <h5>Minutes</h5>
                  </div>
                  <div className="seconds_prograssbar">
                    <img src={secondsprograss} alt="seconds" />
                    <h5>Seconds</h5>
                  </div>
                </div>
              )}
              {timer === 6 && (
                <div className="clock_timing">
                  <div className="hours_prograssbar">
                    <img src={secondsprograss} alt="hours" />
                    <h5>Hours</h5>
                  </div>
                  <div className="minutes_prograssbar">
                    <img src={reportmiddle} alt="minutes" />
                    <h5>Minutes</h5>
                  </div>
                  <div className="seconds_prograssbar">
                    <img src={secondsprograss} alt="seconds" />
                    <h5>Seconds</h5>
                  </div>
                </div>
              )}
            </div>

            {steps === 0 && (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={suitcase} alt="suitcase" />
                  <div className="check">
                    <h5>Morning check in starts in</h5>
                    <h4>05m 00s</h4>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="regular"
                  image={Checkin}
                  handleClick={() => {
                    setSteps(1), setTimer(1);
                  }}
                >
                  Check in
                </Button>
              </div>
            )}
            {steps === 1 && (
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
                  onClick={() => setSteps((m) => !m)}
                >
                  Use
                </Button>
              </div>
            )}
            {steps === 2 && (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={secondleveldark} alt="suitcase" />
                  <div className="check">
                    <h5>Lunch break starts in</h5>
                    <h4>05m 00s</h4>
                  </div>
                </div>
                <Button
                  variant="checkout"
                  size="regular"
                  image={Checkout}
                  handleClick={() => {
                    setTimer(2),
                      setSteps(5),
                      setTimer(3),
                      setLunchwarning(true);
                  }}
                >
                  Check out
                </Button>
              </div>
            )}
            {steps === 3 && (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={breakimage} alt="breakimage" />
                  <div className="check">
                    <h5>coffee break starts in</h5>
                    <h4>05m 00s</h4>
                  </div>
                </div>
                <Button
                  variant="checkout"
                  size="regular"
                  image={Checkin}
                  handleClick={() => {
                    setSteps(6), setTimer(5);
                  }}
                >
                  Check out
                </Button>
              </div>
            )}
            {steps === 4 && (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={reportimage} alt="report" />
                  <div className="check">
                    <h5>Daily reporting time ends in</h5>
                    <h4>20m 00s</h4>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="regular"
                  image={usezap}
                  handleClick={() => setReport(true)}
                >
                  Report
                </Button>
              </div>
            )}
            {steps === 5 && (
              <div className="lunch_warningcheckin">
                <div className="checkin">
                  <div className="checkin_seconds">
                    <img src={secondleveldark} alt="suitcase" />
                    <div className="check">
                      <h5>Lunch break ends in</h5>
                      <h4>15m 00s</h4>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="regular"
                    image={Checkin}
                    handleClick={() => {
                      setSteps(3), setTimer(4);
                    }}
                  >
                    Check in
                  </Button>
                </div>
                <div className="error_alert">
                  <img src={errorwarning} alt="error" />
                  <p>Your are running 30 minutes late.</p>
                </div>
              </div>
            )}
            {steps === 6 && (
              <div className="checkin">
                <div className="checkin_seconds">
                  <img src={breakimage} alt="breakimage" />
                  <div className="check">
                    <h5>coffee break ends in</h5>
                    <h4>20m 00s</h4>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="regular"
                  image={Checkin}
                  handleClick={() => {
                    setSteps(4), setTimer(6);
                  }}
                >
                  Check in
                </Button>
              </div>
            )}

            {report && !reportsubmit && (
              <LayoutModal onClose={() => setReport(false)}>
                <div className="report_main">
                  <div className="report_header">
                    <h5>Daily report</h5>
                    <button>
                      <img
                        src={cancel}
                        alt="cancel"
                        onClick={() => setReport(false)}
                      />
                    </button>
                  </div>
                  <div className="report_emptyline"></div>
                  <div className="task_report">
                    <div className="report_list">
                      <div className="report-task">
                        <h5>01</h5>
                      </div>
                    </div>
                    <h4>Task lists</h4>
                  </div>
                  <div className="task_status">
                    <div className="task_name">
                      <h4>TASK 1</h4>
                      <h3>Admin panel wireframe</h3>
                    </div>
                    <form>
                      <select>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Inprogress</option>
                      </select>
                    </form>
                  </div>
                  <div className="add_file">
                    <h4>FILE</h4>
                    <img src={add} alt="plus" />
                  </div>
                  <div className="drag_file">
                    <h5>Drag and Drop</h5>
                  </div>
                  <div className="add_link">
                    <h4>LINK</h4>
                    <img src={add} alt="plus" />
                  </div>
                  <div className="drag_link">
                    <h5>Link</h5>
                    <img src={closelink} alt="close" />
                  </div>
                  <div className="completed_taskline"></div>
                  <div className="current_status">
                    <div className="another_task">
                      <h4>TASK 2</h4>
                      <h3>Mobile UI Correction</h3>
                    </div>
                    <form>
                      <select>
                        <option>Select status</option>
                      </select>
                    </form>
                  </div>

                  <div
                    onClick={() => setReportsubmit(true)}
                    className="confirm_button"
                  >
                    <Button variant="primary" size="large">
                      Submit
                    </Button>
                  </div>
                </div>
              </LayoutModal>
            )}
            {reportsubmit && (
              <LayoutModal onClose={() => setReport(false)}>
                <div
                  onClick={() => setReportsubmit(false)}
                  className="report_alert"
                >
                  <Toasts
                    image={successtick}
                    props="your report sent successfully"
                    icons={toastcancel}
                  />
                  <div className="toast_successline"></div>
                </div>
              </LayoutModal>
            )}
            {usegracetime && (
              <LayoutModal onClose={() => setUseGraceTime(false)}>
                <div
                  onClick={() => setUseGraceTime(false)}
                  className="report_alert"
                >
                  <Toasts
                    image={successtick}
                    props="Successfully used Gracetime"
                    icons={toastcancel}
                  />
                  <div className="toast_successline"></div>
                </div>
              </LayoutModal>
            )}
            {gpscontinue && (
              <LayoutModal onClose={() => setGpscontinue(false)}>
                <div
                  onClick={() => setGpscontinue(false)}
                  className="report_alert"
                >
                  <Toasts
                    image={successtick}
                    props="your location is Turn on"
                    icons={toastcancel}
                  />
                  <div className="toast_successline"></div>
                </div>
              </LayoutModal>
            )}
            {gps && (
              <LayoutModal>
                <div className="gps_location">
                  <div className="gpslocation_header">
                    <h5>GPS location</h5>
                    <button>
                      <img src={cancel} alt="cancel" />
                    </button>{" "}
                  </div>
                  <div className="gps_emptyline"></div>
                  <h3>Your GPS location was not found.</h3>
                  <img src={gpslocation} alt="gpslocation" />
                  <h4>
                    Please make sure that you are in one of the locations.
                  </h4>
                  <div className="gpslocation_para">
                    <div className="location_para">
                      <img src={location} alt="location" />
                      <p>
                        Dewallstreet, No.1, Mahalakshmi Nagar, East Tambaram.
                      </p>
                    </div>
                    <div className="location_para">
                      <img src={location} alt="location" />
                      <p>
                        Dehustle institute,No.1, Mahalakshmi Nagar, East
                        <p>Tambaram.</p>
                      </p>
                    </div>
                    <div className="location_para">
                      <img src={location} alt="location" />
                      <p>Deaccel, No.1, Mahalakshmi Nagar, East Tambaram.</p>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="large"
                    image={turnon}
                    handleClick={() => {
                      setGps(false);
                      setTurnon(true);
                    }}
                  >
                    Turn on GPS
                  </Button>
                </div>
              </LayoutModal>
            )}
            {turnOn && (
              <LayoutModal onClose={() => setTurnon(false)}>
                <div className="gps_location">
                  <div className="gpslocation_header">
                    <h5>GPS location</h5>
                    <button onClick={() => setTurnon(false)}>
                      <img src={cancel} alt="cancel" />
                    </button>{" "}
                  </div>
                  <div className="gps_emptyline"></div>
                  <h3>Your GPS location enabled.</h3>
                  <img src={turnongps} alt="turnongps" />
                  <Button
                    variant="primary"
                    size="large"
                    handleClick={() => {
                      setGps(false);
                      setTurnon(false);
                      setGpscontinue(true);
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </LayoutModal>
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
                    handleClick={() => {
                      setUse(false), setUseGraceTime(true);
                    }}
                  >
                    Use grace time
                  </Button>
                </div>
              </LayoutModal>
            )}
          </div>

          <div className="centeremptyline"></div>
          <div className="level_progress">
            <div className="checkin_levels">
              <div className="firstlevel_timing">
                {steps !== 1 && steps !== 0 ? (
                  <div
                    className="first_level"
                    onClick={() => {
                      setSteps(1), setTimer(0);
                    }}
                  >
                    <img src={firstlevel} alt="first" />
                  </div>
                ) : (
                  <div
                    className="first_level"
                    onClick={() => {
                      setSteps(1);
                    }}
                  >
                    <img src={firstleveldark} alt="first" />
                  </div>
                )}
                <p>10:00AM</p>
              </div>

              <div className="secondlevel_timing">
                {steps !== 2 && steps !== 5 ? (
                  <div
                    className="second_level"
                    onClick={() => {
                      setSteps(2);
                    }}
                  >
                    <img src={secondlevel} alt="second" />
                  </div>
                ) : (
                  <div
                    className="second_level"
                    onClick={() => {
                      setSteps(2);
                      setTimer(2);
                    }}
                  >
                    <img src={secondleveldark} alt="second" />
                  </div>
                )}
                <p>01:00PM-02:00PM</p>
              </div>

              <div className="thirdlevel_timing">
                {steps !== 3 && steps !== 6 ? (
                  <div className="third_level" onClick={() => setSteps(3)}>
                    <img src={thirdlevel} alt="third" />
                  </div>
                ) : (
                  <div className="third_level" onClick={() => setSteps(3)}>
                    <img src={thirdleveldark} alt="third" />
                  </div>
                )}

                <p>05:00PM-05:30PM</p>
              </div>

              <div className="fourthlevel_timing">
                {steps === 4 ? (
                  <div
                    className="fourth_level"
                    onClick={() => {
                      setGps(true);
                      setSteps(1);
                    }}
                  >
                    <img src={fourthleveldark} alt="fourth" />
                  </div>
                ) : (
                  <div
                    className="fourth_level"
                    onClick={() => {
                      setGps(true);
                      setSteps(4);
                    }}
                  >
                    <img src={fourthlevel} alt="fourth" />
                  </div>
                )}

                <p>06:30PM</p>
              </div>
            </div>
            <div className="level_crossing"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkingHours;
