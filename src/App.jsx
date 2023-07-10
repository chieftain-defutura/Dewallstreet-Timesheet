<<<<<<< HEAD
import { useState } from "react";

=======
/** @format */

import React, { useState } from "react";
>>>>>>> da97aded162ef1577280cc8562bfdb6506283311
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/header";
<<<<<<< HEAD
import Assigntasks from "./components/Assigntasks/assigntasks";
import Timelinegraph from "./components/Timelinegraph/timelinegraph";
import Task from "./components/Assigntasks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Task />
      </div>
=======
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
