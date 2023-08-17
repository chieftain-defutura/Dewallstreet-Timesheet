/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Taskheader.css";
import dots from "../../../assets/icons/dots.png";
import cancel from "../../../assets/icons/cancel.svg";

const TaskHeader = () => {
  const [links, setLinks] = useState(false);
  const location = window.location.pathname.split("/");
  console.log(location[1]);
  const Linkdots = (
    <>
      {!links ? (
        <img
          src={dots}
          alt="dots"
          className="links_dots"
          width="30px"
          onClick={(e) => {
            e.preventDefault();
            setLinks(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="cancelicon"
          className="links_cancel"
          width="25px"
          onClick={(e) => {
            e.preventDefault();
            setLinks(false);
          }}
        />
      )}
    </>
  );
  const Linkbar = (
    <div className="linkbar">
      <div className="linkbar_content">
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
              <p style={{ color: "grey" }}>Logs( 2 )</p>
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
              <p style={{ color: "grey" }}>Commits( 2 )</p>
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
              <p style={{ color: "grey" }}>Audits( 2 )</p>
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
              <p style={{ color: "grey" }}>Backlogs( 2 )</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
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
              <p style={{ color: "grey" }}>Logs( 2 )</p>
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
              <p style={{ color: "grey" }}>Commits( 2 )</p>
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
              <p style={{ color: "grey" }}>Audits( 2 )</p>
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
              <p style={{ color: "grey" }}>Backlogs( 2 )</p>
            </div>
          </Link>
        )}
      </div>
      {Linkdots}
      {links && Linkbar}
    </div>
  );
};
export default TaskHeader;
