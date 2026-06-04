import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Category from "../Categories/Categories";
import BestSelling from "../Categories/Bestselling";
import ExploreProducts from "../Categories/ExploreProducts";
import FlashSales from "../Categories/FlashSales";
import Hero from "../Categories/Hero";
import FeaturedSection from "../Categories/FeaturedSection";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <FlashSales />
      <Category />
      <BestSelling />
      <Hero />
      <ExploreProducts />
      <FeaturedSection />
    </div>
  );
};

export default Home;
