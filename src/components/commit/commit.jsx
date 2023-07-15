import React, { useState } from "react";
import "./commit.css";
import cancel from "../../assets/icons/cancel.svg";
import commitimage from "../../assets/icons/commitimage.svg";
import commit_timer from "../../assets/icons/commit_timer.svg";
import check from "../../assets/icons/check.svg";
import toastcancel from "../../assets/icons/toastcancel.svg";
import Button from "../Button";
import Toasts from "../Toasts";
const CommitPopup = (props) => {
  const [Successopen, setSuccessopen] = useState(false);
  return props.trigger ? (
    <div className="commit_popup">
      <div className="commit_main">
        <div className="commit_header">
          <h5>Commit.</h5>
          <button onClick={() => props.setTrigger(false)} id="close_button">
            <img src={cancel} alt="cancel" />
          </button>
        </div>
        <div className="commit_emptyline"></div>
        <img src={commitimage} alt="" />
        <div className="commit_content">
          <div className="commit_deadline">
            <h5>DEADLINE</h5>
            <h4>06 June,2023.</h4>
          </div>
          <div className="commit_daysweeks">
            <img src={commit_timer} alt="timer" />
            <div className="commit_weeks">
              <h4>01</h4>
              <h5>weeks</h5>
            </div>
            <div className="commit_days">
              <h4>02</h4>
              <h5>days</h5>
            </div>
            <div className="commit_hours">
              <h4>03</h4>
              <h5>hours</h5>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectrtur adipiscing elit, set do
          eiusmed tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {Successopen ? (
          <div onClick={() => setSuccessopen(false)}>
            <Toasts
              props="You are committed to this task."
              variant="secondary"
              image={check}
              icons={toastcancel}
            />
          </div>
        ) : (
          <Button
            variant="primary"
            size="large"
            handleClick={() => setSuccessopen(true)}
          >
            Confirm
          </Button>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};
export default CommitPopup;
