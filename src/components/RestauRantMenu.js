import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestarurantCategory from "./RestarurantCategory";
import userContext from "../utils/userContext";

const RestauRantMenu = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurantmenu = useRestaurantMenu(id);
  const [showindex, setshowindexes] = useState(0);
  const [cola, setcola] = useState(false);
  const [add, setAdd] = useState({});
  const setshowindexeshandler = (i) => {
    setcola(!cola);
    setshowindexes(cola ? i : null);
  };
  const categoris =
  restaurantmenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
    // console.log(c?.card?.card["@type"]);
    return (
      c?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  console.log(restaurantmenu[4]?.groupedCard?.cardGroupMap);

  return (
    <div className="px-28 py-10 border rounded-lg shadow-lg flex flex-col items-start space-y-5">
      <h1 className="text-xl font-bold">
        {restaurantmenu[0]?.card?.card?.text}
      </h1>
      <div className="flex justify-between w-full">
        <div>
          <p>{restaurantmenu[2]?.card?.card?.info?.cuisines}</p>
          <p>{restaurantmenu[2]?.card?.card?.info?.areaName}</p>
        </div>
        <div className="text-green-500 font-bold text-lg">
          ⭐{restaurantmenu[2]?.card?.card?.info?.avgRating}
        </div>
      </div>

      <div className="flex justify-between w-full">
        <p>⌛{restaurantmenu[2]?.card?.card?.info?.sla?.slaString}</p>
        <p>💲{restaurantmenu[2]?.card?.card?.info?.costForTwoMessage}</p>
      </div>

      {restaurantmenu[2]?.card?.card?.info?.veg ? (
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
          categoris.map((info, i) => (
            <RestarurantCategory
              category={info?.card?.card}
              key={info?.card?.card?.title}
              setshowindexes={() => setshowindexeshandler(i)}
              showitmes={i === showindex ? true : false}
            />
          ))}
      </div>
    </div>
  );
};

export default RestauRantMenu;
