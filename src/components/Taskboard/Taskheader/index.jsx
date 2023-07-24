/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./taskheader.css";

const TaskHeader = () => {
  const location = window.location.pathname.split("/");
  console.log(location[1]);
  return (
    <div className="logs_main">
      <div className="design_links">
        {location[2] === "log" ? (
          location[1] === "Taskpage" && (
            <Link to="/Taskpage/log">
              <div
                className="log_link"
                style={{
                  background: "#141414",
                  borderBottom: "1px solid #fff",
                }}
              >
                <p style={{ color: "#fff" }}>Logs ( 2 )</p>
              </div>
            </Link>
          )
        ) : (
          <Link to="/Taskpage/log">
            <div className="log_link">
              <p style={{ color: "grey" }}>Logs ( 2 )</p>
            </div>
          </Link>
        )}
        {location[2] === "commit" ? (
          <Link to="/Taskpage/commit">
            <div
              className="log_link"
              style={{ background: "#141414", borderBottom: "1px solid #fff" }}
            >
              <p style={{ color: "#fff" }}>Commits ( 2 )</p>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/commit">
            <div className="log_link">
              <p style={{ color: "grey" }}>Commits ( 2 )</p>
            </div>
          </Link>
        )}

        {location[2] === "audit" ? (
          <Link to="/Taskpage/audit">
            <div
              className="log_link"
              style={{ background: "#141414", borderBottom: "1px solid #fff" }}
            >
              <p style={{ color: "#fff" }}>Audits ( 2 )</p>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/audit">
            <div className="log_link">
              <p style={{ color: "grey" }}>Audits ( 2 )</p>
            </div>
          </Link>
        )}

        {location[2] === "backlog" ? (
          <Link to="/Taskpage/backlog">
            <div
              className="log_link"
              style={{ background: "#141414", borderBottom: "1px solid #fff" }}
            >
              <p style={{ color: "#fff" }}>Backlogs ( 2 )</p>
            </div>
          </Link>
        ) : (
          <Link to="/Taskpage/backlog">
            <div className="log_link">
              <p style={{ color: "grey" }}>Backlogs ( 2 )</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default TaskHeader;
