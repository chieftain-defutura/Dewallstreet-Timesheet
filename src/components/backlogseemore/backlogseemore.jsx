/** @format */
import React, { useState } from "react";
import "./backlogseemore";

import linkimage from "../../assets/icons/link.svg";
import documentimage from "../../assets/icons/document.svg";
import cancel from "../../assets/icons/cancel.svg";
import commitimage from "../../assets/icons/commitimage.svg";
import commit_timer from "../../assets/icons/commit_timer.svg";
import Button from "../Button";
import uparrow from "../../assets/icons/chevron-up.svg";
import successtick from "../../assets/icons/successtick.svg";
import toastcancel from "../../assets/icons/toastcancel.svg";
import { useParams } from "react-router-dom";
import LayoutModal from "../Modal/Modal";
import Toasts from "../Toasts";

const Backlogseemore = ({ Designtype, setSeemore }) => {
  const [Addcommitopen, setAddcommitOpen] = useState(false);
  const [Toastopen, setToastopen] = useState(false);

  return (
    <div className="see_more">
      <div className="correction">
        <h2>{Designtype.Subtitle}</h2>
        <p>{Designtype.Para}</p>
        <div className="design_link">
          <img src={linkimage} alt="Linkimage" />
          <h4>{Designtype.bio}</h4>
        </div>
        <div className="design_file">
          <img src={documentimage} alt="documentimage" />
          <h4>{Designtype.Filebio}</h4>
        </div>
      </div>
      <div className="rework">
        <h2>{Designtype.Logo}</h2>
        <p>{Designtype.Para}</p>
        <div className="design_link">
          <img src={linkimage} alt="Linkimage" />
          <h4>{Designtype.bio}</h4>
        </div>
        <div className="design_file">
          <img src={documentimage} alt="documentimage" />
          <h4>{Designtype.Filebio}</h4>
        </div>
      </div>
      <div className="link_time">
        <div className="link_drive">
          <h1 id="linkheading">{Designtype.Linktitle}</h1>
          <p>{Designtype.Link}</p>
        </div>
      </div>

      <div className="down_arrow">
        <button onClick={() => setSeemore(false)}>
          {Designtype.Less}
          <img src={uparrow} alt="" />
        </button>
      </div>
      {Addcommitopen && !Toastopen && (
        <LayoutModal onClose={() => setAddcommitOpen(false)}>
          <div className="commit_main">
            <div className="commit_header">
              <h5>Commit.</h5>
              <button onClick={() => setAddcommitOpen(false)} id="close_button">
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

            <div onClick={() => setToastopen(true)} className="confirm_button">
              <Button variant="primary" size="large">
                Confirm
              </Button>
            </div>
          </div>
        </LayoutModal>
      )}
      {Toastopen && (
        <LayoutModal onClose={() => setAddcommitOpen(false)}>
          <div onClick={() => setToastopen(false)} className="success_alert">
            <Toasts
              image={successtick}
              props="You are committed for this task"
              icons={toastcancel}
            />
            <div className="toast_successline"></div>
          </div>
        </LayoutModal>
      )}
    </div>
  );
};
export default Backlogseemore;
