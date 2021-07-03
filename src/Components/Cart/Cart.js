import Modal from "../UI/Modal";
import classes from "./Cart.Module.css";
import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";
import { useContext } from "react";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItem = ctx.items.length;
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const addItemHandler = (item) => {
    ctx.addItem({
      ...item,
      amount: 1,
    });
    console.log("the item triggered-", item);
  };
  const removeItemHandler = (id) => {
    ctx.removeItem();
  };
  // console.log("the total items in the cart-", ctx.items.length);
  const CartItems = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addItemHandler.bind(null, item)}
      onRemove={removeItemHandler.bind(null, item.id)}
    />
  ));

  // console.log(CartItems, "hereOOOO");
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>{CartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
