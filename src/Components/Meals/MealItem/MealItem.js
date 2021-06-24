import React from "react";
import Card from "../../UI/Card";
import classes from "./MealItem.Module.css";

const MealItem = (props) => {
  console.log("we are inside the mealsitem component");
  return (
    <Card>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <p className={classes.description}> {props.description}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
    </Card>
  );
};
export default MealItem;
