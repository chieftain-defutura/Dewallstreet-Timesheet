<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login_Page from "./components/Login_page/login_page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Login_Page />
      </div>
=======
/** @format */

import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/header";
import Workspace from "./components/workspace_header/workspace_header";

function App() {
  return (
    <>
      <Header />
>>>>>>> da97aded162ef1577280cc8562bfdb6506283311
    </>
  );
}

export default App;
