/** @format */

import React, { useState } from "react";
import "./Toasts.css";

const Styles = ["success", "error", "warning"];

const Toasts = ({ props, variant }) => {
  const styles = Styles.includes(variant) ? variant : Styles[0];
  return <div className={`toast-main ${styles}`}>{props}</div>;
};
export default Toasts;
