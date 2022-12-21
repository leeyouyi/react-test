import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TestButton from "./components/testButton";
import Counter from "./components/Counter";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div>
        <TestButton> 我是按鈕 </TestButton>
        <Counter />
      </div>

      <Login />
      {/* </header> */}
    </div>
  );
}

export default App;
