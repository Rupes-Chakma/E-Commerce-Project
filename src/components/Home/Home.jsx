import React from "react";
import HeroSection from './../HeroSection/HeroSection';
import Category from "../Categories/Categories";
import BestSelling from "../Categories/Bestselling";



const Home = () => {
  return <div className="container">
  
    <HeroSection/>
    <Category/>
    <BestSelling/>
    

   
  </div>;
};

export default Home;
