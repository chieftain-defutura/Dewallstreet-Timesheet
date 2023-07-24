import React, { useState } from "react";
import "./Archivedtasks.css";
import downarrow from "../../assets/icons/archivedown.svg";
// import uparrow from "../../assets/icons/archiveup.svg";
import { Archivetasklist } from "./Archivetask";

import Button from "../Button";
import Archivedtasksseemore from "../Archivedtasksseemore/Archivedtasksseemore";
import AuditDesignsystem from "../Taskboard/Audits/Audits";
const Archivedesignsystem = ({}) => {
  console.log();
  const RenderArchivedesign = Archivetasklist.map((Designtype, i) => {
    return <Archivecontent key={i} data={Designtype} />;
  });
  return (
    <React.Fragment>
      <div className="archive_render">{RenderArchivedesign}</div>
    </React.Fragment>
  );
};
export default Archivedesignsystem;
const Archivecontent = ({ data }) => {
  const [seemore, setSeemore] = useState(false);
 
  console.log("data", data);
  if (!data) return;
  return (
    <div className="task_system">
      <div className="task_title">
        <h1>{data.Title}</h1>
        <p>{data.Para}</p>
      </div>

      {!seemore && (
        <>
          <div className="passed">
            <Button variant="secondary" size="small">
              Passed
            </Button>
          </div>
          <div className="archive_arrows">
            <button onClick={() => setSeemore(true)}>
              {data.More}
              <img src={downarrow} alt="icon" />
            </button>
          </div>
        </>
      )}
      {/* <Button variant="primary" size="small">
        Passed
      </Button>
      <div className="arrows">
        <button>
          {data.more}
          <img src={downarrow} alt="icon" />
        </button>
      </div> */}
      {seemore && (
        <Archivedtasksseemore Designtype={data} setSeemore={setSeemore} />
      )}
      {/* {!archivetasks && (
        <>
          <div className="arrows">
            <button onClick={() => setSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="icon" />}
            </button>
          </div>
        </>
      )}
      {archivetasks && (
        <Archivedesignsystem
          Designtype={data}
          setArchivetasks={setArchivetasks}
        />
      )} */}
    </div>
  );
};
