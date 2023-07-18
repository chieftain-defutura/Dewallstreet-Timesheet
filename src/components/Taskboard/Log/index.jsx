/** @format */

import React from "react";
import Layout from "../../../components/Layout";
import Designpage from "./Logs";
import Questionnaire from "../../Assigntasks/Negotiate/questionnaire";
// import QuestionContent from "../../Assigntasks/Negotiate/component/Question/QuestionContent";

const Logboard = () => {
  return (
    <Layout>
      <Designpage />

      <Questionnaire />
    </Layout>
  );
};

export default Logboard;
