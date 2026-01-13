import React from "react";

const Summarytoken = () => {
  const tokenData = [
    {
      label: "Token Offer",
      value: "40,000,000",
      color: "text-blue-400",
    },
    {
      label: "UTO Bounties",
      value: "11,500,000",
      color: "text-red-400",
    },
    {
      label: "UTO Community Reserve",
      value: "423,000,000",
      color: "text-purple-400",
    },
    {
      label: "UTO Community Building",
      value: "23,000,000",
      color: "text-blue-400",
    },
  ];

  return (
    <div className="w-full bg-black px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20 border-b border-blue-900">
      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Left Side - Image Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-lg overflow-hidden">
            <img
              src="Image (3).png"
              alt="Token Summary"
              className="w-full h-full object-cover drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - Token Data */}
        <div className="flex-1">
          <p className="text-xs sm:text-sm md:text-base text-blue-400 uppercase mb-3 sm:mb-4 font-semibold">
            summary of ico
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            Token allocation <br /> summary
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {tokenData.map((item, index) => (
              <div
                key={index}
                className="pb-4 sm:pb-6 border-b border-gray-700"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base uppercase">
                    {item.label}
                  </p>
                  <p className={`font-bold text-sm sm:text-base ${item.color}`}>
                    {item.value}
                  </p>
                </div>
                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color.replace(
                      "text-",
                      "bg-"
                    )}`}
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summarytoken;
