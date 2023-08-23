/** @format */

import React, { useState } from "react";
import "./meeting.css";
import Button from "../../../../Button";
import successtick from "../../../../../assets/icons/successtick.svg";
import toastcancel from "../../../../../assets/icons/toastcancel.svg";
import copylink from "../../../../../assets/icons/copylink.svg";
import Toasts from "../../../../Toasts";
import LayoutModal from "../../../../Modal/Modal";
const Meeting = () => {
  const [Meetingopen, setMeetingopen] = useState(false);
  const [meeting, setMeeting] = useState(false);
  return (
    <div className="meeting_main">
      <h5>AGENDA</h5>
      <div className="agendameet_button">
        {/* <div className="agenda"> */}
        <textarea placeholder="Enter agenda" cols="30" rows="10"></textarea>
        {/* <h5>Enter agenda</h5> */}
        {/* </div> */}

        <div className="raisemeet_button" onClick={() => setMeetingopen(true)}>
          <Button variant="secondary" size="large">
            Raise a meeting
          </Button>
        </div>
      </div>
      {Meetingopen && (
        <div
          onClick={() => {
            setMeetingopen(false), setMeeting(true);
          }}
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
      {meeting && (
        <LayoutModal onClose={() => setMeeting(false)}>
          <div className="revision_main">
            <div className="revision_content">
              <h3>Design System</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <p>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
              <p>
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>nisi ut aliquip ex ea commodo consequat"</p>
            </div>
            <div className="revision_date">
              <div className="revision_dateandtime">
                <div className="date">
                  <h5>DATE</h5>
                  <h3>06 June, 2023.</h3>
                </div>
                <div className="time">
                  <h5>TIME</h5>
                  <h3>02:00pm</h3>
                </div>
              </div>
              <div className="agenda_field">
                <h5>AGENDA</h5>
                <div className="revision_agenda">
                  <h4>Home page- Menu-About us page</h4>
                </div>

                <h5>MEETING LINK</h5>
                <div className="revision_meeting">
                  <h4>
                    https://www.figma.com/file/s8pn7k0uTojgGlhbxqJgKm/wireframe?
                  </h4>
                  <h4>type=design&node-</h4>
                  <h4>id=2166-2158&mode=design&t=oMjiGmR6d4rU9mHF-0</h4>
                </div>
              </div>
            </div>
            <div className="copy_link" onClick={() => setMeeting(false)}>
              <h5>Copy link</h5>
              <img src={copylink} alt="copy" width="20px" />
            </div>
          </div>
        </LayoutModal>
      )}
    </div>
  );
};
export default Meeting;
