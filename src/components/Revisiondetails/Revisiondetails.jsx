import React from "react";
import linkicon from "../../assets/icons/link.svg";
import documenticon from "../../assets/icons/document.svg";
import timer from "../../assets/icons/timer.svg";
import "./Revisiondetails.css";
import Button from "../Button";
const Revisiondetails = () => {
  return (
    <div className="revisiondetails_main">
      <div className="design_system">
        <h1>Design system</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="home_page">
        <h3>1. Home page</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="information_link">
          <a href="#">
            https://drive.google.com/drive/u/0/folders/1P4q7gb09-L6GgMe5RJlEKDOoGnA66PyH
          </a>
          <p>-Screen shot</p>
        </div>
        <div className="file_information">
          <img src={linkicon} alt="icon" />
          <p>
            Ut enim ad minim veniam, quis nostrod exercitation ullamco laboris.
          </p>
        </div>
        <div className="document_information">
          <img src={documenticon} alt="icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="menu_information">
        <h3>2. Menu</h3>
        <a href="#">
          https://drive.google.com/drive/u/0/folders/1P4q7gb09-L6GgMe5RJlEKDOoGnA66PyH
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="file_information">
          <img src={linkicon} alt="icon" />
          <p>
            Ut enim ad minim veniam, quis nostrod exercitation ullamco laboris.
          </p>
        </div>
        <div className="document_information">
          <img src={documenticon} alt="icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="period_deadline">
        <div className="deadline">
          <h4>DEADLINE</h4>
          <h3>06 June,2023.</h3>
        </div>
        <div className="week_day_hour">
          <img src={timer} alt="icon" />
          <div className="periodic_time">
            <div className="week_one">
              <h2>01</h2>
              <p>weeks</p>
            </div>
            <div className="day_two">
              <h2>02</h2>
              <p>days</p>
            </div>
            <div className="hour_three">
              <h2>03</h2>
              <p>hours</p>
            </div>
          </div>
        </div>
      </div>
      <div className="re_submit">
        <Button variant="secondary" size="medium">
          Resubmit
        </Button>
      </div>
    </div>
  );
};
export default Revisiondetails;
