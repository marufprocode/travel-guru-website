import React from "react";
import imgHotel from "../assets/images/Sajek.png";
import { FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const HotelDetail = () => {
  return (
    <div>
      <div className="container border-gray-800 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-h-screen mt-24 absolute">
        {/* // header text  */}
        <div className="mb-2">
          <div className="flex gap-1 text-sm text-gray-600">
            <p>252 Stays</p>
            <p>April 13-17</p>
            <p>3 Guests</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Stay in Cox'sBazar</h3>
          </div>
        </div>
        {/* ......................  */}
        <div className="grid grid-cols-2 gap-5">
            {/* Left Side Grid Section for Hotel Cards  */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-10">
            {/* Hotel Cards // You Can Add as many as you need  */}
            <div className="my-4 flex h-[170px] rounded-lg hover:shadow-lg hover:border-none transition-all hover:scale-[1.02] gap-3 items-center justify-between">
              <div className="h-full w-[40%]">
                <img
                  src={imgHotel}
                  alt="img"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[60%]">
                <div className="flex flex-col gap-2 text-sm justify-center">
                  <h3 className="text-lg font-semibold">
                    Light Bright Hotel Lorem kkk Kkk Kkk asfasf asfsa f asfaf
                  </h3>
                  <div className="flex gap-1 text-sm">
                    <p>4 guest</p>
                    <p>2 bedrooms</p>
                    <p>2 beds</p>
                    <p>2 baths</p>
                  </div>
                  <p>Wifi Air Condition Kitchen</p>
                  <p>Cancellation Flexibility Available</p>
                  <div className="flex gap-2 text-sm">
                    <p className="flex items-center">
                      <span className="text-orange-400">
                        <FaStar />
                      </span>
                      4.9(2)
                    </p>
                    <p>$34/Night</p>
                    <p>$157 Total</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Cards End  */}
          </div>
            {/* ..................................  */}

          {/* Right Side grid-col Map Section  */}
          <div className="col-span-2 md:col-span-1">
            <div>
              <MapContainer
                center={[21.4651737,91.9826427]}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-[500px] rounded-lg"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[21.4651737,91.9826427]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
