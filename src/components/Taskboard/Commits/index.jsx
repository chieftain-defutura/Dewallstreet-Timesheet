import React from "react";
import Layout from "../../../components/Layout";
import CommitDesignsystem from "./commits";

const Commitboard = () => {
  return (
    <Layout>
      <div className="grid">
        <CommitDesignsystem />
      </div>
    </Layout>
  );
};
export default Commitboard;
