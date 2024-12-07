import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({ SignUpFunction, SignUpFunctionDisabled, LoginFunctionDisabled }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="mainContainer">
      <h2 id="mainHeading">Login</h2>
      <main className="inputsMain">
        <label htmlFor="userName">UserName</label>
        <input type="text" id="userName" placeholder="Enter your UserName or email !" />

        <label htmlFor="pswrd">Password</label>
        <div className="passwordContainer">
          <input
            type={showPassword ? "text" : "password"}
            id="pswrd"
            placeholder="Enter your Password !"
          />
          <div className="passwordToggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FontAwesomeIcon icon="fa-solid fa-eye-slash" style={{color : "white"}} /> : <FontAwesomeIcon icon="fa-solid fa-eye" />}
          </div>
        </div>
      </main>
      <h3 className="loginDontHave">
        Don't have Account ? <span className="loginDontHaveSpan" onClick={() => {
          SignUpFunction();
          LoginFunctionDisabled();
        }}>SignUp</span>
      </h3>

      <div id="btnsDiv">
        <button className="btn">Login</button>
        <button className="btn" id="Cancel" onClick={() => {
          SignUpFunctionDisabled();
          LoginFunctionDisabled();
        }}>Cancel</button>
      </div>
    </div>
  );
}

export default Login;
