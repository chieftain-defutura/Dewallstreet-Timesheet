<<<<<<< HEAD
// /** @format */

 <<<<<<< HEAD
 import { useState } from "react";
 <<<<<<< HEAD

 =======
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
 >>>>>>> bc8810b2481a491c3065cf00bc9564118dcf564c
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
=======
import { useState } from "react";
import "./App.css";
import Login_Page from "./components/Login_page/login_page";
import Task from "./components/Assigntasks";
import Header from "./components/Header/header";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
>>>>>>> cad42f181cc19862635df3e50b08e8052dc8eeb1
  );
 }

 export default App;
