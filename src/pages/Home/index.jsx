import React from "react";
import Task from "../../components/Assigntasks";
import App from "../../App";
import Homeheader from "../../components/Header/Homeheader";
import Assigntasks from "../../components/Assigntasks/assigntasks";

const Homepage = () => {
  return (
    <>
      <Homeheader />
      <Assigntasks />
      <div>
        <Task />
      </div>
    </>
  );
};
export default Homepage;
