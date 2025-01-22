import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-green-600 flex items-center gap-[5px]">
          <img src="./logo.svg" alt="logo" />
          GREENSHOP
        </div>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 top-[70px] lg:top-0 p-4 lg:p-0 shadow-lg lg:shadow-none`}
        >
          <NavLink to="/" className="text-gray-600 hover:text-green-600 block lg:inline">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-gray-600 hover:text-green-600 block lg:inline">
            Shop
          </NavLink>
          <NavLink to="/plant-care" className="text-gray-600 hover:text-green-600 block lg:inline">
            Plant Care
          </NavLink>
          <NavLink to="/blogs" className="text-gray-600 hover:text-green-600 block lg:inline">
            Blogs
          </NavLink>
        </nav>

        {/* Search, Korzinka va Login */}
        <div className="flex items-center space-x-[20px]">
          <div className="relative">
            <button
              onClick={toggleSearch}
              className="text-gray-600 w-[20px] h-[20px] hover:text-green-600 mt-[5px]"
            >
              <img src="./search.svg" alt="search_icon" />
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-0 right-[45px] border border-gray-300 rounded-lg px-2 py-1 text-sm w-[200px] focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            )}
          </div>
          <button className="text-gray-600 w-[24px] h-[24px] hover:text-green-600">
            <img src="./korzinka.svg" alt="korzinka_icon" />
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-[6px] flex items-center gap-[5px]">
            <img src="./logout.svg" alt="login_icon" className="w-[20px] h-[20px]" />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
