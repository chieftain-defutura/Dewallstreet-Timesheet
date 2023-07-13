/** @format */

import React from "react";
import "./Button.css";

const Button = ({ props, image, handleClick }) => {
  return (
    <div className="Button_main" onClick={handleClick}>
      <img src={image} alt="" />
      {props}
    </div>
  );
};
export default Button;
