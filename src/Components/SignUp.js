import React from 'react';
import "./SignUp.css";

const SignUp = ({LoginFunction, SignUpFunctionDisabled, LoginFunctionDisabled }) => {
  return (
    <div className="SignUpmainContainer">
      <h2 id="SignUpmainHeading"> SignUp </h2>
      <main className="SignUpinputsMain">

        <label htmlFor="userName"> UserName </label>
        <input type="text" id="userName" placeholder=" UserName < 40 Characters ! " />
        
        <label htmlFor="Email"> Email </label>
        <input type = "email" id="Email" placeholder="@example.com ! " />

        <label htmlFor="pswrd"> Password </label>
        <input type="password" id="pswrd" placeholder="Choose Strong Password ! " /> 

        <label htmlFor="cnfrm_pswrd"> Confirm Password </label>
        <input type="password" id="cnfrm_pswrd" placeholder="Re-type choosen Password ! " /> 
      </main>
      <h3 className="AlreadyLogin"> Already Have an Account ? <span className="AlreadyLoginSpan" onClick={() => {
        SignUpFunctionDisabled();
        LoginFunction();
      }}> Login </span>  </h3>

      <div id="SignUpbtnsDiv">
        <button className="SignUpBtns"> SignUp </button>
        <button  className="SignUpBtns"  id="CancelBtn" onClick={() => {
          SignUpFunctionDisabled();
          LoginFunctionDisabled();
        }}> Cancel </button>
      </div>

    </div>
  )
}

export default SignUp;



