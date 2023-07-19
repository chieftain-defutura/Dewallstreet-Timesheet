import React from "react";
import linkicon from "../../assets/icons/link.svg";
import documenticon from "../../assets/icons/document.svg";
import "./Revisiondetails.css";
const Revisiondetails = () => {
  return (
    <div>
      <div className="design_system">
        <h3>Design system</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="home_page">
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
      <div className="menu">
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
      <div></div>
    </div>
  );
};
export default Revisiondetails;
