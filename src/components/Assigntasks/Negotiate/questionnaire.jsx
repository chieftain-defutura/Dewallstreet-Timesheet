import React from "react";
import "./questionnaire.css";
import plus from "../../../assets/icons/plus.svg";
import linkicon from "../../../assets/icons/link.svg";
import documenticon from "../../../assets/icons/document.svg";
import seemorelist from "../../../assets/icons/chevron-down.svg";
import seedownlist from "../../../assets/icons/chevron-up.svg";
import Button from "../../Button";
import { render } from "react-dom";
const Questionnaire = () => {
  const Questionnairetwo = [
    {
      // id: 1,
      heading: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      icon1: linkicon,
      icon1para:
        "Ut enim ad minim veniam, quis nostrod exercitation ullamco laboris.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon2: documenticon,
      icon2para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      // id: 2,
      heading: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      icon1: linkicon,
      icon1para:
        "Ut enim ad minim veniam, quis nostrod exercitation ullamco laboris.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon2: documenticon,
      icon2para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      // id: 3,
      heading: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      icon1: linkicon,
      icon1para:
        "Ut enim ad minim veniam, quis nostrod exercitation ullamco laboris.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon2: documenticon,
      icon2para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const renderQuestionnairetwo = Questionnairetwo.map((questtwolist) => {
    return (
      <div className="individual_questionnaire">
        {/* <div className="questionnaire_number">
          <h5>{questtwolist.id}</h5> */}
          <h5>{questtwolist.heading}</h5>
        {/* </div> */}
        <div className="link_para">
          <img src={questtwolist.icon1} alt="icon" />
          <h5> {questtwolist.icon1para} </h5>
        </div>
        <p> {questtwolist.paragraph} </p>
        <div className="link_para" id="link_para_another">
          <img src={questtwolist.icon1} alt="icon" />
          <h5> {questtwolist.icon1para} </h5>
        </div>
        <div className="file_para">
          <img src={questtwolist.icon2} alt="icon" />
          <h5>{questtwolist.icon2para}</h5>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
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
          <div className="question_button">
            <Button variant="secondary" size="medium" image={plus}>
              Add questionnaire
            </Button>
          </div>
          <div className="questionnaire_one_all">
            <div className="questionnaire_one">
              <h4>Questionnaire 1</h4>
              <div className="wait_button">
                <Button variant="secondary" size="small">
                  Waiting for answer
                </Button>
              </div>
            </div>
            <div className="ask_date">
              <h4>ASKED DATE</h4>
              <h4 id="date">08 June, 2023.</h4>
            </div>
            <div className="negotiate_seemore">
              <h4>See more</h4>
              <img src={seemorelist} alt="icon" />
            </div>
          </div>
          {/* </div> */}
          {/* <React.Fragment> */}
          <div className="questionnaire_two_all">
            <div className="questionnaire_two_head">
              <h4>Questionnaire 2</h4>
              <Button variant="secondary" size="small">
                Answered
              </Button>
            </div>
            <div className="questionnaire_two">{renderQuestionnairetwo}</div>
            <div className="ask_answer">
              <div className="ask_date">
                <h4>ASKED DATE</h4>
                <h4 id="date">08 June,2023.</h4>
              </div>
              <div className="ans_date">
                <h4>ANSWERED DATE</h4>
                <h4 id="date">09 June,2023.</h4>
              </div>
            </div>
            <div className="negotiate_seedown">
              <h4>See less</h4>
              <img src={seedownlist} alt="icon" />
            </div>
          </div>
        </div>
        {/* </React.Fragment> */}
      </div>
    </React.Fragment>
  );
};
export default Questionnaire;
