import React from "react";
import "../Pages/CSS/BirdsCategories.css";
import BgImageContainer from "../Components/BgImageContainer";
import Login from "../Components/Login";
import CategoriesCard from "../Components/CategoriesCard";
import SignUp from "../Components/SignUp";

const SignUpLoginLayout = (props) => {
  return (
     <BgImageContainer bgImageUrl = {props.imagePath} pgName = "SignUpLoginLayout" >
      {props.children}
      </BgImageContainer> 
  )
}

export default SignUpLoginLayout;