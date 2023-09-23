import React from "react";

const RestaurantCard = ({ cloudinaryImageId, avgRating, cuisines, name }) => {
  return (
    <div className="w-56 h-auto p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
        className="w-full h-36 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="overflow-ellipsis overflow-hidden h-16">{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
