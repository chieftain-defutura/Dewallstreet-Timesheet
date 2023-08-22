import React, { useState } from "react";
import Layout from "../../../components/Layout";
import AuditDesignsystem from "./Audits";
import Revisiondetails from "../../Revisiondetails/Revisiondetails";
import Archivedtasks from "../../Archivedtasks";
import LayoutModal from "../../Modal/Modal";
const Auditboard = () => {
  const [revisiondetails, setRevisiondetails] = useState(false);

  return (
    <Layout>
      <div className="grid">
        <AuditDesignsystem setRevisiondetails={setRevisiondetails} />
        <div>{revisiondetails && <Revisiondetails />}</div>
      </div>
      <>
        <div className="audits_modal">
          {revisiondetails && (
            <LayoutModal onClose={() => setRevisiondetails(false)}>
              <Revisiondetails />
            </LayoutModal>
          )}
        </div>
      </>
    </Layout>
  );
};
export default Auditboard;
