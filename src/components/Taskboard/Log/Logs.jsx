/** @format */

import React, { useState } from "react";
import downarrow from "../../../assets/icons/chevron-down.svg";
import { Designlist } from "./Logos";
import "./Logs.css";
import Seeless from "../../see more/seemore";

const Designpage = () => {
  const [Seemore, setSeemore] = useState(false);

  const RenderDesignpage = Designlist.map((Designtype) => {
    return (
      <div className="task_system">
        <div className="task_title">
          <h1>{Designtype.Title}</h1>
          <p>{Designtype.Para}</p>
        </div>
        <div className="arrows">
          <button onClick={() => setSeemore(false)}>
            {Designtype.Click}
            {<img src={downarrow} alt="" />}
          </button>
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
