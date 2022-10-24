import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sharedContext } from "../context/UserContext";
import SwiperCards from "../shared/SwiperCards";
import VideoBG from "../shared/VideoBG";

const Home = () => {
  const [data, setData] = useState(null);
  // const [activeCard, setActiveCard] = useState();
  const {activeCard, setActiveCard} = useContext(sharedContext);
  useEffect(() => {
    fetch("data/category.json")
      .then((res) => res.json())
      .then((category) => {
        setData(category)
        setActiveCard(category[0])
      });
  }, [setActiveCard]);

  return (
    <div className="relative h-fit md:h-screen w-full overflow-hidden">
      <VideoBG activeCard={activeCard}/>
      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] md:w-[45%] flex flex-col px-10 z-20 justify-center mt-24">
          <h1 className="text-5xl font-bold text-white">{activeCard?.category.toUpperCase()}</h1>
          <p className="text-white my-5">{activeCard?.description.slice(0, 200)}...</p>
          <Link to='/booking'><button type="button" className="px-8 py-3 font-semibold rounded bg-orange-300 hover:bg-orange-400 transition-all text-gray-800">Book Now</button></Link>
        </div>
        <div className="w-[100%] md:w-[55%] mt-[10%]">
          <SwiperCards data={data} setActiveCard={setActiveCard} />
        </div>
      </div>
    </div>
  );
};

export default Home;
