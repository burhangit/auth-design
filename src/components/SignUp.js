import React from "react";

const SignUp = () => {
  return (
    <>
      <p className="app__cardMessage">
        Enter your personal details
        <span style={{ fontWeight: "bold" }}> to create an account</span>
      </p>
      <div className="app__cardFormContainer">
        <form className="app__cardForm">
          <div className="input-controller">
            <label>Email*</label>
            <input type="email" placeholder="EMail"></input>
          </div>
          <div className="input-controllerSignUp">
            <div className="input-controller-left">
              <label>Password*</label>
              <input type="password" placeholder="Password"></input>
            </div>
            <div className="input-controller-right">
              <label>Repeat Password*</label>
              <input type="password" placeholder="Password"></input>
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
            <button>Create Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
