import React from "react";
import "./assigntasks.css";
import briefcasetimer from "../../assets/icons/briefcasetimer.svg";
import tasksheet from "../../assets/icons/tasksheet.svg";
const Assigntasks = (props) => {
  return (
    <div className="assign_tasks_main">
      <div className="clock_work">
        <a href="#">
          <img src={briefcasetimer} alt="icon" />
          <h4>Clock</h4>
          <h4>Works</h4>
        </a>
      </div>
      <div className="horizontal_line"></div>
      <div className="task_board">
        <a href="#">
          <img src={tasksheet} alt="icon" />
          <h4>Task</h4>
          <h4>Board</h4>
        </a>
      </div>
    </div>
  );
};
export default Assigntasks;
