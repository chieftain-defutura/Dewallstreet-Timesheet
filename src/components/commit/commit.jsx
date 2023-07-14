import React from "react";
import "./commit.css";
import cancel from "../../assets/icons/cancel.svg";
import commitimage from "../../assets/icons/commitimage.svg";
import Button from "../Button";
const CommitPopup = () => {
  return (
    <div className="commit_main">
      <div className="commit_header">
        <h5>Commit.</h5>
        <img src={cancel} alt="cancel" />
      </div>
      <div className="commit_emptyline"></div>
      <img src={commitimage} alt="" />
      <Button variant="primary" size="large">Confirm</Button>
    </div>
  );
};
export default CommitPopup;
