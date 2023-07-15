/** @format */

import React, { useState } from "react";
import downarrow from "../../../assets/icons/chevron-down.svg";
import "./backlogs.css";
import { Backloglist } from "./Backlog";
import Button from "../../Button";
import Seemore from "../../see more/seemore";
import CommitPopup from "../../commit/commit";
export const Backlogdesign = () => {
  const RenderBacklogdesign = Backloglist.map((Designtype, i) => {
    return <DesignContent key={i} data={Designtype} />;
  });
  return <div>{RenderBacklogdesign}</div>;
};

const DesignContent = ({ data }) => {
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
            <div>
              <Button variant="negotiate" size="medium">
                Negotiate
              </Button>
            </div>
            <div onClick={() => setAddcommitOpen(true)}>
              <Button variant="primary" size="medium">
                Commit
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
      {openSeemore && <Seemore Designtype={data} setSeemore={setOpenSeemore} />}

      <CommitPopup trigger={Addcommitopen} setTrigger={setAddcommitOpen} />
    </div>
  );
};
