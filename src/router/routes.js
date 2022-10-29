import { createBrowserRouter } from "react-router-dom";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import HotelDetail from "../pages/HotelDetail";
import Main from "./Main";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/booking',
                element: <Booking/>
            },
            {
                path:'/hoteldetail',
                element: <HotelDetail/>
            }
        ]
    }
])

export default routes;