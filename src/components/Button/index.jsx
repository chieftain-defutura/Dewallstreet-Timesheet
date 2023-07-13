/** @format */

import React from "react";
import "./Button.css";
const Styles = ["primary", "seccondary", "Toast"];
const Size = ["medium", "large", "small"];
const Button = ({ props, image, handleClick, variant }) => {
  const styles = Styles.includes(variant) ? variant : Styles[0];
  const size = Styles.includes(variant) ? variant : Styles[0];
  return (
    <div className={`Button-main ${styles}  ${size}`} onClick={handleClick}>
      <img src={image} alt="" />
      {props}
    </div>
  );
};
export default Button;
