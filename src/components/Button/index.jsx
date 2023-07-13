/** @format */

import React from "react";
import "./Button.css";
const Styles = ["primary", "secondary", "Toast"];

const Button = ({ props, image, handleClick, variant }) => {
  const styles = Styles.includes(variant) ? variant : Styles[0];
  return (
    <div className="Button_main" onClick={handleClick}>
      <img src={image} alt="" />
      {props}
    </div>
  );
};
export default Button;
