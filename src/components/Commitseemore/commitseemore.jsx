/** @format */
import React, { useState } from "react";
import "./commitseemore.css";
import { Designlist } from "../Taskboard/Log/Logos";
import linkimage from "../../assets/icons/link.svg";
import documentimage from "../../assets/icons/document.svg";
import successtick from "../../assets/icons/successtick.svg";
import toastcancel from "../../assets/icons/toastcancel.svg";
import clockimage from "../../assets/icons/timer.svg";
import cancel from "../../assets/icons/cancel.svg";
import calendar from "../../assets/icons/calendar.svg";
import clock from "../../assets/icons/clock.svg";
import Button from "../Button";
import uparrow from "../../assets/icons/chevron-up.svg";
import Designpage from "../Taskboard/Log/Logs";
import { useParams } from "react-router-dom";
import LayoutModal from "../Modal/Modal";
import Toasts from "../Toasts";

const Commitseemore = ({ Designtype, setSeemore }) => {
  const { commits } = useParams();
  const [Addcommitopen, setAddcommitOpen] = useState(false);
  const [openSeemore, setOpenSeemore] = useState(false);
  const [Extendopen, setExtendopen] = useState(false);
  const [Successopen, setSuccessOpen] = useState(false);

  return (
    <div className="see_more">
      <div className="correction">
        <h2>{Designtype.Subtitle}</h2>
        <p>{Designtype.Para}</p>
        <div className="design_link">
          <img src={linkimage} alt="Linkimage" />
          <h4>{Designtype.bio}</h4>
        </div>
        <div className="design_file">
          <img src={documentimage} alt="documentimage" />
          <h4>{Designtype.Filebio}</h4>
        </div>
      </div>
      <div className="rework">
        <h2>{Designtype.Logo}</h2>
        <p>{Designtype.Para}</p>
        <div className="design_link">
          <img src={linkimage} alt="Linkimage" />
          <h4>{Designtype.bio}</h4>
        </div>
        <div className="design_file">
          <img src={documentimage} alt="documentimage" />
          <h4>{Designtype.Filebio}</h4>
        </div>
      </div>
      <div className="link_time">
        <div className="link_drive">
          <h1 id="linkheading">{Designtype.Linktitle}</h1>
          <p>{Designtype.Link}</p>
        </div>
        <div className="time_respond">
          <div className="day_time">
            <h1 id="time">{Designtype.Timing}</h1>
            <h1 id="days">{Designtype.Date}</h1>
          </div>
          {commits !== "commits" && (
            <div className="design_respond">
              <p>{Designtype.Respond}</p>
              <div className="button_type">
                <div className="design_clock">
                  <img src={clockimage} alt="" />
                  <div className="design_days">
                    <h2>{Designtype.Two}</h2>
                    <p>{Designtype.Day}</p>
                  </div>
                  <div className="design_hours">
                    <h2>{Designtype.Three}</h2>
                    <p>{Designtype.Hour}</p>
                  </div>
                  <div className="design_min">
                    <h2>{Designtype.One}</h2>
                    <p>{Designtype.Min}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {commits !== "commits" && !openSeemore && (
        <div className="commit_button">
          <div onClick={() => setAddcommitOpen(true)}>
            <Button variant="negotiate" size="medium">
              Raise a meeting
            </Button>
          </div>
          <div onClick={() => setExtendopen(true)} className="extend_button">
            <Button variant="secondary" size="medium">
              Extend request
            </Button>
          </div>
        </div>
      )}

      <div className="down_arrow">
        <button onClick={() => setSeemore(false)}>
          {Designtype.Less}
          <img src={uparrow} alt="" />
        </button>
      </div>
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
export default Commitseemore;
