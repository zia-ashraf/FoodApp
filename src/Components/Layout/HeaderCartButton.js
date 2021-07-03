import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext); //this header card component will be re-evaluated by react whenever the context changes
  // console.log(ctx.items + " here");

  const [buttonIsHighlighted, setbuttonIsHighlighted] = useState(false);

  const numberOfCartItems = ctx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  useEffect(() => {
    // console.log("we are inside the useEffect hook");
    setbuttonIsHighlighted(true);
    setTimeout(() => {
      setbuttonIsHighlighted(false);
    }, 300);
  }, [ctx.items]);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
