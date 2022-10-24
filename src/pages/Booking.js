import React, { useContext } from 'react';
import { sharedContext } from '../context/UserContext';
import BookingForm from '../shared/BookingForm';
import VideoBG from '../shared/VideoBG';

const Booking = () => {
    const {activeCard} = useContext(sharedContext);
    return (
        <div className="relative h-fit md:h-screen w-full overflow-hidden">
            {activeCard && <VideoBG/>}
            <div className='flex flex-col md:flex-row items-center'>
                <div className="w-[100%] md:w-[50%] flex flex-col px-10 z-20 justify-center mt-24">
                    <h1 className='text-white text-5xl font-semibold'>{activeCard?.category}</h1>
                    <p className='text-white'>{activeCard?.description}</p>
                </div>
                <div className="w-[100%] md:w-[50%] flex justify-center items-center my-auto">
                   <BookingForm/>
                </div>
            </div>
        </div>
    );
};

export default Booking;