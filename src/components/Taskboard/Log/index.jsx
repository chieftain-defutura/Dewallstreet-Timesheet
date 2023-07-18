/** @format */

import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Designpage from "./Logs";
import Negotiate from "../../Assigntasks/Negotiate";

const Logboard = () => {
  const [negotiateopen, setNegotiateOpen] = useState(false);
  return (
    <Layout>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Designpage setNegotiateOpen={setNegotiateOpen} />
        {negotiateopen && <Negotiate />}
      </div>
    </Layout>
  );
};

export default Logboard;
