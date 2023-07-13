/** @format */

import React from "react";
import Assigntasks from "../../components/Assigntasks/assigntasks";
import Taskboard from "../../components/Taskboard";
import Layout from "../../components/Layout"
const Taskpage = () => {
  return (
    <>
      <Layout>
        <Taskboard />
      </Layout>
    </>
  );
};
export default Taskpage;
