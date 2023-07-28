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
        <div className="sidebar_header">
          <div className="headercontent_name">
            <h2>Workspace</h2>
            <div className="sidebar_name">
              <h3>Ravishankar Varma</h3>
              <p>DEWALLEXD1</p>
            </div>
          </div>
          <div className="sidebar_emptyline"></div>
        </div>
        <div className="sidebar_link">
          <Link to="/home">
            {pathname === "/home" ? (
              <>
                <div onClick={() => setToggle(toggle)} className="menu_link">
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
                <div onClick={() => setToggle(toggle)} className="menu_link">
                  <img src={briefcasetimerhide} alt="icon" />
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
                <div className="menu_link">
                  <img src={tasksheethide} alt="icon" />
                  <h4 style={{ color: "white" }}>
                    Task
                    <br />
                    Board
                  </h4>
                </div>
              </>
            ) : (
              <>
                <div className="menu_link">
                  <img src={tasksheet} alt="icon" />
                  <h4 style={{ color: "grey" }}>
                    Task
                    <br />
                    Board
                  </h4>
                </div>
              </>
            )}
          </Link>
        </div>
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
