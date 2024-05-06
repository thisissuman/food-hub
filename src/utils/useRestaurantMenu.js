import React from "react";
import { useState, useEffect } from "react";
import { restarurantMenu } from "../constant";

const useRestaurantMenu = (id) => {
  /* const additemHandler = () => {
      dispatch(addItem("Orange"));
    };
    const clearitemHandler = () => {
      dispatch(clearCart());
    }; */

  const [restaurantmenu, setRestaurantmenu] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const carddata = await fetch(restarurantMenu + id);
    console.log(carddata)
    const json = await carddata.json();

    setRestaurantmenu(json?.data?.cards);
  };

  return restaurantmenu;
};

export default useRestaurantMenu;
