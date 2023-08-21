/** @format */

import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Designpage from "./Logs";
import Negotiate from "../../Assigntasks/Negotiate";
import LayoutModal from "../../Modal/Modal";

const Logboard = () => {
  const [negotiateopen, setNegotiateOpen] = useState(false);
  return (
    <Layout>
      <div className="grid">
        <Designpage setNegotiateOpen={setNegotiateOpen} />
        <div className="negotiate_page">{negotiateopen && <Negotiate />}</div>
      </div>
      <>
        <div className="negotiate_modal">
          {negotiateopen && (
            <LayoutModal onClose={() => setNegotiateOpen(false)}>
              <Negotiate />
            </LayoutModal>
          )}
        </div>
      </>
    </Layout>
  );
};

export default Logboard;
