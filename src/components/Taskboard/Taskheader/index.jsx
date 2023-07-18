/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const TaskHeader = () => {
  const location = window.location.pathname.split("/");
  console.log(location[2]);
  return (
    <div className="logs_main">
      <div className="design_links">
        {location[2] === "log" ? (
          <Link to="/Taskpage/log">
            <div
              className="log_link"
              style={{ background: "#141414", borderBottom: "1px solid #fff" }}>
              <p style={{ color: "#fff" }}>Logs(2)</p>
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
            <div
              className="log_link"
              style={{ background: "#141414", borderBottom: "1px solid #fff" }}>
              <p style={{ color: "#fff" }}>Commits(2)</p>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/commit">
            <div className="log_link">
              <a>Commits(2)</a>
            </div>
          </Link>
        )}

        {location[2] === "audits" ? (
          <Link to="/Taskpage/audit">
            <div
              className="log_link"
              style={{ background: "#141414", borderBottom: "1px solid #fff" }}>
              <p style={{ color: "#fff" }}>Audits(2)</p>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/audit">
            <div className="log_link">
              <a>Audits(2)</a>
            </div>
          </Link>
        )}

        {location[2] === "backlog" ? (
          <Link to="/Taskpage/backlog">
            <div
              className="log_link"
              style={{ background: "#141414", borderBottom: "1px solid #fff" }}>
              <p style={{ color: "#fff" }}>Backlogs(2)</p>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/backlog">
            <div className="log_link">
              <a>Backlogs(2)</a>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default TaskHeader;
