import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import Shimmer from "./shimmer";
import CircularIndeterminate from "./shimmer";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [filterrestaurantconst, setFilterrestaurantconst] = useState([]);
  const [allrestaurantinitial, setAllrestauranrestaurantinitial] = useState([]);
  const [input, setinput] = useState("");
  const isOnline = useOnline();
  
  // it will call the fetch api after 1 render.
  useEffect(() => {
    setAllrestauranrestaurantinitial(restaurantList);
    setFilterrestaurantconst(restaurantList);
  }, []);

  /*   async function getRestroapi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3274946&lng=84.8802444&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    console.log(response.data);
    // setrestaurantconst(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  } */
  console.log("render" + filterrestaurantconst.length);
  console.log(filterrestaurantconst);
  console.log(isOnline);
  if (!isOnline) {
    return <h1>You are offline</h1>;
  } else {
    if (filterrestaurantconst.length === 0) {
      return (
        <div>
          <div className="p-5 bg-pink-50 my-5 px-50 flex items-center justify-center">
            <input
              type="text"
              onChange={(e) => setinput(e.target.value)}
              value={input}
              className="border rounded-lg p-2 mr-2"
            />
            <button
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={() => {
                const data = filteredData(input, allrestaurantinitial);
                setFilterrestaurantconst(data);
              }}
            >
              Search
            </button>
          </div>
          <h2>No restaruanbt found</h2>
        </div>
      );
    }
    return filterrestaurantconst.length === 0 ? (
      <CircularIndeterminate />
    ) : (
      <>
        <div className="p-5 bg-pink-50 my-5 px-50 flex items-center justify-center">
          <input
            type="text"
            className="border rounded-lg p-2 mr-2 focus:bg-yellow-200 w-200"
            onChange={(e) => setinput(e.target.value)}
            value={input}
          />
          <button
            className="p-2 m-2 bg-purple-900 hover:bg-gray-500  text-white rounded-lg px-4 py-2"
            onClick={() => {
              const data = filteredData(input, allrestaurantinitial);
              setFilterrestaurantconst(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap">
          {filterrestaurantconst.map((restaurant) => (
            <Link
              to={"/restarurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard
                {...restaurant.info}

                /* key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                cloudinaryImageId={restaurant.info.cloudinaryImageId} */
              />
            </Link>
          ))}
        </div>
      </>
    );
  }
};

export default Body;