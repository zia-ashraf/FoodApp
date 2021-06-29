import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.Module.css";

const MealItemForm = (props) => {
  const [inputAmountValidation, setInputAmountValidation] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); //to prevent the browser default of reloading the page

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log("yes submit button works");

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setInputAmountValidation(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!inputAmountValidation && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
