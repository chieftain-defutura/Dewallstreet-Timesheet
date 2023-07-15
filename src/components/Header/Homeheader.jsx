/** @format */

import React from "react";
import "./Homeheader.css";
import logo from "../../assets/icons/name.svg";
import { Link } from "react-router-dom";
const Homeheader = () => {
  return (
    <div className="home_main">
      <Link to="/">
        <img src={logo} alt="name" />
      </Link>
      <h2>Workspace</h2>
      <div className="header_name">
        <h2>Ravishankar Varma</h2>
        <p>DEWALLED1</p>
      </div>
    </div>
  );
};
export default Homeheader;
