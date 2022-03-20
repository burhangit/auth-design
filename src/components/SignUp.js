import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const SignUpHandler = () => {
    let emailValidate = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let passwordValidate = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&]{8,16}$/;
    if (!emailValidate.test(email)) {
      setMessage("invalid email please check")
    }

    else if (email === "" || password === "" || repeatPassword === "") {
      setMessage("please fill all the entries")
    }

    else if (!passwordValidate.test(password)) {
      setMessage("invalid password");
    }


    else if (passwordValidate.test(password) != passwordValidate.test(repeatPassword)) {
      setMessage("password does not match");
    }

    else {
      setEmail("")
      setPassword("")
      setRepeatPassword("")
      setMessage("successfully registered")
    }

  }

  return (
    <>
      <div className="app__cardMessage" >
        <p>
          Enter your personal details
          <span style={{ fontWeight: "bold" }}> to create an account</span>
        </p>
        <p style={{ color: `${message === "successfully registered" ? "green" : "red"}` }}>{message}</p>
      </div>

      <div className="app__cardFormContainer">
        <form className="app__cardForm">
          <div className="input-controller">
            <label>Email*</label>
            <input type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMail"></input>
          </div>
          <div className="input-controllerSignUp">
            <div className="input-controller-left">
              <label>Password*</label>
              <input type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
            </div>
            <div className="input-controller-right">
              <label>Repeat Password*</label>
              <input type="password"
                required
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Password"></input>
            </div>
          </div>
        </form>
        <div className="app__cardFormBottom">
          <div className="app__cardFormBottom-left">
            <p>
              By creating an account you agree to our
              <span style={{ color: "red" }}> Terms & Privacy</span>
            </p>
          </div>
          <div className="app__cardFormBottom-right">
            <button onClick={SignUpHandler}>Create Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
// user story
// when user website 
// registration
// fill email,password,repeat password.
// submit creat button
// if password != repeat password then error will be show
// othervise account will be created 

// backend story