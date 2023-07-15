/** @format */

import React, { useState } from "react";
import downarrow from "../../../assets/icons/chevron-down.svg";
import "./backlogs.css";
import { Backloglist } from "./Backlog";
import { Link } from "react-router-dom";
import Seemore from "../../see more/seemore";
import CommitPopup from "../../commit/commit";
export const Backlogdesign = () => {
  const RenderBacklogdesign = Backloglist.map((Designtype, i) => {
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
          <div className="commit_link">
            <a>Commits(2)</a>
          </div>
          <div className="audits_link">
            <a>Audits(2)</a>
          </div>
          <Link to="/Taskpage/backlog">
            <div className="backlog_link">
              <a>Backlogs(2)</a>
            </div>
          </Link>
        </div>
        <div>{RenderBacklogdesign}</div>
      </div>
    </React.Fragment>
  );
};

const DesignContent = ({ data }) => {
  const [openSeemore, setOpenSeemore] = useState(false);
  const [Addcommitopen, setAddcommitOpen] = useState(false);
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
          <div className="arrows">
            <button onClick={() => setOpenSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="" />}
            </button>
          </div>
        </>
      )}
      {openSeemore && <Seemore Designtype={data} setSeemore={setOpenSeemore} />}
      <CommitPopup trigger={Addcommitopen} setTrigger={setAddcommitOpen} />
    </div>
  );
};
