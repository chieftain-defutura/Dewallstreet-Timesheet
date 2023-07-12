/** @format */

import React, { useState } from "react";
import "./Button.css";
import fingerprint from "../../assets/icons/fingerprint.svg";
const Button = ({ props, image }) => {
  return (
    <div className="Button_main">
      <img src={image} alt="checkin" />
      {props}
    </div>
  );
};
export default Button;
