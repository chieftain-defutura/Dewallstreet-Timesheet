import React, { useState } from "react";
import QuestionContent from "./component/Question/QuestionContent";
import Meeting from "./component/Meeting/meeting";
const Negotiate = () => {
  const [toggle, setToggle] = useState("Questionnarie");
  return (
    <>
      <div className="questionnaire_main">
        <h3>Negotiate.</h3>
        <div className="questionnaire_head">
          {toggle === "Questionnarie" ? (
            <div
              className="negotiate_link"
              style={{
                background: "#141414",
                borderBottom: "1px solid #fff",
              }}
            >
              <p style={{ color: "#fff" }}>Questionnaire</p>
            </div>
          ) : (
            <div
              className="negotiate_link"
              onClick={() => setToggle("Questionnarie")}
            >
              <a>Questionnaire</a>
            </div>
          )}
          {toggle === "meeting" ? (
            <div
              className="negotiate_link"
              style={{
                background: "#141414",
                borderBottom: "1px solid #fff",
                width: "100px",
              }}
            >
              <p style={{ color: "#fff" }}>Meeting</p>
            </div>
          ) : (
            <div
              className="negotiate_link"
              onClick={() => setToggle("meeting")}
            >
              <a>Meeting</a>
            </div>
          )}
        </div>
        {toggle === "meeting" ? <Meeting /> : <QuestionContent />}
      </div>
    </>
  );
};
export default Negotiate;
