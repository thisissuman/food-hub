import React from "react";
import { useSelector } from "react-redux";
import { clearCart,removeItem } from "../slice/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCarthandeler = () => {
    dispatch(clearCart());
  };
  const removeCarthandeler = () => {
    dispatch(removeItem());
  };

  return (
    <div className="px-2 mx-5">
      {cartItems.map((e) => (
        <span className="px-10 flex gap-3">{e}</span>
      ))}
      <button className="border-2 border-sky-500" onClick={removeCarthandeler}>
        Remove Item
      </button>
      <button className="border-2 border-sky-500" onClick={clearCarthandeler}>
        ClearCart
      </button>
    </div>
  );
};

export default Cart;
