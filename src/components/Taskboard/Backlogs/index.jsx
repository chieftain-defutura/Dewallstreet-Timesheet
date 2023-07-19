/** @format */

import React from "react";
import { Backlogdesign } from "./Backlogs";
import Layout from "../../../components/Layout";

const Backlog = () => {
  return (
    <Layout>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Backlogdesign />
      </div>
    </Layout>
  );
};

export default Backlog;
