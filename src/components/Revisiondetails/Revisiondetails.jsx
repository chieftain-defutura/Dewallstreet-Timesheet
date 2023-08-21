import React, { useState } from "react";
import linkicon from "../../assets/icons/link.svg";
import documenticon from "../../assets/icons/document.svg";
import timerhide from "../../assets/icons/timerhide.svg";
import cancel from "../../assets/icons/cancel.svg";
import add from "../../assets/icons/plussymbol.svg";
import closelink from "../../assets/icons/closelink.svg";
import toastcancel from "../../assets/icons/toastcancel.svg";
import successtick from "../../assets/icons/successtick.svg";
import "./Revisiondetails.css";
import Button from "../Button";
import LayoutModal from "../Modal/Modal";
import Toasts from "../Toasts";
const Revisiondetails = () => {
  const [resubmit, setResubmit] = useState(false);
  const [reportResubmit, setReportresubmit] = useState(false);
  return (
    <>
      {resubmit && !reportResubmit && (
        <LayoutModal onClose={() => setResubmit(false)}>
          <div className="report_main">
            <div className="report_header">
              <h5>Daily report</h5>
              <button>
                <img
                  src={cancel}
                  alt="cancel"
                  onClick={() => setResubmit(false)}
                />
              </button>
            </div>
            <div className="report_emptyline"></div>
            <div className="task_report">
              <div className="report_list">
                <div className="report-task">
                  <h5>02</h5>
                </div>
              </div>
              <h4>Revision lists</h4>
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
              className="confirm_button"
              onClick={() => setReportresubmit(true)}
            >
              <Button variant="primary" size="large">
                Submit
              </Button>
            </div>
          </div>
        </LayoutModal>
      )}
      {reportResubmit && (
        <LayoutModal onClose={() => setReportresubmit(false)}>
          <div
            onClick={() => setReportresubmit(false)}
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
      <div className="all_revisiondetails">
        <div className="revisiondetails_main">
          <div className="design_system">
            <h1>Design system</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="home_information">
            <h3>1. Home page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="information_link">
              <a href="#">
                https://drive.google.com/drive/u/0/folders/1P4q7gb09-L6GgMe5RJlEKDOoGnA66PyH
              </a>
              <p>-Screen shot</p>
            </div>
            <div className="file_document">
              <div className="file_information">
                <img src={linkicon} alt="icon" />
                <p>
                  Ut enim ad minim veniam, quis nostrod exercitation ullamco
                  laboris.
                </p>
              </div>
              <div className="document_information">
                <img src={documenticon} alt="icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="menu_information">
            <h3>2. Menu</h3>
            <a href="#">
              https://drive.google.com/drive/u/0/folders/1P4q7gb09-L6GgMe5RJlEKDOoGnA66PyH
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="file_document">
              <div className="file_information">
                <img src={linkicon} alt="icon" />
                <p>
                  Ut enim ad minim veniam, quis nostrod exercitation ullamco
                  laboris.
                </p>
              </div>
              <div className="document_information">
                <img src={documenticon} alt="icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="period_deadline">
            <div className="deadline">
              <h4>DEADLINE</h4>
              <h3>06 June,2023.</h3>
            </div>
            <div className="week_day_hour">
              <img src={timerhide} alt="icon" />
              <div className="periodic_time">
                <div className="week_one">
                  <h2>01</h2>
                  <p>weeks</p>
                </div>
                <div className="day_two">
                  <h2>02</h2>
                  <p>days</p>
                </div>
                <div className="hour_three">
                  <h2>03</h2>
                  <p>hours</p>
                </div>
              </div>
            </div>
          </div>
          <div className="re_submit" onClick={() => setResubmit(true)}>
            <Button variant="secondary" size="medium">
              Resubmit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Revisiondetails;
