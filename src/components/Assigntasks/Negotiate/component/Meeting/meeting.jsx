/** @format */

import React, { useState } from "react";
import "./meeting.css";
import Button from "../../../../Button";
import successtick from "../../../../../assets/icons/successtick.svg";
import toastcancel from "../../../../../assets/icons/toastcancel.svg";
import Toasts from "../../../../Toasts";
const Meeting = () => {
  const [Meetingopen, setMeetingopen] = useState(false);
  return (
    <div className="meeting_main">
      <h5>AGENDA</h5>
      <div className="agendameet_button">
        <div className="agenda">
          <h5>Enter agenda</h5>
        </div>

        <div className="raisemeet_button" onClick={() => setMeetingopen(true)}>
          <Button variant="secondary" size="large">
            Raise a meeting
          </Button>
        </div>
      </div>
      {Meetingopen && (
        <div
          onClick={() => setMeetingopen(false)}
          className="meeting_toast"
          style={{ margin: "auto" }}
        >
          <Toasts
            image={successtick}
            props="your meeting request sent"
            icons={toastcancel}
          />
        </div>
      )}
    </div>
  );
};
export default Meeting;
