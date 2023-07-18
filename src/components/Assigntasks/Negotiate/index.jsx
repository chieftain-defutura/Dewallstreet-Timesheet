import React from "react";
import QuestionContent from "./component/Question/QuestionContent";
import Meeting from "./component/Meeting/meeting";
const Negotiate = () => {
  // const [meetingOpen, setMeetingOpen] = useState(false);
  return (
    <>
      <div>
        {/* <QuestionContent setMeetingOpen={setMeetingOpen} />
        {meetingOpen && <Meeting />} */}
        <QuestionContent />
        <Meeting />
      </div>
    </>
  );
};
export default Negotiate;
