/** @format */

import React from "react";
import "./designsystem.css";

const Designpage = () => {
  const Designlist = [
    {
      Title: "Design system",
    },
  ];
  return (
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
  );
};
export default Designpage;
