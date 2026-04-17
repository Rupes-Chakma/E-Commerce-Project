import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow">
        <ul className="space-y-3 text-gray-700">
          <li className="hover:text-red-500 cursor-pointer">Woman’s Fashion</li>
          <li className="hover:text-red-500 cursor-pointer">Men’s Fashion</li>
          <li className="hover:text-red-500 cursor-pointer">Electronics</li>
          <li className="hover:text-red-500 cursor-pointer">
            Home & Lifestyle
          </li>
          <li className="hover:text-red-500 cursor-pointer">Medicine</li>
          <li className="hover:text-red-500 cursor-pointer">
            Sports & Outdoor
          </li>
          <li className="hover:text-red-500 cursor-pointer">Baby’s & Toys</li>
          <li className="hover:text-red-500 cursor-pointer">
            Groceries & Pets
          </li>
          <li className="hover:text-red-500 cursor-pointer">Health & Beauty</li>
        </ul>
      </div>

      {/* RIGHT SLIDER */}
      <div className="w-3/4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="rounded-lg overflow-hidden"
        >
          <SwiperSlide>
            <img
              src="./images/baner.png"
              alt="banner"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="./images/baner-1.png"
              alt="banner"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/baner.png"
              alt="banner"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
