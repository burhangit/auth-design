import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  const [toggler, setToggler] = useState(true);

  const signInFunc = () => {
    setToggler(true);
  };
  const signUpFunc = () => {
    setToggler(false);
  };
  return (
    <div className="App">
      <div className="app__card">
        {/* App card header */}
        <div className="app__cardHeader">
          <button
            className={`signInBtn ${toggler ? "active" : ""} `}
            onClick={signInFunc}
          >
            Login
          </button>
          <button
            className={`signInBtn ${!toggler ? "active" : ""} `}
            onClick={signUpFunc}
          >
            Sign Up
          </button>
        </div>
        {toggler ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};
export default App;
