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
import copylink from "../../../assets/icons/copylink.svg";
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
  const [revision, setRevision] = useState(false);
  console.log("data", data);

  if (!data) return;
  return (
    <div className="task_system">
      <div className="task_title">
        <h1>{data.Title}</h1>
        <p>{data.Para}</p>
      </div>
      {/* <div className="extended_task">
        <h1>{data.extendedtitle}</h1>
        <Button>Extended</Button>
        <p>{data.extendedpara}</p>
      </div> */}

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
      {revision && (
        <LayoutModal onClose={() => setRevision(false)}>
          <div className="revision_main">
            <div className="revision_content">
              <h3>Design System</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <p>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
              <p>
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>nisi ut aliquip ex ea commodo consequat"</p>
            </div>
            <div className="revision_date">
              <div className="revision_dateandtime">
                <div className="date">
                  <h5>DATE</h5>
                  <h3>06 June, 2023.</h3>
                </div>
                <div className="time">
                  <h5>TIME</h5>
                  <h3>02:00pm</h3>
                </div>
              </div>
              <div className="agenda_field">
                <h5>AGENDA</h5>
                <div className="revision_agenda">
                  <h4>Home page- Menu-About us page</h4>
                </div>

                <h5>MEETING LINK</h5>
                <div className="revision_meeting">
                  <h4>
                    https://www.figma.com/file/s8pn7k0uTojgGlhbxqJgKm/wireframe?
                  </h4>
                  <h4>type=design&node-</h4>
                  <h4>id=2166-2158&mode=design&t=oMjiGmR6d4rU9mHF-0</h4>
                </div>
              </div>
            </div>
            <div
              className="copy_link"
              onClick={() => {
                setRevision(false), setAddcommitOpen(false);
              }}
            >
              <h5>Copy link</h5>
              <img src={copylink} alt="copy" width="20px" />
            </div>
          </div>
        </LayoutModal>
      )}
      {Addcommitopen && !revision && (
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
            <div className="request_button" onClick={() => setRevision(true)}>
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
