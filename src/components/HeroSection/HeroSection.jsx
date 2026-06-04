import React, { useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CategoryData, slides } from "../Categories/CategoryData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto grid lg:grid-cols-12 gap-4 py-8 items-stretch">
      {/* ================= LEFT CATEGORY ================= */}
      <div className="col-span-3 bg-gray-100 p-4 rounded-lg hidden lg:block h-[520px] overflow-visible">
        <h4 className="text-xl font-bold mb-4 bg-red-500 text-white p-2 rounded">
          Categories
        </h4>

        <ul className="space-y-2 text-gray-700 relative">
          {CategoryData.map((item, index) => (
            <li
              key={index}
              className="relative group flex items-center justify-between py-2 px-3 rounded hover:bg-red-400 hover:text-white cursor-pointer"
            >
              {/* TITLE */}
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>

              {/* ARROW */}
              {item.subcategories?.length > 0 && <MdKeyboardArrowRight />}

              {/* DROPDOWN FIXED */}
              {item.subcategories?.length > 0 && (
                <ul className="absolute left-full top-0 ml-2 w-52 bg-gray-100 shadow-lg text-black rounded hidden group-hover:block z-[9999]">
                  {item.subcategories.map((sub, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-red-400 hover:text-white"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= RIGHT SWIPER ================= */}
      <div className="col-span-9 hidden lg:block h-[520px] relative">
        {/* CUSTOM ARROWS */}
        <button
          ref={prevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10
          bg-white text-black p-3 rounded-full shadow
          hover:bg-red-500 hover:text-white transition duration-300"
        >
          <FaArrowLeft />
        </button>

        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10
          bg-white text-black p-3 rounded-full shadow
          hover:bg-red-500 hover:text-white transition duration-300"
        >
          <FaArrowRight />
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="h-full rounded-lg overflow-hidden"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* TEXT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                  <p className="text-sm">{item.subtitle}</p>

                  <h2 className="text-4xl font-bold mt-2">{item.title}</h2>

                  <p className="text-sm mt-2">{item.description}</p>

                  <p className="text-lg font-semibold mt-4 text-red-300">
                    {item.price}
                  </p>

                  <button className="mt-5 bg-red-500 hover:bg-red-600 px-6 py-2 rounded">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
