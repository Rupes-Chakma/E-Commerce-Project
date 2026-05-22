import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Category from "../Categories/Categories";
import BestSelling from "../Categories/Bestselling";
import ExploreProducts from "../Categories/ExploreProducts";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <Category />
      <BestSelling />
      <ExploreProducts />
    </div>
  );
};

export default Home;
