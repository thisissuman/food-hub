import React from "react";
import { cloudinaryImageId } from "../constant";
import { useContext } from "react";
import userContext from "../utils/userContext";


const ItemList = ({ list }) => {
  const {user, setUser} = useContext(userContext);
  console.log(setUser);
  

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
            </div>
            <div className="flex flex-wrap items-end pl-80">
              <img
                className="w-24 h-24 object-contain"
                src={`${cloudinaryImageId}${cat?.card?.info?.imageId}`}
                alt=""
              />
              <button className="p-1 bg-white shadow-lg m-auto absolute ">
                Add +
              </button>
            </div>
            <hr className="mt-6 mb-6 border border-b-4 border-b-slate-300" />
            
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
