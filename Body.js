import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constant";

const filteredData = (input,filterdata) => {
  const data = filterdata.filter(restaurant => {
    return restaurant.info.name === input;
  })
  return data;
};






const Body = () => {
  const [restaurantconst, setrestaurantconst] = useState(restaurantList)
  const [input, setinput] = useState("");
  
  console.log(filteredData(input, restaurantconst));  
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
          const data = filteredData(input, restaurantconst);
          setrestaurantconst(data); 
        }}
      >
        Search
      </button>
      <div className="body">
        {restaurantconst.map((restaurant) => (
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
