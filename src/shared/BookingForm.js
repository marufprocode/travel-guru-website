import React from "react";
import './Booking.css'
import bgImage from '../assets/images/Sreemongol.png'

const BookingForm = () => {
  return (
    <div className="mt-32">
      <div className="booking-form h-[500px]" style={{backgroundImage: bgImage}}>
        <div className="form-header">
          <h1>Make your reservation</h1>
        </div>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Country, ZIP, city..."
            />
            <span className="form-label">Destination</span>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-8">
              <div className="form-group">
                <input className="form-control" type="date" required="" />
                <span className="form-label">Check In</span>
              </div>
            </div>
            <div className="col-span-8">
              <div className="form-group">
                <input className="form-control" type="date" required="" />
                <span className="form-label">Check out</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <div className="form-group">
                <select className="form-control" required="">
                  <option value="" hidden="">
                    no of rooms
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <span className="select-argrid grid-cols-6"></span>
                <span className="form-label">Rooms</span>
              </div>
            </div>
            <div className="col-span-4">
              <div className="form-group">
                <select className="form-control" required="">
                  <option value="" hidden="">
                    no of adults
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <span className="select-argrid grid-cols-6"></span>
                <span className="form-label">Adults</span>
              </div>
            </div>
            <div className="col-span-4">
              <div className="form-group">
                <select className="form-control" required="">
                  <option value="" hidden="">
                    no of children
                  </option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <span className="select-argrid grid-cols-6"></span>
                <span className="form-label">Children</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-8">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your Email"
                />
                <span className="form-label">Email</span>
              </div>
            </div>
            <div className="col-span-8">
              <div className="form-group">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Enter you Phone"
                />
                <span className="form-label">Phone</span>
              </div>
            </div>
          </div>
          <div className="form-btn">
            <button className="submit-btn">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
