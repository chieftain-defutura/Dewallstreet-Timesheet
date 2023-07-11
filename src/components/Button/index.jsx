/** @format */

import React, { useState } from "react";
import fingerprint from "../../assets/icons/fingerprint.svg";
const Button = ({ props }) => {
  return (
    <div className="Button_main">
      <img src={fingerprint} alt="fingerprint" />
      {props}
    </div>
  );
};
export default Button;
