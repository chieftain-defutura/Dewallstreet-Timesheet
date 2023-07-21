/** @format */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./questionnaire.css";
import Button from "../../../../Button";
import plus from "../../../../../assets/icons/plus.svg";
import seemorelist from "../../../../../assets/icons/seelessbutton.svg";
import seedownlist from "../../../../../assets/icons/seemorebutton.svg";
import cancel from "../../../../../assets/icons/cancel.svg";
import close from "../../../../../assets/icons/toastcancel.svg";
import { QuestionnaireDetails } from "./Question";
import LayoutModal from "../../../../Modal/Modal";
const QuestionContent = () => {
  const [addquestionnaireopen, setAddquestionnaireOpen] = useState(false);
  return (
    <div className="questionnaire_main">
      <div className="question_button">
        <Button
          variant="secondary"
          size="medium"
          image={plus}
          handleClick={() => setAddquestionnaireOpen((m) => !m)}
        >
          Add questionnaire
        </Button>
      </div>
      {QuestionnaireDetails.map((f, i) => (
        <QuestionSection key={i} data={f} />
      ))}
      {addquestionnaireopen && (
        <LayoutModal>
          <div className="createquery_main">
            <div className="create_question">
              <h2>Create questionnaire.</h2>
              <button>
                <img src={cancel} alt="icon" />
              </button>
            </div>
            <div className="questionnaire_reference">
              <div className="questionone_details">
                <div className="overall_queries">
                  <h4>QUESTIONNAIRES.</h4>
                  <img src={plus} alt="icon" />
                </div>
                <button>
                  <div className="questionone_information">
                    <h4>Questionnaire 1</h4>
                    <img src={close} alt="icon" />
                  </div>
                </button>
              </div>
              <div className="reference_main">
                <div className="links_refer">
                  <h4>REFERENCE LINKS</h4>
                  <img src={plus} alt="icon" />
                </div>
                <div className="link_details">
                  <h4>Link</h4>
                  <img src={close} alt="icon" />
                </div>
                <Button variant="negotiate" size="large">
                  Ask questionnaire
                </Button>
              </div>
            </div>
          </div>
        </LayoutModal>
      )}
      {/* {addquestionnaireopen && (
        <LayoutModal>
          <div className="questions_overall">
            <div className="createquestion_main">
              <div className="create_question">
                <h2>Create questionnaire.</h2>
                <img src={cancel} alt="icon" />
              </div>
              <div className="questionnaires">
                <h4>Questionnaires.</h4>
                <div className="question_reference">
                  <div className="one_question">
                    <h4 id="query_one">QUESTIONNAIRE 1</h4>
                    <img src={plus} alt="icon" />
                  </div>
                  <div className="question_lists">
                    <p>
                      1. Lorem ipsum dolor sit amet, consecuter adipiscing elit?
                    </p>
                    <p>
                      2. Lorem ipsum dolor sit amet, consecuter adipiscing elit,
                      sed do
                    </p>
                    <div className="second_para">
                      <p>eiusmod tempor incididunt.</p>
                      <img src={close} alt="icon" />
                    </div>
                    <p>
                      3. Lorem ipsum dolor sit amet, consecuter adipiscing elit?
                    </p>
                    <p>
                      4. Lorem ipsum dolor sit amet, consecuter adipiscing elit?
                    </p>
                  </div>
                  <div className="reference">
                    <h4>Reference links.</h4>
                    <div className="first_link">
                      <h4>LINK 1</h4>
                      <img src={plus} alt="icon" />
                    </div>
                    <div className="overall_link">
                      <nav>
                        <a href="#">
                          https://www.figmacom/file/s8pn7kOuTojgGIhbxqJgKm/wireframer?
                        </a>
                        <a href="#">
                          type=design&node-i=87-37&t=/XEsrKG9Kt9nesyKF-O
                        </a>
                      </nav>
                      <img src={close} alt="icon" />
                    </div>
                  </div>
                  <div className="askquestion_button">
                    <Button variant="negotiate" size="large">
                      Ask questionnaire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutModal>
      )} */}
    </div>
  );
};
export default QuestionContent;

