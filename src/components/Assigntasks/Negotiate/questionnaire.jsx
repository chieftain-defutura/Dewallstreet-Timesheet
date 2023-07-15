import React, { useState } from "react";
import "./questionnaire.css";
// import plus from "../../../assets/icons/plus.svg";

// import seemorelist from "../../../assets/icons/chevron-down.svg";
// import seedownlist from "../../../assets/icons/chevron-up.svg";
// import Button from "../../Button";
// import { render } from "react-dom";
// import { Questionnairetwo } from "./component/Question/Question";
import QuestionContent from "./component/Question/QuestionContent";
import Meeting from "./component/Meeting/meeting";
const Questionnaire = () => {
  const [questionHeading, setQuestionHeading] = useState("Question");
  // const renderQuestionnairetwo = Questionnairetwo.map((questtwolist) => {
  //   return (

  //   );
  // });
  return (
    <React.Fragment>
      <div className="questionnaire_main">
        <h3>Negotiate.</h3>
        <div className="all_questionnaires">
          <div className="questionnaire_head">
            <div
              className="question"
              onClick={() => setQuestionHeading("question")}
            >
              <a href="#">Questionnaire</a>
              <div className="horizontal_line_questionnaire"></div>
            </div>

            <div className="meet" onClick={() => setQuestionHeading("meeting")}>
              <a href="#">Meeting</a>
              <div className="horizontal_line_meeting"></div>
            </div>
          </div>
          {questionHeading ? <QuestionContent /> : <Meeting />}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Questionnaire;
