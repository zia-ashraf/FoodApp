import React from "react";
import classes from "./Header.module.css";
import img from "../../Img/dan-gold-E6HjQaB7UEA-unsplash.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div id="container">
      <div id="title" className={classes.header}>
        <h1>HomelyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
      <div id="top-img" className={classes["main-image"]}>
        <img src={img} alt="the description is here"></img>
      </div>
    </div>
  );
};

export default Header;
