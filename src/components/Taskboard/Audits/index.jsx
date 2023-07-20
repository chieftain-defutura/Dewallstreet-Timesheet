import React, { useState } from "react";
import Layout from "../../../components/Layout";
import AuditDesignsystem from "./Audits";
import Revisiondetails from "../../Revisiondetails/Revisiondetails";
import Archivedtasks from "../../Archivedtasks";
const Auditboard = () => {
  const [revisiondetails, setRevisiondetails] = useState(false);

  return (
    <Layout>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <AuditDesignsystem
          setRevisiondetails={setRevisiondetails}
        />
        {revisiondetails && <Revisiondetails />}
      </div>
   
    </Layout>
  );
};
export default Auditboard;
