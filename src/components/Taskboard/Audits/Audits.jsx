import React, { useState } from "react";
import "./audits.css";
import downarrow from "../../../assets/icons/chevron-down.svg";
import uparrow from "../../../assets/icons/chevron-down.svg";
import TaskHeader from "../Taskheader";
import { Auditlist } from "./Audit.JS";

const AuditDesignsystem = () => {
  const RenderAuditdesign = Auditlist.map((AuditDesigntype, i) => {
    return <Auditcontent key={i} data={AuditDesigntype} />;
  });
  return (
    <React.Fragment>
      <div className="header_archive">
        <TaskHeader />
        <div className="audit_main">
          <div className="archive_task">
            <button>
              Archived tasks(2)
              <img src={uparrow} alt="icon" />
            </button>
          </div>
          <div className="audit_cards">{RenderAuditdesign}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AuditDesignsystem;
const Auditcontent = ({ data }) => {
  const [seemore, setSeemore] = useState(false);
  console.log("data", data);
  if (!data) return;
  return (
    <div className="task_system">
      <div className="task_title">
        <h1>{data.Title}</h1>
        <p>{data.Para}</p>
      </div>
    </div>
  );
};
