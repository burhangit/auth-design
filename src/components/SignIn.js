import React, { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    setUser([
      ...user,
      {
        email: email,
        password: password,
      },
    ]);
  };
  return (
    <>
      <p className="app__cardMessage">
        Enter your email and password{" "}
        <span style={{ fontWeight: "bold" }}> to sign in</span>
      </p>
      <div className="app__cardFormContainer">
        <form className="app__cardForm">
          <div className="input-controller input-controller-email">
            <label>Email*</label>
            <input type="email" placeholder="EMail"></input>
          </div>
          <div className="input-controller input-controller-password">
            <label>Password*</label>
            <input type="password" placeholder="Password"></input>
          </div>
        </form>
        <div className="app__cardFormBottom">
          <div className="app__cardFormBottom-left">
            <a href="">Forget your password?</a>
            <a href="">Click here</a>
          </div>
          <div className="app__cardFormBottom-right">
            <button>Log In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
