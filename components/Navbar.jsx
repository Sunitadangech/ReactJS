import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    
    setMenu(false);
  };

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* Logo Section */}
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">FoodieWeb</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </ScrollLink>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <ScrollLink
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Dishes
                </ScrollLink>
                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              {/* Dropdown Menu */}
              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <ScrollLink
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Spicy
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Tasty
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Delicious
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Crispy
                  </ScrollLink>
                </li>
              </ul>

              <ul className="absolute hidden group-hover:block bg-white border border-gray-300 rounded-lg p-4 space-y-2">
              <li>
                <Link
                  to="/spicy-dishes"
                  className="text-gray-800 hover:text-brightColor transition-all"
                >
                  Spicy
                </Link>
              </li>
              <li>
                <Link
                  to="/tastydishes"
                  className="text-gray-800 hover:text-brightColor transition-all"
                >
                  Tasty
                </Link>
              </li>
              <li>
                <Link
                  to="/delicious-dishes"
                  className="text-gray-800 hover:text-brightColor transition-all"
                >
                  Delicious
                </Link>
              </li>
              <li>
                <Link
                  to="/crispy-dishes"
                  className="text-gray-800 hover:text-brightColor transition-all"
                >
                  Crispy
                </Link>
              </li>
            </ul>  
            </div>

            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </ScrollLink>

            {/* Login Button */}
            <Link
              to="/login"
             className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Login
            </Link>

            <Link
            to="/signup"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
             Sign Up
            </Link>

          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dishes
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </ScrollLink>
          <ScrollLink
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </ScrollLink>

          <Link
            to="/login"
            className="bg-brightColor text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
            onClick={closeMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


