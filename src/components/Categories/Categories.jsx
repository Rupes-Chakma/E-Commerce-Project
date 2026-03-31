import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FiSmartphone } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";
import { PiHeadphones } from "react-icons/pi";
import { MdSportsEsports } from "react-icons/md";

const Category = () => {
  const swiperRef = useRef(null);

  const categories = [
    { name: "Phones", icon: <FiSmartphone /> },
    { name: "Computers", icon: <MdComputer /> },
    { name: "SmartWatch", icon: <IoWatchOutline /> },
    { name: "Camera", icon: <FiCamera /> },
    { name: "HeadPhones", icon: <PiHeadphones /> },
    { name: "Gaming", icon: <MdSportsEsports /> },
    { name: "Gaming", icon: <MdSportsEsports /> },
    { name: "Gaming", icon: <MdSportsEsports /> },
    { name: "Gaming", icon: <MdSportsEsports /> },
    { name: "Gaming", icon: <MdSportsEsports /> },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-red-500 font-medium flex items-center gap-2">
              <span className="w-4 h-8 bg-red-500 rounded"></span>
              Categories
            </p>
            <h2 className="text-3xl font-semibold mt-2">Browse By Category</h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              className="bg-gray-200 p-2 rounded hover:bg-gray-400 transition"
              onClick={() => swiperRef.current.slidePrev()}
            >
              &larr;
            </button>
            <button
              className="bg-gray-200 p-2 rounded hover:bg-gray-400 transition"
              onClick={() => swiperRef.current.slideNext()}
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border rounded-lg py-10 flex flex-col items-center gap-3 text-gray-700 hover:bg-red-500 hover:text-white transition cursor-pointer">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
