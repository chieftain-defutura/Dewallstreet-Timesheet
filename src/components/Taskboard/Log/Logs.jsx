/** @format */

import React, { useState } from "react";
import downarrow from "../../../assets/icons/chevron-down.svg";
import cancel from "../../../assets/icons/cancel.svg";
import commitimage from "../../../assets/icons/commitimage.svg";
import commit_timer from "../../../assets/icons/commit_timer.svg";
import toastcancel from "../../../assets/icons/toastcancel.svg";
import { Designlist } from "./Logos";
import "./Logs.css";
import Seeless from "../../see more/seemore";
import Button from "../../Button";

import { Link } from "react-router-dom";
import LayoutModal from "../../Modal/Modal";
import Toasts from "../../Toasts";

const Designpage = () => {
  const RenderDesignpage = Designlist.map((Designtype, i) => {
    return <DesignContent key={i} data={Designtype} />;
  });
  return (
    <React.Fragment>
      <div className="logs_main">
        <div className="design_links">
          <Link to="/Taskpage/log">
            <div className="log_link">
              <a>Logs(2)</a>
            </div>
          </Link>
          <Link to="/Taskpage/commit">
            <div className="commit_link">
              <a>Commits(2)</a>
            </div>
          </Link>
          <div className="audits_link">
            <a>Audits(2)</a>
          </div>
          <Link to="/Taskpage/backlog">
            <div className="backlog_link">
              <a>Backlogs(2)</a>
            </div>
          </Link>
        </div>
        <div>{RenderDesignpage}</div>
      </div>
    </React.Fragment>
  );
};
export default Designpage;

const DesignContent = ({ data }) => {
  const [Seemore, setSeemore] = useState(false);
  const [Addcommitopen, setAddcommitOpen] = useState(false);
  const [Toastopen, setToastopen] = useState(false);
  console.log("data", data);

  if (!data) return;
  return (
    <div className="task_system">
      <div className="task_title">
        <h1>{data.Title}</h1>
        <p>{data.Para}</p>
      </div>
      {!Seemore && (
        <>
          <div className="logs_button">
            <div>
              <Button variant="negotiate" size="medium">
                Negotiate
              </Button>
            </div>
            <div onClick={() => setAddcommitOpen(true)}>
              <Button variant="primary" size="medium">
                Commit
              </Button>
            </div>
          </div>
          <div className="arrows">
            <button onClick={() => setSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="" />}
            </button>
          </div>
        </>
      )}
      {Seemore && <Seeless Designtype={data} setSeemore={setSeemore} />}
      {Addcommitopen && !Toastopen && (
        <LayoutModal onClose={() => setAddcommitOpen(false)}>
          <div className="commit_main">
            <div className="commit_header">
              <h5>Commit.</h5>
              <button onClick={() => setAddcommitOpen(false)} id="close_button">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <div className="commit_emptyline"></div>
            <img src={commitimage} alt="" />
            <div className="commit_content">
              <div className="commit_deadline">
                <h5>DEADLINE</h5>
                <h4>06 June,2023.</h4>
              </div>
              <div className="commit_daysweeks">
                <img src={commit_timer} alt="timer" />
                <div className="commit_weeks">
                  <h4>01</h4>
                  <h5>weeks</h5>
                </div>
                <div className="commit_days">
                  <h4>02</h4>
                  <h5>days</h5>
                </div>
                <div className="commit_hours">
                  <h4>03</h4>
                  <h5>hours</h5>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectrtur adipiscing elit, set do
              eiusmed tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div onClick={() => setToastopen(true)} className="confirm_button">
              <Button variant="primary" size="large">
                Confirm
              </Button>
            </div>
          </div>
        </LayoutModal>
      )}
      {Toastopen && (
        <LayoutModal onClose={() => setAddcommitOpen(false)}>
          <div onClick={() => setToastopen(false)}>
            <Toasts
              props="You are committed for this task"
              icons={toastcancel}
            />
            <div className="toast_successline"></div>
          </div>
        </LayoutModal>
      )}
    </div>
  );
};
