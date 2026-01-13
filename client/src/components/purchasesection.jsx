import React from "react";

const Purchasesection = () => {
  const tiers = [
    {
      phase: "PRE-SALES",
      bonus: "25%",
      label: "EARLY BONUS",
    },
    {
      phase: "ICO SALES-WEEK 1",
      bonus: "15%",
      label: "EARLY BONUS",
    },
    {
      phase: "ICO SALES-WEEK 2",
      bonus: "1%",
      label: "EARLY BONUS",
    },
  ];

  return (
    <div className="w-full bg-black px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20 border-b border-blue-900">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
          Purchase in phases
        </h2>
        <p className="text-sm sm:text-base text-gray-400">
          Different bonus stages for early investors
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 sm:p-8 bg-transparent border border-blue-900 rounded-lg hover:border-violet-500 transition duration-300"
          >
            <p className="text-xs text-blue-400 uppercase mb-3 sm:mb-4 font-semibold">
              {tier.phase}
            </p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
              {tier.bonus}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 uppercase">
              {tier.label}
            </p>
          </div>
        ))}
      </div>

      {/* Purchase Button */}
      <div className="flex justify-center">
        <button className="bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 sm:px-10 py-2 sm:py-3 text-sm sm:text-base text-white font-bold rounded-lg flex items-center gap-2 transition duration-300 shadow-lg">
          <span>
            <img
              src="Vector (3).png"
              alt="logo"
              className="w-5 sm:w-6 h-5 sm:h-6"
            />
          </span>{" "}
          PURCHASE NOW
        </button>
      </div>
    </div>
  );
};

export default Purchasesection;
