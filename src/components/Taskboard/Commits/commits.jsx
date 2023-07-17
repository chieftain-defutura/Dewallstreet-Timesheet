/** @format */

import React from "react";
import "./commits.css";
import { Commitlist } from "./commits";
import { Link } from "react-router-dom";
import Seemore from "../../see more/seemore";
import downarrow from "../../../assets/icons/chevron-down.svg";
import TaskHeader from "../Taskheader";
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
          <div className="arrows">
            <button onClick={() => setOpenSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="" />}
            </button>
          </div>
        </>
      )}
      {openSeemore && <Seemore Designtype={data} setSeemore={setOpenSeemore} />}
      {/* <CommitPopup trigger={Addcommitopen} setTrigger={setAddcommitOpen} /> */}
    </div>
  );
};
