/** @format */

import { useState } from "react";
import "./App.css";
import Login_Page from "./components/Login_page/login_page";
import Task from "./components/Assigntasks";

import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import Login from "./pages/Login";
import Taskpage from "./pages/Taskpage";
import Taskpagelist from "./pages/Taskpage";
import Backlog from "./components/Taskboard/Backlogs";
import Designpage from "./components/Taskboard/Log/Logs";
import Logboard from "./components/Taskboard/Log";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Taskpage" element={<Taskpage />} />
        <Route path="/Taskpage/:backlog" element={<Backlog />} />
        <Route path="/Taskpage/log" element={<Logboard />} />
      </Routes>
    </>
  );
}

export default App;
