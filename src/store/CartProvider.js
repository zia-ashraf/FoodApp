import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      //if the item is present already
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      }; //changing the amount field of that particular item
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    // console.log(action.item.amount + "action item here");
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    console.log("item with id this is removed ", action.id);
    const targetCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const targetCartItem = state.items[targetCartItemIndex];
    const updatedTotalAmount = state.totalAmount - targetCartItem.price;
    let updatedItemList;
    if (targetCartItem.amount > 1) {
      const newTargetItemAmount = targetCartItem.amount - 1;
      const newTargetItem = {
        ...targetCartItem,
        amount: newTargetItemAmount,
      };
      updatedItemList = [...state.items];
      updatedItemList[targetCartItemIndex] = newTargetItem;
    } else {
      state.items.splice(targetCartItemIndex, 1);
      updatedItemList = state.items;
    }
    return {
      items: updatedItemList,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const AddItemToCartHandler = (item) => {
    // console.log(item);
    dispatchCartAction({ type: "ADD", item: item });
  };

  const RemoveItemFromCartHandler = (id) => {
    console.log("before dispatch message", id);
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItemToCartHandler,
    removeItem: RemoveItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
