/** @format */

import React from "react";
import linkimage from "../../../assets/icons/link.svg";
import documentimage from "../../../assets/icons/document.svg";
import clockimage from "../../../assets/icons/timer.svg";
import { Designlist } from "./Logos";
import "./Logs.css";

const Designpage = () => {
  const RenderDesignpage = Designlist.map((Designtype) => {
    return (
      <div className="task_system">
        <div className="task_title">
          <h1>{Designtype.Title}</h1>
          <p>{Designtype.Para}</p>
        </div>
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
            <div className="design_respond">
              <p>{Designtype.Respond}</p>
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
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="logs_main">
        <div className="design_links">
          <div className="log_link">
            <a>Logs(2)</a>
          </div>
          <div className="commit_link">
            <a>Commits(2)</a>
          </div>
          <div className="audits_link">
            <a>Audits(2)</a>
          </div>
          <div className="backlog_link">
            <a>Backlogs(2)</a>
          </div>
        </div>
        <div>{RenderDesignpage}</div>
      </div>
    </React.Fragment>
  );
};
export default Designpage;
