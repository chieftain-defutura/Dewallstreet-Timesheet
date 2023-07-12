/** @format */

import React from "react";
import "./Login.css";
import Login_Page from "../../components/Login_page/login_page";
import Header from "../../components/Header/header";
const Login = () => {
  return (
    <div className="Login">
      <Header />
      <Login_Page />
    </div>
  );
};
export default Login;
