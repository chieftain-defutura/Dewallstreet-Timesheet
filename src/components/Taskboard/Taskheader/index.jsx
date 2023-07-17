/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const TaskHeader = ({ Renderdesign }) => {
  const location = window.location.pathname.split("/");
  console.log(location[2]);
  return (
    <div className="logs_main">
      <div className="design_links">
        {location[2] === "log" ? (
          <Link to="/Taskpage/log">
            <div className="log_link" style={{ background: "#141414" }}>
              <a>Logs(2)</a>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/log">
            <div className="log_link">
              <a>Logs(2)</a>
            </div>
          </Link>
        )}
        {location[2] === "commit" ? (
          <Link to="/Taskpage/commit">
            <div className="commit_link" style={{ background: "#141414" }}>
              <a>Commits(2)</a>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/commit">
            <div className="commit_link">
              <a>Commits(2)</a>
            </div>
          </Link>
        )}

        {location[2] === "audits" ? (
          <div className="audits_link" style={{ background: "red" }}>
            <a>Audits(2)</a>
          </div>
        ) : (
          <div className="audits_link">
            <a>Audits(2)</a>
          </div>
        )}

        {location[2] === "backlog" ? (
          <Link to="/Taskpage/backlog">
            <div className="backlog_link" style={{ background: "#141414" }}>
              <a>Backlogs(2)</a>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/backlog">
            <div className="backlog_link">
              <a>Backlogs(2)</a>
            </div>
          </Link>
        )}
      </div>
      <div>{Renderdesign}</div>
    </div>
  );
};
export default TaskHeader;
