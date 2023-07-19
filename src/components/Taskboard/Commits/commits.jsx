/** @format */

import React, { useState } from "react";
import "./commits.css";
import { Commitlist } from "./commit";
import calendar from "../../../assets/icons/calendar.svg";
import clock from "../../../assets/icons/clock.svg";
import downarrow from "../../../assets/icons/seemorebutton.svg";
import successtick from "../../../assets/icons/successtick.svg";
import cancel from "../../../assets/icons/cancel.svg";
import toastcancel from "../../../assets/icons/toastcancel.svg";
import TaskHeader from "../Taskheader";
import Button from "../../Button";
import Commitseemore from "../../Commitseemore/commitseemore";
import LayoutModal from "../../Modal/Modal";
import Toasts from "../../Toasts";
export const CommitDesignsystem = () => {
  const RenderCommitdesign = Commitlist.map((CommitDesigntype, i) => {
    return <Commitcontent key={i} data={CommitDesigntype} />;
  });
  return (
    <React.Fragment>
      <div className="commits_mapping">
        <TaskHeader />
        <div className="commit_render"> {RenderCommitdesign}</div>
      </div>
    </React.Fragment>
  );
};

export default CommitDesignsystem;

const Commitcontent = ({ data }) => {
  const [openSeemore, setOpenSeemore] = useState(false);
  const [Addcommitopen, setAddcommitOpen] = useState(false);
  const [Extendopen, setExtendopen] = useState(false);
  const [Successopen, setSuccessOpen] = useState(false);
  console.log("data", data);

  if (!data) return;
  return (
    <div className="task_system">
      <div className="task_title">
        <h1>{data.Title}</h1>
        <p>{data.Para}</p>
      </div>

      {!openSeemore && (
        <>
          <div className="logs_button">
            <div onClick={() => setAddcommitOpen(true)}>
              <Button variant="negotiate" size="medium">
                <p>Raise a meeting</p>
              </Button>
            </div>
            <div onClick={() => setExtendopen(true)} className="extend_button">
              <Button variant="secondary" size="medium">
                <p>Extend request</p>
              </Button>
            </div>
          </div>
          <div className="arrows">
            <button onClick={() => setOpenSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="" />}
            </button>
          </div>
        </>
      )}
      {openSeemore && (
        <Commitseemore Designtype={data} setSeemore={setOpenSeemore} />
      )}
      {Addcommitopen && (
        <LayoutModal onClose={() => setAddcommitOpen(false)}>
          <div className="Raise_meeting">
            <div className="raisemeeting_header">
              <h5>Raise a meeting</h5>
              <button onClick={() => setAddcommitOpen(false)} id="close_button">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <div className="meeting_emptyline"></div>
            <div className="request_box">
              <div className="agenda">
                <p>AGENDA</p>
              </div>
              <div className="enter_request">
                <p>Enter agenda</p>
              </div>
            </div>
            <div className="request_button">
              <Button size="large" variant="secondary">
                Sent request
              </Button>
            </div>
          </div>
        </LayoutModal>
      )}
      {Extendopen && !Successopen && (
        <LayoutModal onClose={() => setExtendopen(false)}>
          <div className="extend_request">
            <div className="extend_heading">
              <h5>Extend Request</h5>
              <button onClick={() => setExtendopen(false)} id="close_button">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <div className="extend_emptyline"></div>
            <div className="reason_box">
              <div className="reason">
                <p>AGENDA</p>
              </div>
              <div className="enter_reason">
                <p>Enter agenda</p>
              </div>
            </div>
            <div className="extend_section">
              <div className="extend_date">
                <p>EXTEND DATE</p>
                <div className="extenddate_text">
                  <img src={calendar} alt="calendar" />
                  <p>Select date</p>
                </div>
              </div>
              <div className="extend_time">
                <p>EXTEND TIME</p>
                <div className="extendtime_text">
                  <img src={clock} alt="clock" />
                  <p>Select time</p>
                </div>
              </div>
            </div>
            <div
              className="request_button"
              onClick={() => setSuccessOpen(true)}
            >
              <Button size="large" variant="secondary">
                Sent request
              </Button>
            </div>
          </div>
        </LayoutModal>
      )}
      {Successopen && (
        <LayoutModal onClose={() => setAddcommitOpen(false)}>
          <div onClick={() => setSuccessOpen(false)}>
            <Toasts
              image={successtick}
              props="Your extended request sent."
              icons={toastcancel}
            />
          </div>
        </LayoutModal>
      )}
    </div>
  );
};
