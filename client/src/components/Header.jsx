import React from "react";

const Header = () => {
  return (
    <div
      id="header"
      className="w-full bg-black px-4 sm:px-8 md:px-15 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 relative overflow-hidden mt-16 md:mt-0"
    >
      <div>
        <img
          src="Container.png"
          alt="bgimage"
          className="w-full top-0 left-0 right-0 absolute"
        />
      </div>

      {/* left side */}
      <div className="flex-1 z-10 px-2 md:px-0">
        <p className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-4">
          A NEW SMART BLOCKCHAIN
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-8">
          Investing in <br /> things backed <br /> by products
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <button className="bg-linear-to-r from-violet-600 to-indigo-600 px-4 sm:px-6 py-2 md:py-3 text-white text-sm md:text-base font-bold rounded-lg flex items-center justify-center gap-2 transition duration-300 hover:shadow-lg">
            <span>◉</span> WHITEPAPER
          </button>
          <button className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-4 sm:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-lg flex items-center justify-center gap-2 transition duration-300">
            <span>⚡</span> PURCHASE TOKEN
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 flex justify-center md:justify-end z-10 w-full md:w-auto">
        <img
          src="Image.png"
          alt="Product Image"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-transparent"></div>
      </div>
    </div>
  );
};

export default Header;
