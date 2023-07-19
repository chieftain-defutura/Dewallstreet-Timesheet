/** @format */

import React, { useState } from "react";
import downarrow from "../../../assets/icons/seemorebutton.svg";
import "./backlogs.css";
import { Backloglist } from "./Backlog";
import { Link } from "react-router-dom";
import Seemore from "../../see more/seemore";
import TaskHeader from "../Taskheader";

export const Backlogdesign = () => {
  const RenderBacklogdesign = Backloglist.map((Designtype, i) => {
    return <DesignContent key={i} data={Designtype} />;
  });
  return (
    <div className="logs_mapping">
      <TaskHeader />
      <div className="logs_render">{RenderBacklogdesign}</div>
    </div>
  );
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
          <div className="arrows">
            <button onClick={() => setOpenSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="" />}
            </button>
          </div>
        </>
      )}
      {openSeemore && <Seemore Designtype={data} setSeemore={setOpenSeemore} />}
    </div>
  );
};
