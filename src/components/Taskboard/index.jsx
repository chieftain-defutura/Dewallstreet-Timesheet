/** @format */

import React, { useState } from "react";
import "./taskboard.css";
import Designpage from "./Log/Logs";
import Negotiate from "../Assigntasks/Negotiate";

// import Questionnaire from "../Assigntasks/Negotiate/questionnaire";

const Taskboard = () => {
  const [negotiateopen, setNegotiateOpen] = useState(false);
  return (
    <div>
      <div className="design_questionnaire">
        <Designpage setNegotiateOpen={setNegotiateOpen} />
        {negotiateopen && <Negotiate />}
      </div>
      
    </div>
  );
};
export default Taskboard;
