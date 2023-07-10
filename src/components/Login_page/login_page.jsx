import React from "react";
import "./login_page.css";
import cancel from "../../assets/icons/cancel.svg";
import login from "../../assets/images/loginimage.svg";
import user from "../../assets/icons/user.svg";
import lock from "../../assets/icons/lock.svg";
import eye from "../../assets/icons/eye.svg";
import fingerprint from "../../assets/icons/fingerprint.svg";
const Login_Page = () => {
  return (
    <div className="Login_page">
      <div className="login_main">
        <h2>Log in.</h2>
        <img src={cancel} alt="cencel" />
      </div>
      <div className="emptyline"></div>
      <img src={login} alt="login" width="200px" height="200px" />
      <div className="user_name">
        <img src={user} alt="user" />
        <h5>ALIAS</h5>
      </div>
      <input type="text" placeholder="Enter your alias" />
      <div className="user_password">
        <img src={lock} alt="lock" />
        <h5>PASSCODE</h5>
      </div>
      <div className="passcode">
        <input type="text" placeholder="Enter your passcode" />
        <img src={eye} alt="eye" width="20px" />
      </div>
      <button>
        <div className="access">
          <img src={fingerprint} alt="fingerprint" width="25px" />
          <h5>Access</h5>
        </div>
      </button>
    </div>
  );
};
export default Login_Page;
