import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';


import "./card.css";
import SwipeCard from './SwipeCard';

const SwiperCards = ({data, setActiveCard}) => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <div className='relative'>
      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        // autoHeight={true}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            if (swiper.params?.navigation){
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            }            
            
            // Re-init navigation
            
          })
        }}  
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper h-[450px]"
        onSlideChange={(slide) => {
          // slide.width="700px"
          setActiveCard(data[slide?.realIndex])
          const localData = data[slide?.realIndex];
          localStorage.setItem('data', JSON.stringify(localData))
        }}
        // calculateHeight={true}
        breakpoints={ {
          // when window width is >= 320px
          0: {
            slidesPerView: 3,
            spaceBetween: 20, 
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
      
      >
        
          {
            data?.map(category => (
              <SwiperSlide key={category.id}>
                <SwipeCard category={category}/>
              </SwiperSlide>
            ))
          }
      <div className='swiper-button-prev' ref={navigationPrevRef} ><BsArrowLeftCircle className='w-[55px] h-[70px] text-gray-400'/></div>
      <div className='swiper-button-next' ref={navigationNextRef} > <BsArrowRightCircle className='w-[55px] h-[70px] text-gray-400'/> </div>
      </Swiper>
    </div>
  );
};

export default SwiperCards;