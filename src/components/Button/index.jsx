/** @format */

import React from "react";
import "./Button.css";
const Styles = ["primary", "secondary", "Toast"];
const Size = ["small", "medium", "large"];
const Button = ({ props, image, handleClick, variant }) => {
  const styles = Styles.includes(variant ? variant : Styles[0]);
  const size = Size.includes(variant ? variant : Size[0]);
  return (
    <div className={`Button-main ${styles} ${size}`} onClick={handleClick}>
      <img src={image} alt="" />
      {props}
    </div>
  );
};
export default Button;
