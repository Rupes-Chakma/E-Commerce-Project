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
      <div className="col-span-9 bg-gray-200 p-4 rounded-lg h-[450px]">
        
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
                className="w-full h-[450px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </div>
  );
};

export default HeroSection;