/** @format */

import { useState } from "react";
import "./App.css";
import Login_Page from "./components/Login_page/login_page";
import Task from "./components/Assigntasks";

import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import Login from "./pages/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
