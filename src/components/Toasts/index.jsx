/** @format */

import React, { useState } from "react";
import "./Toasts.css";

const Styles = ["success", "error", "warning"];
const Toasts = ({ image, props, variant, icons }) => {
  const styles = Styles.includes(variant) ? variant : Styles[0];

  return (
    <div className={`toast-main ${styles}`}>
      <div className="message_box">
        <div className="alert">
          <img src={image} alt="" />
          <div className="toast_msg">{props}</div>
        </div>
        <div className="toast_verticalline"></div>
        <img src={icons} alt="" />
      </div>
    </div>
  );
};
export default Toasts;
