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
                borderBottom: "1px solid #fff",

                textAlign: "center",
              }}
            >
              <a href="#" style={{ color: "#fff" }}>
                Questionnaire
              </a>
            </div>
          ) : (
            <div
              style={{ display: "grid", textAlign: "center" }}
              className="negotiate_link"
              onClick={() => setToggle("Questionnarie")}
            >
              <a href="#" style={{ color: "grey" }}>
                Questionnaire
              </a>
            </div>
          )}
          {toggle === "meeting" ? (
            <div
              className="negotiate_link"
              style={{
                borderBottom: "1px solid #fff",

                textAlign: "center",
                display: "grid",
              }}
            >
              <a href="#" style={{ color: "#fff" }}>
                Meeting
              </a>
            </div>
          ) : (
            <div
              style={{ display: "grid", textAlign: "center" }}
              className="negotiate_link"
              onClick={() => setToggle("meeting")}
            >
              <a href="#" style={{ color: "grey" }}>
                Meeting
              </a>
            </div>
          )}
        </div>
        {toggle === "meeting" ? <Meeting /> : <QuestionContent />}
      </div>
    </>
  );
};
export default Negotiate;
