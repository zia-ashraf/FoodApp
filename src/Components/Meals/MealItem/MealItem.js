import React from "react";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.Module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    // console.log("add to cart handler works");
    ctx.addItem({
      // key: Math.random(),
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    // console.log(props.name + " " + amount);
    // console.log(ctx.items + " we are inside mealItem");
  };

  // console.log("we are inside the mealsitem component");
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
