import Modal from "../UI/Modal";
import classes from "./Cart.Module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItem = ctx.items.length;
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const CartItems = ctx.items.map((item) => <li>{item.name}</li>);

  console.log(CartItems, "hereOOOO");
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
