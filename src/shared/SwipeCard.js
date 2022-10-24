import React from "react";

const SwipeCard = ({category}) => {
  return (
    <div>
          {<img src={category.image} alt='sliderImage' className='sliderImage h-full absolute rounded-lg w-fit z-[-10]'/>}
          <h1 className="absolute bottom-3 left-3 text-2xl font-semibold text-gray-200">{category?.category.toUpperCase()}</h1>
    </div>
  );
};

export default SwipeCard;
