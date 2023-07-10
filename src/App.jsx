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
    </>
  );
}

export default App;
