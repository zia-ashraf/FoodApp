import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
};

export default HeaderCartButton;
