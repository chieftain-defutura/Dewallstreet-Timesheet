import React from "react";
import "./questionnaire.css";
import plus from "../../../assets/icons/plus.svg";
import Button from "../../Button";
const Questionnaire = () => {
  return (
    <div className="questionnaire_main">
      <h3>Negotiate.</h3>
      <div className="all_questionnaires">
        <div className="questionnaire_head">
          <div className="question">
            <a href="#">Questionnaire</a>
            <div className="horizontal_line_questionnaire"></div>
          </div>

          <div className="meet">
            <a href="#">Meeting</a>
            <div className="horizontal_line_meeting"></div>
          </div>
        </div>
      </div>
      <div className="qnbtn">
        <Button variant="secondary" size="medium" image={plus}>
          Add questionnaire
        </Button>
      </div>
    </div>
  );
};
export default Questionnaire;
