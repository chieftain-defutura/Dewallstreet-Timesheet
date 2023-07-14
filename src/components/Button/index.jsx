/** @format */

import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
// const Styles = ["primary", "secondary", "Toast"];
// const Size = ["small", "medium", "large"];
const Button = ({ variant, size, children, handleClick, image }) => {
  let className = "button";
  if (variant === "primary") {
    className += " button-primary";
  } else if (variant === "secondary") {
    className += " button-secondary";
  } else if (variant === "negotiate") {
    className += " button-negotiate";
  }
  if (size === "small") {
    className += " button-small";
  } else if (size === "large") {
    className += " button-large";
  } else if (size === "medium") {
    className += " button-medium";
  }
  return (
    <button className={className} onClick={handleClick}>
      <img src={image} alt="" />
      {children}
    </button>
  );
};
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  variant: "primary",
  size: "small",
};
export default Button;
