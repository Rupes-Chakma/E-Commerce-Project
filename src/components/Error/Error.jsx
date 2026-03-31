import React from "react";

const Error = () => {
  return (
    <div className="bg-[#09001F] h-screen text-center lg:flex flex-col justify-center items-center">
      <img className="w-auto" src="/public/images/404.webp" alt="" />
      <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center">
        404 - Page Not Found
      </h1>
    </div>
  );
};

export default Error;
