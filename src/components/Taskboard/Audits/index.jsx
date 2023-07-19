import React from "react";
import Layout from "../../../components/Layout";
import AuditDesignsystem from "./Audits";
const Auditboard = () => {
  return (
    <Layout>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <AuditDesignsystem />
      </div>
    </Layout>
  );
};
export default Auditboard;
