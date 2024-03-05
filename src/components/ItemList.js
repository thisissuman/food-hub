import React from "react";
import { cloudinaryImageId } from "../constant";
const ItemList = ({ list }) => {
  console.log(list);
  return (
    <div className="flex justify-start w-full">
      <ul>
        {list.map((cat) => (
          <li key={cat?.card?.info?.id}>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">
                <i>{cat?.card?.info?.name}</i>
              </span>
              <span>💲{cat?.card?.info?.price / 100}</span>
            </div>

            <div className="flex flex-row">
              <p className="text-slate-400 mt-4">
                {cat?.card?.info?.description}
              </p>
              <img
              className="w-14 h-10 object-contain"
                src={`${cloudinaryImageId}${cat?.card?.info?.imageId}`}
                alt=""
              />
            </div>
            <hr className="mt-6 mb-6 border border-b-4 border-b-slate-300" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
