import React, { useParams, useState } from "react";
import "./assigntasks.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import briefcasetimer from "../../assets/icons/briefcasetimer.svg";
import briefcasetimerhide from "../../assets/icons/briefcasetimerhide.svg";
import tasksheet from "../../assets/icons/tasksheet.svg";
import tasksheethide from "../../assets/icons/tasksheethide.svg";
const Assigntasks = ({ props, image }) => {
  const [toggle, setToggle] = useState("/home");
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(pathname);
  return (
    <div className="assign_tasks_main">
      <div className="clock_work">
        <li className={splitLocation[1] === "clockwork" ? "active" : ""}>
          <Link to="/home">
            {/* {pathname === "/home" ? (
              <img src={briefcasetimer} alt="icon" />
            ) : (
              <img src={briefcasetimerhide} alt="icon" />
              // "sjs"
            )}

            {pathname === "/home" ? (
              <h4 style={{ color: "white" }}>
                Clock
                <br />
                Works
              </h4>
            ) : (
              <h4 style={{ color: "grey" }}>
                Clock
                <br />
                Works
              </h4>
            )} */}
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
        </li>
      </div>
      <div className="horizontal_line"></div>
      <div className="task_board">
        <li className={splitLocation[1] === "taskboard" ? "active" : ""}>
          <Link to="/taskpage">
            {pathname === "/taskpage" ? (
              <img src={tasksheethide} alt="icon" />
            ) : (
              <img src={tasksheet} alt="icon" />
            )}

            {pathname === "/taskpage" ? (
              <h4 style={{ color: "white" }}>
                Task
                <br />
                Board
              </h4>
            ) : (
              <h4 style={{ color: "grey" }}>
                Task
                <br />
                Board
              </h4>
            )}
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Assigntasks;
