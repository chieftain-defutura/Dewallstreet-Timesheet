import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/header";
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
    </>
  );
}

export default App;
