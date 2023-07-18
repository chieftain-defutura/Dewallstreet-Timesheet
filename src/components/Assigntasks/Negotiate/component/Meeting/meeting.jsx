import React from "react";
import "./meeting.css";
// import meetingcancel from "../../assets/icons/cancel.svg";
import Button from "../../../../Button";
const Meeting = () => {
  return (
    <div className="meeting_main">
      <h5>AGENDA</h5>
      <div className="agendameet_button">
        <div className="agenda">
          <h5>Enter agenda</h5>
        </div>
        <div className="raisemeet_button">
          <Button variant="secondary" size="large">
            Raise a meeting
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Meeting;
