import React from "react";
import Close from "../../assets/icons/cancel.svg";
import "./Modal.css";

export const ModalBox = ({ isOpen, onClose, children }) => {
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal">
      <div
        className="modaal-overlay"
        ref={overlayRef}
        onClick={handleOverlayClick}
      />
      <div className="modal-box">
        <div className="modal-close-btn" onClick={onClose}>
          <img src={close} alt="" />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  ) : null;
};
