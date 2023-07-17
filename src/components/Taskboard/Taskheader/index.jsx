/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const TaskHeader = ({ Renderdesign }) => {
  const { path } = useParams();
  console.log(path);
  return (
    <div className="logs_main">
      <div className="design_links">
        {path === "log" ? (
          <Link to="/Taskpage/log">
            <div className="log_link" style={{ background: "red" }}>
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
        {path === "commit" ? (
          <Link to="/Taskpage/commit">
            <div className="commit_link" style={{ background: "red" }}>
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

        {path === "audits" ? (
          <div className="audits_link" style={{ background: "red" }}>
            <a>Audits(2)</a>
          </div>
        ) : (
          <div className="audits_link">
            <a>Audits(2)</a>
          </div>
        )}

        {path === "backlog" ? (
          <Link to="/Taskpage/backlog">
            <div className="backlog_link" style={{ background: "red" }}>
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
