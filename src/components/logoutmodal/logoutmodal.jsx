import React, { useEffect } from "react";
import "./logoutmodal.css";

const Logoutmodal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className="logout_modal" onClick={() => onClose && onClose()}>
      <div
        className="logout_modal_main"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Logoutmodal;
