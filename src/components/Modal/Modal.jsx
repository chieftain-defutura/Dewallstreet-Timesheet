import React, { useEffect } from "react";
import "./Modal.css";

const LayoutModal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className="layout_modal" onClick={() => onClose && onClose()}>
      <div
        className="layout_modal_main"
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

export default LayoutModal;
