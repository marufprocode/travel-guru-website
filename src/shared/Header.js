import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Header.css'
import barndlogo from '../assets/brand Logo.png'
import barndlogoBlack from '../assets/brand Logo Black.png'

const Header = () => {
  const location = useLocation();
  return (
      <header className="p-4 bg-transparent absolute w-full z-50">
        <div className=" flex justify-between h-16 mx-auto">
          <Link to="/home">
          <img src={`${location.pathname === '/'? barndlogo:location.pathname === '/home'? barndlogo:location.pathname === '/booking'? barndlogo:barndlogoBlack}`} alt="" className="w-[120px] h-[50px]"/>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex items-center">
            <div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-100">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900" />
			</div>
            </li>
            <li className="flex">
              <NavLink
                to="/news"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent nav-link nav-link-ltr"
              >
                News
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/booking"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent nav-link nav-link-ltr"
              >
                Destination
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/blog"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent nav-link nav-link-ltr"
              >
                Blog
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent nav-link nav-link-ltr"
              >
                Contact
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/gallery"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent nav-link nav-link-ltr"
              >
                Gallery
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded nav-link nav-link-ltr">Sign in</button>
            <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">
              Sign up
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
  );
};

export default Header;
