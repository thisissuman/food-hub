import React from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../constant";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../slice/cartSlice";
import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestarurantCategory from "./RestarurantCategory";

const RestauRantMenu = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurantmenu = useRestaurantMenu(id);

  const categoris =
    restaurantmenu[2]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter((c) => {
      // console.log(c?.card?.card["@type"]);
      return (
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log(categoris);

  return (
    <div className="px-28 py-10 border rounded-lg shadow-lg flex flex-col items-start space-y-5">
      <h1 className="text-xl font-bold">
        {restaurantmenu[0]?.card?.card?.info?.name}
      </h1>
      <div className="flex justify-between w-full">
        <div>
          <p>{restaurantmenu[0]?.card?.card?.info?.cuisines}</p>
          <p>{restaurantmenu[0]?.card?.card?.info?.areaName}</p>
        </div>
        <div className="text-green-500 font-bold text-lg">
          ⭐{restaurantmenu[0]?.card?.card?.info?.avgRating}
        </div>
      </div>

      <div className="flex justify-between w-full">
        <p>⌛{restaurantmenu[0]?.card?.card?.info?.sla?.slaString}</p>
        <p>💲{restaurantmenu[0]?.card?.card?.info?.costForTwoMessage}</p>
      </div>

      {restaurantmenu[0]?.card?.card?.info?.veg ? (
        <span className="bg-green-500 text-white px-2 py-1 rounded">
          🥕 PURE VEG
        </span>
      ) : (
        <span className="bg-red-500 text-white px-2 py-1 rounded">
          🍗 NON VEG
        </span>
      )}

      <div className="w-full">
        {categoris &&
          categoris.map((info) => (
            <RestarurantCategory
              category={info?.card?.card}
              key={info?.card?.card?.title}
            />
          ))}
      </div>
    </div>
  );
};

export default RestauRantMenu;
