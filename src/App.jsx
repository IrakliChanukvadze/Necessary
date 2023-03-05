import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Context } from "./Context/Context";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { themeToggler } from "./Styles";

function App() {
  const { logged } = useContext(Context);
  const { background } = themeToggler();
  return (
    <div className={` h-[100vh] w-full  ${background}`}>
      {logged ? <Home /> : <Login />}
    </div>
  );
}

export default App;
