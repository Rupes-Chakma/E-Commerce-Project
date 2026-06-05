import React from "react";
import { Truck, Headset, ShieldCheck } from "lucide-react";

const FeaturedSection = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: <Headset size={32} />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-4 h-8 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-lg">Featured</span>
      </div>

      <h2 className="text-4xl font-bold mb-10">New Arrival</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
        {/* Large Item - PS5 */}
        <div className="md:col-span-2 relative bg-black text-white p-8 rounded-lg flex flex-col justify-end min-h-[400px] overflow-hidden">
          <img
            src="/images/women.svg"
            alt="PS5"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold">PlayStation 5</h3>
            <p className="text-gray-300 mt-2 mb-4 max-w-xs">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="#" className="underline font-medium hover:text-gray-300">
              Shop Now
            </a>
          </div>
        </div>

        {/* Right Stack */}
        <div className="md:col-span-2 grid grid-rows-2 gap-4">
          {/* Women's Collection */}
          <div className="relative bg-zinc-900 text-white p-8 rounded-lg flex items-center justify-between overflow-hidden">
            <img
              src="/images/female.svg"
              alt="Women Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />

            <div className="relative z-10 max-w-[200px]">
              <h3 className="text-xl font-bold">Women's Collections</h3>
              <p className="text-gray-300 text-sm mt-2 mb-4">
                Featured woman collections that give you another vibe.
              </p>
              <a href="#" className="underline font-medium">
                Shop Now
              </a>
            </div>
          </div>

          {/* Bottom 2 cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Speakers */}
            <div className="relative bg-zinc-900 text-white p-6 rounded-lg overflow-hidden">
              <img
                src="/images/speaker1.svg"
                alt="Speaker"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />

              <div className="relative z-10">
                <h3 className="text-lg font-bold">Speakers</h3>
                <p className="text-gray-300 text-xs mb-2">
                  Amazon wireless speakers
                </p>
                <a href="#" className="underline text-sm">
                  Shop Now
                </a>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-zinc-400 text-white p-6 rounded-lg overflow-hidden">
              <img
                src="/images/perfume.svg"
                alt="Perfume"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />

              <div className="relative z-10">
                <h3 className="text-lg font-bold">Perfume</h3>
                <p className="text-gray-300 text-xs mb-2">
                  GUCCI INTENSE OUD EDP
                </p>
                <a href="#" className="underline text-sm">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Footer */}
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <div className="bg-black text-white p-3 rounded-full">
                {item.icon}
              </div>
            </div>
            <h4 className="font-bold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
