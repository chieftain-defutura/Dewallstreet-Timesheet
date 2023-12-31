import React, { useState } from "react";
import "./Audits.css";
import downarrow from "../../../assets/icons/seemorebutton.svg";
import archivedown from "../../../assets/icons/archivedown.svg";
import TaskHeader from "../Taskheader";
import { Auditlist } from "./Audit";
import Button from "../../Button";
import Auditseemore from "../../Auditsseemore/Auditseemore";
import Archivedtasks from "../../Archivedtasks";

const AuditDesignsystem = ({ setRevisiondetails }) => {
  const [archivedtasks, setArchivedtasks] = useState(false);
  console.log(setRevisiondetails);
  const RenderAuditdesign = Auditlist.map((Designtype, i) => {
    return (
      <Auditcontent
        key={i}
        data={Designtype}
        setRevisiondetails={setRevisiondetails}
      />
    );
  });
  return (
    <React.Fragment>
      <div className="header_archive">
        <TaskHeader />
        <div className="audit_main">
          <div
            className="archive_tasks"
            onClick={() => setArchivedtasks((m) => !m)}
          >
            Archived tasks ( 2 )
            <img src={archivedown} alt="icon" />
          </div>

          {archivedtasks ? (
            <Archivedtasks />
          ) : (
            <div className="audit_cards">{RenderAuditdesign}</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default AuditDesignsystem;

const Auditcontent = ({ data, setRevisiondetails, setArchivedtasks }) => {
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
          <div className="reject_revision">
            <div className="reject_button">
              <Button variant="secondary" size="small">
                Rejected
              </Button>
            </div>
            <div
              className="revision_button"
              onClick={() => setRevisiondetails((m) => !m)}
            >
              <Button variant="secondary" size="medium">
                Revision details
              </Button>
            </div>
          </div>
          <div className="arrows">
            <button onClick={() => setSeemore(true)}>
              {data.More}
              {<img src={downarrow} alt="icon" />}
            </button>
          </div>
        </>
      )}

      {seemore && <Auditseemore Designtype={data} setSeemore={setSeemore} />}
    </div>
  );
};
