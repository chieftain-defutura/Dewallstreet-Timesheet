/** @format */

import React, { useState } from "react";
import "./Homeheader.css";
import logo from "../../assets/icons/name.svg";
import burger from "../../assets/icons/menu.png";
import cancel from "../../assets/icons/cancel.svg";
import briefcasetimer from "../../assets/icons/briefcasetimer.svg";
import checkin from "../../assets/icons/checkin.svg";
import logoutmodal from "../../assets/icons/logoutsymbol.svg";
import tasksheet from "../../assets/icons/tasksheet.svg";
import tasksheethide from "../../assets/icons/tasksheethide.svg";
import briefcasetimerhide from "../../assets/icons/briefcasetimerhide.svg";
import headerhamburger from "../../assets/icons/headerhamburger.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logoutimage from "../../assets/icons/logoutimage.svg";
import Logoutmodal from "../logoutmodal/logoutmodal";
import Button from "../Button";
const Homeheader = () => {
  const [sideBaron, setSideBarOn] = useState(false);
  const [emplogout, setEmplogout] = useState(false);
  const [toggle, setToggle] = useState("/home");
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  const Hamburger = (
    <>
      {!sideBaron ? (
        <img
          src={headerhamburger}
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
        <div className="sidebar_link">
          <Link to="/home">
            {pathname === "/home" ? (
              <>
                <div onClick={() => setToggle(toggle)} className="menu_link">
                  <img src={briefcasetimer} alt="icon" width="25px" />
                  <h4 style={{ color: "white" }}>Clock Works</h4>
                </div>
              </>
            ) : (
              <>
                <div onClick={() => setToggle(toggle)} className="menu_link">
                  <img src={briefcasetimerhide} alt="icon" width="25px" />
                  <h4 style={{ color: "grey" }}>Clock Works</h4>
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
                  <img src={tasksheethide} alt="icon" width="25px" />
                  <h4 style={{ color: "white" }}>Task Board</h4>
                </div>
              </>
            ) : (
              <>
                <div className="menu_link">
                  <img src={tasksheet} alt="icon" width="25px" />
                  <h4 style={{ color: "grey" }}>Task Board</h4>
                </div>
              </>
            )}
          </Link>
        </div>
      </div>
      <div className="sidebar_logout">
        <img src={logoutmodal} alt="logout" />
        <h5>Ravishankar Varma</h5>
        <p>DEWALLEXD1</p>
        <Link to="/">
          <Button variant="checkout" image={checkin} size="medium">
            Logout
          </Button>
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
      <div className="header_name" onClick={() => setEmplogout(true)}>
        <img src={logoutmodal} alt="logout" />
      </div>

      {Hamburger}
      {sideBaron && Sidebar}

      {emplogout && (
        <Logoutmodal onClose={() => setEmplogout(false)}>
          <div className="logout_page">
            <div className="logout_content">
              <h5>Ravishankar Varma</h5>
              <p>DEWALLEXD1</p>
            </div>{" "}
            <Link to="/">
              <img src={logoutimage} alt="logout" className="logout_image" />
            </Link>
          </div>
        </Logoutmodal>
      )}
    </div>
  );
};
export default Homeheader;
