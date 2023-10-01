import React from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../constant";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../slice/cartSlice";

const RestauRantMenu = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const additemHandler = () => {
    dispatch(addItem("Orange"));
  };
  const clearitemHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      RestauRantMenu ansd its id is : {id}
      <ul>
        {restaurantList.map((restaurant) => (
          <li key={restaurant.info.id}>
            {restaurant.info.name}
            <button
              className="border-2 border-sky-500"
              onClick={additemHandler}
            >
              Add item
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestauRantMenu;
