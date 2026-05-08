import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CategoryData, slides } from "../Categories/CategoryData";
import "./hero.css";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-12 gap-4 py-8">
      {/* LEFT CATEGORY SIDEBAR */}
      <div className="col-span-3 bg-gray-100 p-4 rounded-lg">
        <h4 className="text-xl font-bold mb-4 bg-red-500 text-white p-2 rounded">
          Categories
        </h4>

        <ul className="space-y-2 text-gray-700">
          {CategoryData.map((item, index) => (
            <li
              key={index}
              className="relative group py-2 px-3 hover:bg-red-400 hover:text-white cursor-pointer flex items-center justify-between rounded"
            >
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>

              {item.subcategories && <MdKeyboardArrowRight />}

              {item.subcategories?.length > 0 && (
                <ul className="absolute left-full top-0 ml-1 w-52 bg-white shadow-lg rounded invisible group-hover:visible z-50 text-gray-700">
                  {item.subcategories.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-red-400 hover:text-white cursor-pointer"
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

      {/* RIGHT SIDE SLIDER */}
      <div className="col-span-9 p-4 rounded-lg h-[300px]">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides?.map((item, index) => (
            <SwiperSlide className="relative" key={index}>
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover rounded-lg"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <p className="text-sm font-medium">{item.subtitle}</p>
                <h2 className="text-4xl font-bold">{item.title}</h2>
                <p className="text-sm mt-2">{item.description}</p>
                <p className="text-lg font-semibold mt-4">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
