import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Heart, Eye } from "lucide-react";

const BestSelling = () => {
  const swiperRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "The north coat",
      price: "$260",
      oldPrice: "$360",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT24chllqnuznQrFJ9Nze3PvxI1REzTD0HA&s",
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: "$960",
      oldPrice: "$1160",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoxAkXkvmMZasjF2TscpjCRKHI0DESX8TwA&s",
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: "$160",
      oldPrice: "$170",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKM5XSTJoFUJy_ylq5UVJYmxyj6MFWVaS3Q&s",
    },
    {
      id: 4,
      name: "Small BookSelf",
      price: "$360",
      oldPrice: "",
      image:
        "https://cdn.othoba.com/images/thumbs/2012564_3-tier-modern-bookshelf-s-shaped-bookcase-small-book-shelf-for-small-spaces-unique-bookshelf-for-sto.jpeg",
    },
    {
      id: 5,
      name: "Gaming Chair",
      price: "$500",
      oldPrice: "$620",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79rz7PfUhUCjN9dDnlJ3X3AJbiZT-X9ENhA&s",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-red-500 font-medium flex items-center gap-2">
              <span className="w-4 h-8 bg-red-500 rounded"></span>
              This Month
            </p>

            <h2 className="text-3xl font-semibold mt-2">
              Best Selling Products
            </h2>
          </div>

          {/* Navigation */}
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
                {/* Product Card */}
                <div className="relative bg-gray-100 rounded-md p-6 flex items-center justify-center h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 object-contain"
                  />

                  {/* Icons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                      <Heart size={18} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>

                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-red-500 font-semibold">
                      {product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    <div className="text-yellow-400 text-sm">★★★★★</div>

                    <span className="text-gray-500 text-sm">(65)</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSelling;
