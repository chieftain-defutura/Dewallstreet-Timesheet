import React, { useParams } from "react";
import "./assigntasks.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import briefcasetimer from "../../assets/icons/briefcasetimer.svg";
import tasksheet from "../../assets/icons/tasksheet.svg";
import Homepage from "../../pages/Home";
const Assigntasks = ({ props, image }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(pathname);
  return (
    <div className="assign_tasks_main">
      <div className="clock_work">
        <li className={splitLocation[1] === "clockwork" ? "active" : ""}>
          <Link to="/home">
            {pathname === "/home" ? (
              <img src={briefcasetimer} alt="icon" />
            ) : (
              "sjs"
            )}

            <h4>Clock</h4>
            <h4>Works</h4>
          </Link>
        </li>
      </div>
      <div className="horizontal_line"></div>
      <div className="task_board">
        <li className={splitLocation[1] === "taskboard" ? "active" : ""}>
          <Link to="/Taskpage">
            <img src={tasksheet} alt="icon" />
            <h4>Task</h4>
            <h4>Board</h4>
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Assigntasks;
