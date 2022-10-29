import React from "react";
import './Booking.css'
import bgImage from '../assets/images/Sreemongol.png'
import { Link } from "react-router-dom";

const BookingForm = () => {
  return (
    <div className="flex h-screen md:items-center md:mt-10 max-w-[90%]">
      <div className="booking-form h-fit mt-10 md:mt-0 relative py-10 px-10 md:px-5 lg:px-10 overflow-hidden rounded-lg" style={{backgroundImage: bgImage}}>
        <div className="form-header text-2xl md:text-3xl font-bold capitalize text-white text-center relative mb-[30px]">
          <h1>Make your reservation</h1>
        </div>
        <form>
          <div className="form-group relative mb-[30px]">
            <input
              className="form-control"
              type="text"
              placeholder="Country, ZIP, city..."
            />
            <span className="form-label mt-1">Destination</span>
          </div>
          <div className="form-group relative mb-[30px]">
            <input
              className="form-control"
              type="text"
              placeholder="Country, ZIP, city..."
            />
            <span className="form-label mt-1">Destination</span>
          </div>
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-3">
              <div className="form-group relative mb-[30px]">
                <input className="form-control" type="date" required="" />
                <span className="form-label mt-1">Check In</span>
              </div>
            </div>
            <div className="col-span-3">
              <div className="form-group relative mb-[30px]">
                <input className="form-control" type="date" required="" />
                <span className="form-label mt-1">Check out</span>
              </div>
            </div>
          </div>
          <div className="form-btn">
            <Link to='/hoteldetail'><button to='/hoteldetail' className="submit-btn text-white">Book Now</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
