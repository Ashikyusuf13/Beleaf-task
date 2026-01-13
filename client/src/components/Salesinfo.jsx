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
      className="w-full  bg-black px-8 sm:px-10 md:px-15 -mt-30  relative overflow-hidden py-16 flex flex-col items-center justify-between md:flex-row gap-10"
    >
      {/* left side */}
      <div className="flex-1 text-white min-w-sm bg-transparent p-8 border border-blue-900 shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Token sales progress</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Total Coin</p>
            <p className="text-2xl font-bold">3,499,000</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Raised</p>
            <p className="text-2xl font-bold">5,723 COIN</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-violet-500 to-pink-500 h-full rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Soft Cap & Hard Cap */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Soft Cap</p>
            <p className="text-lg font-bold text-blue-400">$7,000</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">Hard Cap</p>
            <p className="text-lg font-bold">2,500,000</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-8">
          <p className="text-sm text-gray-400 uppercase mb-4">
            Token sale ends in:
          </p>
          <div className="text-5xl font-bold tracking-wider mb-8">
            {String(timeLeft.days).padStart(2, "0")} :{" "}
            {String(timeLeft.hours).padStart(2, "0")} :{" "}
            {String(timeLeft.minutes).padStart(2, "0")} :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </div>

        {/* Register Button */}
        <button className="bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-3 text-white font-bold rounded-lg flex items-center gap-2 transition duration-300 shadow-lg">
          <span>◉</span> REGISTER & BUY TOKEN
        </button>
      </div>

      {/* right side */}
      <div className="flex-1 text-white min-w-sm bg-transparent p-8 border border-blue-900 shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Sales information</h2>

        <div className="">
          <div className=" flex items-center justify-between border-b border-gray-700 pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">
              Public sales start in
            </p>
            <p className=" font-semibold">JANUARY 01 2025</p>
          </div>

          <div className="flex items-center justify-between border-b border-gray-700 pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">Sale ends</p>
            <p className="text-lg font-semibold">DECEMBER 30, 2026</p>
          </div>

          <div className=" flex items-center justify-between border-b border-gray-700 pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">Token supply</p>
            <p className="text-lg font-semibold">499,000,000</p>
          </div>

          <div className=" flex items-center justify-between border-b border-gray-700 pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">
              T. allocated for ICO
            </p>
            <p className="text-lg font-semibold">200,000,000</p>
          </div>

          <div className=" flex items-center justify-between border-b border-gray-700 pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">Hard cap</p>
            <p className="text-lg font-semibold">JANUARY 01 2025</p>
          </div>

          <div className="flex items-center justify-between border-b border-gray-700 pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">Soft cap</p>
            <p className="text-lg font-semibold">JANUARY 01 2025</p>
          </div>

          <div className=" flex items-center justify-between border-b border-gray-700 pb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">Token value</p>
            <p className="text-lg font-semibold">JANUARY 01 2025</p>
          </div>

          <div>
            <p className="flex items-center justify-between text-xs text-gray-400 uppercase mb-2">
              Accepted
            </p>
            <p className="text-lg font-semibold text-blue-400">
              ETH, BTC, BNV, CBT
            </p>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
      </div>
    </div>
  );
};

export default Salesinfo;
