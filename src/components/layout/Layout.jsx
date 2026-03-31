import React from "react";
import Navigation from "../Navbar/Navigation";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      {/* navbar */}
      <Navigation />
      {/* main body */}
      <main>{/* <h1>this is main body</h1> */}</main>
      {/* footer */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
