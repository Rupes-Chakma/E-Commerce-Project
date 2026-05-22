import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Heart, Eye, ChevronLeft, ChevronRight, Star } from "lucide-react";

const ExploreProducts = () => {
  const swiperRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 35,
      image:
        "https://static-01.daraz.com.bd/p/fec2a0f0e6316a1a1a89f4c6f6a4a7d9.jpg",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 95,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq9jM2A5hA0SZX4y9Uo9kR7N0hVxkM2RzQw&s",
      button: true,
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 325,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8q5mNQv9T7wQxv9lP6kFQ6iM7JqzF3dQkBw&s",
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: "$500",
      rating: 145,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9o8Yx6m8h9Yx4M9W5aZz4h7wT1mJwGv7rjA&s",
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      rating: 65,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79rz7PfUhUCjN9dDnlJ3X3AJbiZT-X9ENhA&s",
      colors: ["bg-red-500", "bg-red-300"],
      badge: "NEW",
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKl0m8gQxV2sF2q3kKjM4hX9d4T2k7wK0BKw&s",
      colors: ["bg-yellow-300", "bg-black"],
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Wk9M2R6vJ5wF8vW6mX8b2kW3rN7yQm1G3A&s",
      colors: ["bg-black", "bg-red-500"],
      badge: "NEW",
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxY6zVjW8j7fH5xK6b9R4zM8kN7rT2jF9Ww&s",
      colors: ["bg-teal-700", "bg-red-500"],
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-4 h-8 bg-red-500 rounded-sm"></span>

          <p className="text-red-500 font-semibold text-sm">Our Products</p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-black">
            Explore Our Products
          </h2>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group">
                {/* Card */}
                <div className="bg-white rounded-md p-4 relative overflow-hidden border border-gray-100">
                  {/* NEW Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}

                  {/* Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                    <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
                      <Heart size={16} />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
                      <Eye size={16} />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="h-52 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 object-contain group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Add To Cart */}
                  {product.button && (
                    <button className="absolute bottom-0 left-0 w-full bg-black text-white py-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                      Add To Cart
                    </button>
                  )}
                </div>

                {/* Info */}
                <div className="mt-4">
                  <h3 className="font-medium text-sm text-gray-900">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-1">
                    <span className="text-red-500 font-semibold">
                      {product.price}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    <span className="text-gray-500 text-sm">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Colors */}
                  {product.colors && (
                    <div className="flex items-center gap-2 mt-3">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className={`w-4 h-4 rounded-full border border-gray-400 ${color}`}
                        ></span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-md font-medium transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
