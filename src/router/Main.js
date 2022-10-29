import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../shared/Header';

const Main = () => {

    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>
            <div className={`${location.pathname === '/hoteldetail'? "text-black":"text-white"}`}>
            <Header/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Main;