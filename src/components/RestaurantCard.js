import React, { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = ({ cloudinaryImageId, avgRating, cuisines, name }) => {
  const { username, email } = useContext(userContext);
  return (
    <div className="w-56 h-96 p-2 m-2 shadow-lg bg-pink-50 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
        className="w-full h-36 object-cover rounded-t-lg "
      />
      <div className="p-4">
        <h2 className="font-bold text-xl text-red-600">{name}</h2>
        <hr className="border-black border-t-2 my-2" />
        <h3 className="overflow-ellipsis overflow-hidden h-16">
          {cuisines.join(", ")}
        </h3>
        <hr className="border-black border-t-2 my-2" />
        <h4 className="font-bold text-green-600">
          <i className="fas fa-star"></i> {avgRating}⭐
        </h4>
     {/*    <p>{username}</p>
        <p>{email}</p> */}
      </div>
    </div>
  );
};

export const withPromote = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span className=" bg-black text-gray-50 rounded-md">Promoted</span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
