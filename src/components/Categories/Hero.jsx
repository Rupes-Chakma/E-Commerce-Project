import React, { useEffect, useState } from "react";

const Hero = () => {
  // 🎯 Target date (যেদিন শেষ হবে countdown)
  const targetDate = new Date("2026-12-31T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-black text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 relative overflow-hidden">
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <p className="text-green-400 text-sm mb-3">Categories</p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Enhance Your <br /> Music Experience
        </h1>

        {/* Countdown */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {[
            { num: timeLeft.hours, label: "Hours" },
            { num: timeLeft.days, label: "Days" },
            { num: timeLeft.minutes, label: "Minutes" },
            { num: timeLeft.seconds, label: "Seconds" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center"
            >
              <span className="font-bold">{item.num}</span>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-green-400 text-black px-6 py-3 font-semibold rounded-md hover:bg-green-500 transition">
          Buy Now!
        </button>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 lg:mt-0 z-10">
        <img
          src="/images/speaker.svg"
          alt="headphone"
          className="w-[300px] md:w-[450px] lg:w-[500px] object-contain"
        />
      </div>

      {/* Glow Background */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-500 opacity-20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Hero;
