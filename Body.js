import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constant";

function filterData(input, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(input)
  );
  return filterData;
}

const Body = () => {
  const [input, setinput] = useState("");
  const [restaurants, setrestaurant] = useState(restaurantList);
  console.log(restaurants[0].info.name);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
        <label htmlFor="">{input}</label>
      </div>
      <button
        className="search-button"
        onClick={() => {
          const data = filterData(input, restaurants);
          setrestaurant(data);
        }}
      >
        Search
      </button>
      <div className="body">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            {...restaurant.info}
            /* key={restaurant.info.id}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            avgRating={restaurant.info.avgRating}
            cloudinaryImageId={restaurant.info.cloudinaryImageId} */
          />
        ))}
      </div>
    </>
  );
};

export default Body;
