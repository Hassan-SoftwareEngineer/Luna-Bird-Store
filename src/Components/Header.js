import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPrescriptionBottleMedical } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../Images/logo33.png";

const Header = (props) => {
  return (
    <nav>
    <div className="logo">
        <a href="/"><img src={logoImage} alt="Logo" /></a>
    </div>
    <ul className="nav-links">
        <li><a href="/sellingBirds" className={props.path == "/sellingBirds" ? "anchortagActive" : "anchortag" } > Selling Birds </a></li>
        <li><a href="/cages" className={props.path=="/cages" ? "anchortagActive" : "anchortag" }> Cages </a></li>
        <li><a href="/accessories" className={props.path=="/accessories" ? "anchortagActive" : "anchortag" }> Accessories </a></li>
        <li><a href="/birdsCategories" className={props.path=="/birdsCategories" ? "anchortagActive" : "anchortag" }> Birds Categories </a></li>
        <li><a href="/healthyFoods" className={props.path=="/healthyFoods" ? "anchortagActive" : "anchortag" } > Healthy Foods </a></li>
        <li><a href="/breedingFormulaes" className={props.path=="/breedingFormulaes" ? "anchortagActive" : "anchortag" }> <FontAwesomeIcon style={{ color: props.path=="/breedingFormulaes" ? "#FF7A00" : "white"}} icon={faPrescriptionBottleMedical} beatFade /> Breeding & Treatments </a></li>
        <li><a href="/carts" className={props.path=="/carts" ? "anchortagActive" : "anchortag" } > <FontAwesomeIcon style={{ color: props.path=="/carts" ? "#FF7A00" : "white" }} icon={faShoppingCart} fade /> Carts </a></li>
    </ul>
</nav>
  )
}

export default Header;
