import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CategoryData, slides } from "../Categories/CategoryData";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
      <div className="col-span-9 p-4 rounded-lg h-[500px]">
        <Swiper
          navigation={true}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
        >
          {slides?.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] object-cover rounded-lg"
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
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
