import React from "react";
import Menu from "../../utils/Menu";
import { Link } from "react-router";
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  let [isToggle, setIsToggle] = useState(false);

  let toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className=" border-b-2 border-black/10 px-5 lg:px-0">
      <div className="grid grid-cols-5 mx-auto container lg:py-2 py-4  relative">
        <div className="lg:col-span-1 col-span-2 flex items-center justify-start lg:justify-center ">
          <Link to="home">
            <img
              className="invert lg:w-2/3 w-[80%]"
              src="/images/logo.webp"
              alt="logo"
            />
          </Link>
        </div>
        <div className=" hidden col-span-2 lg:flex items-center justify-center ">
          <Menu />
        </div>

        <div className=" hidden col-span-2 lg:flex items-center justify-end px-4">
          <form className="w-[50%]">
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded py-2 px-4 pl-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What are you looking for?"
              />
              <div className="absolute inset-y-0 right-2 flex items-center pe-0 px-2 cursor-pointer text-[20px]">
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </form>
          <ul className="flex items-center ml-5 text-[22px] gap-2">
            <li>
              <span>
                <CiHeart />
              </span>
            </li>
            <li>
              <span>
                <IoCartOutline />
              </span>
            </li>
          </ul>
        </div>

        {/* Mobile Menu  */}
        <div className="lg:hidden">
          <span
            className="absolute right-5 top-5 text-[25px] cursor-pointer"
            onClick={toggleMenu}
          >
            <RiMenu4Line />
          </span>
        </div>
        {/* Mobile Menu end */}
      </div>

      {/* mobile menu side bar */}

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-50 transition-transform duration-300 ease-in-out ${isToggle ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="bg-white max-w-[80%] h-full p-5">
          <Menu />
        </div>
        <span
          className="bg-red-600 hover:bg-black rounded flex items-center justify-center absolute top-3 p-1 text-[25px] right-5 text-white cursor-pointer"
          onClick={toggleMenu}
        >
          <IoMdClose />
        </span>
      </div>

      {/* mobile menu side bar end */}
    </div>
  );
};

export default Navbar;
