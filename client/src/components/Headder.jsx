import React from "react";

const Headder = () => {
  return (
    <div
      id="header"
      className="w-full bg-black px-8 sm:px-10 md:px-15 py-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden "
    >
      <div>
        <img
          src="Container.png"
          alt="bgimage"
          className="w-full top-4 left-0 right-0 absolute "
        />
      </div>
      {/* left side */}
      <div className="flex-1 z-10">
        z <p className="text-sm text-gray-400 mb-4">A NEW SMART BLOCKCHAIN</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          Investing in <br /> thing backed <br /> by products
        </h1>
        <div className="flex gap-4">
          <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 text-white font-bold rounded-lg flex items-center gap-2 transition duration-300">
            <span>◉</span> WHITEPAPER
          </button>
          <button className="bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 text-yellow-400 font-bold rounded-lg flex items-center gap-2 transition duration-300">
            <span>⚡</span> PURCHASE TOKEN
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="Image.png"
          alt="Product Image"
          className="w-80 h-80 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-transparent"></div>
      </div>
    </div>
  );
};

export default Headder;
