import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CategoryData } from "../Categories/CategoryData";

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
              {/* Title + Icon */}
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>

              {/* Arrow */}
              {item.subcategories && <MdKeyboardArrowRight />}

              {/* Subcategory Dropdown */}
              {item.subcategories && (
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

      {/* RIGHT SIDE (SLIDER PLACEHOLDER) */}
       <div className="col-span-9 bg-gray-200 rounded-lg flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Slider Coming Soon...
        </h2>
      </div> 


    </div>
  );
};

export default HeroSection;
