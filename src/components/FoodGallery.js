import React from 'react';

const FoodGallery = () => {
  const foods = [
    { name: 'Rolls', imgSrc: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png' },
    { name: 'Paneer', imgSrc: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png' },
    { name: 'Fried Rice', imgSrc: 'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png' },
    { name: 'Chicken', imgSrc: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
    
    { name: 'Cake', imgSrc: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' }
  ];

  return (
    <div className="flex flex-col items-center mb-10 scale-125 ">
      <h2 className="text-3xl mb-7 font-custom" >Eat what makes you happy</h2>
      <div className="flex justify-around flex-wrap">
        {foods.map(food => (
          <div className="flex flex-col items-center m-2 " key={food.name}>
            <img className="rounded-full w-24 h-24  transform transition duration-500 ease-in-out hover:scale-125 hover:shadow-2xl" src={food.imgSrc} alt={food.name} />
            <p className="mt-2">{food.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;