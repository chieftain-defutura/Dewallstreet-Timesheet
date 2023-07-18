/** @format */

import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Designpage from "./Logs";
import Negotiate from "../../Assigntasks/Negotiate";

const Logboard = () => {
  const [negotiateopen, setNegotiateOpen] = useState(false);
  return (
    <Layout>
      <Designpage setNegotiateOpen={setNegotiateOpen} />
      {negotiateopen && <Negotiate />}
    </Layout>
  );
};

export default Logboard;
