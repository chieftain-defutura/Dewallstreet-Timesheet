/** @format */

import React, { useState } from "react";
import logo from "../../assets/icons/name.svg";
import "./header.css";

const Header = () => {
  const [setState] = useState({ image: logo });
  return (
    <div className="header_main">
      <img src={logo} alt="name" />
    </div>
  );
};
export default Header;
