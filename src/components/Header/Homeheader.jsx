/** @format */

import React, { useState } from "react";
import "./Homeheader.css";
import logo from "../../assets/icons/name.svg";
import burger from "../../assets/icons/menu.png";
import cancel from "../../assets/icons/cancel.svg";
import briefcasetimer from "../../assets/icons/briefcasetimer.svg";
import tasksheet from "../../assets/icons/tasksheet.svg";
import tasksheethide from "../../assets/icons/tasksheethide.svg";
import briefcasetimerhide from "../../assets/icons/briefcasetimerhide.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Homeheader = () => {
  const [sideBaron, setSideBarOn] = useState(false);
  const [toggle, setToggle] = useState("/home");
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(pathname);
  const Hamburger = (
    <>
      {!sideBaron ? (
        <img
          src={burger}
          alt="burger"
          className="hamimage"
          width="20px"
          onClick={(e) => {
            e.preventDefault();
            setSideBarOn(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="cancel"
          className="hamburger"
          onClick={(e) => {
            e.preventDefault();
            setSideBarOn(false);
          }}
        />
      )}
    </>
  );
  const Sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <h2>Workspace</h2>
        <div className="header_name">
          <h2>Ravishankar Varma</h2>
          <p>DEWALLED1</p>
        </div>
        <Link to="/home">
          {pathname === "/home" ? (
            <>
              <div onClick={() => setToggle(toggle)}>
                <img src={briefcasetimer} alt="icon" />
                <h4 style={{ color: "white" }}>
                  Clock
                  <br />
                  Works
                </h4>
              </div>
            </>
          ) : (
            <>
              <div onClick={() => setToggle(toggle)}>
                <img src={briefcasetimerhide} alt="icon" />
              </div>
              <div>
                <h4 style={{ color: "grey" }}>
                  Clock
                  <br />
                  Works
                </h4>
              </div>
            </>
          )}
        </Link>
        <Link to="/Taskpage/log">
          {pathname === "/Taskpage" ||
          pathname === "/Taskpage/log" ||
          pathname === "/Taskpage/audit" ||
          pathname === "/Taskpage/backlog" ||
          pathname === "/Taskpage/commit" ? (
            <>
              <img src={tasksheethide} alt="icon" />
              <h4 style={{ color: "white" }}>
                Task
                <br />
                Board
              </h4>
            </>
          ) : (
            <>
              <img src={tasksheet} alt="icon" />
              <h4 style={{ color: "grey" }}>
                Task
                <br />
                Board
              </h4>
            </>
          )}
        </Link>
      </div>
    </div>
  );
  return (
    <div className="home_main">
      <Link to="/">
        <img src={logo} alt="name" />
      </Link>
      <h2>Workspace</h2>
      <div className="header_name">
        <h2>Ravishankar Varma</h2>
        <p>DEWALLED1</p>
      </div>
      {Hamburger}
      {sideBaron && Sidebar}
    </div>
  );
};
export default Homeheader;