const QuestionSection = ({ data }) => {
  const [openSeemore, setOpenSeemore] = useState(false);

  return (
    <div className="question_overall">
      {/* <div className="question_button">
        <Button
          variant="secondary"
          handleClick={() => setAddquestionnaireOpen(true)}
          size="medium"
          image={plus}
        >
          Add questionnaire
        </Button>
      </div> */}
      <div className="question_one">
        {!openSeemore && (
          <>
            <div className="questionnaire_one_all">
              <div className="questionnaire_one">
                <h4>{data.title}</h4>
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
              <div
                className="negotiate_seemore"
                onClick={() => setOpenSeemore(true)}
              >
                <h4>See more</h4>
                <img src={seedownlist} alt="icon" />
              </div>
            </div>
          </>
        )}
      </div>

      {openSeemore && (
        <div className="questionnaire_two_all">
          <div className="questionnaire_two_head">
            <h4>{data.title}</h4>
            <Button variant="secondary" size="small">
              Answered
            </Button>
          </div>
          {data.content.map((f, i) => (
            <div className="questionnaire_two">
              <div className="individual_questionnaire">
                <div className="questionnaire_number">
                  <h5>
                    {i + 1}. {f.heading}
                  </h5>
                </div>
                <div className="link_para">
                  <img src={f.icon1} alt="icon" />
                  <h5> {f.icon1para} </h5>
                </div>
                <p> {f.paragraph} </p>
                <div className="link_para" id="link_para_another">
                  <img src={f.icon1} alt="icon" />
                  <h5> {f.icon1para} </h5>
                </div>
                <div className="file_para">
                  <img src={f.icon2} alt="icon" />
                  <h5>{f.icon2para}</h5>
                </div>
              </div>
            </div>
          ))}

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
          <div
            className="negotiate_seedown"
            onClick={() => setOpenSeemore(false)}
          >
            <h4>See less</h4>
            <img src={seemorelist} alt="icon" />
          </div>
        </div>
      )}
      {/* {addquestionnaireopen && (
        <LayoutModal>
          <div className="createquery_main">
            <div className="create_question">
              <h2>Create questionnaire.</h2>
              <img src={cancel} alt="icon" />
            </div>
            <div className="questionnaire_reference">
              <div className="questionone_details">
                <div className="overall_queries">
                  <h4>QUESTIONNAIRES</h4>
                  <img src={plus} alt="icon" />
                </div>
                <div className="questionone_details">
                  <h4>Questionnaire 1</h4>
                  <img src={close} alt="icon" />
                </div>
              </div>
              <div className="reference_main">
                <div className="links_refer">
                  <h4>REFERENCE LINKS</h4>
                  <img src={plus} alt="icon" />
                </div>
                <div className="link_details">
                  <h4>Link</h4>
                  <img src={close} alt="icon" />
                </div>
                <Button variant="negotiate" size="large">
                  Ask questionnaire
                </Button>
              </div>
            </div>
          </div>
        </LayoutModal>
      )} */}

      {/* <LayoutModal onClose={() => setLayout(false)}>
        <div className="questions_overall">
          <div className="createquestion_main">
            <div className="create_question">
              <h2>Create questionnaire.</h2>
              <img src={cancel} alt="icon" />
            </div>
            <div className="questionnaires">
              <h4>Questionnaires.</h4>
              <div className="question_reference">
                <div className="one_question">
                  <h4 id="query_one">QUESTIONNAIRE 1</h4>
                  <img src={plus} alt="icon" />
                </div>
                <div className="question_lists">
                  <p>
                    1. Lorem ipsum dolor sit amet, consecuter adipiscing elit?
                  </p>
                  <p>
                    2. Lorem ipsum dolor sit amet, consecuter adipiscing elit,
                    sed do
                  </p>
                  <div className="second_para">
                    <p>eiusmod tempor incididunt.</p>
                    <img src={close} alt="icon" />
                  </div>
                  <p>
                    3. Lorem ipsum dolor sit amet, consecuter adipiscing elit?
                  </p>
                  <p>
                    4. Lorem ipsum dolor sit amet, consecuter adipiscing elit?
                  </p>
                </div>
                <div className="reference">
                  <h4>Reference links.</h4>
                  <div className="first_link">
                    <h4>LINK 1</h4>
                    <img src={plus} alt="icon" />
                  </div>
                  <div className="overall_link">
                    <nav>
                      <a href="#">
                        https://www.figmacom/file/s8pn7kOuTojgGIhbxqJgKm/wireframer?
                      </a>
                      <a href="#">
                        type=design&node-i=87-37&t=/XEsrKG9Kt9nesyKF-O
                      </a>
                    </nav>
                    <img src={close} alt="icon" />
                  </div>
                </div>
                <div className="askquestion_button">
                  <Button variant="secondary" size="large">
                    Ask questionnaire
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutModal> */}
    </div>
  );
};
