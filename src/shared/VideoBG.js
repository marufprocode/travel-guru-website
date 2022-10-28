import React, { useContext } from 'react';
import wave from '../assets/Waves - 70796.mp4'
import sundarban from '../assets/Sundarban.mp4'
import sajek from '../assets/Sajek.mp4'
import { sharedContext } from '../context/UserContext';

const VideoBG = () => {
    const {activeCard} = useContext(sharedContext);
    return (
        <div className='h-full w-[100%] absolute' style={{background: 'rgba(0,0,0,0.5)'}}>
            {/* <video src={wave} autoPlay loop muted 
            className='object-cover relative'
            style={{width: '100%', height:'100vh', objectFit: 'cover', zIndex: '-1'}}
            ></video> */}
            {
                activeCard?.category === "Cox's Bazar" &&
                <video data-aos="fade-left" src={wave} autoPlay loop muted 
                className='object-cover relative'
                style={{width: '100%', height:'100%', objectFit: 'cover', zIndex: '-1'}}
                ></video>
            }
            {
                activeCard?.category === "Sundarban" &&
                <video data-aos="fade-left" src={sundarban} autoPlay loop muted 
                className='object-cover relative'
                style={{width: '100%', height:'100vh', objectFit: 'cover', zIndex: '-1'}}
                ></video>
            }
            {
                activeCard?.category === "Sajek Valley" &&
                <video data-aos="fade-left" src={sajek} autoPlay loop muted 
                className='object-cover relative'
                style={{width: '100%', height:'100vh', objectFit: 'cover', zIndex: '-1'}}
                ></video>
            }
        </div>
    );
};

export default VideoBG;