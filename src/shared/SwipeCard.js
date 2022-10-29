import React from "react";

const SwipeCard = ({category}) => {
  return (
    <div>
          {<img src={category.image} alt='sliderImage' className='sliderImage absolute rounded-lg w-fit z-[-10] h-full'/>}
          <h1 className="absolute swiper-title bottom-3 left-3 text-xs sm:text-lg md:text-2xl font-semibold text-gray-200">{category?.category.toUpperCase()}</h1>
    </div>
  );
};

export default SwipeCard;
