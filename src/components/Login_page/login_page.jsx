import React from "react";
import "./login_page.css";
import cancel from "../../assets/icons/cancel.svg";
import login from "../../assets/images/loginimage.svg";
import user from "../../assets/icons/user.svg";
import lock from "../../assets/icons/lock.svg";
import eye from "../../assets/icons/eye.svg";
import fingerprint from "../../assets/icons/fingerprint.svg";
import Button from "../Button";
const Login_Page = () => {
  return (
    <div className="Login_page">
      <div className="login_main">
        <h2>Log in.</h2>
        <img src={cancel} alt="cencel" width="24px" height="24px" />
      </div>
      <div className="emptyline"></div>
      <img
        src={login}
        alt="login"
        width="149.552px"
        height="150px"
        id="loginpage_image"
      />
      <div className="username_section">
        <div className="user_name">
          <img src={user} alt="user" width="14px" height="14px" />
          <h5>ALIAS</h5>
        </div>
        <input type="text" placeholder="Enter your alias" />
      </div>
      <div className="passcode_section">
        <div className="user_password">
          <img src={lock} alt="lock" />
          <h5>PASSCODE</h5>
        </div>
        <div className="passcode">
          <input type="text" placeholder="Enter your passcode" />
          <img src={eye} alt="eye" width="20px" />
        </div>
      </div>
      <Button props="Access" />
      {/* <button>
        <div className="access">
          <img src={fingerprint} alt="fingerprint" width="25px" />
          <h4>Access</h4>
        </div>
      </button> */}
    </div>
  );
};
export default Login_Page;
