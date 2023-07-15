/** @format */

import React, { useState } from "react";
import downarrow from "../../../assets/icons/chevron-down.svg";
import { Designlist } from "./Logos";
import "./Logs.css";
import Seeless from "../../see more/seemore";
import Button from "../../Button";
// import CommitPopup from "../../commit/commit";
// import { ModalBox } from "../../Modal/Modal";

const Logs = () => {
  const RenderDesignpage = Designlist.map((Designtype, i) => {
    return <DesignContent key={i} data={Designtype} />;
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
export default Logs;

const DesignContent = ({ data }) => {
  const [Seemore, setSeemore] = useState(false);
  const [Addcommitopen, setAddcommitOpen] = useState(false);
  console.log("data", data);

  if (!data) return;
  return (
    <div className="task_system">
      <div className="task_title">
        <h1>{data.Title}</h1>
        <p>{data.Para}</p>
      </div>
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
        <button onClick={() => setSeemore((m) => !m)}>
          {data.More}
          {<img src={downarrow} alt="" />}
        </button>
      </div>
      {Seemore && <Seeless Designtype={data} />}

      {/* <CommitPopup trigger={Addcommitopen} setTrigger={setAddcommitOpen} />
       */}

      {/* <ModalBox isOpen={Addcommitopen} onClose={() => setAddcommitOpen(false)}>
        hi
      </ModalBox> */}
    </div>
  );
};
