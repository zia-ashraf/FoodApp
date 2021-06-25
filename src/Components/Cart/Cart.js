import Modal from "../UI/Modal";
import classes from "./Cart.Module.css";

const Cart = (props) => {
  const CartItems = [{ id: "b1", name: "Momos", amount: 10, price: 0.61 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal>
      <ul className={classes["cart-items"]}>{CartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>6.1</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
