/** @format */

import React, { useState } from "react";
import "./commits.css";
import { Commitlist } from "./commit";
import { Link } from "react-router-dom";
import Seemore from "../../see more/seemore";
import downarrow from "../../../assets/icons/chevron-down.svg";
import cancel from "../../../assets/icons/cancel.svg";
import TaskHeader from "../Taskheader";
import Button from "../../Button";
import Commitseemore from "../../Commitseemore/commitseemore";
import LayoutModal from "../../Modal/Modal";
export const CommitDesignsystem = () => {
  const RenderCommitdesign = Commitlist.map((CommitDesigntype, i) => {
    return <Commitcontent key={i} data={CommitDesigntype} />;
  });
  return (
    <React.Fragment>
      <TaskHeader Renderdesign={RenderCommitdesign} />
    </React.Fragment>
  );
};

export default CommitDesignsystem;

const Commitcontent = ({ data }) => {
  const [openSeemore, setOpenSeemore] = useState(false);
  const [Addcommitopen, setAddcommitOpen] = useState(false);
  console.log("data", data);

  if (!data) return;
  return (
    <div className="task_system">
      <div className="task_title">
        <h1>{data.Title}</h1>
        <p>{data.Para}</p>
      </div>

      {!openSeemore && (
        <>
          <div className="logs_button">
            <div onClick={() => setAddcommitOpen(true)}>
              <Button variant="secondary" size="medium">
                Raise meeting
              </Button>
            </div>
            <div onClick={() => setAddcommitOpen(true)}>
              <Button variant="secondary" size="medium">
                Extend request
              </Button>
            </div>
          </div>
          <div className="arrows">
            <button onClick={() => setOpenSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="" />}
            </button>
          </div>
        </>
      )}
      {openSeemore && (
        <Commitseemore Designtype={data} setSeemore={setOpenSeemore} />
      )}
      {Addcommitopen && (
        <LayoutModal onClose={() => setAddcommitOpen(false)}>
          <div className="Raise_meeting">
            <div className="raisemeeting_header">
              <h5>Raise a meeting</h5>
              <button onClick={() => setAddcommitOpen(false)} id="close_button">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <div className="meeting_emptyline"></div>
            <div className="request_box">
              <div className="agenda">
                <p>AGENDA</p>
              </div>
              <div className="enter_request">
                <p>Enter agenda</p>
              </div>
            </div>
            <div className="request_button">
              <Button size="large" variant="secondary">
                Send request
              </Button>
            </div>
          </div>
        </LayoutModal>
      )}
    </div>
  );
};
