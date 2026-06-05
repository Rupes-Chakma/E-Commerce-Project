import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaHeart,
  FaEye,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    rating: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    rating: 75,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    rating: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    image:
      "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    rating: 99,
  },
  {
    id: 5,
    title: "Gaming Mouse RGB",
    image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=500",
    price: 90,
    oldPrice: 120,
    discount: "-20%",
    rating: 65,
  },
];

const FlashSales = () => {
  const swiperRef = useRef(null);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 4);

  const getTimeLeft = () => {
    const difference = targetDate - new Date();

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-10 bg-red-500 rounded"></div>
            <span className="text-red-500 font-semibold">Today's</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <h2 className="text-4xl font-bold">Flash Sales</h2>

            {/* Countdown */}
            <div className="flex gap-5">
              <div>
                <p className="text-xs">Days</p>
                <h3 className="text-3xl font-bold">
                  {String(timeLeft.days).padStart(2, "0")}
                </h3>
              </div>

              <span className="text-red-500 text-2xl">:</span>

              <div>
                <p className="text-xs">Hours</p>
                <h3 className="text-3xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </h3>
              </div>

              <span className="text-red-500 text-2xl">:</span>

              <div>
                <p className="text-xs">Minutes</p>
                <h3 className="text-3xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </h3>
              </div>

              <span className="text-red-500 text-2xl">:</span>

              <div>
                <p className="text-xs">Seconds</p>
                <h3 className="text-3xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-500 hover:text-white"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-500 hover:text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div>
              {/* Card */}
              <div className="relative bg-gray-100 rounded-md overflow-hidden group">
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
                  {product.discount}
                </div>

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button className="bg-white p-2 rounded-full shadow">
                    <FaHeart size={12} />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow">
                    <FaEye size={12} />
                  </button>
                </div>

                <div className="h-56 flex items-center justify-center p-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-40 object-contain group-hover:scale-105 transition"
                  />
                </div>

                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition">
                  Add To Cart
                </button>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="text-sm font-medium line-clamp-1">
                  {product.title}
                </h3>

                <div className="flex gap-3 mt-2">
                  <span className="text-red-500 font-semibold">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400">
                    ${product.oldPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({product.rating})
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-md">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSales;
