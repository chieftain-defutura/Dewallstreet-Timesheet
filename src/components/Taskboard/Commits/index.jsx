import React from "react";
import Layout from "../../../components/Layout";
import CommitDesignsystem from "./commits";

const Commitboard = () => {
  return (
    <Layout>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        className="grid"
      >
        <CommitDesignsystem />
      </div>
    </Layout>
  );
};
export default Commitboard;
