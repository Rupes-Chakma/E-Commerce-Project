import React from "react";
import { Link } from "react-router";
import Dropdown from "../../utils/Dropdown";

const Header = () => {
  return (
    <div className="bg-[#000000] hidden lg:block">
      <div className="container">
        <div className=" relative">
          <h4 className="text-white font-normal text-[14px] text-center leading-[150%] py-[12px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link
              to="/home"
              className="text-white ms-2 font-semibold underline"
            >
              Shop Now
            </Link>
          </h4>

          <div className="absolute top-0 right-0 items-center flex gap-4 px-4 py-2">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
