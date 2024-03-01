import { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import Shimmer from "./Shimmer";
import { Search } from "lucide-react";
import FoodGallery from "./FoodGallery";

const Body = () => {
  const { user, setUser } = useContext(userContext);
  const [filterrestaurantconst, setFilterrestaurantconst] = useState([]);

  const [allrestaurantinitial, setAllrestauranrestaurantinitial] = useState([]);
  const [input, setinput] = useState("");
  const isOnline = useOnline();

  // it will call the fetch api after 1 render.
  useEffect(() => {
    setAllrestauranrestaurantinitial(restaurantList);
    setFilterrestaurantconst(restaurantList);
  }, []);

  const filteredToprated = () => {
    const data = restaurantList.filter((restaurant) => {
      return restaurant.info.avgRatingString > 4;
    });
    setFilterrestaurantconst(data);
  };

  /*   async function getRestroapi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3274946&lng=84.8802444&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    console.log(response.data);
    // setrestaurantconst(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  } */

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
            <button
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={() => {
                const data = filteredData(input, allrestaurantinitial);
                setFilterrestaurantconst(data);
              }}
            >
              Show Top Rated Restarurant
            </button>
          </div>
          <h2>No restaruanbt found</h2>
        </div>
      );
    }
    return filterrestaurantconst.length === 0 ? (
      <Shimmer />
    ) : (
      <>
        <div className="p-5  my-5 px-50 flex items-center justify-center">
          <div className="border outline-neutral-400 rounded-lg p-2 mr-2 mr-10 focus:bg-yellow-50 w-1/2 flex scale-105">
            <Search className="pr-2" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="rounded-lg w-full outline-none"
              onChange={(e) => setinput(e.target.value)}
              value={input}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  const data = filteredData(input, allrestaurantinitial);
                  setFilterrestaurantconst(data);
                }
              }}
            />
          </div>

          <button
            data-testid="search-btn"
            className="p-2 m-2 bg-purple-900 hover:bg-gray-500  text-white rounded-lg px-4 py-2"
            onClick={() => {
              const data = filteredData(input, allrestaurantinitial);
              setFilterrestaurantconst(data);
            }}
          >
            Search
          </button>
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-gray-500"
            onClick={filteredToprated}
          >
            Show Top Rated Restarurant
          </button>
          {/* {console.log(user)}
          <input
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
          <input
            data-testid="search-input"
            value={user.email}
            onChange={(e) => {
              console.log(e.target.value);
              setUser ({ ...user, email: e.target.value });
            }}
          /> */}
        </div>
        <FoodGallery />
        <div className="flex flex-wrap items-center mb-10 justify-center ">
          {filterrestaurantconst.map((restaurant) => (
            <Link
              to={"/restarurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))}
        </div>
      </>
    );
  }
};

export default Body;
