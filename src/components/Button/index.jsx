/** @format */

import React from "react";
import "./Button.css";

const Button = ({ props, image }) => {
  return (
    <div className="Button_main">
      <img src={image} alt="" />
      {props}
    </div>
  );
};
export default Button;
