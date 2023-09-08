import React from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "./constant";
const RestauRantMenu = () => {
  const { id } = useParams();

  return (
    <div>
      RestauRantMenu ansd its id is : {id}
      <ul>
      {restaurantList.map((restaurant) => (
          <li key={restaurant.info.id}>{restaurant.info.name}</li>
          
        ))}
        
      </ul>
    </div>
  );
};

export default RestauRantMenu;
