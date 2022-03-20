import React, { useState } from "react";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");

  const SignInHandler = (e) => {
    e.preventDefault();

  //   let emailChecker = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  //   let passwordChecker = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&]{8,16}$/;

  //   if(emailChecker.test(email)){
  //     setMessage("");
  //   }

  // else if(email !== emailChecker.test(email)){
  //   setMessage("invalid email")
  // }

  //  if(passwordChecker.test(password)){
  //   setMessage("")
  // }
  
  // else if (password == "" || email == "") {
  //     setMessage("please fill all the fields");
  //   }

 
  //   else{
  //     setMessage("succeccfully login")
  //   }

  };


  return (
    <>
      <div className="app__cardMessage">
        <p >
          Enter your email and password{" "}
          <span style={{ fontWeight: "bold" }}> to sign in</span>
        </p>
        <p style={{ color: `${message === "successfully login" ? "green" : "red"}` }}>{message}</p>
      </div>

      <div className="app__cardFormContainer">
        <form className="app__cardForm" onSubmit={SignInHandler}>
          <div className="input-controller input-controller-email">
            <label>Email*</label>
            <input type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="EMail"></input>
          </div>
          <div className="input-controller input-controller-password">
            <label>Password*</label>
            <input type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"></input>
          </div>
        </form>
        <div className="app__cardFormBottom">
          <div className="app__cardFormBottom-left">
            <a href="">Forget your password?</a>
            <a href="">Click here</a>
          </div>
          <div className="app__cardFormBottom-right">
            <button onClick={SignInHandler}>Log In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
