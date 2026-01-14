import React, { useState, useEffect } from "react";

const Salesinfo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 15,
    minutes: 57,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          return prev;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progressPercentage = (5723 / 3499000) * 100;

  return (
    <div
      id="salesinfo"
      className="w-full px-4 sm:px-8 md:px-15 -mt-10 md:-mt-50 relative overflow-hidden py-12 md:py-16 flex flex-col items-center justify-between lg:flex-row gap-6 md:gap-10"
    >
      {/* left side */}
      <div className="flex-1 z-10 mt-50 text-white w-full bg-transparent p-4 sm:p-6 md:p-8 border border-blue-900 shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8">
          Token sales progress
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Total Coin</p>
            <p className="text-lg sm:text-2xl font-bold">3,499,000</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Raised</p>
            <p className="text-lg sm:text-2xl font-bold">5,723 COIN</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 md:mb-8">
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-violet-500 to-pink-500 h-full rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Soft Cap & Hard Cap */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Soft Cap</p>
            <p className="text-base md:text-lg font-bold text-blue-400">
              $7,000
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Hard Cap</p>
            <p className="text-base md:text-lg font-bold">2,500,000</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs text-gray-400 uppercase mb-3 md:mb-4">
            Token sale ends in:
          </p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-6 md:mb-8">
            {String(timeLeft.days).padStart(2, "0")} :{" "}
            {String(timeLeft.hours).padStart(2, "0")} :{" "}
            {String(timeLeft.minutes).padStart(2, "0")} :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full sm:w-auto bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-6 md:px-8 py-2 md:py-3 text-white text-sm md:text-base font-bold rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-lg">
          <span>◉</span> REGISTER & BUY TOKEN
        </button>
      </div>

      {/* right side */}
      <div className="flex-1 z-10 mt-50 text-white w-full bg-transparent p-4 sm:p-6 md:p-8 border border-blue-900 shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8">
          Sales information
        </h2>

        <div className="space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4 md:pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2 sm:mb-0">
              Public sales start in
            </p>
            <p className="text-sm md:text-base font-semibold">
              JANUARY 01 2025
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4 md:pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2 sm:mb-0">
              Sale ends
            </p>
            <p className="text-sm md:text-lg font-semibold">
              DECEMBER 30, 2026
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4 md:pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2 sm:mb-0">
              Token supply
            </p>
            <p className="text-sm md:text-lg font-semibold">499,000,000</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4 md:pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2 sm:mb-0">
              T. allocated for ICO
            </p>
            <p className="text-sm md:text-lg font-semibold">200,000,000</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4 md:pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2 sm:mb-0">
              Hard cap
            </p>
            <p className="text-sm md:text-lg font-semibold">JANUARY 01 2025</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4 md:pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2 sm:mb-0">
              Soft cap
            </p>
            <p className="text-sm md:text-lg font-semibold">JANUARY 01 2025</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4 md:pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2 sm:mb-0">
              Token value
            </p>
            <p className="text-sm md:text-lg font-semibold">JANUARY 01 2025</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Accepted</p>
            <p className="text-sm md:text-lg font-semibold text-blue-400">
              ETH, BTC, BNV, CBT
            </p>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="z-0 absolute inset-0">
        <img
          src="BG Image (1).png"
          alt="background"
          className="w-full h-full  object-cover  opacity-80"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default Salesinfo;
