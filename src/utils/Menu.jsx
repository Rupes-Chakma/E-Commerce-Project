import React from "react";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <div>
      <ul className="lg:flex gap-8 space-y-5 lg:space-y-0 ">
        <li className="hover:text-[#0B80DD] hover:font-semibold">
          <NavLink to="home">Home</NavLink>
        </li>
        <li className="hover:text-[#0B80DD] hover:font-semibold">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="hover:text-[#0B80DD] hover:font-semibold">
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li className="hover:text-[#0B80DD] hover:font-semibold">
          <NavLink to="signup">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
