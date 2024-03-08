import React from "react";
import { useSelector } from "react-redux";
import { clearCart, removeItem } from "../slice/cartSlice";
import { useDispatch } from "react-redux";
import { cloudinaryImageId } from "../constant";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  const dispatch = useDispatch();

  const clearCarthandeler = () => {
    dispatch(clearCart());
  };
  const removeCarthandeler = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((e) => (
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">{e.name}</h2>
              <span className="text-lg font-medium text-green-600">
                {e.price / 100 + "💲"}
              </span>
            </div>
            <div className="mt-4">
              <img
                src={`${cloudinaryImageId}${e.imageId}`}
                alt={e.name}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                  onClick={() => removeCarthandeler(e.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 12H6"
                    />
                  </svg>
                </button>
                <span className="mx-2 text-gray-600">{e.quantity}</span>
                <button
                  className="bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                  onClick={() => addCarthandeler(e.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="bg-red-500 rounded-full p-2 hover:bg-red-600"
                onClick={() => removeCarthandeler(e.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <button
          className="bg-red-500 rounded-lg px-4 py-2 text-white hover:bg-red-600"
          onClick={clearCarthandeler}
        >
          Clear Cart
        </button>
        <button
          className="bg-green-500 rounded-lg px-4 py-2 text-white hover:bg-green-600"
          /* onClick={checkoutHandeler} */
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
